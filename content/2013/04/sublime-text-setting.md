---
date:       2013-04-08
title:      'Sublime Text: 初期設定など（ST2 / ST3）'
categories: ['Coding']
tags:       ['ST2', 'ST3', 'SublimeText']
url:        '/sublime-text-setting/'
---

Sublime Text がすっかりお気に入りのエディタになりましたので、現在愛用中の設定について少しずつ書いていこうと思います。

この記事は、Sublime Text のインストールから簡単な設定まわりまでをまとめました。
愛用中のパッケージのことは別の記事として書く予定です。

また、開発環境が mac なので、mac に寄った内容となっております。ご了承ください mm

{{% notice %}}記事の内容は基本的には Sublime Text 2 の設定についてまとめています。Sublime Text 3 のベータ版も配布されていますので、違いのある設定については分かる範囲で触れています。{{% /notice %}}

---

## Index

- [ダウンロードとインストール](#p1)（ST2 / ST3）
- [Package Control のインストール](#p2)（ST2 / ST3）
- [Theme と Color Scheme](#p3)
- [User Setting](#p4)
- [Dropbox を介した設定の同期](#p5)（ST2 / ST3）

---

{{% section id="p1" %}}
## ダウンロードとインストール

### Sublime Text 2 のダウンロード

Sublime Text のサイトからアプリをダウンロードしてインストールします。

- [Sublime Text 2 Download](http://www.sublimetext.com/2)

### Sublime Text 3 のダウンロード

Bata 版が公開されています。Sublime Text 2 のライセンスを購入した人は Bata 版が使えるはず。

- [Sublime Text 3 Download](http://www.sublimetext.com/3)
{{% /section %}}

{{% section id="p2" %}}
## Package Control のインストール

### Sublime Text 2 の場合

*ctrl + `* または *View -> Show Console* でコンソールを表示し、そこへ下記コードペーストして Enter キーを押します。

```shell
import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print('Please restart Sublime Text to finish installation')
```

再起動を促すアラートが出るので、Sublime Text を再起動します。これで Package Control のインストールは完了です。マニュアルインストールする場合は下記リンクから。

- [Manual Instructions: Installation – Sublime Package Control](http://wbond.net/sublime_packages/package_control/installation#Manual_Instructions)

### Sublime Text 3 の場合

Package Control も Sublime Text 3 対応版を用意してくれています。
Sublime Text 3 では、デフォルトの `.sublime-package` が展開されないらしく、いまのところは Git でインストールするみたい。

- [Sublime Text 3: Installation – Sublime Package Control](http://wbond.net/sublime_packages/package_control/installation#ST3)

```shell
$ cd ~/Library/Application\ Support/Sublime\ Text\ 3/
$ git clone https://github.com/wbond/sublime_package_control.git "Package Control"
$ cd "Package Control"
$ git checkout python3
```

バグ報告などなどは下記の issues へ。

- [wbond / sublime_package_control](https://github.com/wbond/sublime_package_control/issues?sort=created&state=open)

### Package Control の使いかた

Package Control をインストールすることで、Command Pallet から手軽に便利なパッケージをインストール出来るようになります。

Command Pallet は *cmd + shift + p* 、または *Tools -> Command Pallet* で表示できます。
install と入力すると **Package Control: Install Package** が表示されるので、Enter キーを押して決定します。

{{< figure src="/assets/images/posts/2013/04/sublime-text-setting/01.png" >}}

この状態で目的のパッケージ名を入力すると、該当パッケージ名を自動補完・抽出して表示してくれます。
希望のパッケージを選択後に Enter キーを押して決定するとインストールが開始されます。

{{< figure src="/assets/images/posts/2013/04/sublime-text-setting/02.png" >}}

{{% /section %}}

{{% section id="p3" %}}
## Theme と Color Scheme

### Theme

Theme は Packaeg Control からインストールできる「Theme-Soda」を使用中です。

- [Soda Theme](https://github.com/buymeasoda/soda-theme/)

{{% notice %}}Theme を適用することで、サイドバーの色や各種アイコンなどを変えることができます。{{% /notice %}}

### Color Scheme

Color Scheme は、*Preferences -> Color Scheme* から選択できるようになっています。
元々用意されている Color Scheme でも十分な種類がありますが、更に、好きな Color Scheme を追加することも可能です。

#### Color Scheme の追加の仕方

`~/Library/Application Support/Sublime Text 2/Packages Packages` に移動すると『Color Scheme – Default』『Color Scheme – User』というディレクトリがあるので、そのなかに追加すると使用できます。他の名前のディレクトリを追加しても OK です。

{{< figure src="/assets/images/posts/2013/04/sublime-text-setting/03.png" >}}

新しく作ったディレクトリに Color Scheme を追加するとメニューにも追加されます。

{{< figure src="/assets/images/posts/2013/04/sublime-text-setting/04.png" >}}

SublimeText には TextMate のカラースキームがそのまま使用出来るので、探すと沢山あります^^

#### Color Scheme がダウンロード出来るところ

- [Themes / UserSubmittedThemes browse — TextMate Wiki](http://wiki.macromates.com/Themes/UserSubmittedThemes)
- [TextMate Theme](http://textmatetheme.com/)
{{% /section %}}

{{% section id="p4" %}}
## User Setting

*cmd + ,* でユーザー設定ファイルを開きます。
*Preferences -> Settings - User* から開くこともできますので、どちらの方法でも良いです。

このファイルには、**Preferences -> Settings - Default** に書かれている設定内容に対して、上書きしたい設定を記述するようにしています。

```javascript
{
  // Color Scheme ファイルの指定
  "color_scheme": "Packages/Color Scheme - Original/Lara Honya Night.tmTheme",
  // テーマファイルの設定
  "theme": "Soda Dark.sublime-theme",
  "soda_classic_tabs": true,
  // 改行コードの指定
  "default_line_ending": "windows",
  // フォントフェイスの指定
  "font_face": "Ricty Discord Regular",
  // フォントサイズの指定
  "font_size": 14,
  // 停止したいパッケージ
  "ignored_packages":
  [
    "Vintage",
    "LiveReload"
  ],
  // ルーラーの表示と位置（カンマ区切りで複数指定可）
  "rulers": [80],
  // 空白サイズ
  "tab_size": 2,
  // タブをスペースに変換
  "translate_tabs_to_spaces": true,
  // 行末の空白を保存時に削除
  "trim_trailing_white_space_on_save": true,
  // コードをカラム幅で折り返さない
  "word_wrap": false
}
```
{{% /section %}}

{{% section id="p5" %}}
## Dropbox を介した設定の同期

複数台の mac で環境を同じにしたい場合にオススメの設定です。

### Sublime Text 2 の設定

以前もう一つのブログで記事にしましたのでリンクを置いておきます。

- [Sublime Text 2: Dropboxを介して設定を同期する](http://backyard.chocolateboard.net/201210/sublime-text-2-dropbox)

### Sublime Text 3 の設定

#### 1. ~/Library/Application Support/Sublime Text 3 に移動する

Finder で *cmd + shift + G* を押して `~/Library/Application Support/Sublime Text 3` に移動します。

#### 2. 同期するフォルダを DropBox に移動する

同期するフォルダは下記の3つです。

- Cache
- Installed Packages
- Packages

上記の3つのディレクトリを Dropbox に移動したら、`~/Library/Application Support/Sublime Text 3` の中の3つのディレクトリを削除またはリネームします。

#### 3. シンボリックリンクを貼る

まず、ターミナルで下記を実行して `~/Library/Application Support/Sublime Text 3` へ移動します。

```shell
$ cd ~/Library/Application\ Support/Sublime\ Text\ 3
```

次に、ターミナルで下記を実行して **Dropbox に移動させた本来ここにあるべき設定ファイルたち** へシンボリックリンクを張ります。

下記は `~/Dropbox/Apps/SublimeText3/` に設定ファイルを移動した例です。

```shell
$ ln -s ~/Dropbox/Apps/SublimeText3/Cache ./Cache
$ ln -s ~/Dropbox/Apps/SublimeText3/Installed\ Packages ./Installed\ Packages
$ ln -s ~/Dropbox/Apps/SublimeText3/Packages ./Packages
```
{{% /section %}}
