[📁 docs](index.adoc)

# Microsoft Clarity（OmniPane）

公式サイトの閲覧分析に [Microsoft Clarity](https://clarity.microsoft.com/) を使います。

## セットアップ（初回）

1. https://clarity.microsoft.com/ にサインイン（Microsoft アカウント）
2. **新しいプロジェクト** → サイト URL: `https://omni-series.github.io/omnipane/`
3. 発行された **Project ID**（英数字）をコピー
4. 各 HTML の `<head>` に Microsoft 公式インラインタグを埋め込み済み（Project ID: `xk08syw62q`）
   - **外部 `clarity.js` だけでは Clarity のセットアップ検出に失敗することがあります**
5. `omnipane` を commit & push → 公開サイトを開いて「開始」で検証

## 計測対象ページ

- `index.html`
- `editions.html`
- `support.html`
- `privacy.html`

`projectId` が空のときはスクリプトは読み込まれません（ローカル `file://` プレビュー用）。

## プロジェクト URL（Clarity 設定）

**設定 → セットアップ** のサイト URL は次と完全一致させてください:

`https://omni-series.github.io/omnipane/`

ルートドメインのみ（`/omnipane/` なし）だと検出・計測が遅れることがあります。

## プライバシー

`privacy.html` に Clarity の利用を記載済み。Project ID を有効化して push する前に内容を確認してください。

## 参考

- [Clarity セットアップ](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup)
- [Microsoft プライバシー声明](https://privacy.microsoft.com/privacystatement)
