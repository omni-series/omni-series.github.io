"""Inject Japanese fallback text into data-i18n elements in public HTML."""
from __future__ import annotations

import re
from pathlib import Path

PUBLIC = Path(__file__).resolve().parents[1]

# Keep in sync with assets/i18n.js T.ja
JA: dict[str, str] = {
    "meta.index.title": "OmniPane Explorer - 次世代のマルチペイン・ファイルマネージャー",
    "meta.editions.title": "エディション - OmniPane Explorer",
    "meta.editions.description": "OmniPane Explorer の Community / Standard / Professional エディション比較",
    "meta.privacy.title": "プライバシーポリシー - OmniPane Explorer",
    "meta.support.title": "サポート - OmniPane Explorer",
    "meta.support.description": "OmniPane Explorer の不具合報告・お問い合わせ（GitHub Issues）",
    "nav.features": "特徴",
    "nav.editions": "エディション",
    "nav.support": "サポート",
    "nav.get": "無料で入手",
    "footer.tagline": "Created with Passion for Productivity.",
    "footer.editions": "エディション",
    "footer.privacy": "プライバシーポリシー",
    "footer.issues": "不具合報告 (GitHub)",
    "footer.support": "サポート",
    "footer.home": "トップページ",
    "privacy.back": "← トップページへ戻る",
    "privacy.title": "プライバシーポリシー",
    "privacy.updated": "最終更新日：2026年7月10日",
    "privacy.intro": "OmniPane Explorer Project（以下「当プロジェクト」）は、提供するアプリケーション「OmniPane Explorer」（以下「本アプリ」）および公式ウェブサイト（以下「本サイト」）における、ユーザー情報の取扱いについて、以下の通り定めます。",
    "privacy.s1.title": "1. 取得する情報および利用目的",
    "privacy.s1.app.title": "本アプリ",
    "privacy.s1.app.lead": "本アプリは、ユーザーのプライバシーを最優先に設計されています。",
    "privacy.s1.app.li1": "<strong>個人情報の非収集:</strong> 氏名、住所、メールアドレスなどの個人情報を直接取得することはありません。",
    "privacy.s1.app.li2": "<strong>ローカル処理の原則:</strong> タグや設定などのデータは、すべてローカルデバイス上に保存されます。当プロジェクトのサーバーへ送信は行われません。",
    "privacy.s1.app.li3": "<strong>統計情報の利用:</strong> Microsoft Store経由の匿名統計（ダウンロード数等）を品質向上目的でのみ確認する場合があります。",
    "privacy.s1.web.title": "本サイト（紹介ページ）",
    "privacy.s1.web.lead": "本サイトでは、閲覧状況の把握とページ改善のため、Microsoft Corporation が提供する分析サービス「Microsoft Clarity」を利用する場合があります。",
    "privacy.s1.web.li1": "<strong>取得される情報の例:</strong> ページ URL、参照元、端末・ブラウザの種類、クリックやスクロールなどの操作、セッション記録（Clarity の設定に依存）。本アプリ内のファイル内容やタグ・メモは送信されません。",
    "privacy.s1.web.li2": "<strong>利用目的:</strong> 本サイトの表示・導線の改善（例: ダウンロードボタンの見つけやすさ、動画セクションの視認性）。",
    "privacy.s1.web.li3": "<strong>送信先:</strong> Microsoft Clarity。取扱いの詳細は <a href=\"https://privacy.microsoft.com/privacystatement\" class=\"text-blue-600 hover:underline\" rel=\"noopener noreferrer\" target=\"_blank\">Microsoft のプライバシー声明</a> をご確認ください。",
    "privacy.s2.title": "2. 第三者提供",
    "privacy.s2.body": "本アプリについて、当プロジェクトが個人情報を第三者へ販売・提供することはありません。本サイトの分析のため、上記のとおり Microsoft Clarity に閲覧に関する情報が送信される場合があります。",
    "privacy.s3.title": "3. お問い合わせ",
    "privacy.s3.body": "不具合報告やお問い合わせは、GitHubのIssueにて受け付けております。",
    "privacy.s3.link": "サポートページ",
    "support.kicker": "Support",
    "support.hero.title": "サポート",
    "support.hero.sub": "不具合の報告、機能のご要望、製品サイトに関するお問い合わせは GitHub Issues で受け付けています。",
    "support.cta.lead": "公開中の Issue 一覧を確認するか、新しい Issue を作成してください。GitHub アカウントが必要です。",
    "support.cta.button": "GitHub Issues を開く",
    "support.cta.repo": "リポジトリ: omni-series / omni-series.github.io",
    "support.report.title": "報告の際にお書き添えいただきたい情報",
    "support.report.li1": "OmniPane Explorer のバージョン（アプリ内のバージョン情報）",
    "support.report.li2": "Windows のバージョン（例: Windows 11 24H2）",
    "support.report.li3": "問題が起きる操作の手順（再現手順）",
    "support.report.li4": "期待した動作と、実際に起きた動作",
    "support.report.li5": "可能であればスクリーンショットやエラーメッセージの全文",
    "support.note.title": "その他",
    "support.note.body": '個人情報の取扱いについては <a href="privacy.html" class="text-blue-600 hover:underline">プライバシーポリシー</a> をご確認ください。ライセンスやエディションの違いは <a href="editions.html" class="text-blue-600 hover:underline">エディション</a> ページをご覧ください。',
    "index.hero.title": "ファイル操作を、<br>もっとスマートに。",
    "index.hero.sub": "OmniPane Explorerは、最大4分割のマルチペインと強力なメタデータ管理を備えた、プロフェッショナルのためのWindowsファイルマネージャーです。",
    "index.store.line1": "Microsoft Store で",
    "index.store.line2": "ダウンロード",
    "index.features.title": "なぜ OmniPane Explorer なのか？",
    "index.features.sub": "標準のエクスプローラーでは満足できないあなたのための、特別な機能。",
    "index.f1.title": "最大4分割のマルチペイン",
    "index.f1.body": "フォルダ間のファイル移動や比較が劇的に効率化。タブ機能も完備し、作業空間を自由自在にレイアウト可能。",
    "index.f2.title": "強力なメタデータ管理",
    "index.f2.body": "ファイル名に頼らない管理を。独自のタグ、5段階評価、進捗管理など、SQLiteベースの高速検索を提供。",
    "index.f3.title": "セーフティ・ロック",
    "index.f3.body": "重要なファイルの「削除禁止」設定。整理作業中のうっかりミスを物理的に防ぎ、安心感を提供します。",
    "index.screenshot.heading": "製品画面",
    "index.screenshot.caption": "タグ・検索・ターミナル・Web を4ペインで一度に",
    "index.screenshot.alt": "OmniPane Explorer の4ペイン画面。タグ・評価付き一覧、ハイブリッド検索、ターミナル、ブラウザタブを同時表示",
    "index.gallery.title": "画面の詳細",
    "index.gallery.sub": "受託開発・社内保守の現場で使う場面を想定したスクリーンショットです。",
    "index.gallery.02.caption": "タグ・メモ・評価・ワークフローで案件を整理",
    "index.gallery.02.alt": "タグ・メモ・評価・ワークフロー列付きのファイル一覧",
    "index.gallery.03.caption": "タグ検索とログ Grep で横断的に探す",
    "index.gallery.03.alt": "ハイブリッド検索とログ Grep の結果表示",
    "index.gallery.04.caption": "エクスプローラーとコマンドプロンプトを並べて作業",
    "index.gallery.04.alt": "フォルダ一覧とコマンドプロンプトを並べた画面",
    "index.gallery.05.caption": "Markdown を同画面でプレビュー",
    "index.gallery.05.alt": "Markdown 仕様書のプレビューとソースを同画面に表示",
    "index.gallery.06.caption": "プロファイルで案件ごとのレイアウトを保存・切替",
    "index.gallery.06.alt": "プロファイル切替で案件 Alpha と Beta のレイアウトを切り替える画面",
    "index.demo.title": "作業の流れ",
    "index.demo.sub": "プロファイルで案件を切り替え、フォルダ配下を検索し、見つけた仕様書を MD・HTML・PDF でその場確認。",
    "index.demo.caption": "受託開発・社内保守の現場を想定したショートデモ（音声なし）",
    "editions.kicker": "Editions",
    "editions.hero.title": '用途に合わせて選べる<br class="hidden sm:inline">3つのエディション',
    "editions.hero.sub": "無料の Community から始め、作業規模が大きくなるほど Standard・Professional でマルチペインとメタデータ管理をフル活用できます。",
    "editions.official": "<strong>Microsoft Store 正式版:</strong> Community は無料でご利用いただけます。Standard / Professional は Store 内アドオン（月払い・年払い）で購入できます。最新の価格表示は Store の商品ページをご確認ください。",
    "editions.community.tag": "Community",
    "editions.community.price": "無料",
    "editions.community.desc": "大規模フォルダも軽快に扱える、高機能ファイラーの入口。",
    "editions.community.c1": "高速一覧（仮想リスト・非同期スキャン）",
    "editions.community.c2": "基本ファイル操作・D&D・UNC 対応",
    "editions.community.c3": "名前・ワイルドカード・正規表現フィルタ",
    "editions.community.c4": ".ope による基本状態の保存",
    "editions.community.c5": "レイアウトは最大 2 ペイン相当",
    "editions.community.cta": "無料で入手",
    "editions.standard.badge": "おすすめ",
    "editions.standard.tag": "Standard",
    "editions.standard.price": "サブスクリプション",
    "editions.standard.rate": "月額 980 円 / 年額 9,800 円（税別・目安）",
    "editions.standard.desc": "4 ペインと統合タブで、開く・探す・並べるを 1 画面に。",
    "editions.standard.c1": "Community のすべて",
    "editions.standard.c2": "<strong>最大 4 分割</strong>・12 種レイアウト",
    "editions.standard.c3": "複数プロファイル・配下検索",
    "editions.standard.c4": "ランチャー・保存済みペイン",
    "editions.standard.c5": "ターミナル / Web / エディタタブ",
    "editions.standard.c6": "タグ・評価・ワークフロー・PathFollow",
    "editions.standard.c7": "一括置換（通常）・プロファイル複製",
    "editions.standard.cta": "Store で確認",
    "editions.pro.tag": "Professional",
    "editions.pro.price": "サブスクリプション",
    "editions.pro.rate": "月額 1,850 円 / 年額 18,500 円（税別）",
    "editions.pro.desc": "作業環境を資産として残す、業務・上級者向け。",
    "editions.pro.c1": "Standard のすべて",
    "editions.pro.c2": "一括置換（<strong>正規表現</strong>）",
    "editions.pro.c3": "SharePoint 連携（実装予定）",
    "editions.pro.c4": "削除禁止・表示除外など高度な保護",
    "editions.pro.cta": "Store で確認",
    "editions.table.title": "機能比較（抜粋）",
    "editions.table.sub": "主要な差分のみ掲載しています。詳細はアプリ内ヘルプおよび今後の正式ドキュメントをご参照ください。",
    "editions.table.feature": "機能",
    "editions.table.r1": "マルチペイン（最大 4 分割・全レイアウト）",
    "editions.table.r1c": "2 ペイン相当",
    "editions.table.r2": "複数プロファイル・自動保存",
    "editions.table.r3": "配下検索（再帰）",
    "editions.table.r4": "タグ・評価・ワークフロー・メモ",
    "editions.table.r5": "統合タブ（cmd / PS / WebView2 / エディタ）",
    "editions.table.r6": "ランチャー・保存済みペイン",
    "editions.table.r7": "PathFollow（リネーム・移動の参照追従）",
    "editions.table.r8": "一括置換（通常文字列）",
    "editions.table.r9": "一括置換（正規表現）",
    "editions.table.r10": "プロファイル複製ウィザード",
    "editions.table.r11": "SharePoint 連携（実装予定）",
    "editions.table.planned": "予定",
    "editions.faq.title": "よくある質問",
    "editions.faq.q1": "Community から有料版へはどうやって移行しますか？",
    "editions.faq.a1": 'Microsoft Store から Standard または Professional のサブスクリプションを購入すると、アプリ内のライセンスが有効化されます（実装・販売開始時点の手順に準拠）。既存の .ope やローカルデータは端末に残ります。',
    "editions.faq.q2": "データはクラウドに送信されますか？",
    "editions.faq.a2": 'タグ・メモ・設定などは端末内（およびご指定の .ope）に保存されます。個人情報の収集方針は <a href="privacy.html" class="text-blue-600 hover:underline">プライバシーポリシー</a> をご確認ください。',
    "editions.faq.q3": "価格はいつ確定しますか？",
    "editions.faq.a3": "本ページの価格帯は社内検討用のレンジです。地域・税制・Store のポリシーに合わせて、販売開始時に Microsoft Store 上の表示が正式価格となります。",
}

