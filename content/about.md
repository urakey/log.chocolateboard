---
title: 'About'
url:   '/about/'
type:  'page'
---

## Index

- [Self introduction.](#profile)
- [About this website.](#website)
- [Website recipe.](#recipe)

---

{{% section id="profile" %}}
## Self introduction.

[自己紹介はここにまとめました → [ About :: chocolateboard. ]]({{< params "portfolio" >}}/about/#profile)

## About this website.

*chocolateboard* という名前に深い意味はありません。  
ドメイン取得時に所持していたスケートボードの板が [Chocolate Skateboards](http://www.chocolateskateboards.com/) のものだったこと、チョコレートが好きなこと、デッキとチョコレートで板チョコっぽいなと思ったことなどから過去に取得したドメインです。

*log.chocolateboard* のコンテンツは Hugo で更新しています。

Chrome・Safari・Firefox・Opera 最新版でのみ意図した表示となっています。  
IE8 以下は対応する予定がありません。

実験したりなどもしておりますので、画面が真っ白になっているときは大体なにかに失敗している時です mm  
ご了承くださいませ。

[プライバシーポリシーについてはこちら](/privacy/)
{{% /section %}}

{{% section id="recipe" %}}
## Website recipe.

### Design

Sass のグローバルな変数として、キーカラー1色とダークカラー1色を持っています。  
タブレットやスマートフォンの対応はメディアクエリで対応しているのみです。  
主にカラム幅の変更・組み換え・表示非表示切り替えのみ。

アイコンは *Font Awesome* のものです。

- [Font Awesome](http://fortawesome.github.com/Font-Awesome/)
- [Google Web Fonts: PT Sans](https://www.google.com/fonts/specimen/PT+Sans)

### Coding

CSS は Sass の SCSS 記法を採用しています。

- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Hugo](https://gohugo.io/)
- [gulp.js](http://gulpjs.com/)
- [Atom](https://atom.io/)
{{% /section %}}
