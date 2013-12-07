---
layout: app
beta: true
title: WebCrypt &mdash; Online Cifrar mensaje
nav:
    toggle: Toggle navegación
    encryption: Cifrado
    decryption: Descifrado
    about: Sobre
label:
    info: Info
button:
    encrypt_new: Cifrar mensaje nuevo
placeholder:
    password: Contraseña

encrypt:
    title: Mensaje para cifrar
    placeholder: Mensaje para cifrar
    weak: Débil
    mediocre: Mediocre
    strong: Fuerte
    button: Encrypt

encrypt_done:
    title: Su mensaje ha sido cifrado
    link_text: Copiar y enviar este enlace. Contraseña no comparten el mismo canal que el enlace.
    textarea_text: Copiar y enviar este texto. Contraseña no comparten el mismo canal que el texto.

decrypt:
    title: Mensaje para descifrar
    placeholder: Mensaje para descifrar
    button: Descifrar

decrypt_done:
    title: Su mensaje ha sido descifrado

modal:
    decrypt:
        title: Introduzca la contraseña
        button: Descifrar
    decrypt_error:
        error: No se puede descifrar el mensaje.
        info: Tal vez está dañado o la contraseña incorrecta.
        button: Inténtelo de nuevo

about:
    title: Sobre Webcrypt
    body: |
                <p>
                    <strong>Webcrypt</strong> es un código abierto, en aplicación de cifrado del navegador.
                </p>

                <p>
                    WebCrypt es una forma completamente segura de transferir datos sensibles, como no hay mensajes almacenados en el servidor y para
                    nada encrypt se transmite al servidor , todo el proceso de encriptación que está sucediendo en su navegador .
                </p>

                <p>
                    Webcrypt está abierto y licenciado bajo la <a href="https://www.gnu.org/licenses/gpl.html">GNU GPL</a>. lo
                    se basa en gran <a href="http://bitwiseshiftleft.github.io/sjcl/">Stanford Javascript Crypto Biblioteca</a>
                    y alojado en <a href="https://github.com/elfet/webcrypt">GitHub</a> Páginas.
                </p>

info:
    features:
        open_source: Open Source
        no_store: Nada se almacena en el servidor
        no_trans: Nada se transmite al servidor
---