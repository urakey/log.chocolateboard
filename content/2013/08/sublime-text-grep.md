---
date:       2013-08-01
title:      'Sublime Text: grep 機能のこと'
categories: ['Coding']
tags:       ['grep', 'ST2', 'SublimeText']
url:        '/sublime-text-grep/'
eyecatch:   '/assets/images/posts/2013/08/sublime-text-grep/eyecatch.png'
---

複数ファイルに渡って、特定の文字列を検索・一括置換する grep 機能。

Sublime Text にも grep 機能があるので、オプション周りの覚書き。

---

## Index

- [grep 機能の呼び出し方](#p1)
- [左下の各アイコンの役割（Find について）](#p2)
- [検索対象ファイルを設定する（Where について）](#p3)
- [文字コードの問題](#p4)

---

{{% section id="p1" %}}

## grep 機能の呼び出し方

ショートカットキー *cmd + shift + F* で、簡単に呼び出すことができます。

メニューから開く場合は、 *Find -> Find in files* 。

これで立ち上がったウィンドウから複数ファイルに渡った検索・置換が可能です。

{{< figure src="/assets/images/posts/2013/08/sublime-text-grep/01.png" alt="Sublime Text: grep" >}}

{{% notice %}}[Flatland Theme](https://github.com/thinkpixellab/flatland) を使用しているため、見た目が異なる場合があります。{{% /notice %}}

{{% /section %}}

{{% section id="p2" %}}

## 左下の各アイコンの役割（Find の設定）

{{< figure src="/assets/images/posts/2013/08/sublime-text-grep/02.png" alt="Sublime Text: grep" >}}

左下には5つのアイコンがあります。それぞれ、下表のような検索オプションを付けることができます。

| Icon                   | Option                                              |
| :--------------------: | --------------------------------------------------- |
| ![](/assets/images/posts/2013/08/sublime-text-grep/icon_1.png) | 正規表現パターンを使用する or 使用しない |
| ![](/assets/images/posts/2013/08/sublime-text-grep/icon_2.png) | 大文字と小文字を区別する or 区別しない |
| ![](/assets/images/posts/2013/08/sublime-text-grep/icon_3.png) | 完全一致 or 部分一致 |
| ![](/assets/images/posts/2013/08/sublime-text-grep/icon_4.png) | 検索結果の表示：マッチした文字列の周辺行を表示する or 該当行のみ表示する |
| ![](/assets/images/posts/2013/08/sublime-text-grep/icon_5.png) | 検索結果の表示：検索結果を別タブで表示する or Window下部のエリアに表示する |

{{% /section %}}

{{% section id="p3" %}}

## 検索対象ファイルを設定する（Where について）

{{< figure src="/assets/images/posts/2013/08/sublime-text-grep/03.png" alt="Sublime Text: grep" >}}

入力欄の 2 つ目の右側にある「...」をクリックして選択することもできます。直打ちでも OK。

| Where              | Target                                                  |
| ------------------ | ------------------------------------------------------- |
| Clear              | Where の入力エリアを空にする |
| Add Folder         | 検索対象フォルダを追加する |
| Add Include Filter | ワイルドカードで指定したファイル / 拡張子にマッチするファイルを検索対象にする |
| Add Exclude Filter | ワイルドカードで指定したファイル / 拡張子にマッチするファイルを検索対象から除外する |
| Add Open Folders   | 開いているフォルダを検索対象にする |
| Add Open Files     | 開いているファイルを検索対象にする |

{{% /section %}}

{{% section id="p4" %}}

## 文字コードの問題

悲しいかな日本語で検索する場合、基本的に _UTF-8_ でないと無理です。

### どうにか UTF-8 以外の文字コードで grep するなら

ConvertToUTF8 というプラグインを使用している場合、開いているファイルに対する grep が可能です。

- [seanliang / ConvertToUTF8](https://github.com/seanliang/ConvertToUTF8)

分量がかなり大量でない限り、他の文字コードでも ST2 で置換してしまうことが多いです。大量にある場合はしょうがないので別のエディタを使ったりしています。

{{% /section %}}

---

早くこの辺りがいい感じに使いやすくなっていくといいなー。もしくは誰か作ってくれるといいなー。