PAGE_META = {
    "index.html": ("meta.index.title", None),
    "editions.html": ("meta.editions.title", "meta.editions.description"),
    "privacy.html": ("meta.privacy.title", None),
    "support.html": ("meta.support.title", "meta.support.description"),
}


def inject_attr(html: str, attr: str, key: str, value: str) -> str:
    if attr != "data-i18n-alt":
        return html
    esc = value.replace('"', "&quot;")
    pattern = rf'(<img\b[^>]*\sdata-i18n-alt="{re.escape(key)}"[^>]*)(>)'

    def repl(match: re.Match[str]) -> str:
        tag = match.group(1)
        tag = re.sub(r'\s+alt="[^"]*"', "", tag)
        if ' alt="' not in tag:
            tag = tag.replace(f'data-i18n-alt="{key}"', f'alt="{esc}" data-i18n-alt="{key}"', 1)
        return tag + match.group(2)

    return re.sub(pattern, repl, html, count=1)


def inject_content(html: str, attr: str, key: str, value: str) -> str:
    pattern = rf'(<[a-zA-Z0-9]+[^>]*\s{attr}="{re.escape(key)}"[^>]*>)\s*(</[a-zA-Z0-9]+>)'

    def repl(match: re.Match[str]) -> str:
        return match.group(1) + value + match.group(2)

    return re.sub(pattern, repl, html, count=1)


def process_file(path: Path) -> None:
    html = path.read_text(encoding="utf-8")
    title_key, desc_key = PAGE_META[path.name]
    html = re.sub(r"<title>[^<]*</title>", f"<title>{JA[title_key]}</title>", html, count=1)
    if desc_key:
        if 'name="description" content=""' in html:
            html = html.replace(
                'name="description" content=""',
                f'name="description" content="{JA[desc_key]}"',
                1,
            )
        else:
            html = re.sub(
                r'(<meta name="description" content=")[^"]*(")',
                rf"\1{JA[desc_key]}\2",
                html,
                count=1,
            )

    for key, value in JA.items():
        html = inject_attr(html, "data-i18n-alt", key, value)
        html = inject_content(html, "data-i18n-html", key, value)
        html = inject_content(html, "data-i18n", key, value)

    path.write_text(html, encoding="utf-8")
    print(f"updated {path.name}")


def main() -> None:
    for name in PAGE_META:
        process_file(PUBLIC / name)


if __name__ == "__main__":
    main()
