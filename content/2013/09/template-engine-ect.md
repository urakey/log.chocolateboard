---
date:       2013-09-04
title:      'Template Engine: ECT の基本的な使い方 （Grunt でコンパイル）'
categories: ['Coding']
tags:       ['CoffeeScript', 'ect', 'Grunt', 'Template']
url:        '/template-engine-ect/'
eyecatch:   '/assets/images/posts/2013/09/template-engine-ect/eyecatch.png'
---

ECT という JavaScript テンプレートエンジンの、基本的な使い方の覚書きです。

Grunt でコンパイルする体でまとめましたので、Grunt を使わない人は、公式サイトを元に読みかえてくださいませ。

- [ECT - Fastest JavaScript template engine with CoffeeScript syntax](http://ectjs.com/)

Grunt でコンパイルする設定については [過去に記事](/template-engine-ect-grunt-setting/) にしましたので併せてどうぞ ^^

---

## Index

- [ファイルの準備](#p1)
- [Gruntfile.js にオブジェクトを用意する](#p2)
- [Output: 用意したオブジェクトを出力する](#p3)
- [Inheritance: 継承の仕組み](#p4)
- [Partials: 別ファイルを読み込んでみる（include）](#p5)
- [Blocks: 便利なブロックの使い方](#p6)
- [Conditions: 条件による出力の調整](#p7)
- [Loops: ループ処理について](#p8)

Index の各タイトルの頭についている [ Output: ] などという単語は、ECT 公式サイトの [ [Syntax](http://ectjs.com/#syntax) ] と対応させています。

---


{{% section id="p1" %}}

## ファイルの準備

テンプレートファイルを用意します。

この記事で Gruntfile.js に記載する例は、全て下図の構成に沿ったものになっています。

{{< figure src="/assets/images/posts/2013/09/template-engine-ect/01.png" alt="Template Engine: ECT" >}}

`/assets/template` 配下の構造と `/htdocs` 配下の構造が違っていますが、この限りではありません。`/assets/template` 配下にディレクトリをきったほうが管理しやすい場合もあります。

ECT のテンプレートファイルの拡張子は *.ect* でなくても大丈夫です。拡張子が無くても動きます。


{{% /section %}}

{{% section id="p2" %}}

## Gruntfile.js にオブジェクトを用意する

*grunt-ect* を使用し、下のサンプルコードのように *variables* に持たせておきたい文言や ID 名などなどを書きます。

書いておきたいことが沢山あるときは、別ファイルにして `require` すると管理しやすい^^

grunt-ect の導入については過去記事をご確認ください。

- [Template Engine: ECT を Grunt でコンパイルする準備](http://log.chocolateboard.net/template-engine-ect-grunt-setting/)

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
      , src: 'index.ect'
      , dest: PROJECT_PATH + '/index.html'
      , variables: { // ★ここに書く
          id:    'top'
        , title: 'Document Title'
        , links: [
            'http://example1.example'
          , 'http://example2.example'
          , 'http://example3.example'
          ]
        }
      }
    , about: {
        options: {
          root: ASSET_TEMPLATE_PATH
        }
      , src: 'about.ect'
      , dest: PROJECT_PATH + '/about/index.html'
      , variables: { // ★ここに書く
          id:    'about'
        , title: 'Document Title'
        , links: [
            { name: 'example1', url:'http://example1.example' }
          , { name: 'example2', url:'http://example2.example' }
          , { name: 'example3', url:'http://example3.example' }
          ]
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

{{% section id="p3" %}}

## Output: 用意したオブジェクトを出力する

`<%- @key %>` や `<%= @key %>` で出力します。

| Code                   |                                                     |
| :--------------------: | --------------------------------------------------- |
| <%- @key %>            | エスケープ処理をせずに出力する |
| <%= @key %>            | エスケープ処理をして出力する |

{{< figure src="/assets/images/posts/2013/09/template-engine-ect/02.png" alt="Template Engine: ECT" >}}

{{% /section %}}

{{% section id="p4" %}}

## Inheritance: 継承の仕組み

テンプレートを継承することができます。

例えば、全体の構造にあたる部分を親テンプレートとし、その中の一部のブロック部分のみを子テンプレートで上書きするといったことができます。

| Code                   |                                                     |
| :--------------------: | --------------------------------------------------- |
| <% content %>          | 親テンプレート側に書く。子テンプレートで上書きするプレースホルダになる。 |
| <% extend 'example.ect' %> | 子テンプレート側から extend で継承する親テンプレートのファイル名を指定する。 |

下図は、layout.ect を親テンプレート、index.ect を子テンプレートとして継承した例です。

親テンプレートに `<% content %>` と書いていた部分が、子テンプレートで上書きされ、それ以外は継承されます。

{{< figure src="/assets/images/posts/2013/09/template-engine-ect/03.png" alt="Template Engine: ECT" >}}

{{% /section %}}

{{% section id="p5" %}}

## Partials: 別ファイルを読み込んでみる（include）

別ファイルを読み込む時は、`include` を使います。

| Code                   |                                                     |
| :--------------------: | --------------------------------------------------- |
| <% include 'example.ect' %> | インクルードしたいファイル名を指定する |

`include` するときに、オブジェクトを渡すことも出来ます。

{{< figure src="/assets/images/posts/2013/09/template-engine-ect/04.png" alt="Template Engine: ECT" >}}

{{% /section %}}

{{% section id="p6" %}}

## Blocks: 便利なブロックの使い方

継承で使用した `<% content %>` の他に、任意の名前をつけた複数のプレースホルダを利用することができます。

| Code                   |                                                     |
| :--------------------: | --------------------------------------------------- |
| <% content 'example' %> | 親テンプレート側に書く。プレースホルダに任意の名前を指定する。 |
| <% block 'example' : %>[wbr]<% end %> | 子テンプレート側に書く。親テンプレートのプレースホルダ名を指定する。 |

{{< figure src="/assets/images/posts/2013/09/template-engine-ect/05.png" alt="Template Engine: ECT" >}}

{{% /section %}}

{{% section id="p7" %}}

## Conditions: 条件による出力の調整

CoffeeScript のシンタックスで書けば、たぶん大体動きます。

- [CoffeeScript](http://coffeescript.org/)

| Code                   |                                                     |
| :--------------------: | --------------------------------------------------- |
| <% 条件文: %>[wbr]<% else: %>[wbr]<% end %> | 条件文や else の後の `:` を忘れないこと。そして最後の `<% end %>` を忘れないこと！ |

{{< figure src="/assets/images/posts/2013/09/template-engine-ect/06.png" alt="Template Engine: ECT" >}}

{{% /section %}}

{{% section id="p8" %}}

## Loops: ループ処理について

これも条件分岐と一緒で、CoffeeScript のシンタックスで書けば動くやつです。

[Gruntfile.js にオブジェクトを用意する](#p2) で用意したオブジェクトに従えば、下記のような感じで出力できます。

### index.ect で URL をリストとして出力する

```erb
<% for link in @links : %>
  <li><%- link %></li>
<% end %>
```

### about.ect で リンク付きリストとして出力する

```erb
<% for link in @links : %>
  <li><a href="<%- link.url %>"><%- link.name %></a></li>
<% end %>
```

{{< figure src="/assets/images/posts/2013/09/template-engine-ect/07.png" alt="Template Engine: ECT" >}}

{{% /section %}}

---

他に、オリジナルの関数を用意したりできます。オリジナルの関数や、OPG の設定、各ページのタイトルなど、それぞれを管理しやすいように別ファイルに纏めて書くことが多いです。

最近は、Gruntfile 含め、CoffeeScript にしています。テンプレート用のオブジェクトが沢山ある時に、波括弧とかカンマとかない方が見やすいなあと思ってそうしています。

オブジェクトを別ファイルにする件も、`require` するお話と一緒にまとめようと思います。（そのうち）
