---
date:       2016-02-11
title:      'zsh: Ctrl-R とか Ctrl-A とか Ctrl-E とかが効かなくなった'
categories: ['Coding']
tags:       ['zsh']
url:        '/sh-bindkey/'
eyecatch:   '/assets/images/posts/2016/02/zsh-bindkey/eyecatch.png'
eyecatchCap: '.zshrc'
---

普段 Ctrl-R とかを多用しているので、突然効かなくなってものすごく焦った。

そういえば `.zshrc` 編集したんだった！と思い至ったけれど、どの設定が悪いのかよくわからなくて涙目。
心当たりがあるのは `bindkey -v` て記述足したことくらいだったので、そこのとこ調べてみた。

結果原因は `bindkey` でした。。

```zsh
bindkey -e
```

Emacs 風キーバインドだっていう認識のないまま使っていたから `bindkey -v` て軽い気持ちで追記したのがいけなかった。反省。
