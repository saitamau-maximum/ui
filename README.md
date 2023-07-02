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

`body`タグに`.light`または`.dark`を追加することで、テーマを切り替えることができます。

```html
<body class="light">
    <!-- ライトモードの場合 -->
</body>

<body class="dark">
    <!-- ダークモードの場合 -->
</body>
```
