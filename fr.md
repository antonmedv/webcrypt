---
layout: app
beta: true
title: WebCrypt &mdash; Crypter un message en ligne
nav:
    toggle: navigation bascule
    encryption: Chiffrement
    decryption: Décryptage
    about: Environ
label:
    info: infos
button:
    encrypt_new: Nouveau message Encrypt
placeholder:
    password: mot de passe

encrypt:
    title: Message à chiffrer
    placeholder: Message à chiffrer
    weak: Faible
    mediocre: Médiocre
    strong: Solide
    button: Chiffrer
    hint: Mot de passe soupçon
    config:
        add_hint: Ajouter indice pour le mot de passe
        remove_hint: Retirer indice pour le mot de passe

encrypt_done:
    title: Votre message a été chiffré
    link_text: Copiez et envoyez ce lien. Mot de passe ne partagent pas le même canal que le lien.
    textarea_text: Copiez et envoyez ce texte. Mot de passe ne partagent pas le même canal que le texte.

decrypt:
    title: Message à décrypter
    placeholder: Message à décrypter
    button: Décrypter

decrypt_done:
    title: Votre message a été déchiffré

modal:
    decrypt:
        title: Entrez le mot de passe
        button: Décrypter
    decrypt_error:
        error: Impossible de déchiffrer le message.
        info: Il est peut-être endommagé ou mot de passe incorrect.
        button: Essayez à nouveau

config:
    title: Configuration
    save: Save
    reset: Reset

about:
    title: À propos de WebCrypt
    body: |
        <p>
            <strong>WebCrypt</strong> est un logiciel open source pour crypter les messages dans le navigateur.
        </p>

        <p>
            WebCrypt is a fully secure way to transfer sensitive data, as no messages are stored on the server and  encryption does not require any data to be transmitted to the server, the whole encryption process is happening in your browser.
        </p>

        <p>
            WebCryptest ouvert et sous licence <a href="https://www.gnu.org/licenses/gpl.html">GNU GPL</a>. 
            Il est basé sur une grande <a href="http://bitwiseshiftleft.github.io/sjcl/">Stanford Javascript Crypto Library</a> 
            et hébergé sur <a href="https://github.com/elfet/webcrypt">GitHub</a> Pages.
        </p>

info:
    features:
        open_source: Open Source
        no_store: Rien n'est stocké sur le serveur
        no_trans: Rien n'est transmise au serveur
---
