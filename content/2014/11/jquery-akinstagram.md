---
date:       2014-11-14
title:      'JavaScript: Instagram API を使って自分の写真を取得・表示する jQuery プラグイン'
categories: ['Coding']
tags:       ['Instagram', 'JavaScript', 'jQuery', 'Plugins']
url:        '/jquery-akinstagram/'
eyecatch:   '/assets/images/posts/2014/11/jquery-akinstagram/eyecatch.png'
eyecatchCap:     'Instagram'
eyecatchCapLink: 'https://instagram.com/'
---

JavaScript お勉強メモ。jQuery のプラグイン化してみるお勉強の記録その3です（目標達成まであと7つ）。

---

## Index

- [jquery.akInstagram の Demo](#p1)
- [jquery.akInstagram のこと](#p2)
- [jquery.akInstagram の Options](#p3)

---

{{% section id="p1" %}}

## jquery.akInstagram の Demo

{{< codepen slug="GgRRqd" height="400" >}}

{{% /section %}}

{{% section id="p2" %}}

## jquery.akInstagram のこと

### リポジトリ

- [urakey/jquery.akInstagram](https://github.com/urakey/jquery.akInstagram)

指定したセレクタ内に自分の Instagram の写真を出力するプラグインです。

### Instagram で アクセストークンを取得する

#### 1. Instagram で Developer 登録をする

- [http://instagram.com/developer/](http://instagram.com/developer/)

普段使用している Instagram アカウントでログインしてください。

上記 URL にアクセス後、[ Register Your Application ] ボタンをクリックします。Developer 登録をしていない人はこの後 [ Developer Signup ] 画面に移動しますので、そこで開発者登録をします。

![JavaScript: Instagram](/assets/images/posts/2014/11/jquery-akinstagram/01.png)

#### 2. アプリケーションの登録

![JavaScript: Instagram](/assets/images/posts/2014/11/jquery-akinstagram/02.png)

[ Register a New Client（新しいアプリを登録） ] ボタンをクリックし、アプリケーション登録をしていきます。ウェブ上で利用する場合は、自分のサイト情報を入力していけば良いと思います。

![JavaScript: Instagram](/assets/images/posts/2014/11/jquery-akinstagram/03.png)

- Applictaiton Name - アプリケーションの名前（適当で OK）
- Dscription - 説明など
- Website - サイトの URL
- OAuth redirect_uri - アクセストークンの取得時にリダイレクトされるURL（適当でも OK ぽい）
- Disable implicit OAuth - チェックを入れたまま
- Enforce signed header - チェックが入っていないまま

[ OAuth redirect_uri ] は、あとで行うアクセストークンの取得時にリダイレクトされるURLになります。

#### 3. アクセストークンの取得

アプリケーションを作ったので、`CLIENT-ID` と `REDIRECT-URI` を使用して下記にアクセスします。

```
https://instagram.com/oauth/authorize/?client_id=【CLIENT-ID】&redirect_uri=【REDIRECT-URI】&response_type=token`</pre>
```

認証すると下記のようなURLがかえってきます。

```
【OAuth redirect_uri に指定したURL】#access_token=【ACCESS-TOKEN】
```

この【ACCESS-TOKEN】の部分が自身のアクセストークンになります。

うまくいかない場合は、Disable implicit OAuth のチェックを一時的に外すとよいです。

### プラグインの使い方

アクセストークンを使ってデータを取得する処理はサーバサイドで行って、その URL を指定できるような仕様にしました。

```javascript
$('#novels').akInstagram({
  request_url: YOUR_REQUEST_URL // データを取得する処理をしてくれるファイルの URL を指定
});
```

サーバサイドでなんちゃらを「やりたくない」とか「できない」といった場合に、リクエスト URL の代わりにアクセストークンを指定することもできるようにしています。

```javascript
$('#novels').akInstagram({
  access_token: YOUR_ACCESS_TOKEN // 自身のアクセストークンを指定
});
```

アクセストークンを直接指定する場合は、JS ファイルに直接アクセストークンを記述することになってしまうので、他人に知られることになります。許容できる人は使ってください。

アクセストークンが知られるリスクについて &amp; アクセストークンを使ってデータを取得する処理は下記を参考にさせていただきました ;D

- [アクセストークンが知られるリスク](http://syncer.jp/instagram-api-matome#content-12-1)

{{% /section %}}

{{% section id="p3" %}}

## jquery.akInstagram の Options

オプションは [ここ](https://github.com/urakey/jquery.akInstagram/blob/master/README.md#options) にまとまっています。

{{% /section %}}

---

Booklog プラグイン同様 DOM 自体自由に出せたらいいのに・・・問題、どうやって実現するかの手法は決めました。本当に必要だろうか？と考え中ですが、お勉強のため、出力時の自由度アップの仕組みをうまいことやる！つもりです。
