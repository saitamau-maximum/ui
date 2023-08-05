# Maximum UI

## Usage

FontをHeadで読み込んでください、推奨は`Noto Sans JP`です。

```html
<head>
    <!-- ... -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- ... -->
</head>
```

`.light`または`.dark`を追加することで、テーマを切り替えることができます。
切り替えたい一番上の要素に追加してください。
`fouc`を防ぐために、`<body>`がレンダリングされる前の｀<html>`に追加することを推奨します。

```html
<html class="light">
    <!-- ライトモードの場合 -->
</html>

<html class="dark">
    <!-- ダークモードの場合 -->
</html>
```

Package のインストールをするには、 `~/.npmrc` に以下を追加してください。

```npmrc
@saitamau-maximum:registry=https://npm.pkg.github.com
```
