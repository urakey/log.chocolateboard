---
date:       2013-07-24
title:      'Template Engine: ECT を Grunt でコンパイルする準備'
categories: ['Coding']
tags:       ['CoffeeScript', 'ect', 'Grunt', 'Template']
url:        '/template-engine-ect-grunt-setting/'
eyecatch:   '/assets/images/posts/2013/07/template-engine-ect-grunt-setting/eyecatch.png'
---

最近愛用中の ECT というテンプレートエンジンのこと。

ECT でググると電気療法ばっか出てくるの(´・ω・`)

[EJS](http://embeddedjs.com/) -&gt; [Swig](http://paularmstrong.github.io/swig/) -&gt; ECT と、3種類渡り歩いて、 ECT に落ち着いています。（いまのところ）

ECT をローカルでコンパイルするような使い方をしているので、そのあたりの設定のメモ書き。

Grunt を使っている環境を前提とした内容になっています。

---

## Index

- [ECT て何？](#p1)
- [grunt-ect をインストールする](#p2)
- [Gruntfile.js にコンパイルの設定を記述する](#p3)

---

{{% section id="p1" %}}

## ECT て何？

ECT 曰く、最速の JavaScript テンプレートエンジンらしいです。

- [ECT - Fastest JavaScript template engine with CoffeeScript syntax](http://ectjs.com/)

EJS と一緒で、JS でゴニョゴニョして HTML を楽して書いちゃおう！ということができます。わたしの場合は、主にスタティックな HTML を書くときに使っていますが、同僚は JS を書くときにも使っているみたい。

ECT の特徴は、CoffeeScript のシンタックスで書くことができることやブロックが扱えること、ヘルパーとしてオリジナルの関数を渡すことができることなどでしょうか。あとは・・・やっぱり最速らしい。

{{% /section %}}

{{% section id="p2" %}}

## grunt-ect をインストールする

ターミナルで下記を実行して *grunt-ect* をインストールします。

```shell
$ npm install grunt-ect --save-dev
```

` --save-dev` はお好みで。

{{% /section %}}

{{% section id="p3" %}}

## Gruntfile.js にコンパイルの設定を記述する

Gruntfile.js コンパイルに関わる設定をいろいろ書きます。設定できる内容は下記リンク先を参考に。

- [grunt-ect](https://npmjs.org/package/grunt-ect)

### シンプルな例

下記は、index.ect を /index.html、about.ect を /about/index.html にコンパイルする場合の書き方。ターミナルで `$ grunt ect` を実行すればコンパイルできます。

ECT のテンプレートファイルの拡張子は *.ect* でなくても大丈夫です。拡張子が無くても動きます。

```javascript
'use strict';
module.exports = function(grunt)
{

  // -----------------------------------
  //  Variables
  // -----------------------------------

  var ROOT_PATH           = '.'
   , PROJECT_PATH        = ROOT_PATH + '/htdocs'
   , ASSET_TEMPLATE_PATH = ROOT_PATH + '/assets/template'
    ;

  // -----------------------------------
  //  Options
  // -----------------------------------

  grunt.config.init({

    ect: {
      top: {
        options: {
          root: ASSET_TEMPLATE_PATH
        }
     , src: 'index.ect' // コンパイル元
     , dest: PROJECT_PATH + '/index.html' // コンパイル後
     , variables: { // ここで好きなようにオブジェクトを作っておく
          title: 'Document Title'
       , id: 'top'
       , lang: 'ja'
        }
      }
   , about: {
        options: {
          root: ASSET_TEMPLATE_PATH
        }
     , src: 'about.ect' // コンパイル元
     , dest: PROJECT_PATH + '/about/index.html' // コンパイル後
     , variables: { // ここで好きなようにオブジェクトを作っておく
          title: 'Document Title'
       , id: 'about'
       , lang: 'ja'
        }
      }
    }

  });

  // -----------------------------------
  //  Plugins
  // -----------------------------------

  grunt.loadNpmTasks('grunt-ect');

};
```

{{% /section %}}

---

ECT の仕組みとか使い方とかもまとめよー。後日。
