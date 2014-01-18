/**
 * Configuration
 */
var config = {
    maxUrlLength: 2000,
    isDefault: true,
    v: 1,
    iter: 1000,
    ks: 128,
    ts: 64,
    mode: "ccm",
    cipher: "aes",
    delimiter: '.'
};

/**
 * Run application.
 */
$(function () {
    // On hash change.
    $(window).bind('hashchange', route);

    // On click without hash change.
    $('a[href^="#"]').click(function () {
        if ($(this).attr('href') === location.hash) {
            route();
        }
    });

    // On app loads.
    route();
});

/**
 * Describe interface behavior.
 */
$(function () {
    var encrypt = $('#encrypt');
    var decrypt = $('#decrypt');
    var passwordStrengthMeter = $('#password-strength-meter');

    $('textarea').autosize();

    encrypt.find('.password input').complexify(function (valid, complexity) {
        passwordStrengthMeter.find('span').hide();
        passwordStrengthMeter.find('.progress-bar').width(complexity + '%');
        if (complexity == 0) {
            // Nothing to show.
        } else if (complexity < 25) {
            passwordStrengthMeter.find('.weak').show();
        } else if (complexity < 50) {
            passwordStrengthMeter.find('.mediocre').show();
        } else {
            passwordStrengthMeter.find('.strong').show();
        }
    });

    $('.password .toggle').click(function () {
        var ig = $(this).parents('.input-group');
        ig.find('input').toggle();
        ig.find('input:visible').val(ig.find('input:hidden').val());
    });


    encrypt.submit(function (event) {
        event.stopPropagation();
        doEncrypt();
        return false;
    });

    $('#show-modal-decrypt').click(function (event) {
        showDecryptModal();
    });

    decrypt.submit(function (event) {
        event.stopPropagation();
        doDecrypt();
        return false;
    });

    // Password hint show/hide action
    $('.password-hint-toggle').click(function () {
        // Switch title and data-title on button.
        var button = $('.password-hint-toggle');
        var dt = button.attr('data-title');
        var t = button.attr('title');
        button.attr('title', dt);
        button.attr('data-title', t);

        // Show/hide field
        $('.password-hint').toggle();
        return false;
    });

    // Config form

    $('#config').submit(function (event) {
        event.stopPropagation();
        saveConfig();
        return false;
    });
});

/**
 * Router of application.
 */
function route() {
    var encryption = function () {
        activateLink('#encryption');
        showPanel('#panel-encrypt');
    };

    var decryption = function () {
        activateLink('#decryption');
        showPanel('#panel-decrypt');
    };

    var about = function () {
        activateLink('#about');
        showPanel('#panel-about');
    };

    switch (location.hash) {
        case '':
        case '#encryption':
            encryption();
            break;

        case '#decryption':
            decryption();
            break;

        case '#about':
            about();
            break;

        // By default we get an code in hash.
        default:
            decryption();
            $('#decrypt-text').val(location.hash).trigger('autosize.resize');
            showDecryptModal();
    }
}

/**
 * Activate navbar link.
 */
function activateLink(name) {
    var nav = $('.nav');
    nav.find('li').removeClass('active');
    nav.find('a[href="' + name + '"]').parent().addClass('active');
}

/**
 *  Show panel.
 */
function showPanel(id) {
    var panel = $(id);
    panel.show();
    $('.panels .panel').not(panel).hide();
}

/**
 * Returns password of complex password/text fields.
 */
function getPassword(password) {
    var ps = password.find('input:visible').val();
    if (ps === '') {
        password.addClass('has-error');
    } else {
        password.removeClass('has-error');
    }
    return ps;
}


/**
 * Encrypt action.
 */
function doEncrypt() {
    var encrypt = $('#encrypt');

    var text = $('#encrypt-text').val();
    var password = getPassword(encrypt.find('.password'));

    var isHint = $('.password-hint').is(':visible');
    var adata, hint = '';

    if (isHint) {
        hint = $('#password-hint-text').val();
        adata = sjcl.codec.base64.fromBits(sjcl.codec.utf8String.toBits(hint));
    }

    if (password !== '') {
        var p, rp = {}, data, string, code, d = config.delimiter;

        p = {
            adata: isHint ? adata : '',
            iter: config.iter,
            mode: config.mode,
            ts: config.ts,
            ks: config.ks
        };

        string = sjcl.encrypt(password, text, p, rp);
        data = JSON.parse(string);

        code = data.iv + d + data.salt + d + data.ct;

        if (isHint) {
            code += d + adata;
        }

        if (true !== config.isDefault) {
            code = config.cipher + d + config.mode + d + config.iter + d + config.ks + d + config.ts + d + code;
        }

        var baseUrl = location.protocol + '//' + location.host + location.pathname;
        var url = baseUrl + '#' + code;

        showPanel('#panel-encrypt-done');

        if (url.length > config.maxUrlLength) {
            $('#by-url').hide();
            $('#by-text').show();

            var send = 'Go to ' + baseUrl + '#decryption to decrypt this message:\n';
            send += '#' + code;
            $('#send-text').val(send).trigger('autosize.resize').select();
        } else {
            $('#by-url').show();
            $('#by-text').hide();
            // For desktops:
            $('#send-url').val(url).select();
            // For mobile:
            $('#send-url-link').attr('href', url).text(url);
        }
    }
}

