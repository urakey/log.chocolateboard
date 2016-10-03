---
date:       2014-03-24
title:      'Bash: Tab キーによる補完機能を有効にする'
categories: ['Coding']
tags:       ['bash', 'git,', 'homebrew']
url:        '/homebrew-bash-completion/'
eyecatch:   '/assets/images/posts/2014/03/homebrew-bash-completion/eyecatch.png'
---

お家 mac でも黒い画面で git しよう！と思った私のメモその2。

Tab キーの補完機能を有効にしてみた。

---

{{% section id="p1" %}}

## .bash-completion をインストール

- [.bash-completion](http://bash-completion.alioth.debian.org/)

Homebrew を使っているので、`brew install` で入れました。

```shell
$ brew install bash-completion
```

`.bash_profile` に設定を書いておく。

```bash
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
```

`.bash_profile` を再読み込みする。

```shell
$ source ~/.bash_profile
```

できたー(´∀｀*)

{{% /section %}}
