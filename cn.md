---
layout: app
beta: true
title: WebCrypt &mdash; 在线加密邮件
nav:
    toggle: 切换导航
    encryption: 加密
    decryption: 解密
    about: 关于
label:
    info: 信息
button:
    encrypt_new: 加密新的消息
placeholder:
    password: 密码

encrypt:
    title: 消息加密
    placeholder: 消息加密
    weak: 弱
    mediocre: 平庸
    strong: 强烈
    button: 加密

encrypt_done:
    title: 您的留言已加密
    link_text: 复制并发送此链接。密码不共用同一通道为纽带。
    textarea_text: 复制并发送该文本。密码不共享同一信道的文字。

decrypt:
    title: 消息解密
    placeholder: 消息解密
    button: 解码

decrypt_done:
    title: 您的留言已解密

modal:
    decrypt:
        title: 输入密码
        button: 解码
    decrypt_error:
        error: 无法对消息进行解密。
        info: 也许它已损坏或错误的密码。
        button: 再试一次

about:
    title: 关于WebCrypt
    body: |
        <p>
            <strong>WebCrypt</strong> 是一个开源软件，在浏览器加密消息。
        </p>

        <p>
            WebCrypt是一个完全安全的方式来传输敏感数据，因为没有消息存储在服务器上，加密并不需要被传输到服务器的任何数据，整个加密过程是发生在您的浏览器。
        </p>

        <p>
            WebCrypt是开放的，遵循<a href="https://www.gnu.org/licenses/gpl.html">GNU GPL</a>许可。它是基于伟大的<a href="http://bitwiseshiftleft.github.io/sjcl/">Stanford Javascript Crypto
            Library</a>和托管在<a href="https://github.com/elfet/webcrypt">GitHub</a>上
        </p>

info:
    features:
        open_source: 开源
        no_store: 没有什么是存储在服务器上
        no_trans: 没有被发送到服务器
---
