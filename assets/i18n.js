/**
 * Omni Series Portal - Internationalization (i18n) Module
 * Supports Japanese (ja) and English (en) with localStorage persistence and cross-app sync.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'omni-site-lang';
    const ALT_STORAGE_KEYS = ['ope-site-lang', 'owh-site-lang'];

    const TRANSLATIONS = {
        ja: {
            'meta.title': 'Omni Series - Windows プロフェッショナルのための統合ワークスペース＆高機能ユーティリティ',
            'meta.description': 'Windowsネイティブの超高速体験。単体で軽快に動く専用ツール群と、すべてを1画面に集約する統合ワークスペース OmniPane Explorer。WinSolutionsがお届けするOmniシリーズ総合ポータル。',
            'nav.products': '製品ラインナップ',
            'nav.op_desc': '統合多窓ワークスペース・旗艦アプリ',
            'nav.wh_desc': 'マウス・キーボード共有＆ワープ',
            'nav.fs_desc': '巨大CSV・ログ超高速フィルター',
            'nav.db_desc': '次世代データベースクライアント',
            'nav.ecosystem': 'エコシステム',
            'nav.concept': 'コンセプト',
            'nav.try_op': 'OmniPane を試す',
            'hero.badge': 'Windows 11 / 10 専用・ネイティブ設計',
            'hero.title': 'Windows の可能性を極限まで引き出す、<br class="hidden sm:inline"><span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">プロフェッショナルのための Omni シリーズ</span>',
            'hero.desc': '単体で軽快に動作する専用特化ツール群と、すべてを 1 画面の多窓コックピットに集約する統合母艦 <strong>OmniPane Explorer</strong>。<br class="hidden sm:inline">無駄なランタイム依存を排除し、C++ / C# の圧倒的な高速レスポンスとローカル完結の安心感を提供します。',
            'hero.btn_products': '製品ラインナップを見る',
            'hero.btn_concept': '統合コンセプトを読む',
            'lineup.kicker': 'Lineup',
            'lineup.title': 'Omni シリーズ製品群',
            'lineup.desc': '目的の作業に特化した専用ツールを単体で導入することも、OmniPane Explorer で統合することも可能です。',
            'card.op.status': '公開中（v1.1.21）',
            'card.op.title': 'OmniPane Explorer',
            'card.op.role': '統合多窓ワークスペース・Omniシリーズ旗艦母艦',
            'card.op.desc': 'エクスプローラー多窓で消耗する日々を解消。最大4ペイン分割・自由なタブ配置・高速プレビュー・内蔵ターミナルを集約。Omniシリーズの全ツールをプラグインとして1画面に統合するメインコックピットです。',
            'card.op.f1': '✓ 4ペイン分割・タグ管理・ミリ秒インデックス検索',
            'card.op.f2': '✓ 各種ファイルプレビュー（PDF, Office, Markdown, 画像, 動画）',
            'card.op.f3': '✓ Community 版無料（Microsoft Store にて配信中）',
            'card.op.btn_detail': '製品詳細を見る',
            'card.op.btn_store': 'Store で入手',
            'card.wh.status': '近日公開予定（v1.2.0）',
            'card.wh.title': 'Omni Warp Helm',
            'card.wh.role': '超低遅延マウス・キーボード共有 ＆ 画面ワープ',
            'card.wh.desc': 'マウス1つで複数台のPCをシームレスに操舵。外部クラウドを介さず同一LAN内で暗号化通信。さらに1台のPCでも最前面アプリ入替、超低遅延画面ミラーリング、画面OCR、UAC管理者ダイアログ操作まで完備。',
            'card.wh.f1': '✓ 単体マルチモニタ支援（アプリ入替・ダイアログ磁石・画面端境界ロック）',
            'card.wh.f2': '✓ AES-256 暗号化通信・UAC管理者確認ダイアログ操作対応',
            'card.wh.f3': '✓ Community 版完全無料 / Pro 版（月額¥580 / 年額¥5,800）',
            'card.wh.btn_detail': '製品詳細を見る',
            'card.wh.store_prep': 'Microsoft Store 申請準備中',
            'card.fs.status': '開発進行中',
            'card.fs.title': 'Omni File Studio',
            'card.fs.role': '巨大CSV・ログ特化 超高速フィルターエディタ',
            'card.fs.desc': 'Excelや一般的なエディタでは開けないギガバイト級のCSVやサーバーログを瞬時にオープン。ピーステーブルによるメモリ消費最小化、リアルタイム正規表現フィルター、ピボット集計をネイティブ速度で処理。',
            'card.fs.f1': '✓ 数GBの巨大ファイルも待たずに即時ロード',
            'card.fs.f2': '✓ 非同期マルチスレッドインデックス・瞬時の列抽出',
            'card.fs.f3': '✓ OmniPane Explorer 内で直接プラグインとしても動作',
            'card.fs.btn_teaser': '予告ページを見る',
            'card.win_only': 'Windows 専用',
            'card.db.status': '開発進行中',
            'card.db.title': 'Omni Db Client',
            'card.db.role': '軽快操作・視認性特化型 次世代DBクライアント',
            'card.db.desc': '重厚長大なデータベース管理ツールから解放。軽量・高レスポンスで各種リレーショナルデータベースに接続し、クエリ実行・データ閲覧・エクスポートを直感的にこなすスマートなデータコンソール。',
            'card.db.f1': '✓ 起動1秒の超軽快レスポンス',
            'card.db.f2': '✓ 各種DB（PostgreSQL, MySQL, SQLite, SQL Server）対応予定',
            'card.db.f3': '✓ OmniPane 内でのテーブル参照・CSV連携とシームレス結合',
            'card.db.btn_teaser': '予告ページを見る',
            'eco.kicker': 'Ecosystem',
            'eco.title': '単体で自立し、OmniPane で繋がる設計思想',
            'eco.desc': 'Omniシリーズは「単機能で使いたいユーザー」と「全環境を統合したいプロフェッショナル」の双方に寄り添うハイブリッド設計です。',
            'eco.c1.title': '単体アプリとして即戦力',
            'eco.c1.desc': '「マウス共有だけ使いたい」「巨大CSVだけ開きたい」場合、各ツールは余計な連携なしにスタンドアロンで軽量動作します。',
            'eco.c2.title': 'OmniPane が統合ハブになる',
            'eco.c2.desc': 'OmniPane Explorer を起動すると、ファイル整理しながら隣のペインで巨大CSVを解析し、別PCの画面を覗き見ることができます。',
            'eco.c3.title': 'ローカル完結・外部通信ゼロ',
            'eco.c3.desc': 'すべての通信・処理は自PCおよび同一ローカルLAN内で完結。外部の謎のサーバーにデータが送信される心配は一切ありません。',
            'footer.copyright': '© 2026 WinSolutions. All rights reserved.'
        },
        en: {
            'meta.title': 'Omni Series - Integrated Workspace & High-Performance Utilities for Windows',
            'meta.description': 'Ultra-fast Windows native performance. Lightweight standalone tools and OmniPane Explorer, the flagship multi-pane integrated cockpit by WinSolutions.',
            'nav.products': 'Products',
            'nav.op_desc': 'Integrated multi-pane workspace & flagship app',
            'nav.wh_desc': 'Mouse & keyboard sharing with screen warp',
            'nav.fs_desc': 'Ultra-fast filter for massive CSVs & logs',
            'nav.db_desc': 'Next-generation lightweight DB client',
            'nav.ecosystem': 'Ecosystem',
            'nav.concept': 'Concept',
            'nav.try_op': 'Try OmniPane',
            'hero.badge': 'Windows 11 / 10 Dedicated • Native Architecture',
            'hero.title': 'Unleashing the Full Power of Windows,<br class="hidden sm:inline"><span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Engineered for Demanding Professionals</span>',
            'hero.desc': 'Dedicated high-speed tools that run standalone, combined with <strong>OmniPane Explorer</strong>, the flagship cockpit that unifies your entire workflow into one screen.<br class="hidden sm:inline">Zero heavy runtime bloat, lightning-fast C++/C# response, and 100% local privacy.',
            'hero.btn_products': 'Explore Product Lineup',
            'hero.btn_concept': 'Read Ecosystem Concept',
            'lineup.kicker': 'Lineup',
            'lineup.title': 'The Omni Series Family',
            'lineup.desc': 'Use each specialized utility standalone, or unify them all inside the OmniPane Explorer cockpit.',
            'card.op.status': 'Available Now (v1.1.21)',
            'card.op.title': 'OmniPane Explorer',
            'card.op.role': 'Flagship Multi-Pane Integrated Workspace',
            'card.op.desc': 'Eliminate File Explorer window clutter. Up to 4 split panes, custom tabs, instant previews, and integrated terminal in a single window. The central cockpit that docks all Omni series tools.',
            'card.op.f1': '✓ 4 split panes, tag management, millisecond index search',
            'card.op.f2': '✓ Built-in previews (PDF, Office, Markdown, images, video)',
            'card.op.f3': '✓ Free Community edition (available on Microsoft Store)',
            'card.op.btn_detail': 'View Product Details',
            'card.op.btn_store': 'Get on Store',
            'card.wh.status': 'Coming Soon (v1.2.0)',
            'card.wh.title': 'Omni Warp Helm',
            'card.wh.role': 'Ultra Low-Latency KM Sharing & Screen Warp',
            'card.wh.desc': 'Seamlessly control multiple PCs with a single mouse and keyboard. Encrypted local LAN communication with zero external servers. Plus single-PC tools: window swap, screen mirroring, OCR, and UAC prompt handling.',
            'card.wh.f1': '✓ Single-PC multi-monitor tools (app swap, dialog magnet, border lock)',
            'card.wh.f2': '✓ AES-256 encryption & UAC administrator prompt support',
            'card.wh.f3': '✓ 100% Free Community / Pro (¥580/mo or ¥5,800/yr)',
            'card.wh.btn_detail': 'View Product Details',
            'card.wh.store_prep': 'Preparing for Microsoft Store',
            'card.fs.status': 'In Active Development',
            'card.fs.title': 'Omni File Studio',
            'card.fs.role': 'Ultra-Fast Filter & Editor for Gigabyte CSVs & Logs',
            'card.fs.desc': 'Instantly open gigabyte-scale CSVs and server logs that crash Excel or standard editors. Piece-table memory optimization, real-time regex filtering, and native pivot aggregation.',
            'card.fs.f1': '✓ Zero-wait instant load for gigabyte-scale files',
            'card.fs.f2': '✓ Async multi-thread indexing & instant column extraction',
            'card.fs.f3': '✓ Runs standalone or docked directly in OmniPane Explorer',
            'card.fs.btn_teaser': 'View Preview Page',
            'card.win_only': 'Windows Only',
            'card.db.status': 'In Active Development',
            'card.db.title': 'Omni Db Client',
            'card.db.role': 'Next-Gen Lightweight & High-Visibility DB Console',
            'card.db.desc': 'Break free from heavy, slow database IDEs. Connect to relational databases in 1 second, run queries, inspect schemas, and export data with an intuitive, clutter-free console.',
            'card.db.f1': '✓ 1-second instant startup with ultra-low memory footprint',
            'card.db.f2': '✓ Planned support: PostgreSQL, MySQL, SQLite, SQL Server',
            'card.db.f3': '✓ Seamless table preview & CSV integration inside OmniPane',
            'card.db.btn_teaser': 'View Preview Page',
            'eco.kicker': 'Ecosystem',
            'eco.title': 'Independent by Design, Unified by OmniPane',
            'eco.desc': 'The Omni Series embraces a hybrid philosophy: zero overhead when you only need a single tool, unmatched synergy when you want total workflow unification.',
            'eco.c1.title': 'Ready as Standalone Apps',
            'eco.c1.desc': 'If you only need KM sharing or fast CSV filtering, each app runs independently with zero unnecessary background services.',
            'eco.c2.title': 'OmniPane as the Central Hub',
            'eco.c2.desc': 'Launch OmniPane Explorer to organize files, analyze giant CSVs, and monitor other PCs side-by-side in separate panes.',
            'eco.c3.title': '100% Local & Zero Cloud Leaks',
            'eco.c3.desc': 'All communication and processing stay strictly on your local PC or private LAN. No data is ever sent to unknown external servers.',
            'footer.copyright': '© 2026 WinSolutions. All rights reserved.'
        }
    };

    function resolveLanguage(requested) {
        if (requested === 'ja' || requested === 'en') return requested;
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'ja' || stored === 'en') return stored;
        for (const altKey of ALT_STORAGE_KEYS) {
            const altStored = localStorage.getItem(altKey);
            if (altStored === 'ja' || altStored === 'en') return altStored;
        }
        const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
        return nav.startsWith('ja') ? 'ja' : 'en';
    }

    function applyLanguage(lang) {
        const dict = TRANSLATIONS[lang] || TRANSLATIONS.ja;
        document.documentElement.lang = lang;

        // Meta tags
        if (dict['meta.title']) document.title = dict['meta.title'];
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta && dict['meta.description']) descMeta.setAttribute('content', dict['meta.description']);

        // Data attributes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
        });

        // Update toggle buttons
        document.querySelectorAll('[data-set-lang]').forEach(btn => {
            const btnLang = btn.getAttribute('data-set-lang');
            const isActive = btnLang === lang;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        // Persist
        localStorage.setItem(STORAGE_KEY, lang);
        for (const altKey of ALT_STORAGE_KEYS) {
            localStorage.setItem(altKey, lang);
        }
    }

    function init() {
        const initialLang = resolveLanguage();
        applyLanguage(initialLang);

        document.addEventListener('click', e => {
            const btn = e.target.closest('[data-set-lang]');
            if (!btn) return;
            e.preventDefault();
            const targetLang = btn.getAttribute('data-set-lang');
            applyLanguage(targetLang);
        });
    }

    window.OmniI18n = {
        init: init,
        setLang: applyLanguage,
        getLang: resolveLanguage
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

