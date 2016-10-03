---
date:       2015-02-11
title:      'Xcode: プラグインマネージャ「Alcatraz」を入れてみた'
categories: ['Coding']
tags:       ['Xcode']
url:        '/xcode-alcatraz/'
eyecatch:   '/assets/images/posts/2015/02/xcode-alcatraz/eyecatch.png'
eyecatchCap:     'Alcatraz'
eyecatchCapLink: 'http://alcatraz.io/'
---

Xcode のエディタを黒くしよう！って思ってググったらプラグインマネージャ「[Alcatraz](http://alcatraz.io/)」なるものをみつけた。とりあえずカタチから入る。

ターミナルで下記実行して、Xcode を再起動するとメニューの *Window* に *Package Manager* が追加される。

```shell
curl -fsSL https://raw.github.com/supermarin/Alcatraz/master/Scripts/install.sh | sh
```

{{< figure src="/assets/images/posts/2015/02/xcode-alcatraz/01.png" alt="Xcode: Alcatraz" >}}

*Color Themes* から好きなの選んで *INSTALL* ボタンを押す。

{{< figure src="/assets/images/posts/2015/02/xcode-alcatraz/02.png" alt="Xcode: Alcatraz" >}}

Xcode の設定にカラースキームが追加されてる！

便利そうなプラグインはちゃんと使うようになってから追加するつもり :D
