[📁 screenshots](index.adoc)

# スクリーンショット

| ファイル | 用途 |
|----------|------|
| `hero-main.webp` | `index.html` ヒーロー直下の製品画面（1920×1056） |
| `store-ja-02-tags.webp` | ギャラリー — タグ・メモ・案件整理（1706×993） |
| `store-ja-03-search.webp` | ギャラリー — ハイブリッド検索・Grep（1706×993） |
| `store-ja-04-terminal.webp` | ギャラリー — 運用端末（1706×993） |
| `store-ja-05-preview.webp` | ギャラリー — 仕様プレビュー（1706×993） |
| `store-ja-06-profiles.webp` | ギャラリー — プロファイル切替（1706×993） |

動画は `../video/workflow-demo-ja.mp4` を参照（静止画とは別フォルダ）。

Microsoft Store 向けの元 PNG は Partner Center にそのままアップロードし、Web 用は WebP に変換して本フォルダへ配置します。

## 再生成

1. `D:\OmniPaneWorkspace` で `Store-Capture.ope`（プロファイル: Store-02〜06）を開きキャプチャ
2. ヒーローは `Marketing-Capture.ope`（プロファイル: 紹介用）
3. PNG を WebP に変換

```powershell
python -c "from PIL import Image; Image.open('capture.png').save('store-ja-02-tags.webp', 'WEBP', quality=88)"
```

デモデータ再生成（リポジトリルート）:

```bash
dotnet run --project tools/DemoWorkspaceSetup -- "D:\OmniPaneWorkspace"
```

キャプション・撮影手順: リポジトリの `docs/store-screenshot-shot-list.md`
