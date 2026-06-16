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
