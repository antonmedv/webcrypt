---
layout: app
title: WebCrypt &mdash; Шифрование Сообщений Онлайн
nav:
    toggle: Скрыть/Показать навигацию
    encryption: Шифрование
    decryption: Расшифровка
    about: О проекте
label:
    info: Подсказка
button:
    encrypt_new: Зашифровать новое сообщение
placeholder:
    password: Пароль

encrypt:
    title: Шифрование
    placeholder: Сообщение для шифрования
    weak: Слабый
    mediocre: Нормальный
    strong: Сильный
    button: Зашифровать

encrypt_done:
    title: Ваше сообщение было зашифровано
    link_text: Скопируйте и перешлите эту ссылку. Пароль не посылайте тем же каналом связи.
    textarea_text: Скопируйте и перешлите этот текст. Пароль не посылайте тем же каналом связи.

decrypt:
    title: Расшифровка
    placeholder: Сообщение для расшифровки
    button: Расшифровать

decrypt_done:
    title: Сообщение было расшифровано

modal:
    decrypt:
        title: Введите пароль
        button: Расшифровать
    decrypt_error:
        error: Невозможно расшифровать сообщение.
        info: Возможно, оно повреждено или введён неправильный пароль.
        button: Попробуйте еще раз

about:
    title: О WebCrypt
    body: |
        <p>
            <strong>WebCrypt</strong> это открытое программное обеспечение для шифрования сообщений прямо в браузере.
        </p>

        <p>
            WebCrypt это полностью безопасный способ передачи конфиденциальных данных, так как никакие ваши данные не хранятся на сервере
            и даже не передаются на сервер. Весь процесс шифрования происходит прямо в браузере.
        </p>

        <p>
            Исходый код WebCrypt открыт и опубликован под лицензией <a href="https://www.gnu.org/licenses/gpl.html">GNU GPL</a>.
            Он основывается на замечательной библиотеке Стэнфордский университет <a href="http://bitwiseshiftleft.github.io/sjcl/">Stanford Javascript Crypto
            Library</a>
            и размещается на <a href="https://github.com/elfet/webcrypt">GitHub</a> Pages.
        </p>

info:
    features:
        open_source: Открытое программное обеспечение
        no_store: Ничего не сохраняется на сервере
        no_trans: Ничего не передаётся на сервер
---