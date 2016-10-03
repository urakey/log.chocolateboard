---
date:       2015-03-14
title:      'WordPress から Middleman に移行しました'
categories: ['Coding']
tags:       ['Middleman', 'Slim', 'GitHub']
url:        '/middleman-blog-2015/'
eyecatch:   '/assets/images/posts/2015/03/middleman-blog-2015/eyecatch.png'
---

年末に移行作業に手をつけて放置していたものを、やっと終わらせました。
移行したいと思ったきっかけは `$ middleman deploy` で公開！みたいなことがしたかったから。
なんかかっこいいし ^^ （動機不純）

{{% notice %}}*Slim* というテンプレートエンジンの予習がしたかったという真面目な理由もあります。{{% /notice %}}

途中、別件に心奪われて放置してましたが、やりかけ気持ち悪いので先週末に集中して終わらせました。
ついでにデザインをマイナーアップデートした！あんま変わってないけど。。。

何をしたかをざっとメモとして残します。

---

## Index

- [移行手順メモ](#p1)
- [インストールしたプラグイン](#p2)
- [テンプレートエンジン](#p3)
- [GitHub Pages でホスティング](#p4)
- [積み残しタスク](#p5)

---

{{% section id="p1" %}}

## 移行手順メモ

1. Middleman をインストールして、ブログ機能に必要な環境をググって整えた
2. WordPress のテーマに使っていた Sass とか JS とか画像とかを Middleman 環境にコピー
3. Grunt でビルドしていたものを、Middleman 環境でビルドするように変更
4. Slim テンプレートエンジンでテーマをコーディング
5. WordPress に投稿済みの画像を Middleman 環境にコピー
6. WordPress に投稿済みの記事を Middleman 環境にコピー（Markdown で下書きしていたものがあるので、それをほぼそのまま移行できた）
7. GitHub Pages でホスティングする準備とテスト
8. イメチェン（デザインのマイナーアップデート）
9. かゆいところをなおす作業（無知ゆえ一番辛かった工程）
10. 完成！！やったー

{{% /section %}}

{{% section id="p2" %}}

## Middleman にインストールしたプラグイン

```ruby
# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'

gem 'middleman'
gem 'middleman-blog'
gem 'middleman-livereload'
gem 'middleman-rouge'
gem 'middleman-deploy'
gem 'middleman-blog-similar'
gem 'middleman-minify-html'
gem 'middleman-imageoptim'
gem 'slim'
gem 'nokogiri'
gem 'redcarpet'

# For feed.xml.builder
gem 'builder', '~> 3.0'
```

### middleman-blog

Middlemanにブログ機能を追加するプラグインです。

- [middleman/middleman-blog](https://github.com/middleman/middleman-blog)
- [Middleman: ブログ機能](https://middlemanapp.com/jp/basics/blogging/)

WordPress の時と URL が変わらないよう、最初は思い通りの URL を作ることから始めました。
`$ middleman server` で内蔵のサーバが動くので、実際に動かして設定していくとわかりやすかった。

#### config.rb

```ruby
activate :blog do |blog|
  blog.layout = 'layouts/layout'
  blog.tag_template = 'tag.html'
  blog.calendar_template = 'calendar.html'

  blog.sources    = 'entries/{year}/{month}/{title}.html'
  blog.permalink  = '{title}/index.html'
  blog.taglink    = 'tag/{tag}/index.html'
  blog.year_link  = '{year}/index.html'
  blog.month_link = '{year}/{month}/index.html'
  blog.day_link   = '{year}/{month}/{day}/index.html'

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = 'page/{num}'

  blog.custom_collections = {
    categories: {
      link: '/{category}/index.html',
      template: '/category.html'
    }
  }
end

# Feed 生成
page "/feed.xml", layout: false

# Sitemap 生成
page "/sitemap.xml", layout: false

# ディレクトリインデックス
activate :directory_indexes
```

WordPress の時に持っていた「カテゴリー」という概念は引き継ぐことにしました。 `blog.custom_collections` のところで設定しています。

### middleman-livereload

Middleman server を立ち上げてソースファイルに変更を加えるとブラウザが自動でリロードされます。

- [middleman/middleman-livereload](https://github.com/middleman/middleman-livereload)

### middleman-deploy

デプロイ作業を簡略化できる。

- [middleman-contrib/middleman-deploy)](https://github.com/middleman-contrib/middleman-deploy)

### middleman-rouge

シンタックスハイライト。

- [Linuus/middleman-rouge](https://github.com/Linuus/middleman-rouge)

### middleman-blog-similar

類似記事を表示するプラグイン。設定周りはまだ試してません。とりあえずいれているだけ。

- [ngs/middleman-blog-similar](https://github.com/ngs/middleman-blog-similar)

### middleman-minify-html

HTML を Minify するプラグイン。  

- [middleman/middleman-minify-html](https://github.com/middleman/middleman-minify-html)
- [ファイルサイズ最適化](https://middlemanapp.com/jp/advanced/file_size_optimization/)

### middleman-imageoptim

画像圧縮。 `/build` 配下に最適化された画像が生成されます。

- [plasticine/middleman-imageoptim](https://github.com/plasticine/middleman-imageoptim)
- [ファイルサイズ最適化](https://middlemanapp.com/jp/advanced/file_size_optimization/)

{{% /section %}}

{{% section id="p3" %}}

## テンプレートエンジン

### HTML のテンプレートエンジン

HTML 生成用のテンプレートエンジンは Slim を採用しました。`<% %>` とか書かなくて良くてすっきり ;D

- [テンプレートエンジンオプション](https://middlemanapp.com/jp/basics/template_engine_options/)

```ruby
# Slim
set :slim, :format => :html5, :sort_attrs => false, :pretty => true
```

### Markdown のテンプレートエンジン

投稿記事は Markdown で書くことにしました。

Markdown エンジンは、デフォルトの *Kramdown* から *Redcarpet* に変更しました。

*Redcarpet* に変更して困ったことが、Markdown の中に書いた生の HTML がブロック要素の場合、HTML タグで囲われた Markdown 部分は Markdown として認識されません。
*Kramdown* なら Markdown として認識してくれるのに。。

いろいろ調べてみたら、ブロック要素で囲われた Markdown 部分が Markdown として認識されないのは仕様として正しいみたい。（無知でした）

寝かせて考えた結果、生の HTML を書きたいケースは限定されているので、カスタムレンダラを追加して対応しました。

### 参考にさせていただいた記事 thx XD

- [Railsでカスタムmarkdownを実装する](http://k0kubun.hatenablog.com/entry/2013/09/19/223400)
- [ruby Middleman カスタムなレンダラ](http://jumble-note.blogspot.jp/2014/06/rubymiddleman.html)

{{% /section %}}

{{% section id="p4" %}}

## GitHub Pages でホスティング

ユーザーに紐づくサイトと、プロジェクトに対するサイトのパターンがあるらしい。。。
前者は `username/username.github.io` というルールに則ってリポジトリを作る必要があるみたい。

今回は後者にしてみました！（なんとなく）

プロジェクトに対するサイトにした場合は、 `gh-pages` ブランチのコンテンツが使われるとのことなので、`$ middleman-deploy` したら、`gh-pages` ブランチに `push` されるようにしました。

```ruby
activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'gh-pages'
end
```

`log.chocolateboard.net` と書いた *CNAME* ファイルが `gh-pages` に含まれるようにして準備完了。
DNS の設定をいじってしばらく待ったら反映されました ^^

### 参考にさせていただいた記事 thx XD

- [Setting up a custom domain with GitHub Pages](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/)
- [Tips for configuring a CNAME record with your DNS provider](https://help.github.com/articles/tips-for-configuring-a-cname-record-with-your-dns-provider/)
- [middleman-blogをgithubでホストする](http://blog.coiney.com/2013/06/21/host-middleman-blog-on-github/)

{{% /section %}}

{{% section id="p5" %}}

## 積み残しタスク

- 検索窓つけようかな
- サイドバーが長すぎるのでタグのデザイン変えよう
- Feed の URL 変わってしまったのどうにかできないか調査する

{{% /section %}}

---

夢の `deploy` できるようになりました XD
