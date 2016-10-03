---
date:       2015-03-17
title:      'Middleman に移行して Feed の URL を変更しました'
categories: ['Coding']
tags:       ['Middleman', 'RSS', 'GitHub']
url:        '/middleman-feed-url/'
eyecatch:   '/assets/images/posts/2015/03/middleman-feed-url/eyecatch.png'
---

Middleman 引っ越し done !! なのだけど、Feed の URL が WordPress の時と変わってしまった。
`http://chocolateboard.net/feed/` だったものが `http://chocolateboard.net/feed.rss` に、
`http://chocolateboard.net/feed/atom/` だったものが `http://chocolateboard.net/feed.atom` なっています。

GitHub Pages 上で、WordPress のときと同じスラッシュ終わりの URL にする方法がわからず（あるのかな？）URL 変更することに。

{{% notice %}}Middleman 拡張すればできるかも？？わかんないけど！[にのくん](https://twitter.com/wakuworks) ありがとう★{{% /notice %}}

GitHub Pages では、拡張子なしの feed は `application/octet-stream` で配信されるみたい。
拡張子なしも試してみましたが、元の URL と同じにできないのだから、
いっそ `feed.rss` とか `feed.atom` とかにして適切な Content-Type が返るようにしようかな。。って思って変えてみました。

ずっと GitHub Pages に置いておくかわからないのと、将来的に拡張子でぶれそうな気もしてもやもやしていましたが、これでいきます。

登録してくださっているかたは、お手数ですが再登録おねがいします mm

## 参考にさせていただいた記事 thx XD

- [GitHub PagesとContent-Typeヘッダー](http://hail2u.net/blog/internet/github-pages-and-content-type-header.html)
- [ruby Middleman GitHubのwebhooks経由でのPubSubHubbubによるフィードの更新通知](http://hail2u.net/blog/internet/publishing-feed-via-pubsubhubbbub-using-github-webhooks.html)
