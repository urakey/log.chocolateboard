---
date:       2016-11-03
title:      'git: Git LFS を使ってみた'
categories: ['Coding']
tags:       ['git']
url:        '/git-lfs/'
eyecatch:   '/assets/images/posts/2016/11/git-lfs/eyecatch.png'
eyecatchCap:     'Git Large File Storage'
eyecatchCapLink: 'https://git-lfs.github.com/'
---

デザインデータを Git 管理するために *Git Large File Storage* を試してみた。  
これで1ファイルあたり 100MB 超えても `push` できる。

GUI を使うデザイナーはどうなるんだろう？？て部分が心配だったけど、対応してるぽかった。

- [Managing large files with Git LFS](https://github.com/blog/2079-managing-large-files-with-git-lfs)
- [新しくなった SourceTree: アトラシアン アカウント、Git LFS サポート、新 UI など](http://japan.blogs.atlassian.com/2016/02/sourcetree-update-atlassian-account-git-lfs-support-ui-refresh-and-more/)

---

## Index

- [使い方](#p1)
- [リモートリポジトリとのやりとり](#p2)
- [GUI のこと](#p3)

---

{{% section id="p1" %}}

## 使い方

### インストール

Homebrew を使っているので `brew install` する。  
[公式サイト](https://git-lfs.github.com/)にインストーラもある。

```bash
$ brew install git-lfs
```

### Git LFSで管理するファイルタイプの追加

Git LFS で管理したいファイルタイプを必要に応じて追加していく。  
以下で Sketch を track するようになる。

```bash
$ git lfs track　"*.sketch"
Tracking *.sketch
```

### Git LFSで管理しているファイルタイプの確認

追加したファイルタイプは `.gitattributes` というファイルに追加されている。  
このファイルを直接編集してもよい。  
追加されているファイルタイプを確認するコマンドは以下。

```bash
$ git lfs track
Listing tracked paths
  *.sketch (.gitattributes)
  *.psd (.gitattributes)
  *.ai (.gitattributes)
```

### 管理下のファイルを確認

コミットした時点からトラッキング対象になる。  
コミット後に以下のコマンドで対象のファイルを確認することが出来る。

```bash
$ git lfs ls-files
```

{{% /section %}}

{{% section id="p2" %}}

## リモートリポジトリとのやりとり

とりあえず `push` してみると、普通にできる。

```bash
$ git push origin master
Git LFS: (0 of 1 files) 85.07 B / 165.80 KB
```

`pull` も普通にできる。ファイルの中身がテキストファイルのポインタになっているので、一瞬で終わる。
ファイルの実態を `pull` するには以下を実行。

```bash
$ git lfs pull
```

とりあえずここまで確認できた。

{{% /section %}}

{{% section id="p3" %}}

## GUI のこと

[GitHub Desktop](https://desktop.github.com/) で試してみた。  
アプリをインストールして、設定からコマンドラインをインストールする。
{{% notes %}}きれいな mac を持ってるデザイナーに協力してもらった★{{% /notes %}}

{{< figure src="/assets/images/posts/2016/11/git-lfs/01.png" alt="Git LFS" width="400" >}}

あとは普通に使えるっぽい。
`pull` すると、Git LFS 対象ファイルにはダウンロードボタンが表示されるみたい。

{{< figure src="/assets/images/posts/2016/11/git-lfs/02.png" alt="Git LFS" width="418" >}}

このボタンを押すと、実態ファイルがダウンロードされる。意外とあっさり使えた。  
GUI でも大丈夫ってことがわかった。（SourceTree は試してない）

{{% /section %}}

とりあえずしばらく使ってみよう(๑•̀ㅂ•́)و✧

