[📁 docs](index.adoc)

# Google Analytics（OmniPane）

公式サイトのアクセス分析に [Google Analytics](https://analytics.google.com/)（gtag.js）を使います。

## 計測 ID

`G-HSK1G1RRB9`

## 埋め込み済みページ

各 HTML の `<head>`（Clarity タグの直後）に公式 gtag を配置しています。

- `index.html`
- `editions.html`
- `support.html`
- `privacy.html`

## 確認手順

1. 変更を commit & push → GitHub Pages 反映を待つ
2. 公開サイトを開く: `https://omni-series.github.io/omnipane/`
3. Google Analytics のリアルタイムレポート、またはブラウザ開発者ツールの Network で `google-analytics.com` / `googletagmanager.com` への送信を確認

## プライバシー

`privacy.html` および `assets/i18n.js` に Google Analytics の利用を記載済みです。

## 関連

- [Microsoft Clarity](analytics-clarity.md)
- [Google Analytics タグの設定](https://support.google.com/analytics/answer/9304153)
