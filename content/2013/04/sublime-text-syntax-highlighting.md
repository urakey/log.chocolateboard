---
date:       2013-04-18
title:      'Sublime Text: 特定の拡張子とシンタックスハイライトを紐付ける'
categories: ['Coding']
tags:       ['ST2', 'SublimeText']
url:        '/sublime-text-syntax-highlighting/'
---

Sunblime Text でファイルを開いたときに、拡張子に合わせてデフォルトで適用するシンタックスハイライトを設定する方法。

特定の拡張子のついたファイルを開いている状態で *View -> Syntax -> Open all with current extension as …* から適用したい Syntax を選択するだけです。

## この設定はどこに記述されるのか？

*Preferences -> Setting – More -> Syntax Specific – Default* から設定ファイルが開けます。下記のように拡張子が追加されているはず。

```javascript
{
  "extensions":
  [
    "ect"
  ]
}
```

この設定ファイルは、Syntax 毎に作られ、下記に保存されるようです。

```
/Sublime Text 2/Packages/User/hogehoge.sublime-settings
```

hogehoge のところに Syntax の名前が入ったファイル名で保存されています。
