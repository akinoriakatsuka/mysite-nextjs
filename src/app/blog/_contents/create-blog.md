---
title: 'Next.jsでmarkdownブログを構築'
date: '2024-01-09'
description: 'ブログを作っています'
---

# Next.jsでmarkdownブログを作っていきます

## 動機

レンタルサーバーを借り、wordpressをインストールしてブログを作っていたが、ホスティングが面倒くさくなった。
Zennの書き心地が良いので、それに近い感じでブログを作ってみようと思った。

## 要件

- markdownで記事を書ける（記事をgit管理できる）
- 記事を書いているときにホットリロードできる
- コードのシンタックスハイライトができる
- 管理が面倒くさくない（githubにpushするとCDが走ってデプロイできる）

## 作り方

### (これから書きます)

### ソースコード

ソースコードはこちらに公開しております。
[https://github.com/akinoriakatsuka/mysite-nextjs](https://github.com/akinoriakatsuka/mysite-nextjs)

src/app/blog/_contents/に記事を置くと公開できます。

## 参考にした記事たち

### [https://reffect.co.jp/react/nextjs-markdown-blog](https://reffect.co.jp/react/nextjs-markdown-blog)
ブログの原型はこれで作りました。紆余曲折ありApp Routerのあたりで下の記事を参考にし始めました。

### [https://musclecoding.com/nextjs-app-router-markdown-blog/](https://musclecoding.com/nextjs-app-router-markdown-blog)
App Routerのところでお世話になりました。

### [https://www.newt.so/docs/tutorials/customize-code-block-using-react-markdown](https://www.newt.so/docs/tutorials/customize-code-block-using-react-markdown)
シンタックスハイライトのところでお世話になりました。

### [https://zenn.dev/temasaguru/articles/546f0fcdd9d131](https://zenn.dev/temasaguru/articles/546f0fcdd9d131)
ホットリロードのところでお世話になりました。

## 今後やりたいこと

- 記事の検索機能
- URLを記事に入れたらリンクになるようにする