/**
 * Decrypt modal action.
 */
function showDecryptModal() {
    var modal = $('#modal-decrypt');
    var hint = modal.find('.hint');

    try {
        var hintText = sjcl.codec.utf8String.fromBits(sjcl.codec.base64.toBits(getParameters().adata));
        if (hintText.length !== 0) {
            hint.text(hintText);
        } else {
            hint.text('');
        }
    } catch (e) {
        hint.text('');
    }

    modal.modal();

    // TODO: Focus password input field.
}

/**
 * Decrypt action.
 */
function doDecrypt() {
    var modal = $('#modal-decrypt');

    var password = getPassword(modal.find('.password'));
    if (password === '') {
        return;
    }

    try {
        var rp, p;

        p = getParameters();

        var text = sjcl.decrypt(password, JSON.stringify(p), {}, rp);

        showPanel('#panel-decrypt-done');

        var html = escapeHtml(text);
        html = highlightUrl(html);

        $('#decrypted-text').html(html);

        modal.modal('hide');

    } catch (e) {
        console.error(e.message);
        $('#modal-error').modal();
    }
}

/**
 *  Save configuration
 */

function saveConfig() {
    var fields = $('#config').serializeArray();
    $.each(fields, function (i, field) {
        var value = field.value;
        if(/^\d+$/.test(value)) {
            value = parseInt(value, 10);
        }
        config[field.name] = value;
    });
    $('#modal-config').modal('hide');
}

/**
 * Get parameters from encrypted message.
 */
function getParameters()
{
    var message = $('#decrypt-text').val();
    var code = message.match(/#([\S]+)/ig);

    if (code === null) {
        throw new Error('Encrypted message does not found.')
    }

    code = code[0].substring(1);
    var parts = code.split(config.delimiter);

    if (parts.length === 3) {
        return {
            "v": 1,
            "cipher": "aes",
            "mode": "ccm",
            "iter": 1000,
            "ks": 128,
            "ts": 64,
            "iv": parts[0],
            "salt": parts[1],
            "ct": parts[2],
            "adata": ""
        };
    } else if (parts.length === 4) {
        return {
            "v": 1,
            "cipher": "aes",
            "mode": "ccm",
            "iter": 1000,
            "ks": 128,
            "ts": 64,
            "iv": parts[0],
            "salt": parts[1],
            "ct": parts[2],
            "adata": parts[3]
        };
    } else if (parts.length === 8) {
        return {
            "v": 1,
            "cipher": parts[0],
            "mode": parts[1],
            "iter": parseInt(parts[2]),
            "ks": parseInt(parts[3]),
            "ts": parseInt(parts[4]),
            "iv": parts[5],
            "salt": parts[6],
            "ct": parts[7],
            "adata": ""
        };
    } else if (parts.length === 9) {
        return {
            "v": 1,
            "cipher": parts[0],
            "mode": parts[1],
            "iter": parseInt(parts[2]),
            "ks": parseInt(parts[3]),
            "ts": parseInt(parts[4]),
            "iv": parts[5],
            "salt": parts[6],
            "ct": parts[7],
            "adata": parts[8]
        };
    } else {
        throw new Error('Encrypted message format is not recognized.');
    }
}


/**
 * Escape HTML.
 */
function escapeHtml(html) {
    return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

/**
 * Highlight url.
 */
function highlightUrl(text) {
    var regex = /(https?):\/\/((?:[a-z0-9.-]|%[0-9A-F]{2}){3,})(?::(\d+))?((?:\/(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})*)*)(?:\?((?:[a-z0-9-._~!$|&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?(?:#((?:[a-z0-9-._~!$|&'()*+,;=:\/?@]|%[0-9A-F]{2})*))?/ig;
    return text.replace(regex, function (uri, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
        return "<a href=\"" + uri + "\">" + uri + "</a>";
    });
}
