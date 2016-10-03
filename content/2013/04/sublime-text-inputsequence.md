---
date:       2013-04-16
title:      'Sublime Text: InputSequence でキャレット位置に連番'
categories: ['Coding']
tags:       ['Plugins', 'ST2', 'SublimeText']
url:        '/sublime-text-inputsequence/'
---

Sublime Text の機能である複数キャレット。キャレット位置に連番入れたい！と思っていたときに出会ったプラグイン。

しばらく使ってみた結果、これは使いつづけるなぁって思ったプラグインのひとつです。作ってくれている人に感謝 XD

- ~~[kope88/InputSequence](https://github.com/kope88/InputSequence)~~ ←なくなっちゃったぽい？
- [kazu1107/InputSequence](https://github.com/kazu1107/InputSequence) ←新しいぽい

{{% notice %}}この記事は「kope88/InputSequence」のリポジトリがあった頃に書かれたものです。「kazu1107/InputSequence」の詳しい使い方は README をご確認ください ;D{{% /notice %}}

{{< figure src="/assets/images/posts/2013/04/sublime-text-inputsequence/04.gif" >}}

## 1. 複数箇所にキャレットを置く

複数箇所にキャレットを置くときは、*ctrl + shift + ↑* か *ctrl + shift + ↓* か *cmd 押しながら複数箇所クリック*で。

{{% notice %}}*ctrl + cmd + G* 使うとか、他にも複数箇所にキャレットを置く方法はあります。{{% /notice %}}

{{< figure src="/assets/images/posts/2013/04/sublime-text-inputsequence/01.png" >}}

## 2. コマンドバーから連番の最初の数字を入れる

*ctrl + shift + 0* で *Sequence Type (alphabet or number): コマンドバー* が出るので、そこに連番の最初の数字を入れて Enter するだけ。初期値は 00 始まりなので、そのままで良ければ何もいじらずに Enter すれば OK。

{{< figure src="/assets/images/posts/2013/04/sublime-text-inputsequence/02.png" >}}

## 3. 連番が入る！

簡単便利 ;D

{{< figure src="/assets/images/posts/2013/04/sublime-text-inputsequence/03.png" >}}

