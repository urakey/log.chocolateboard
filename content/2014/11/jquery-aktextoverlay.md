---
date:       2014-11-08
title:      'JavaScript: 画像の上に文字がスライドインするやつをお手軽にできる jQuery プラグイン'
categories: ['Coding']
tags:       ['JavaScript', 'jQuery', 'Plugins']
url:        '/jquery-aktextoverlay/'
eyecatch:   '/assets/images/posts/2014/11/jquery-aktextoverlay/eyecatch.png'
---

JavaScript お勉強メモ。jQuery のプラグイン化してみるお勉強の記録その1です。目標はその10くらいまで書くこと。

最近全く記事を書いていなかったので、目標決めてちょっとずつ書いてみることにしました。

---

## Index

- [jquery.akTextOverlay の Demo](#p1)
- [jquery.akTextOverlay のこと](#p2)
- [jquery.akTextOverlay の Options](#p3)

---

{{% section id="p1" %}}

## jquery.akTextOverlay の Demo

{{< codepen slug="dinbJ" height="540" >}}

{{% /section %}}

{{% section id="p2" %}}

## jquery.akTextOverlay のこと

- [urakey/jquery.akTextOverlay](https://github.com/urakey/jquery.akTextOverlay)

指定したセレクタ内の `<img>` の上にテキストを表示するレイヤーがスライドインします。
スライドインする文字列は `<img>` の `data-text` 属性内に記述します。

```hyml
<img data-text="スライドインさせる文字列">
```

スライドインさせるレイヤーの色やスピードなどなどは Options で渡せるようにしてみました。細かいレイアウトを指定するようなスタイルはプラグイン内に含まないようにしました。

{{% /section %}}

{{% section id="p3" %}}

## jquery.akTextOverlay の Options

オプションは [ここ](https://github.com/urakey/jquery.akTextOverlay/blob/master/README.md#options) にまとまっています。

{{% /section %}}

---

次回以降はしばらく API から情報取得して表示する系の今まで書いたコードをプラグイン化してみます。

*Booklog* 、 *Flickr* 、 *Instagram* 、 *Hatena* あたりの予定^^
