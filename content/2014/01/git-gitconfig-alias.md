---
date:       2014-01-13
title:      'Git: .gitconfig に alias とかを設定してみた'
categories: ['Coding']
tags:       ['git']
url:        '/git-gitconfig-alias/'
eyecatch:   '/assets/images/posts/2014/01/git-gitconfig-alias/eyecatch.png'
---

ずっと [SourceTree](http://www.sourcetreeapp.com/) で git してましたが、転職をキッカケに黒い画面で git 始めました(๑′ᴗ'๑)

慣れてきたので、お家 mac でも黒い画面で git しよう！と思い、とりあえず alias 設定をしたメモ。

---

{{% section id="p1" %}}

## .gitconfig に書いたこと

```
[color]
  # 以下のコマンドは自動で色をつける
  status = auto
  diff = auto
  branch = auto
  interactive = auto
  grep = auto
[push]
  # tracking しているリポジトリが default の push 先
  default = tracking
[core]
  # global な .gitignore
  excludesfile = /Users/hoge/.gitignore
[alias]
  st = status
  sh = show
  ft = fetch
  ci = commit
  co = checkout
  b = branch
  d = diff
  dc = diff --cached
  w = whatchanged
  graph = log --graph --date-order -C -M --pretty='format:%C(yellow)%h%C(red)%d%Creset %s %C(cyan bold)%an, %ar%Creset'
  g = log --graph --date-order -C -M --pretty='format:%C(yellow)%h%C(red)%d%Creset %s %C(cyan bold)%an, %ar%Creset'
  url = config --get remote.origin.url
  bad = "!f () { git checkout $1; git branch --merged|egrep -v '\\*|develop|master'|xargs git branch -d; };f"
```

`git g` のお陰で SourceTree なくても大丈夫になった！

{{% /section %}}

---

次は、Tab 補完の設定をしてみよう。
