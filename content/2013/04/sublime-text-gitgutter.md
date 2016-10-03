---
date:       2013-04-13
title:      'Sublime Text: Git Gutter で変更行を視覚化する'
categories: ['Coding']
tags:       ['Plugins', 'ST2', 'SublimeText']
url:        '/sublime-text-gitgutter/'
---

git でバージョン管理しているので愛用しているプラグイン。オススメです。

{{< figure src="/assets/images/posts/2013/04/sublime-text-gitgutter/01.png" alt="Git Gutter" figcaption="■ 変更行　▼ 削除行　＋ 追加行" >}}

前回コミットとの diff を行番号の横に表示してくれます。
gutter て溝とかという意味のようなので、行番号の脇のところのことを指すのかな？と勝手に解釈。

{{< blockquote cite="gutter の意味 – 英和辞書 – goo辞書" citeLink="http://dictionary.goo.ne.jp/leaf/ej3/38018/m0u/" >}}

1. （道路の排水用）溝, どぶ, 排水溝；（一般に）水路；流れ跡；（屋根の）とい, 雨どい.
1. ((the 〜))貧民くつ, 貧民街；下層社会の生活
1. 《ボウリング》ガーター.

{{< /blockquote >}}

## Git Gutter をインストール

Package Control からインストールできます。

- [jisaacks / GitGutter](https://github.com/jisaacks/GitGutter)

## Git Gutter Icon のカラーリング

github の README.md に書かれている通り、*color scheme* にカラーリングの設定を追加すると好きな色に着色できるので、使用中の *color scheme* に合わせて着色して使用しています。

```xml
<dict>
  <key>name</key>
  <string>diff.deleted</string>
  <key>scope</key>
  <string>markup.deleted</string>
  <key>settings</key>
  <dict>
    <key>foreground</key>
    <string>#ffa0d6</string>
  </dict>
</dict>
<dict>
  <key>name</key>
  <string>diff.inserted</string>
  <key>scope</key>
  <string>markup.inserted</string>
  <key>settings</key>
  <dict>
    <key>foreground</key>
    <string>#90ebc8</string>
  </dict>
</dict>
<dict>
  <key>name</key>
  <string>diff.changed</string>
  <key>scope</key>
  <string>markup.changed</string>
  <key>settings</key>
  <dict>
    <key>foreground</key>
    <string>#cdb2ff</string>
  </dict>
</dict>
```
