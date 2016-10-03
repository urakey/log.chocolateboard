---
date:       2013-07-21
title:      'Sublime Text: Markdown ファイルを Marked でプレビューする'
categories: ['Coding']
tags:       ['Markdown', 'ST2', 'SublimeText']
url:        '/sublime-text-marked/'
eyecatch:   '/assets/images/posts/2013/07/sublime-text-marked/eyecatch.png'
eyecatchCap:     'Marked – smart tools for smart writers'
eyecatchCapLink: 'http://markedapp.com/'
---

Marked というアプリを買いました。Marked は エディタではなく、シンプルなプレビューワです。

スタイルがデフォルトでいくつか用意されている他、自分でオリジナルの CSS を書いて設定することも可能です。HTML で書き出すなどという機能もついています。

エディタは普段 ST2 を使用しているので、Markdown 形式のファイルをプレビューするときに、Marked を立ち上げるように設定してみました。

この記事はその設定についての覚書きです。

- [Marked - smart tools for smart writers](http://markedapp.com/)
- [Marked を App Store で見る](https://itunes.apple.com/jp/app/marked/id448925439?mt=12&uo=4&at=10l87c)

---

## Index

- [Marked Bonus Pack を公式サイトからダウンロード](#p1)
- [該当ファイルを Packages の中へ入れる](#p2)
- [Build System に Marked が追加されたことを確認する &amp; 起動してみる](#p3)

---

{{% section id="p1" %}}

## Marked Bonus Pack を公式サイトからダウンロード

Marked のサイトで配布されている、Marked Bonus Pack というものを使うので、下記から *MarkedBonusPack.zip* をダウンロードします。

- [Marked Bonus Pack (scripts, commands and bundles)](http://support.markedapp.com/kb/how-to-tips-and-tricks/marked-bonus-pack-scripts-commands-and-bundles)

{{% /section %}}

{{% section id="p2" %}}

## 該当ファイルを Packages の中へ入れる

zip ファイルを解凍し、中にある *Marked.sublime-build* というファイルを `~/Library/Application Support/Sublime Text 2/Packages/User/` の中に入れます。

{{< figure src="/assets/images/posts/2013/07/sublime-text-marked/01.png" alt="Sublime Text" >}}

{{% /section %}}

{{% section id="p3" %}}

## Build System に Marked が追加されたことを確認する &amp; 起動してみる

*Tools -> Build System* に Marked が追加されていることを確認します。

*cmd + B* （ビルドのショートカットキー）で起動できるようになっているはず。

{{< figure src="/assets/images/posts/2013/07/sublime-text-marked/02.png" alt="Sublime Text" >}}

{{% /section %}}
