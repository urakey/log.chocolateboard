---
date:       2013-05-15
title:      'Grunt &amp; Compass: Environment の指定を Grunt 側に持たせてみる'
categories: ['Coding']
tags:       ['Compass', 'Grunt', 'Sass']
url:        '/grunt-compass-environment/'
---

Compass の出力設定を納品版と開発版で振り分けてコンパイルしてきたのですが、『コメントなし 1行 CSS』と『コメント付き CSS』を別場所に同時にコンパイルしたくなったので Environment の指定を Grunt 側に持たせてみることにしました。

---

## Index

- [Compass で納品版と開発版の出力設定を振り分ける](#p1)
- [Grunt で Sass &amp; Compass をコンパイルする準備](#p2)
- [Environment の指定を Grunt 側に持たせる](#p3)
- [Grunt で納品版と開発版を別場所に同時にコンパイル](#p4)
- [いつもの config.rb](#p5)

---

{{% section id="p1" %}}

## Compass の出力設定を納品版と開発版で振り分ける

Compass を使う時に config.rb 内で納品版と開発版の出力設定を振り分ける記述をすることがあります。例えば下記のようなこと。

```ruby
# environment = :production の場合に :compressed で出力
# environment = :development の場合に :expanded で出力
output_style = ( environment == :production ) ? :compressed : :expanded

# environment = :production の場合に行番号を出力しない
# environment = :development の場合に行番号を出力する
line_comments = ( environment == :production ) ? false : true

# 画像の格納ディレクトリを振り分ける
if ( environment == :production )
  http_images_path = "http://production/shared/imgs"
else
  http_images_path = "http://development/shared/imgs"
end
```

`environment` が `:development` （開発版）か `:production` （納品版）かによって、コンパイル後の内容を変更しています。

納品版と開発版の切り替えは *config.rb で指定する方法* 、もしくは *コマンドオプションで指定する方法* があります。

Compass では `environment` のデフォルト値は何も指定しない限り `:development` （開発版）です。そこで、納品版にしたい場合それぞれの方法で `:production` （納品版）に変更します。

### config.rb で指定する

config.rb に下記を記述することで納品版になります。

```ruby
environment = :production
```

### コマンドオプションで指定する

`compass watch` にたいしてオプションを指定します。

```shell
$ compass watch -e production
```

{{% notice %}}'-e production' が environment のオプションです。{{% /notice %}}

### 注意事項

ファイルの変更が全くない状態で `environment` の切り替えを行った場合は、残念ながらファイルが生成されません。そういう場合は、下記を実行します。

```shell
$ compass compile -e production --force
```

{{% notice %}}'--force' オプションを付けることでファイルの変更の有無に関わらず強制的にコンパイルします。{{% /notice %}}

{{% /section %}}

{{% section id="p2" %}}

## Grunt で Sass & Compass をコンパイルする準備

Grunt で Sass & Compass をコンパイルするならまずは `grunt-contrib-compass` をインストールします。

下記リンク先の README に書いてあるとおり、いろいろできます。

- [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)

基本的には、config.rb を使いたい派なので、いつも下記のように config.rb を指定しています。

```javascript
grunt.initConfig({
  compass: {
    prod: {
      options: {
        config: 'config.rb'
      }
    }
  }
});
```

`grunt compass` とか `grunt compass:prod` と叩くとコンパイルできる。

{{% /section %}}

{{% section id="p3" %}}

## Environment の指定を Grunt 側に持たせる

config は config.rb を参照させつつ、Environment の指定だけを Grunt 側に持たせるには下記のように `environment` を書くだけです。

```javascript
grunt.initConfig({
  compass: {
    prod: {
      options: {
        config: 'config.rb'
      , environment: 'production'
      , force: true // 任意: force オプション
      }
    }
  }
});
```

{{% /section %}}

{{% section id="p4" %}}

## Grunt で納品版と開発版を別場所に同時にコンパイル

config.rb にコンパイル後のファイル（css）の格納場所を指定しますが、これを Environment で分岐しておきます。


```ruby
# project_path からの相対で指定（コンパイル後）
if (environment == :production)
  css_dir = "shared/css"
else
  css_dir = "docs/css"
end
```

そして、Grunt 側では下記のような指定をします。

```javascript
grunt.initConfig({
  compass: {
    dev: {
      options: {
        config: 'config.rb'
      , environment: 'development'
      , force: true // 任意: force オプション
      }
    }
  , prod: {
      options: {
        config: 'config.rb'
      , environment: 'production'
      , force: true // 任意: force オプション
      }
    }
  }
});
```

これで `grunt compass` を叩くと、`grunt compass:dev` と `grunt compass:prod` が同時に実行されるので、config.rb で分岐されている内容に従ったコンパイル結果を得ることができます。

{{% /section %}}

{{% section id="p5" %}}

## いつもの config.rb

よく使っている設定をまとめた config.rb を Gist にアップしましたので置いておきます。

[gist:5545566]

{{% /section %}}
