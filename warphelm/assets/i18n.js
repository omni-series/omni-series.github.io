(function () {
    'use strict';

    const STORAGE_KEY = 'owh-site-lang';
    const DEFAULT_LANG = 'ja';

    const T = {
        ja: {
            // Meta
            'meta.index.title': 'Omni Warp Helm - 超低遅延マウス・キーボード共有 ＆ 画面ミラーリング・画面文字読み取り',
            'meta.index.description': 'マウス1つで複数台のPCをシームレスに操作。1台のPCでも大画面・マルチモニター作業を快適にするアプリ切り替えや文字読み取り、画面投影、管理者ダイアログ操作まで完備。',
            'meta.editions.title': 'エディション・価格プラン - Omni Warp Helm',
            'meta.editions.description': 'Omni Warp Helm の Community（無料）と Pro（年額¥5,800 / 月額¥580・7日間無料体験）の機能詳細比較と料金プラン。',
            'meta.support.title': 'サポート & クイックガイド - Omni Warp Helm',
            'meta.support.description': 'Omni Warp Helm の初期設定ガイド、よくある質問、トラブルシューティング。',
            'meta.privacy.title': 'プライバシーポリシー - Omni Warp Helm',
            'meta.privacy.description': 'Omni Warp Helm のプライバシーポリシーとローカル優先データ保護方針。',

            // Navigation & Common
            'nav.features': '特徴',
            'nav.mirror': '画面ミラー',
            'nav.web_display': 'Webサブモニタ',
            'nav.remote_edit': 'リモート編集',
            'nav.editions': 'エディション',
            'nav.support': 'サポート',
            'nav.pricing': '料金プラン',
            'nav.get': '無料で入手',
            'nav.home': 'ホーム',
            'footer.editions': 'エディション',
            'footer.support': 'サポート',
            'footer.privacy': 'プライバシーポリシー',
            'footer.github': 'GitHub',

            // Index: Hero
            'hero.badge': '✨ Microsoft Store 正式認定・配信中（Windows 11 / 10）',
            'hero.title': 'マウス1つで、複数台のPCを<br class="hidden sm:inline"><span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">シームレスに操舵する。</span>',
            'hero.sub': 'Windows に最適化された超低遅延マウス・キーボード共有。操作データはクラウドを介さず同一Wi-Fi・LAN内で直接安全に通信。<br class="hidden sm:inline">さらに <strong class="text-white">Webサブモニタ（QR読取でiPad/スマホを画面化）</strong>・<strong class="text-white">画面ミラーリング</strong>・<strong class="text-white">画面文字読み取り（OCR）</strong>・<strong class="text-white">リモート直接編集</strong>、1台のPCでも大画面・マルチモニター作業を劇的に快適にする <strong class="text-white">最前面アプリ切り替え・モニター間ジャンプ</strong> まで完備。',
            'hero.store_btn': 'Microsoft Store で入手（無料）',
            'hero.store_trust': 'Microsoft 公式セキュリティ審査合格・安全なクリーン配信',
            'hero.features_btn': '主要機能を見る ↓',

            // Index: Badges
            'badge.cpp': '⚡ 超軽量・高速',
            'badge.cpp_desc': '動作が軽く追加ソフト不要',
            'badge.aes': '🔒 高度な暗号化（AES-256）',
            'badge.aes_desc': '操作データはLAN内直接P2P通信',
            'badge.uac': '🛡️ 管理者確認・ロック対応',
            'badge.uac_desc': '確認ダイアログでも操作が止まらない',
            'badge.web': '📱 Webサブモニタ ＆ ミラー',
            'badge.web_desc': 'QRでiPad/スマホも即画面化',
            'badge.mirror': '🖥️ 画面ミラー ＆ 文字読み取り',
            'badge.mirror_desc': '画面投影・文字抽出・リモート編集',

            // Index: Features
            'features.kicker': 'Features',
            'features.title': '従来の共有ソフトを超える、6つの特徴',
            'features.sub': '複数台のシームレス共有から、1台のPCでの大画面・マルチモニター作業効率化までを1つに統合。',
            'feat.1.title': '遅延を感じさせないスムーズな画面移動',
            'feat.1.desc': 'マウスが画面端に触れると、まるで1台のPCのマルチモニターのようにスムーズに相手PCへ移動。画面端でマウスが引っかかるストレスがなく、どこまでも自然にカーソルを行き来できます。',
            'feat.2.title': '1台でも快適！大画面・マルチモニター作業支援',
            'feat.2.desc': '背面のウィンドウを瞬時に表に出す「最前面アプリ切り替え（Ctrl+Alt+ホイール）」、指定モニターへマウスを一瞬で飛ばす「モニター間ジャンプ（Ctrl+数字）」、OKボタンへ自動で寄る「ダイアログ吸着」、迷子防止「スポットライト」を標準装備。',
            'feat.3.title': '画面上の文字読み取り ＆ クリップボード共有',
            'feat.3.desc': 'コピーできない画像やダイアログの文字を一瞬でテキスト化する「画面OCR」を新搭載。テキストはもちろん、画像（スクリーンショットや写真）やファイル・フォルダーの直接コピー＆ペースト（Ctrl+C / Ctrl+V）も快適に行えます。',
            'feat.4.title': '管理者確認やロック画面でも操作が途切れない',
            'feat.4.desc': '一般的なマウス共有ソフトでは操作不能になる「このアプリが変更を加えることを許可しますか？（管理者確認画面）」や、Windows のサインイン・ロック画面でもカーソルが止まらず、そのまま操作できます。',
            'feat.5.title': 'クラウド非経由・LAN内直接通信の安心セキュリティ',
            'feat.5.desc': 'キー入力やクリップボードデータを高度な暗号化（AES-256）で保護。日常の操作データは外部サーバーを介さずWi-Fi・LAN内で直接やり取りするため機密情報も安全です。（※高精度 AI OCR 利用時のみ Google API へ直接暗号化送信されます）',
            'feat.6.title': '実際の机の並びに合わせられる直感的な画面配置',
            'feat.6.desc': 'モニターの並びを画面上でドラッグ＆ドロップして自由に配置。画面の大きさや解像度が異なるモニター同士でも段差を感じさせず、スムーズにカーソルが渡れる位置調整にも対応しています。',

            // Index: Mirror
            'mirror.badge': 'Pro 機能',
            'mirror.title': 'もう1台の画面へ、ウィンドウを直接<span class="text-blue-600">なめらかに遠隔投影（ミラー）</span>',
            'mirror.desc': 'メインPCで開いている任意のアプリ画面（ブラウザ、動画、資料など）を、サブPCのディスプレイへ遅延なくストリーミング表示。サブPCの画面を、便利な外付けサブモニターのようにフル活用できます。',
            'mirror.li1': 'ウィンドウ単位で手軽に投影先を選択可能（全画面表示や画面分割にも対応）',
            'mirror.li2': '画面を2分割・4分割して並べるレイアウトプリセットを搭載',
            'mirror.li3': '高画質・高フレームレート（60 FPS）のスムーズな動画・画面表示',
            'mirror.li4': '仮想ディスプレイ（VDD）にも完全対応。仮想画面上のウィンドウ迷子を防ぐ安全機構（VDDガード）も搭載',
            'mirror.img_src': 'images/screenshots/ja_02_screen_mirror.png',
            'mirror.img_alt': '画面ミラーリング：タイトルバーを落とすだけ！ノートPCが外付け画面に早変わり',
            'mirror.panel_title': 'タスクトレイ → 画面ミラーメニュー',
            'mirror.panel_desc': '『ブラウザや資料ウィンドウ』をサブPC画面の右半分（50%）に投影',

            // Index: Web Display
            'webdisplay.badge': 'NEW / Pro 機能',
            'webdisplay.title': 'QRコードを読み取るだけ。<br><span class="text-emerald-400">スマホ・iPad・Macが即サブ画面に</span>',
            'webdisplay.desc': '相手端末に専用アプリのインストールは一切不要。PC画面に表示される QR コードをスマホや iPad、Mac のカメラで読み取るだけで、手元のブラウザが超低遅延なセカンドディスプレイに早変わり。資料の常時表示や動画閲覧、タッチ操作まで快適に行えます。',
            'webdisplay.li1': '専用アプリ不要：標準ブラウザ（Safari / Chrome）でQRをスキャンするだけで即接続',
            'webdisplay.li2': '自由な向き変更：スマホの横向き自動追従に加え、縦持ち固定でも画面内「🔄 90° 回転」ボタンでワンタップ横長表示',
            'webdisplay.li3': '滑らかなピンチズーム：2本指で 1.0x 〜 5.0x まで無段階拡大・縮小＆パンドラッグ移動',
            'webdisplay.li4': '双方向タッチ＆クリック：スマホ画面のタップ・ドラッグがそのままPC側のマウス操作にダイレクト連動',
            'webdisplay.li5': '安心の暗号化PIN認証：同一LAN内での直接通信と4桁PINコード認証で外部からの不正アクセスを完全遮断',
            'webdisplay.protip_title': '💡 Pro Tips：仮想ディスプレイ（VDD）連携で「完全独立サブモニター」に',
            'webdisplay.protip_desc': '無料の仮想ディスプレイドライバ（IddCx VDD等）と組み合わせれば、PCのメイン画面に表示されない“透明な拡張デスクトップ”を作成可能。YouTubeやDiscord、監視ツール等を仮想画面へ逃がし、iPadから単独でタップ・操作できます。メイン画面の作業領域を1ミリも圧迫しない、完全なワイヤレス第2モニターが実現します。',
            'webdisplay.panel_title': 'Web サブモニタ / QRコード連携 (WarpDisplay)',
            'webdisplay.panel_status': 'Live 30 FPS / 低遅延同期中',
            'webdisplay.panel_step1': '① タスクトレイ →「Web サブモニタ」を開く',
            'webdisplay.panel_step2': '② スマホのカメラやQRリーダーでスキャン',
            'webdisplay.panel_step3': '③ 端末のブラウザで即座にPC画面が映る！',
            'webdisplay.panel_note': '※ iPhone, iPad, Android, Mac, Chromebook 等、最新ブラウザ搭載のあらゆる端末に対応',

            // Index: Remote Edit
            'remote.badge': 'Pro 機能',
            'remote.title': '相手側 PC のファイルを、<span class="text-blue-600">メイン PC のアプリで直接開いて編集</span>',
            'remote.desc': 'サブPCにあるテキスト、文書、画像などのファイルを、メインPCにインストールされている使い慣れたアプリで直接開いて編集。保存すると自動で相手側PCへ即時反映されます。',
            'remote.panel_title': 'サブPCのエクスプローラーで右クリック',
            'remote.panel_action': '「OmniWarpHelm リモート編集 (メインPCで開く)」',
            'remote.panel_desc': 'サブPCにあるファイルを、メインPCの高機能なソフトで直接開いて編集。保存内容はサブPCへ即時反映されます。ファイルの事前転送や複雑な共有設定は不要です。',
            'remote.link': '詳しいエディション比較を見る →',
            'remote.img_src': 'images/screenshots/ja_05_remote_edit.png',
            'remote.img_alt': 'クリップボード同期＆リモート直接編集：テキスト・画像・ファイルを瞬時共有',

            // Index: Comparison
            'comp.kicker': 'Comparison',
            'comp.title': '他社ツールとの違い',
            'comp.th.feature': '機能項目',
            'comp.r1.title': '動作の軽さ・構造',
            'comp.r1.owh': 'Windows 専用超軽量設計（追加ソフト不要）',
            'comp.r2.title': '1台でも使える便利機能 (アプリ切り替え/ジャンプ/吸着)',
            'comp.r2.owh': '✅ 標準搭載 (大画面・マルチモニター効率化)',
            'comp.r2.syn': '❌ なし',
            'comp.r2.bar': '❌ なし',
            'comp.r3.title': '画面上の文字読み取り (OCR)',
            'comp.r3.owh': '✅ 搭載 (ダイアログや画像を瞬時に文字化)',
            'comp.r3.syn': '❌ なし',
            'comp.r3.bar': '❌ なし',
            'comp.r4.title': '画面ミラーリング (ウィンドウ遠隔投影)',
            'comp.r4.owh': '✅ 搭載 (高画質・スムーズな画面表示)',
            'comp.r4.none': '❌ なし',
            'comp.r5.title': '管理者確認 / ロック画面での操作',
            'comp.r5.owh': '✅ 正式対応 (操作が止まらない常駐サービス)',
            'comp.r5.syn': '⚠️ 設定により不安定',
            'comp.r5.bar': '❌ 非対応 (操作不能になる)',
            'comp.r6.title': 'リモートファイル直接編集',
            'comp.r6.owh': '✅ 搭載 (右クリックで即時起動・保存で同期)',
            'comp.r7.title': 'スマホ・タブレットのサブモニタ化 (Web サブモニタ・QR連携)',
            'comp.r7.owh': '✅ 搭載 (QR読取でiPad/スマホ/Macを即サブ画面化・アプリ不要)',
            'comp.r7.syn': '❌ なし',
            'comp.r7.bar': '❌ なし',

            // Index: Requirements & CTA
            'req.title': 'システム動作環境',
            'req.os_label': '対応 OS',
            'req.os_val': 'Windows 11 / 10 (64-bit)',
            'req.net_label': 'ネットワーク',
            'req.net_val': '同じローカルネットワーク（ご家庭や職場の Wi-Fi / 有線LAN）',
            'req.port_label': '通信設定',
            'req.port_val': '自動構成（ルーター等の面倒な設定は不要）',
            'req.rt_label': '追加ソフト',
            'req.rt_val': '不要（インストール後すぐ単体で動作）',
            'cta.title': '今すぐ、新しい操舵感を体験してください。',
            'cta.sub': '無料版（Community）は期限なし・クレジットカード不要でご利用いただけます。Pro版は7日間の無料体験付き。',
            'cta.store_btn': 'Microsoft Store で入手（無料）',
            'cta.plans_btn': 'プラン一覧を見る',

            // Editions
            'editions.hero.kicker': 'Pricing & Editions',
            'editions.hero.title': '用途に合わせて選べるプラン',
            'editions.hero.sub': '日常の2台共有や1台PCでの大画面効率化は <strong>Community 版（無料）</strong> で十分にご活用いただけます。<br class="hidden sm:inline">画面ミラー・リモート編集・無制限の文字読み取り・3台以上共有が必要な方には <strong>Pro 版</strong> を提供します。',
            'editions.notice': '<strong>Microsoft Store 正式配信:</strong> Community は無料・無期限にご利用いただけます。Pro は Store 内サブスクリプション（年額 ¥5,800 / 月額 ¥580、7日間無料体験付き）でお求めいただけます。',
            'editions.plan.comm.badge': '無料版 / Free',
            'editions.plan.comm.desc': '1台での大画面・マルチモニター効率化から、日常の2台PCマウス・キーボード共有まで無料で網羅。',
            'editions.plan.comm.period': '無期限・無料 (クレジットカード不要)',
            'editions.plan.comm.f1': '<strong>1台でも便利:</strong> 最前面アプリ切り替え (Ctrl+Alt+ホイール)',
            'editions.plan.comm.f2': '<strong>1台でも便利:</strong> モニター間ジャンプ (Ctrl+数字)',
            'editions.plan.comm.f3': '<strong>1台でも便利:</strong> ボタン自動吸着 ＆ スポットライト',
            'editions.plan.comm.f4': '接続可能 PC: <strong>最大 2 台</strong>（1対1 共有）',
            'editions.plan.comm.f5': '遅延のないスムーズなマウス・キーボード共有',
            'editions.plan.comm.f6': '<strong>強固な暗号化通信（AES-256）</strong>（操作データはLAN内直接通信）',
            'editions.plan.comm.f7': 'テキストのコピー＆ペースト同期',
            'editions.plan.comm.f8': '画面上の文字読み取り（1日数回お試し）',
            'editions.plan.comm.btn': '無料で入手する',

            'editions.plan.pro.recommend': '7日間無料体験 / Recommended',
            'editions.plan.pro.badge': '上位版 / Pro Edition',
            'editions.plan.pro.desc': '画面ミラーリング・リモート直接編集・管理者確認対応・3台以上接続・無制限の文字読み取りを解放する決定版。',
            'editions.plan.pro.price': '¥5,800',
            'editions.plan.pro.period': '/ 年（月換算 約¥483・実質2か月分無料）',
            'editions.plan.pro.note': '※短期利用向けの月額プラン（¥580 / 月）も選択可能',
            'editions.plan.pro.f1': '接続可能 PC: <strong>3 台以上 無制限</strong>（複数PCをまとめて操作）',
            'editions.plan.pro.f2': '<strong>超低遅延 画面ミラーリング</strong>（ウィンドウ遠隔投影・画面分割表示）',
            'editions.plan.pro.f_web': '<strong>Web サブモニタ（QR連携）</strong>（iPad・スマホ・Macをアプリ不要でサブ画面化）',
            'editions.plan.pro.f3': '<strong>エクスプローラー連携 リモートファイル直接編集</strong>（保存で即時同期）',
            'editions.plan.pro.f4': '<strong>管理者確認ダイアログ（UAC）・ロック画面の完全操作</strong>',
            'editions.plan.pro.f5': '<strong>画面上の文字読み取り（無制限利用）</strong>',
            'editions.plan.pro.f6': '画像（スクショ・写真）・ファイル直接コピー（Ctrl+C / Ctrl+V）',
            'editions.plan.pro.f7': '自由な画面レイアウト配置（段差スムーズ移動・特殊な並びにも対応）',
            'editions.plan.pro.f8': 'リモートPCの遠隔起動（Wake-on-LAN）',
            'editions.plan.pro.f9': 'Windows 大型アップデートへの継続的対応・優先サポート',
            'editions.plan.pro.btn': '7日間無料で体験する (Pro)',

            // Editions: Detailed Table
            'editions.table.title': '機能詳細比較一覧',
            'editions.table.th.category': '機能分類 / 機能名',
            'editions.table.th.comm': 'Community（無料）',
            'editions.table.th.pro': 'Pro',
            'editions.table.grp1': '大画面・マルチモニター作業支援（1台のPCでも快適）',
            'editions.table.r1.title': '最前面アプリ切り替え (Ctrl+Alt+ホイール)',
            'editions.table.r1.comm': '✓（基本動作）',
            'editions.table.r1.pro': '✓（除外アプリ設定・詳細カスタマイズ）',
            'editions.table.r2.title': 'モニター間 瞬時ジャンプ (Ctrl+数字・連続移動)',
            'editions.table.r2.comm': '✓（基本3スロット）',
            'editions.table.r2.pro': '✓（全モニター対応・連続移動）',
            'editions.table.r3.title': '確認ダイアログ・ボタン自動吸着 (OK/キャンセル)',
            'editions.table.r3.comm': '✓（OK/キャンセル自動吸着）',
            'editions.table.r3.pro': '✓（感度調整・カスタム対応）',
            'editions.table.r4.title': 'カーソル発見スポットライト ＆ 波紋 (左Ctrlを2回連打)',
            'editions.table.r4.comm': '✓',
            'editions.table.r4.pro': '✓',
            'editions.table.r5.title': 'ゲーム・全画面アプリ中のカーソル誤脱出防止',
            'editions.table.r5.comm': '✓',
            'editions.table.r5.pro': '✓',

            'editions.table.grp2': '画面活用 ＆ 文字読み取り',
            'editions.table.r6.title': '画面上の文字読み取り (画像やダイアログの文字化)',
            'editions.table.r6.comm': 'お試し利用（1日数回）',
            'editions.table.r6.pro': '無制限利用（ショートカット一発抽出）',
            'editions.table.r7.title': '超低遅延 画面ミラーリング (ウィンドウ遠隔投影)',
            'editions.table.r7.comm': '—',
            'editions.table.r7.pro': '✓（遅延のないスムーズな動画・画面表示）',
            'editions.table.r_web.title': 'Web サブモニタ (スマホ/タブレット/Mac等のブラウザで即サブ画面化・QR連携)',
            'editions.table.r_web.comm': '—',
            'editions.table.r_web.pro': '✓（QR読取だけで即接続・90°回転・ピンチズーム対応）',
            'editions.table.r8.title': 'ミニマップ操作 ＆ 画面分割レイアウト (2分割・4分割)',
            'editions.table.r8.comm': '—',
            'editions.table.r8.pro': '✓（2分割・4分割・自由配置）',

            'editions.table.grp3': '複数PC マウス・キーボード共有',
            'editions.table.r9.title': '接続可能 PC 台数',
            'editions.table.r9.comm': '最大 2 台（1対1 共有）',
            'editions.table.r9.pro': '無制限（3台以上）',
            'editions.table.r10.title': '遅延のないスムーズなマウス・キーボード共有',
            'editions.table.r10.comm': '✓',
            'editions.table.r10.pro': '✓',
            'editions.table.r11.title': 'モニター配置の自由度（大きさや解像度の違いへの対応）',
            'editions.table.r11.comm': '標準の横並び・縦並び',
            'editions.table.r11.pro': '✓（自由な位置調整・段差スムーズ移動・特殊配置）',
            'editions.table.r12.title': 'テキストのコピー＆ペースト同期',
            'editions.table.r12.comm': '✓',
            'editions.table.r12.pro': '✓',
            'editions.table.r13.title': '画像（スクショ・写真）・ファイル直接コピー（Ctrl+C / Ctrl+V）',
            'editions.table.r13.comm': '—',
            'editions.table.r13.pro': '✓（高速直接転送）',
            'editions.table.r14.title': '相手PCのファイルを直接開いて編集（保存で即時反映）',
            'editions.table.r14.comm': '—',
            'editions.table.r14.pro': '✓（手元のアプリで開いて保存で自動同期）',
            'editions.table.r15.title': 'スリープ中の相手PCを遠隔起動（Wake-on-LAN）',
            'editions.table.r15.comm': '—',
            'editions.table.r15.pro': '✓（ワンクリック遠隔起動）',

            'editions.table.grp4': 'セキュリティ ＆ システム保護',
            'editions.table.r16.title': '強固な暗号化通信（AES-256・P2P直接通信）',
            'editions.table.r16.comm': '✓',
            'editions.table.r16.pro': '✓',
            'editions.table.r17.title': '管理者確認画面（「許可しますか？」ダイアログ）での操作',
            'editions.table.r17.comm': '—',
            'editions.table.r17.pro': '✓（操作が途切れない常駐機能）',
            'editions.table.r18.title': 'パソコンのサインイン・ロック画面での操作',
            'editions.table.r18.comm': '—',
            'editions.table.r18.pro': '✓（操作が途切れない常駐機能）',

            'editions.table.grp5': '料金プラン ＆ 保守',
            'editions.table.r19.title': '料金体系',
            'editions.table.r19.comm': '完全無料（¥0）',
            'editions.table.r19.pro': '年額 ¥5,800（月換算 約¥483） / 月額 ¥580',
            'editions.table.r20.title': '無料試用期間',
            'editions.table.r20.comm': '無期限（ずっと無料）',
            'editions.table.r20.pro': '7日間無料体験',
            'editions.table.r21.title': 'Windows 大型アップデートへの継続的対応',
            'editions.table.r21.comm': 'コミュニティ対応',
            'editions.table.r21.pro': '優先対応・即時修正・優先サポート',

            // Editions: FAQ
            'editions.faq.title': '料金・プランに関するよくある質問',
            'editions.faq.q1': 'Q. 無料版（Community）はずっと無料で使えますか？',
            'editions.faq.a1': 'はい。Community 版には使用期限はなく、1台のPCでのマルチモニター便利機能（最前面アプリ切り替え、スポットライト、ボタン吸着など）や、2台のPC間でのスムーズなマウス・キーボード共有、テキストコピー同期をずっと無料でご利用いただけます。',
            'editions.faq.q2': 'Q. 料金プランと支払い方法はどのようになっていますか？',
            'editions.faq.a2': 'お得な年額プラン（¥5,800 / 年・月換算 約¥483で実質2か月分無料）と、短期利用向けの月額プラン（¥580 / 月）をご用意しています。どちらも7日間の無料体験期間があり、Microsoft Store の安全な決済システム経由でお支払いいただけます。',
            'editions.faq.q3': 'Q. なぜ買い切りではなくサブスクリプションなのですか？',
            'editions.faq.a3': 'OmniWarpHelm は、Windows の画面表示や操作を直接なめらかに制御しています。Windows 11 / 10 の定期的な大型アップデートやセキュリティ更新に即座に対応し、常に安定して安全にお使いいただけるメンテナンスと新機能の提供を継続するため、サブスクリプション方式を採用しています。',
            'editions.faq.q4': 'Q. 複数台の PC で使う場合、台数分のライセンスが必要ですか？',
            'editions.faq.a4': 'いいえ。同一の Microsoft アカウントでサインインしているご自身の PC であれば、Microsoft Store の標準規定に基づき追加費用なしで複数台にインストールして Pro 機能を有効化できます。',
            'editions.faq.q5': 'Q. サブスクリプションの解約はいつでも可能ですか？',
            'editions.faq.a5': 'はい。Microsoft アカウントの「サービスとサブスクリプション」からいつでもワンクリックで自動更新を解約できます。解約後も有効期限が満了するまで Pro 機能をそのままご利用いただけます。',

            // Support
            'support.hero.kicker': 'Help & Support',
            'support.hero.title': 'サポート & ドキュメント',
            'support.hero.sub': 'Omni Warp Helm の導入手順、よくある質問、トラブルシューティングをまとめています。',
            'support.qs.title': 'クイックスタートガイド (3分で接続)',
            'support.qs.s1_title': '1. 両方の PC にインストール',
            'support.qs.s1_desc': '操作元（メインPC）と操作先（サブPC）の各 PC に Omni Warp Helm をインストールして起動します。',
            'support.qs.s2_title': '2. サブPC で接続待機',
            'support.qs.s2_desc': 'サブPCのタスクバーにあるトレイアイコンを右クリックし、「待機中」状態になっていることを確認します。',
            'support.qs.s3_title': '3. メインPC のレイアウトで配置',
            'support.qs.s3_desc': 'メインPCでトレイアイコンから「画面レイアウト設定 (Ctrl+Alt+F11)」を開き、モニターを実際のデスク配置に合わせてドラッグして「保存・適用」をクリックします。',
            'support.qs.web_title': 'スマホやタブレットをサブモニタにする場合',
            'support.qs.web_desc': 'PCのタスクトレイアイコンを右クリックして「Web サブモニタ（QRコード）...」を選択し、表示されたQRコードをスマホやiPadのカメラで読み取るだけで、ブラウザが即座にワイヤレス外部ディスプレイとして動作します。アプリのインストールは一切不要です。',
            'support.faq.title': 'トラブルシューティング & FAQ',
            'support.faq.q1': 'Q. カーソルが相手側 PC に移動しません',
            'support.faq.a1_p': '以下をご確認ください:',
            'support.faq.a1_li1': '両方の PC が同じ Wi-Fi や有線 LAN（同一ネットワーク）に接続されているか',
            'support.faq.a1_li2': 'Windows Defender やセキュリティソフトで OmniWarpHelm の通信が許可されているか',
            'support.faq.a1_li3': 'レイアウト設定画面で、モニター同士の境界線が接しているか（離れすぎていないか）',
            'support.faq.a1_li4': 'トレイメニューで「マウス・キーボード共有: 有効」になっているか',
            'support.faq.q2': 'Q. 管理者権限の確認画面やロック画面でカーソルが動かなくなります',
            'support.faq.a2': 'トレイアイコンを右クリックし、「管理者確認/ロック画面対応サービスをインストール...」を実行してください。専用の常駐機能が有効になり、管理者権限画面でもシームレスに操作可能になります（Pro機能）。',
            'support.faq.q3': 'Q. カーソルがどこにあるかわからなくなりました',
            'support.faq.a3': 'ショートカットキー <strong>Ctrl + Alt + Home</strong> を押すと、カーソルがメインPCの主画面中央に強制的に引き戻されます。また、キーボードの <strong>左Ctrlを2回連打</strong> すると、現在位置にスポットライトと波紋アニメーションが表示されます。',
            'support.faq.q4': 'Q. 画面ミラー機能を使うにはどうすればよいですか？',
            'support.faq.a4': 'Pro 版をご利用の場合、トレイメニューの「ウィンドウを相手PCに映す」からミラーしたいウィンドウを選択するだけで、相手側 PC にウィンドウが即座に投影されます。',
            'support.faq.q5': 'Q. 外部インターネットへの通信は発生しますか？',
            'support.faq.a5': '通常のマウス・キーボード共有、画面ミラー、ファイル転送、標準の文字読み取り（Windows標準エンジン）は、同一ローカルネットワーク内および端末内のみで直接通信・処理され、外部サーバーを経由しません。<br><br>※外部通信が発生するのは、(1) Microsoft Store による標準のライセンス認証、および (2) 設定で「高精度 AI OCR（Gemini API 連携）」を任意で有効にした場合の Google API への直接通信（HTTPS暗号化）のみです。開発者独自の収集サーバー等は存在せず、操作内容や個人情報が収集されることはありません。',
            'support.faq.q6': 'Q. iPad やスマホを、PCのメイン作業画面を邪魔しない「完全独立サブモニター」として使えますか？',
            'support.faq.a6_p1': 'はい、Windows用の仮想ディスプレイドライバ（VDD）を導入することで可能です。<br>無料・オープンソースの <a href="https://github.com/itsmikethetech/Virtual-Display-Driver" target="_blank" rel="noopener" class="text-indigo-600 hover:underline font-semibold">Virtual Display Driver (IddCx)</a> などをインストールすると、物理モニターを増設せずにPC内に「仮想的な拡張デスクトップ」を作成できます。',
            'support.faq.a6_p2': 'OmniWarpHelm は仮想ディスプレイ（<code>\\\\.\\DISPLAYn</code>）を自動認識し、その仮想画面だけを手元の iPad やスマホのブラウザへ低遅延配信します。メイン画面の作業を続けながら、手元の画面で別アプリを独立してタッチ操作できます。',
            'support.contact.title': 'お問い合わせ・不具合報告',
            'support.contact.desc': 'ご不明点や機能のご要望、不具合の報告は GitHub Issues またはメールでお気軽にお寄せください。',
            'support.contact.btn_issue': 'GitHub Issues で報告',
            'support.contact.btn_mail': 'メールで問い合わせ',

            // Privacy
            'privacy.hero.title': 'プライバシーポリシー',
            'privacy.hero.date': '最終改定日: 2026年10月12日',
            'privacy.s1.title': '1. 基本方針',
            'privacy.s1.p1': 'Omni Warp Helm Project（以下「当プロジェクト」）は、ユーザーのプライバシーとセキュリティを最優先に設計されています。本ソフトウェアはローカルネットワーク内での直接通信を主軸とするユーティリティであり、ユーザーの個人情報や日常操作ログを当プロジェクトのサーバーへ送信・収集する機能は含まれていません。',
            'privacy.s1.p2': '当プロジェクトは、ユーザーが本ソフトウェアを安心してご利用いただけるよう、以下に定めるプライバシーポリシーを遵守します。',
            'privacy.s2.title': '2. 収集しない情報',
            'privacy.s2.p1': 'Omni Warp Helm は、以下の情報を収集、蓄積、外部送信しません:',
            'privacy.s2.li1': '<strong>キー入力内容およびマウス操作ログ:</strong> 接続先 PC への転送のみに用いられ、ディスクへの記録や外部送信は行われません。',
            'privacy.s2.li2': '<strong>クリップボード内容および転送ファイル:</strong> 暗号化されて同一ネットワーク内の端末間でのみやり取りされ、外部クラウド等を経由しません。',
            'privacy.s2.li3': '<strong>個人を特定できる情報:</strong> 氏名、メールアドレス、位置情報、デバイス固有識別子等の個人情報は取得しません。',
            'privacy.s2.li4': '<strong>画面文字読み取り（OCR）データ:</strong> 標準モードでは Windows に内蔵された認識エンジンを使用し、すべて端末内（オフライン）で処理されます。ユーザーが任意で「Google Gemini API 連携（高精度 AI OCR）」を有効にした場合に限り、選択した切り抜き画像が Google の API サーバーへ直接送信（HTTPS暗号化）されます。当プロジェクトのサーバーを経由・蓄積することはありません。',
            'privacy.s3.title': '3. 通信のセキュリティと暗号化',
            'privacy.s3.p1': 'PC 間のすべての通信（マウス・キーボード操作、クリップボード、画面ミラーデータ）は、高度な暗号化（AES-256）によって保護されます。',
            'privacy.s3.p2': '通信は同一ネットワーク内で直接行われ、第三者のサーバーを経由することはありません。',
            'privacy.s4.title': '4. ウェブサイトにおけるアクセス解析',
            'privacy.s4.p1': '本紹介ウェブサイトでは、サイトの利用状況の把握および利便性向上のため、Cookie を使用した一般的なアクセス解析ツールを利用する場合があります。取得されるデータは匿名化されており、個人を特定するものではありません。ブラウザの設定により Cookie を無効化することも可能です。',
            'privacy.s5.title': '5. お問い合わせ窓口',
            'privacy.s5.p1': '本プライバシーポリシーに関するご質問やご不明点は、GitHub リポジトリの Issues よりお問い合わせください。'
        },

        en: {
            // Meta
            'meta.index.title': 'Omni Warp Helm - Ultra-Low Latency Mouse & Keyboard Sharing, Screen Mirroring & Text Recognition',
            'meta.index.description': 'Seamlessly control multiple PCs with a single mouse. Boost productivity on large displays and multi-monitors even with 1 PC with Foreground App Swap, Screen OCR, ultra-low latency Screen Mirroring, and UAC support.',
            'meta.editions.title': 'Editions & Pricing - Omni Warp Helm',
            'meta.editions.description': 'Feature comparison and pricing for Omni Warp Helm Community (Free) and Pro ($39.99/yr or $3.99/mo with 7-day free trial).',
            'meta.support.title': 'Support & Quick Guide - Omni Warp Helm',
            'meta.support.description': 'Quick start guide, troubleshooting, FAQ, and support contacts for Omni Warp Helm.',
            'meta.privacy.title': 'Privacy Policy - Omni Warp Helm',
            'meta.privacy.description': 'Privacy policy and local network data protection principles for Omni Warp Helm.',

            // Navigation & Common
            'nav.features': 'Features',
            'nav.mirror': 'Screen Mirror',
            'nav.web_display': 'Web Display',
            'nav.remote_edit': 'Remote Edit',
            'nav.editions': 'Editions',
            'nav.support': 'Support',
            'nav.pricing': 'Pricing',
            'nav.get': 'Get Free',
            'nav.home': 'Home',
            'footer.editions': 'Editions',
            'footer.support': 'Support',
            'footer.privacy': 'Privacy Policy',
            'footer.github': 'GitHub',

            // Index: Hero
            'hero.badge': '✨ Officially Certified & Available on Microsoft Store (Windows 11 / 10)',
            'hero.title': 'Steer multiple PCs seamlessly<br class="hidden sm:inline"><span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">with a single mouse.</span>',
            'hero.sub': 'Optimized ultra-low latency mouse & keyboard sharing. Core operation data communicates directly within your Wi-Fi/local network without external clouds.<br class="hidden sm:inline">Packed with <strong class="text-white">Web Sub-Monitor (Instant QR display for iPad/Phone)</strong>, <strong class="text-white">Screen Mirroring</strong>, <strong class="text-white">Screen Text Recognition (OCR)</strong>, <strong class="text-white">Remote File Editing</strong>, and single-PC tools like <strong class="text-white">Foreground App Swap & Monitor Warp</strong>.',
            'hero.store_btn': 'Get on Microsoft Store (Free)',
            'hero.store_trust': 'Microsoft Certified & Security Scanned — Clean & Safe Installation',
            'hero.features_btn': 'Explore Features ↓',

            // Index: Badges
            'badge.cpp': '⚡ Ultra-Fast & Lightweight',
            'badge.cpp_desc': 'Zero extra software needed',
            'badge.aes': '🔒 Bank-Grade Encryption (AES-256)',
            'badge.aes_desc': 'Direct P2P over local network',
            'badge.uac': '🛡️ Admin Prompts & Lock Screen',
            'badge.uac_desc': 'Control never freezes on dialogs',
            'badge.web': '📱 Web Sub-Monitor',
            'badge.web_desc': 'Turn iPad/Phones into displays via QR',
            'badge.mirror': '🖥️ Screen Mirror & Text Capture',
            'badge.mirror_desc': 'Window casting, OCR & remote edit',

            // Index: Features
            'features.kicker': 'Features',
            'features.title': '6 Advanced Capabilities Beyond Traditional Sharing Tools',
            'features.sub': 'From effortless multi-PC steering to single-PC large monitor productivity, all unified in one lightweight native app.',
            'feat.1.title': 'Ultra-Smooth Cursor Movement with Zero Latency',
            'feat.1.desc': 'When your mouse touches the screen edge, it glides to your other PC just like an attached second monitor. Seamless edge transit eliminates annoying boundary stickiness.',
            'feat.2.title': 'Powerful Even with 1 PC: Large & Multi-Monitor Tools',
            'feat.2.desc': 'Includes Foreground App Swap (Ctrl+Alt+Wheel), instant Monitor Warp (Ctrl+Number), Button Magnet auto-snapping to OK/Cancel buttons, and spotlight ripple for locating lost cursors.',
            'feat.3.title': 'Screen Text Capture (OCR) & Fast Clipboard Sync',
            'feat.3.desc': 'Capture uncopyable text directly from images and dialogs with built-in Screen OCR. Clipboard sync seamlessly handles text, images (screenshots & photos), and direct file/folder pasting (Ctrl+C / Ctrl+V).',
            'feat.4.title': 'Full Control on Admin Dialogs & Lock Screens',
            'feat.4.desc': 'Cursor movement never freezes on Windows User Account Control (UAC) permission popups or lock/login screens, allowing continuous control without interruption.',
            'feat.5.title': 'Direct Local P2P Security Without Cloud Intermediaries',
            'feat.5.desc': 'Keystrokes and clipboard data are protected with high-grade AES-256 encryption. Routine operation data is exchanged directly over your local Wi-Fi or LAN without external servers (Optional AI OCR connects directly to Google API only when explicitly enabled).',
            'feat.6.title': 'Intuitive Canvas Matching Your Physical Desk Layout',
            'feat.6.desc': 'Drag and drop monitors on a visual canvas to match your desk. Handles monitors of different sizes and resolutions naturally so your cursor travels across boundaries without awkward jumps.',

            // Index: Mirror
            'mirror.badge': 'Pro Feature',
            'mirror.title': 'Cast Windows Directly to Remote Displays: <span class="text-blue-600">Screen Mirroring</span>',
            'mirror.desc': 'Stream any application window from your primary PC (browsers, documents, videos) to your secondary PC with ultra-low latency. Turn your second PC into a wireless extra monitor.',
            'mirror.li1': 'Cast specific app windows with full-screen and split-screen support',
            'mirror.li2': 'Built-in presets for 2-way and 4-way split layouts',
            'mirror.li3': 'Crisp, high-frame-rate (60 FPS) smooth video streaming',
            'mirror.li4': 'Full Virtual Display Driver (VDD) support: Includes built-in VDD Guard to prevent off-screen window loss.',
            'mirror.img_src': 'images/screenshots/en_02_screen_mirror.png',
            'mirror.img_alt': 'Wireless Second Display: Drag Title Bar to Beam Any Window to Your Laptop',
            'mirror.panel_title': 'Screen Mirror Settings',
            'mirror.panel_desc': 'Projecting browser/document window to the right half (50%) of client screen',

            // Index: Web Display
            'webdisplay.badge': 'NEW / Pro Feature',
            'webdisplay.title': 'Scan a QR Code.<br><span class="text-emerald-400">Instantly Turn Phones, iPads & Macs into Extra Screens</span>',
            'webdisplay.desc': 'No client app installation required. Simply scan the on-screen QR code using your smartphone, iPad, or Mac camera to instantly transform your browser into an ultra-low latency wireless secondary monitor. Supports continuous 60/30 FPS streaming, orientation controls, and touch interactions.',
            'webdisplay.li1': 'Zero Client Installs: Scan the QR code with any standard browser (Safari / Chrome) and start streaming instantly',
            'webdisplay.li2': 'Flexible Orientation: Automatically adapts to landscape orientation, plus a one-tap HUD "🔄 90°" button for portrait-locked phones',
            'webdisplay.li3': 'Smooth Pinch-to-Zoom: Continuous 1.0x to 5.0x two-finger pinch zoom and panning to inspect fine text and details',
            'webdisplay.li4': 'Bidirectional Touch & Click: Tap, drag, or scroll on your mobile touchscreen to directly control your Windows PC',
            'webdisplay.li5': 'Encrypted Local Security: 4-digit PIN authentication and direct local Wi-Fi/Ethernet streaming completely block unauthorized access',
            'webdisplay.protip_title': '💡 Pro Tips: Transform into a 100% Standalone Sub-Monitor with VDD',
            'webdisplay.protip_desc': 'Pair with a free Virtual Display Driver (IddCx VDD) to create an invisible extended desktop. Offload YouTube, Discord, or monitoring tools to the virtual screen and interact directly from your iPad without ever covering your primary PC workspace.',
            'webdisplay.panel_title': 'Web Sub-Monitor / QR Code Streaming (WarpDisplay)',
            'webdisplay.panel_status': 'Live 30 FPS / Low Latency',
            'webdisplay.panel_step1': '1. Right-click tray -> Open "Web Sub-Monitor"',
            'webdisplay.panel_step2': '2. Scan the QR code with phone / tablet camera',
            'webdisplay.panel_step3': '3. PC screen displays immediately in your browser!',
            'webdisplay.panel_note': '※ Compatible with iPhones, iPads, Android devices, Macs, Chromebooks and any modern browser',

            // Index: Remote Edit
            'remote.badge': 'Pro Feature',
            'remote.title': 'Edit Remote Files <span class="text-blue-600">Directly with Your Primary PC Apps</span>',
            'remote.desc': 'Open and edit documents, code, or images stored on your secondary PC using your favorite apps installed on your main PC. Changes are automatically synced upon saving.',
            'remote.panel_title': 'Secondary PC Explorer Context Menu',
            'remote.panel_action': 'Select "OmniWarpHelm Remote Edit (Open on Main PC)"',
            'remote.panel_desc': 'Open files stored on your secondary PC directly inside your main PC apps. Saves are instantly synced back without manual file transfers or shared folder setups.',
            'remote.link': 'See Detailed Edition Comparison →',
            'remote.img_src': 'images/screenshots/en_05_remote_edit.png',
            'remote.img_alt': 'Clipboard & Remote Edit: Sync Text, Images & Files Across PCs. Direct Remote File Editing',

            // Index: Comparison
            'comp.kicker': 'Comparison',
            'comp.title': 'Comparison with Existing Tools',
            'comp.th.feature': 'Feature / Item',
            'comp.r1.title': 'Lightweight Design',
            'comp.r1.owh': 'Windows dedicated lightweight app (No extra runtimes)',
            'comp.r2.title': 'Single-PC Productivity Tools (Swap/Jump/Magnet)',
            'comp.r2.owh': '✅ Built-in (Optimized for large displays)',
            'comp.r2.syn': '❌ None',
            'comp.r2.bar': '❌ None',
            'comp.r3.title': 'Screen Text Capture (OCR)',
            'comp.r3.owh': '✅ Built-in (Instant text copy from images & dialogs)',
            'comp.r3.syn': '❌ None',
            'comp.r3.bar': '❌ None',
            'comp.r4.title': 'Screen Mirroring (Window Casting)',
            'comp.r4.owh': '✅ Supported (High quality & smooth display)',
            'comp.r4.none': '❌ None',
            'comp.r5.title': 'Admin Prompt (UAC) & Lock Screen Control',
            'comp.r5.owh': '✅ Supported (Dedicated background service)',
            'comp.r5.syn': '⚠️ Unstable depending on config',
            'comp.r5.bar': '❌ Not supported (Freezes control)',
            'comp.r6.title': 'Direct Remote File Editing',
            'comp.r6.owh': '✅ Supported (Right-click open & auto-sync)',
            'comp.r7.title': 'Mobile / Tablet Sub-Monitor (Web Display & QR Code)',
            'comp.r7.owh': '✅ Supported (Turn iPads/Phones/Macs into screens via QR, zero app install)',
            'comp.r7.syn': '❌ None',
            'comp.r7.bar': '❌ None',

            // Index: Requirements & CTA
            'req.title': 'System Requirements',
            'req.os_label': 'Supported OS',
            'req.os_val': 'Windows 11 / 10 (64-bit)',
            'req.net_label': 'Network',
            'req.net_val': 'Same local network (Home or office Wi-Fi / Ethernet)',
            'req.port_label': 'Network Setup',
            'req.port_val': 'Automatic configuration (No router tweaking required)',
            'req.rt_label': 'Extra Software',
            'req.rt_val': 'None required (Works standalone after install)',
            'cta.title': 'Experience the new steering feel today.',
            'cta.sub': 'Community edition is free forever with no credit card required. Pro edition includes a 7-day free trial.',
            'cta.store_btn': 'Get on Microsoft Store (Free)',
            'cta.plans_btn': 'View All Plans',

            // Editions
            'editions.hero.kicker': 'Pricing & Editions',
            'editions.hero.title': 'Choose the Right Edition for You',
            'editions.hero.sub': 'Core 2-PC sharing and single-PC large monitor tools are <strong>free forever in Community edition</strong>.<br class="hidden sm:inline">For power users requiring screen mirroring, remote edit, unlimited text recognition, and 3+ PCs, upgrade to <strong>Pro edition</strong>.',
            'editions.notice': '<strong>Official Microsoft Store Distribution:</strong> Community is free forever with no expiration. Pro is available via Microsoft Store subscriptions ($39.99/yr or $3.99/mo) with a 7-day free trial.',
            'editions.plan.comm.badge': 'Free Edition',
            'editions.plan.comm.desc': 'Complete set of tools for single-PC large monitor workflows and everyday 2-PC mouse/keyboard sharing.',
            'editions.plan.comm.period': 'Free Forever (No credit card required)',
            'editions.plan.comm.f1': '<strong>Single-PC:</strong> Foreground App Swap (Ctrl+Alt+Wheel)',
            'editions.plan.comm.f2': '<strong>Single-PC:</strong> Instant Monitor Warp (Ctrl+Number)',
            'editions.plan.comm.f3': '<strong>Single-PC:</strong> Button Magnet & Cursor Spotlight',
            'editions.plan.comm.f4': 'Up to <strong>2 PCs</strong> (1-on-1 sharing)',
            'editions.plan.comm.f5': 'Smooth mouse & keyboard sharing with zero latency',
            'editions.plan.comm.f6': '<strong>Bank-Grade Encryption (AES-256)</strong> (Direct local P2P)',
            'editions.plan.comm.f7': 'Text copy & paste synchronization',
            'editions.plan.comm.f8': 'Screen text recognition (Trial uses/day)',
            'editions.plan.comm.btn': 'Download Free',

            'editions.plan.pro.recommend': '7-Day Free Trial / Recommended',
            'editions.plan.pro.badge': 'Professional Edition',
            'editions.plan.pro.desc': 'The definitive tier unlocking Screen Mirroring, Remote Edit, admin prompt control, 3+ PCs, and unlimited text recognition.',
            'editions.plan.pro.price': '$39.99',
            'editions.plan.pro.period': '/ yr (~$3.33/mo, 2 months free)',
            'editions.plan.pro.note': '※ Monthly plan ($3.99 / mo) is also available for flexible use',
            'editions.plan.pro.f1': 'Supported PCs: <strong>3+ PCs (Unlimited)</strong>',
            'editions.plan.pro.f2': '<strong>Ultra-low latency Screen Mirroring</strong> (Window casting & split screen)',
            'editions.plan.pro.f_web': '<strong>Web Sub-Monitor (QR Streaming)</strong> (Turn iPads, phones, Macs into screens without apps)',
            'editions.plan.pro.f3': '<strong>Direct Remote File Editing</strong> (Instant sync on save)',
            'editions.plan.pro.f4': '<strong>Full Control on Admin Dialogs (UAC) & Lock Screens</strong>',
            'editions.plan.pro.f5': '<strong>Screen Text Recognition (Unlimited usage)</strong>',
            'editions.plan.pro.f6': 'Images (screenshots & photos) & direct file copy/paste (Ctrl+C / Ctrl+V)',
            'editions.plan.pro.f7': 'Flexible monitor arrangements (Handles different sizes smoothly)',
            'editions.plan.pro.f8': 'Remote PC power-on (Wake-on-LAN)',
            'editions.plan.pro.f9': 'Continuous maintenance for Windows major updates & priority support',
            'editions.plan.pro.btn': 'Start 7-Day Free Trial (Pro)',

            // Editions: Detailed Table
            'editions.table.title': 'Detailed Feature Comparison',
            'editions.table.th.category': 'Category / Feature',
            'editions.table.th.comm': 'Community (Free)',
            'editions.table.th.pro': 'Pro',
            'editions.table.grp1': 'Large & Multi-Monitor Tools (Usable with 1 PC)',
            'editions.table.r1.title': 'Foreground App Swap (Ctrl+Alt+Wheel)',
            'editions.table.r1.comm': '✓ (Standard Swap)',
            'editions.table.r1.pro': '✓ (Custom App Exclusion & Advanced Config)',
            'editions.table.r2.title': 'Instant Monitor Warp (Ctrl+Number, Consecutive Jump)',
            'editions.table.r2.comm': '✓ (Basic 3 Slots)',
            'editions.table.r2.pro': '✓ (All Displays, Custom Slots, Consecutive Jump)',
            'editions.table.r3.title': 'Button Magnet (Auto-snap to Dialog Buttons)',
            'editions.table.r3.comm': '✓ (OK/Cancel Snapping)',
            'editions.table.r3.pro': '✓ (Custom Sensitivity & Custom Targets)',
            'editions.table.r4.title': 'Cursor Spotlight & Ripple (Left Ctrl Double-tap)',
            'editions.table.r4.comm': '✓',
            'editions.table.r4.pro': '✓',
            'editions.table.r5.title': 'Fullscreen Boundary Protection (Prevents cursor drifting out)',
            'editions.table.r5.comm': '✓',
            'editions.table.r5.pro': '✓',

            'editions.table.grp2': 'Screen Workspace & Text Recognition',
            'editions.table.r6.title': 'Screen Text Capture (From Dialogs & Images)',
            'editions.table.r6.comm': 'Trial (Limited uses/day)',
            'editions.table.r6.pro': 'Unlimited (Instant shortcut extraction)',
            'editions.table.r7.title': 'Ultra-low Latency Screen Mirroring (Window Casting)',
            'editions.table.r7.comm': '—',
            'editions.table.r7.pro': '✓ (Smooth high-frame-rate streaming)',
            'editions.table.r_web.title': 'Web Sub-Monitor (Instant browser display via QR code for tablets/phones/Macs)',
            'editions.table.r_web.comm': '—',
            'editions.table.r_web.pro': '✓ (Scan & play, 90° rotation, pinch zoom, touch input)',
            'editions.table.r8.title': 'Minimap Control & Split Screen Layouts (2x1, 2x2)',
            'editions.table.r8.comm': '—',
            'editions.table.r8.pro': '✓ (2-way, 4-way, freeform)',

            'editions.table.grp3': 'Multi-PC Mouse & Keyboard Sharing',
            'editions.table.r9.title': 'Supported PC Count',
            'editions.table.r9.comm': 'Up to 2 PCs (1-on-1)',
            'editions.table.r9.pro': 'Unlimited (3+ PCs)',
            'editions.table.r10.title': 'Smooth mouse & keyboard sharing with zero latency',
            'editions.table.r10.comm': '✓',
            'editions.table.r10.pro': '✓',
            'editions.table.r11.title': 'Display Layout Flexibility (Smooth crossing for different screen sizes)',
            'editions.table.r11.comm': 'Standard side-by-side',
            'editions.table.r11.pro': '✓ (Freeform positioning, smooth edge scaling)',
            'editions.table.r12.title': 'Text Clipboard Synchronization',
            'editions.table.r12.comm': '✓',
            'editions.table.r12.pro': '✓',
            'editions.table.r13.title': 'Images & Files Direct Copy/Paste (Ctrl+C / Ctrl+V)',
            'editions.table.r13.comm': '—',
            'editions.table.r13.pro': '✓ (Fast direct transfer)',
            'editions.table.r14.title': 'Open & Edit Remote Files with Local Apps',
            'editions.table.r14.comm': '—',
            'editions.table.r14.pro': '✓ (Open with local apps & auto-sync on save)',
            'editions.table.r15.title': 'Remote PC Power-on (Wake-on-LAN)',
            'editions.table.r15.comm': '—',
            'editions.table.r15.pro': '✓ (One-click Remote Wake)',

            'editions.table.grp4': 'Security & System Protection',
            'editions.table.r16.title': 'Bank-Grade Encryption (AES-256, Direct P2P)',
            'editions.table.r16.comm': '✓',
            'editions.table.r16.pro': '✓',
            'editions.table.r17.title': 'Control on Admin Permission Dialogs (UAC)',
            'editions.table.r17.comm': '—',
            'editions.table.r17.pro': '✓ (Uninterrupted background service)',
            'editions.table.r18.title': 'Control on Windows Sign-in & Lock Screen',
            'editions.table.r18.comm': '—',
            'editions.table.r18.pro': '✓ (Uninterrupted background service)',

            'editions.table.grp5': 'Plans & Maintenance',
            'editions.table.r19.title': 'Pricing Model',
            'editions.table.r19.comm': 'Completely Free ($0)',
            'editions.table.r19.pro': '$39.99 / yr (~$3.33/mo) or $3.99 / mo',
            'editions.table.r20.title': 'Free Trial Period',
            'editions.table.r20.comm': 'Indefinite (Free forever)',
            'editions.table.r20.pro': '7-day Free Trial',
            'editions.table.r21.title': 'Continuous Maintenance for Windows Major Updates',
            'editions.table.r21.comm': 'Community Support',
            'editions.table.r21.pro': 'Priority Support & Immediate Hotfixes',

            // Editions: FAQ
            'editions.faq.title': 'Frequently Asked Questions About Pricing & Plans',
            'editions.faq.q1': 'Q. Can I use the free Community edition indefinitely?',
            'editions.faq.a1': 'Yes. The Community edition has no time limit and lets you enjoy single-PC productivity tools (Foreground App Swap, Cursor Spotlight, Button Magnet) as well as 2-PC mouse/keyboard and text copy sharing completely free forever.',
            'editions.faq.q2': 'Q. What pricing plans and payment options are available?',
            'editions.faq.a2': 'We offer a high-value Annual Plan ($39.99 / yr, equivalent to ~$3.33/mo, offering 2 months free) and a flexible Monthly Plan ($3.99 / mo). Both options include a 7-day free trial and are billed securely through the Microsoft Store.',
            'editions.faq.q3': 'Q. Why a subscription instead of a one-time purchase?',
            'editions.faq.a3': 'OmniWarpHelm directly interfaces with Windows to ensure silky smooth control. To guarantee continuous compatibility with Windows 11/10 major updates and security revisions, and to actively provide new features, we maintain an ongoing subscription model.',
            'editions.faq.q4': 'Q. Do I need separate licenses for multiple PCs?',
            'editions.faq.a4': 'No. For personal devices signed in with the same Microsoft account, you can install and activate Pro across all your PCs under standard Microsoft Store policies without any additional fee.',
            'editions.faq.q5': 'Q. Can I cancel the subscription at any time?',
            'editions.faq.a5': 'Yes. You can cancel automatic renewal anytime with one click in your Microsoft Account "Services & Subscriptions" portal. You will retain full Pro access until your current billing period ends.',

            // Support
            'support.hero.kicker': 'Help & Support',
            'support.hero.title': 'Support & Documentation',
            'support.hero.sub': 'Get started with OmniWarpHelm setup, FAQs, and troubleshooting guides.',
            'support.qs.title': 'Quick Start Guide (3-Minute Setup)',
            'support.qs.s1_title': '1. Install on Both PCs',
            'support.qs.s1_desc': 'Install and launch OmniWarpHelm on both your primary (Server) and secondary (Client) PCs.',
            'support.qs.s2_title': '2. Automatic Discovery',
            'support.qs.s2_desc': 'As long as both PCs are on the same Wi-Fi or local network, OmniWarpHelm will detect them automatically without manual IP configuration.',
            'support.qs.s3_title': '3. Arrange Screen Layout',
            'support.qs.s3_desc': 'Open "Display Layout Settings (Ctrl+Alt+F11)" from the tray menu and drag the screens to match your physical desk arrangement, then save.',
            'support.qs.web_title': 'Using Phones or Tablets as a Secondary Screen',
            'support.qs.web_desc': 'Right-click the Omni Warp Helm tray icon and select "Web Sub-Monitor (QR Code)...". Scan the displayed QR code with your smartphone or iPad camera. Your device browser will immediately function as a wireless secondary display. No app download is needed on the client device.',
            'support.faq.title': 'Troubleshooting & FAQ',
            'support.faq.q1': 'Q. The cursor does not move to the other PC',
            'support.faq.a1_p': 'Please check the following:',
            'support.faq.a1_li1': 'Both PCs are connected to the same local network (same Wi-Fi or wired router).',
            'support.faq.a1_li2': 'OmniWarpHelm is permitted in Windows Defender Firewall or security software.',
            'support.faq.a1_li3': 'In Display Layout Settings, monitor edges are touching each other (not placed with a gap).',
            'support.faq.a1_li4': 'Mouse & Keyboard Sharing is toggled to "Enabled" in the system tray menu.',
            'support.faq.q2': 'Q. The cursor stops moving on Windows User Account Control (UAC) or lock screens',
            'support.faq.a2': 'Right-click the tray icon and select "Install Service for Admin & Lock Screens...". This activates the dedicated background service allowing seamless control on secure desktops (Pro feature).',
            'support.faq.q3': 'Q. The cursor is stuck on the remote PC and will not return',
            'support.faq.a3': 'Press the emergency recall hotkey <kbd class="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-xs">ScrollLock</kbd> (or <kbd class="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-xs">Ctrl+Alt+Esc</kbd> / <kbd class="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-xs">Pause/Break</kbd>). Mouse control will instantly return to your primary PC.',
            'support.faq.q4': 'Q. I lost track of where the cursor is located',
            'support.faq.a4': 'Quickly double-tap the <kbd class="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-xs">Left Ctrl</kbd> key. A spotlight with ripple animation will highlight the cursor location across multi-monitor setups.',
            'support.faq.q5': 'Q. Does OmniWarpHelm communicate over the external Internet?',
            'support.faq.a5': 'Standard mouse & keyboard sharing, screen mirroring, file transfer, and built-in screen text recognition operate directly within your local network or on-device offline without intermediate servers.<br><br>※ External communication only occurs for: (1) Standard Microsoft Store license verification, and (2) Optional "High-Accuracy AI OCR (Google Gemini API)" when explicitly enabled by the user with their API key (encrypted HTTPS directly to Google). Developer servers do not exist and no telemetry or personal data is collected.',
            'support.faq.q6': 'Q. Can I use an iPad or phone as a completely independent sub-monitor without covering my PC workspace?',
            'support.faq.a6_p1': 'Yes, by pairing with a Windows Virtual Display Driver (VDD).<br>Installing a free, open-source driver such as <a href="https://github.com/itsmikethetech/Virtual-Display-Driver" target="_blank" rel="noopener" class="text-indigo-600 hover:underline font-semibold">Virtual Display Driver (IddCx)</a> creates an invisible extended virtual monitor without requiring physical hardware.',
            'support.faq.a6_p2': 'OmniWarpHelm automatically detects virtual displays (<code>\\\\.\\DISPLAYn</code>) and streams them with low latency to your iPad or smartphone browser. You can seamlessly touch and control secondary apps while your primary PC displays remain 100% uninterrupted.',
            'support.contact.title': 'Contact & Feedback',
            'support.contact.desc': 'Have questions, feature requests, or bug reports? Feel free to reach out via GitHub Issues or email.',
            'support.contact.btn_issue': 'Report on GitHub Issues',
            'support.contact.btn_mail': 'Contact via Email',

            // Privacy
            'privacy.hero.title': 'Privacy Policy',
            'privacy.hero.date': 'Last Revised: October 12, 2026',
            'privacy.s1.title': '1. Fundamental Principles',
            'privacy.s1.p1': 'The OmniWarpHelm Project is built with user privacy and data security as our top priorities. Designed primarily for local-network utilities, the software does not collect, track, or leak personal data.',
            'privacy.s1.p2': 'We strictly adhere to this Privacy Policy to ensure complete trust and safety for all users.',
            'privacy.s2.title': '2. Data We Do NOT Collect',
            'privacy.s2.p1': 'OmniWarpHelm does NOT collect, store, or transmit the following information to external servers:',
            'privacy.s2.li1': '<strong>Keystrokes and Mouse Inputs:</strong> Used solely in real-time to control target PCs; never logged to disk or uploaded.',
            'privacy.s2.li2': '<strong>Clipboard Contents and Transferred Files:</strong> Encrypted and exchanged exclusively between devices on the same local network; never sent to external cloud storage.',
            'privacy.s2.li3': '<strong>Personally Identifiable Information:</strong> We do not collect names, email addresses, location data, or device unique identifiers.',
            'privacy.s2.li4': '<strong>Screen Text Recognition (OCR) Data:</strong> In standard mode, Windows built-in OCR operates entirely on-device (offline). Only when the user explicitly enables optional Google Gemini API integration will selected image snippets be sent directly to Google API endpoints via HTTPS. Data is never routed through or stored on project servers.',
            'privacy.s3.title': '3. Network Security & Encryption',
            'privacy.s3.p1': 'All inter-PC communications (mouse/keyboard events, clipboard, screen mirror frames) are protected with strong AES-256 encryption.',
            'privacy.s3.p2': 'All communications occur directly peer-to-peer over the local network without passing through third-party servers.',
            'privacy.s4.title': '4. Website Analytics',
            'privacy.s4.p1': 'This product website may use standard anonymous cookies to assess website traffic and improve usability. All collected data is anonymized and cannot identify individual users. You may disable cookies via your browser settings.',
            'privacy.s5.title': '5. Contact Information',
            'privacy.s5.p1': 'If you have any questions or feedback regarding this Privacy Policy, please contact us via GitHub repository Issues.'
        }
    };

    function resolveLang(requested) {
        if (requested === 'ja' || requested === 'en') return requested;
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'ja' || stored === 'en') return stored;
        const nav = (navigator.language || '').toLowerCase();
        return nav.startsWith('ja') ? 'ja' : 'en';
    }

    function t(lang, key) {
        return (T[lang] && T[lang][key]) ?? (T[DEFAULT_LANG] && T[DEFAULT_LANG][key]) ?? key;
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const val = t(lang, key);
            if (val !== undefined && val !== null) {
                el.textContent = val;
            }
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            const val = t(lang, key);
            if (val !== undefined && val !== null) {
                el.innerHTML = val;
            }
        });
        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            const key = el.getAttribute('data-i18n-alt');
            const val = t(lang, key);
            if (val !== undefined && val !== null) {
                el.setAttribute('alt', val);
            }
        });
        document.querySelectorAll('[data-i18n-src]').forEach((el) => {
            const key = el.getAttribute('data-i18n-src');
            const val = t(lang, key);
            if (val !== undefined && val !== null) {
                el.setAttribute('src', val);
            }
        });
        document.querySelectorAll('[data-i18n-href]').forEach((el) => {
            const key = el.getAttribute('data-i18n-href');
            const val = t(lang, key);
            if (val !== undefined && val !== null) {
                el.setAttribute('href', val);
            }
        });
        document.querySelectorAll('[data-set-lang]').forEach((btn) => {
            const active = btn.getAttribute('data-set-lang') === lang;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function init(options) {
        const params = new URLSearchParams(window.location.search);
        const lang = resolveLang(params.get('lang'));
        if (options && options.page) {
            const titleKey = 'meta.' + options.page + '.title';
            const descKey = 'meta.' + options.page + '.description';
            const pageTitle = t(lang, titleKey);
            if (pageTitle && pageTitle !== titleKey) {
                document.title = pageTitle;
            }
            const meta = document.querySelector('meta[name="description"]');
            if (meta) {
                const pageDesc = t(lang, descKey);
                if (pageDesc && pageDesc !== descKey) {
                    meta.setAttribute('content', pageDesc);
                }
            }
        }
        applyLang(lang);
        document.querySelectorAll('[data-set-lang]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const targetLang = btn.getAttribute('data-set-lang');
                applyLang(targetLang);
                if (options && options.page) {
                    const titleKey = 'meta.' + options.page + '.title';
                    const descKey = 'meta.' + options.page + '.description';
                    const pageTitle = t(targetLang, titleKey);
                    if (pageTitle && pageTitle !== titleKey) {
                        document.title = pageTitle;
                    }
                    const meta = document.querySelector('meta[name="description"]');
                    if (meta) {
                        const pageDesc = t(targetLang, descKey);
                        if (pageDesc && pageDesc !== descKey) {
                            meta.setAttribute('content', pageDesc);
                        }
                    }
                }
            });
        });
    }

    window.SiteI18n = { init, applyLang, t };
})();
