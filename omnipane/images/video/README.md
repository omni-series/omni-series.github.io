[📁 video](index.adoc)

# 紹介動画

| ファイル | 用途 |
|----------|------|
| `workflow-demo-ja.mp4` | 専用再生ページ `demo.html`（Search Console 向け動画再生ページ）／トップ `index.html` にも埋め込み |

- **poster**: `../screenshots/store-ja-05-preview.webp`（読み込み前のサムネイル）
- 英語版を追加する場合: `workflow-demo-en.mp4`（将来）

## 撮影元

`D:\OmniPaneWorkspace` の `Video-Capture.ope`（プロファイル: 撮影前-Alpha → 動画デモ）  
手順: `Video-Capture-Guide.txt`

## 公開前の確認

- 目安: **1〜5 MB**（62 秒・1280px・音声なし）。元が 50 MB 超なら再エンコード推奨
- `controls` + `preload="metadata"` — 自動再生なし（帯域・アクセシビリティ配慮）

## H.264 再エンコード（ffmpeg）

```powershell
# ffmpeg 未導入時: winget install Gyan.FFmpeg

ffmpeg -i workflow-demo-ja.source.mp4 `
  -an `
  -c:v libx264 -crf 22 -preset slow `
  -pix_fmt yuv420p -movflags +faststart `
  -vf "scale=1280:-2" `
  workflow-demo-ja.mp4
```

| オプション | 意味 |
|------------|------|
| `-an` | 音声なし（サイトはミュート想定） |
| `-crf 22` | 画質（18=高画質・大きい、28=小さい） |
| `-preset slow` | 圧縮効率優先（エンコードはやや遅い） |
| `-movflags +faststart` | Web 再生向けにメタデータを先頭へ |
| `-vf scale=1280:-2` | 幅 1280px に縮小（高さは比率維持） |

画質を上げる: `-crf 18` / さらに軽く: `-crf 26`
