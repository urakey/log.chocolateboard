---
date:       2013-07-25
title:      'Sublime Text: テーマを Flatland Theme に変更した'
categories: ['Coding']
tags:       ['ST2', 'ST3', 'SublimeText', 'Themes']
url:        '/sublime-text-flatland-theme/'
eyecatch:   '/assets/images/posts/2013/07/sublime-text-flatland-theme/eyecatch.png'
eyecatchCap:     'thinkpixellab/flatland · GitHub'
eyecatchCapLink: 'https://github.com/thinkpixellab/flatland'
---

Sublime Text を使い始めてからずっと「Theme-Soda」を使用していましたが、飽きてきたので「Flatland Theme」に変更しました。そして、同梱されていた Color Scheme を微妙に編集したので、それも置いておきます。

記事の内容は基本的には Sublime Text 2 の設定についてまとめています。Sublime Text 3 のベータ版も配布されていますので、違いのある設定については分かる範囲で触れています。

{{< figure src="/assets/images/posts/2013/07/sublime-text-flatland-theme/01.png" alt="Flatland Theme" >}}

---

## Index

- [Flatland Theme のインストール](#p1)（ST2 / ST3）
- [User Setting で使用する Theme を指定する](#p2)（ST2 / ST3）
- [Color Scheme も変える](#p3)（ST2 / ST3）
- [Flatland Dark.tmTheme 修正版](#p4)（ST2 / ST3）
- [アイコンも変える](#p5)（ST2 / ST3）

---

{{% section id="p1" %}}

## Flatland Theme のインストール

Flatland Theme は Packaeg Control からインストールできます。

- [thinkpixellab/flatland · GitHub](https://github.com/thinkpixellab/flatland)

{{% /section %}}

{{% section id="p2" %}}

## User Setting で使用する Theme を指定する

*cmd + ,* でユーザー設定ファイルを開き、下記のように使用するテーマを指定します。これは、全く同じ記述のまま ST3 でも有効でした。

*Preferences -> Settings - User* から開くこともできます。

```javascript
{
  // 必須：テーマファイルの指定
  "theme": "Flatland Dark.sublime-theme",
  // 任意：タブをスクエアにする
  "flatland_square_tabs": true
}
```

{{% /section %}}

{{% section id="p3" %}}

## Color Scheme も変える

同梱されている Color Scheme 「Flatland Dark.tmTheme」を使ってみよう！ということで、まずは、そのまま適用する方法から。

### 同梱されている Color Scheme をそのまま適用する

ユーザー設定ファイルに下記のように使用する  Color Scheme へのパスを指定します。

```javascript
{
  // Color Scheme ファイルの指定
  "color_scheme": "Packages/Theme - Flatland/Flatland Dark.tmTheme"
}
```

この指定方法では、ST3 へ適用できませんでした。「Packages」の部分を「Cache」に置き換えてもダメでした。そもそも、「Flatland Dark.tmTheme」のファイルがどこにあるのか分からず断念しました。

わかるかた教えて下さいm(_ _)m

とりあえず ST3 への適用するならば、「Flatland Dark.tmTheme」の格納場所を変えてしまうことで解決出来ます。

### 同梱されている Color Scheme の格納場所を変えて適用する

「Flatland Dark.tmTheme」を任意のディレクトリに移動してしまいます。この方法であれば ST2 はもちろん ST3 でも適用できます。詳しくは下記の過去記事をご覧くださいませ。

- [Sublime Text: 初期設定など（ST2 / ST3） - Theme と Color Scheme](#p3)

Color Scheme を任意のディレクトリに移動したら、ユーザー設定ファイルで下記のように Color Scheme へのパスを指定します。

```javascript
{
  // Color Scheme ファイルの指定
  // ST2の場合
  "color_scheme": "Packages/Color Scheme - Original/Custom Flatland Dark.tmTheme"
  // ST3の場合
  "color_scheme": "Cache/Color Scheme - Original/Custom Flatland Dark.tmTheme"
}
```

{{% /section %}}

{{% section id="p4" %}}

## Flatland Dark.tmTheme 修正版

{{< figure src="/assets/images/posts/2013/07/sublime-text-flatland-theme/02.png" alt="Flatland Theme" >}}

同梱されていた「Flatland Dark.tmTheme」には、色指定が 7桁以上になっている箇所が多々あったので、修正してみました。

修正ついでに、一部の配色を変更しています。差異の浅いオレンジ色が連続する部分に紫や緑系の色を足すなど。

Gist に置いておきましたので、ご自由にどうぞ ^^

GitGutter というプラグイン（git の変更箇所を可視化するプラグイン）のマーカ色の指定も追記していますので、不要な人は消してくださいませ。

- [urakey / Custom Flatland Dark.tmTheme](https://gist.github.com/urakey/6067816)

{{% /section %}}

{{% section id="p5" %}}

## アイコンも変える

かわいい紙飛行機デザインなアイコンも同梱されていますし、Dribbble で公開されている Flatland Theme のために作られたアイコンも素敵です。

- [Dribbble – Sublime Text icon replacement for Flatland Theme by Ernest Ojeh](http://dribbble.com/shots/1027361-Sublime-Text-icon-replacement-for-Flatland-Theme)

{{< figure src="/assets/images/posts/2013/07/sublime-text-flatland-theme/03.png" alt="Flatland Theme" figcaption="左：Flatland Theme に同梱されているアイコン / 右：Dribbble で公開されているアイコン" >}}

`/Applications/Sublime Text 2.app/Contents/Resources/Sublime Text 2.icns` を上書きするだけで変えられます。

ST3 の場合は `/Applications/Sublime Text.app/Contents/Resources/Sublime Text.icns` です。

Finder から cmd + shift + G で移動出来ます。

{{% /section %}}


---

アイコンは Dribbble で公開されているものを使用することにしました。かわいい ^^

Dropbox に置いて、シンボリックリンクを貼って使っています。
