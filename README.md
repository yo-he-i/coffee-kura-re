# Coffee Kura Re — オンラインショップ

Next.js（App Router）+ TypeScript + Tailwind CSS で構築した、コーヒー豆オンラインショップの土台です。
現時点では表示のみで、決済・カート機能は未実装です。

## 開発サーバーの起動

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認してください。

## ページ構成

- `/` トップ（ブランドストーリー＋おすすめ豆）
- `/shop` 商品一覧
- `/shop/[slug]` 商品詳細
- `/about` 焙煎へのこだわり・プロフィール
- `/legal/tokushoho` 特定商取引法に基づく表記
- `/legal/privacy` プライバシーポリシー
- `/legal/terms` 利用規約
- `/shipping` 配送・返品について
- `/contact` お問い合わせ（メールリンク）

## 商品データ

`src/data/products.ts` に型付きの配列で保持しています。商品の追加・編集はこのファイルを直接更新してください。

## ビルド確認

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## GitHub Pages への公開

このリポジトリは静的書き出し（`output: 'export'`）に対応しており、`.github/workflows/deploy-pages.yml` から GitHub Pages へ自動デプロイできます。

### 初回セットアップ

1. GitHub のリポジトリ設定 → **Settings → Pages** で、Source を **GitHub Actions** に設定する。
2. このブランチを `main` にマージ（または `main` ブランチを作成）する。`main` への push をトリガーにワークフローが実行されます。
3. ワークフローが成功すると、`https://<ユーザー名>.github.io/coffee-kura-re/` で公開されます。

### 仕組み

- `next.config.ts` で `GITHUB_PAGES=true` のときだけ `basePath` / `assetPrefix` に `/coffee-kura-re` を付与しています（プロジェクトページとして公開するため）。
- `npm run build:gh-pages` で `GITHUB_PAGES=true` を付けてビルドし、`out/` に静的ファイルを生成します。
- `public/.nojekyll` により、GitHub Pages 側で `_next` などアンダースコア始まりのフォルダが無視されないようにしています。

### ローカルで書き出し結果を確認する

```bash
npm run build:gh-pages
npx serve out
```

※ ローカルで `npx serve out` する場合、`basePath` が付いた状態のリンクになるため、表示されるURLの末尾に `/coffee-kura-re/` を付けてアクセスしてください。
