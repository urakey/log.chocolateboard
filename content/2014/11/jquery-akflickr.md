---
date:       2014-11-30
title:      'JavaScript: Flickr API を使って写真を取得・表示する jQuery プラグイン'
categories: ['Coding']
tags:       ['Flickr', 'JavaScript', 'jQuery', 'Plugins']
url:        '/jquery-akflickr/'
eyecatch:   '/assets/images/posts/2014/11/jquery-akflickr/eyecatch.jpg'
eyecatchCap:     'Flickr'
eyecatchCapLink: 'https://www.flickr.com/'
---

JavaScript お勉強メモ。jQuery のプラグイン化してみるお勉強の記録その4です（目標達成まであと6つ）。

---

## Index

*   [jquery.akFlickr の Demo](#p1)
*   [jquery.akFlickr のこと](#p2)
*   [jquery.akFlickr の Options](#p3)

---

{{% section id="p1" %}}

## jquery.akFlickr の Demo

{{< codepen slug="jEOXYM" height="400" >}}

{{% /section %}}

{{% section id="p2" %}}

## jquery.akFlickr のこと

### リポジトリ

- [urakey/jquery.akFlickr](https://github.com/urakey/jquery.akFlickr)

指定したセレクタ内に Flickr の写真を検索して表示するプラグインです。

### Flickr API Key を取得する

#### 1. The App Garden からアプリケーションを作成

- [The App Garden](https://www.flickr.com/services/apps/create/)

普段使用している Flickr アカウントでログインしてください。

上記 URL にアクセス後、［Get your API Key］の［Request an API Key］から取得画面へ進みます。

{{< figure src="/assets/images/posts/2014/11/jquery-akflickr/01.png" alt="JavaScript: Flickr" >}}

#### 2. 商用 / 非商用を選択

非商用利用の場合は［APPLY FOR A NON-COMMERCIAL KEY］を選択します。商用利用の場合は［APPLY FOR A COMMERCIAL KEY］を選択します。その場合審査が必要なようです。

{{< figure src="/assets/images/posts/2014/11/jquery-akflickr/02.png" alt="JavaScript: Flickr" >}}

#### 3. アプリケーションの登録

アプリケーションの名前と説明を入力し、規約に同意して［ SUBMIT ］ボタンをクリックすれば取得完了です。

{{< figure src="/assets/images/posts/2014/11/jquery-akflickr/03.png" alt="JavaScript: Flickr" >}}

アプリケーション名や、説明は適当で大丈夫です。あとで編集できます。

### プラグインの使い方

Flickr API Key と `user_id` `text` `tags` の 3 のうち最低 1 つの検索条件を指定してください。

#### 特定のユーザーの写真を取得する

特定のユーザーの写真を検索したい場合には、`searchOptions.user_id` にユーザー ID を指定します。（こういうやつ → 00000000@N00）

```javascript
$('#flickrPhotos').akFlickr({
  api_key: YOUR_API_KEY,
  searchOptions: {
    user_id : '00000000@N00'
  }
});
```

プロフィール用の画像名を調べるとわかります。[idgettr](http://idgettr.com/) という便利なサービスもあります ;D

#### フリーワードで検索した写真を取得する

フリーワードで全文検索したい場合は `searchOptions.text` にキーワードを指定します。

```javascript
$('#flickrPhotos').akFlickr({
  api_key: YOUR_API_KEY,
  searchOptions: {
    text : 'kawaii'
  }
});
```

#### タグで絞り込んだ写真を取得する

タグで絞り込みたい場合は `searchOptions.tags` にタグを指定します。複数指定はカンマ区切りで。

```javascript
$('#flickrPhotos').akFlickr({
  api_key: YOUR_API_KEY,
  searchOptions: {
    tags : 'cake,square'
  }
});
```

{{% /section %}}

{{% section id="p3" %}}

## jquery.akFlickr の Options

オプションは [ここ](https://github.com/urakey/jquery.akFlickr/blob/master/README.md#options) にまとまっています。

{{% /section %}}

---

Flickr の API はいろんなのが用意されているのでなんか作れそう。

このプラグインは `flickr.photo.search` のみ使用して、シンプルな検索・取得・表示に絞って作ってみました。それも全部使い切ったわけでないです。。

jQuery のプラグイン化してみるお勉強の記録残り6個。。。何にしよお。

---

↓参考にさせていただいた記事など

- [Flickr Services: Flickr API: flickr.photos.search](https://www.flickr.com/services/api/flickr.photos.search.html)
- [第2回　JavaScriptからFlickr APIで画像検索](http://itpro.nikkeibp.co.jp/article/COLUMN/20061101/252356/)
- [node.jsでFlickr API - 夜から朝にかけて](http://t-kashima.hateblo.jp/entry/2012/01/16/021131)
