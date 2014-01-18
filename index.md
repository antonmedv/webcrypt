---
layout: app
title: WebCrypt &mdash; Online Encrypt Message
nav:
    toggle: Toggle navigation
    encryption: Encryption
    decryption: Decryption
    about: About
label:
    info: Info
button:
    encrypt_new: Encrypt new message
placeholder:
    password: Password

encrypt:
    title: Message to encrypt
    placeholder: Message to encrypt
    weak: Weak
    mediocre: Mediocre
    strong: Strong
    button: Encrypt
    hint: Password hint
    config:
        add_hint: Add password hint
        remove_hint: Remove password hint

encrypt_done:
    title: Your message has been encrypted
    link_text: Copy and send this link. Password do not share the same channel as the link.
    textarea_text: Copy and send this text. Password do not share the same channel as the text.

decrypt:
    title: Message to decrypt
    placeholder: Message to decrypt
    button: Decrypt

decrypt_done:
    title: Your message has been decrypted

modal:
    decrypt:
        title: Enter the password
        button: Decrypt
    decrypt_error:
        error: Unable to decrypt the message.
        info: Perhaps it is damaged or the wrong password.
        button: Try again

config:
    title: Configuration
    save: Save
    reset: Reset

about:
    title: About WebCrypt
    body: |
        <p>
            <strong>WebCrypt</strong> is an open source software to encrypt messages in the browser.
        </p>

        <p>
            WebCrypt is a fully secure way to transfer sensitive data, as no messages are stored on the server and
            encryption does not require any data to be transmitted to the server, 
            the whole encryption process is happening in your browser.
        </p>

        <p>
            WebCrypt is open and licensed under the <a href="https://www.gnu.org/licenses/gpl.html">GNU GPL</a>. It
            is based on great <a href="http://bitwiseshiftleft.github.io/sjcl/">Stanford Javascript Crypto
            Library</a>
            and hosted on <a href="https://github.com/elfet/webcrypt">GitHub</a> Pages.
        </p>

info:
    features:
        open_source: Open Source
        no_store: Nothing is stored on the server
        no_trans: Nothing is transmitted to the server
---
