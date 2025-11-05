# HP Mock Sample - CLAUDE.md

このファイルは、Claude Codeの将来のインスタンスがこのプロジェクトを理解し、効率的に作業するための情報をまとめています。

## プロジェクト概要

業種別のホームページモックを迅速に提供するNext.js + TypeScriptアプリケーションです。会社情報を入力し、業種（不動産・中古車等）とプラン（Standard・Premium）を選択すると、その情報が反映されたモックサイトをプレビューできます。

### 開発状況

**Phase 0-10: 完了**（2025年11月5日時点）
- ✅ 全76テストが通過
- ✅ ビルド成功（SSG対応）
- ✅ 不動産・中古車の2業種実装済み
- ✅ Standard/Premium の2プラン実装済み

## よく使うコマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド（静的生成確認）
npm run build

# 全テスト実行
npm test

# 特定のテストのみ実行
npm test -- ファイル名.test.tsx

# テスト（watch mode）
npm run test:watch

# リンター実行
npm run lint
```

## アーキテクチャの重要ポイント

### 1. サーバーコンポーネントとクライアントコンポーネントの分離

**重要**: Next.js App Routerでは、`'use client'`を使用しているページで`generateStaticParams`を使用できません。

**現在の実装**:
- **Server Component** (`src/app/[industry]/[plan]/page.tsx`)
  - URLパラメータのバリデーション
  - `generateStaticParams`によるSSG
  - クライアントコンポーネントに処理を委譲

- **Client Component** (`src/components/IndustryPlanClient.tsx`)
  - `useCompanyInfo`フックの使用
  - LocalStorageからのデータ読み込み
  - 業種別ページコンポーネントのレンダリング

この分離により、SSGとクライアントサイドのフック（LocalStorage）の両立を実現しています。

### 2. TDD（テスト駆動開発）ワークフロー

このプロジェクトは厳格なTDDで開発されています。

**手順**:
1. **RED**: テストを先に作成し、実行して失敗を確認
2. **GREEN**: テストが通る最小限の実装を追加
3. **REFACTOR**: コードの品質を向上（テストは変更しない）
4. コミット

**重要**: 新機能や修正を追加する際は、必ずこの順序を守ってください。

**コミットタイミング**:
- テスト作成後（失敗を確認後）
- 実装完了後（全テスト通過後）

### 3. LocalStorageによる状態管理

会社情報はLocalStorageに永続化されています。

**キー**: `companyInfo`

**カスタムフック**: `useCompanyInfo`
- `companyInfo`: 現在の会社情報
- `updateCompanyInfo`: 更新関数
- `isLoaded`: LocalStorageからの読み込み完了フラグ（重要）

**注意**: クライアントコンポーネントで`isLoaded`が`false`の間はローディング表示が必要です。

### 4. 業種の拡張性

新しい業種を追加する際の手順:

1. **型定義** (`src/types/{industry}.ts`)
   - 業種固有のデータモデルを定義

2. **業種定数の追加** (`src/types/plan.ts`)
   ```typescript
   export const INDUSTRIES = {
     REAL_ESTATE: 'real-estate',
     USED_CAR: 'used-car',
     NEW_INDUSTRY: 'new-industry', // 追加
   } as const;
   ```

3. **業種設定** (`src/lib/industryConfig.ts`)
   - 業種名、説明、カラースキーム等を追加

4. **ページコンポーネント** (`src/components/{Industry}Page.tsx`)
   - 業種別のページコンポーネントを作成
   - `companyInfo`と`plan`をpropsで受け取る
   - `PremiumFeatures`コンポーネントで機能を条件分岐

5. **IndustryPlanClientの更新**
   - switch文に新しい業種のcaseを追加

6. **テストの作成**
   - `__tests__/{Industry}Page.test.tsx`を作成
   - Standard/Premiumの両方をテスト

7. **`generateStaticParams`の自動対応**
   - `INDUSTRIES`に追加すれば、自動的に4つのルート（standard/premium）が生成される

### 5. プランの条件分岐

**PremiumFeatures コンポーネント**を使用:

```tsx
import { PremiumFeatures } from '@/components/PremiumFeatures';

<PremiumFeatures plan={plan}>
  {/* Premium専用機能 */}
  <BlogSection />
  <NewsSection />
</PremiumFeatures>
```

**または**、`usePlan`フックを使用:

```tsx
const { isPremium, features } = usePlan(plan);

{isPremium && <BlogSection />}
{features.hasCMS && <CMSSection />}
```

### 6. Framer Motionのアニメーション

**基本パターン**:

```tsx
import { motion } from 'framer-motion';

// ページ遷移
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// スクロールトリガー
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
>

// ホバーエフェクト
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

**注意**: テストで`IntersectionObserver`のモックが必要（`jest.setup.js`に実装済み）

## ファイル構成

```
mock_sample/
├── src/
│   ├── app/
│   │   ├── [industry]/[plan]/
│   │   │   └── page.tsx              # 動的ルート（Server Component）
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # トップページ
│   │   └── globals.css
│   ├── components/
│   │   ├── BaseLayout.tsx            # Header + Footer レイアウト
│   │   ├── CompanyInfoForm.tsx       # 会社情報入力フォーム
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── IndustryPlanClient.tsx    # クライアントコンポーネント
│   │   ├── IndustryPlanSelector.tsx  # 業種・プラン選択UI
│   │   ├── PremiumFeatures.tsx       # Premium機能の条件付き表示
│   │   ├── RealEstatePage.tsx        # 不動産ページ
│   │   └── UsedCarPage.tsx           # 中古車ページ
│   ├── hooks/
│   │   ├── useCompanyInfo.ts         # LocalStorage連携
│   │   └── usePlan.ts                # プラン機能管理
│   ├── lib/
│   │   ├── defaultCompanyInfo.ts
│   │   ├── formatters.ts             # 住所・価格等のフォーマット
│   │   ├── industryConfig.ts         # 業種別設定
│   │   ├── planUtils.ts              # プラン判定ユーティリティ
│   │   └── validation.ts             # バリデーション
│   └── types/
│       ├── cms.ts
│       ├── index.ts                  # CompanyInfo型
│       ├── plan.ts                   # Industry, Plan, PlanFeatures型
│       ├── real-estate.ts
│       └── used-car.ts
├── __tests__/                        # 各ファイルに対応するテスト
├── docs/
│   ├── プラン機能設計.md
│   ├── 実装仕様.md                   # 詳細な実装仕様
│   └── 作業計画書.md
├── temp_YYYYMMDD_HHmmss.md           # 作業ログ（git管理外）
├── jest.config.js
├── jest.setup.js                     # IntersectionObserver mock等
├── postcss.config.mjs                # @tailwindcss/postcss使用
└── package.json
```

## 重要なパターンとルール

### 1. 型安全性

- すべての型は`src/types/`で定義
- `as const`を使用した型推論の活用
- プロパティは可能な限り具体的に型付け

### 2. コンポーネント設計

- **Props型は必ず定義**（JSDocコメント付き）
- **機能ごとに分離**（責任の明確化）
- **再利用性を考慮**（共通部分は抽出）

### 3. テストの命名規則

```typescript
describe('ComponentName', () => {
  test('should render correctly', () => {});
  test('should handle user interaction', () => {});
  test('should validate input', () => {});
});
```

### 4. コミットメッセージ

```
test: Add tests for {機能名}
feat: Implement {機能名}
fix: Fix {問題の説明}
refactor: Refactor {対象}
```

日本語コミットメッセージも可。

### 5. コメントの記載

- すべてのコンポーネント、関数にJSDocコメント（日本語）を記載
- 複雑なロジックには行コメントで補足

## よくあるエラーと対処法

### 1. IntersectionObserver is not defined

**原因**: Framer Motionの`whileInView`がテスト環境で動作しない

**対処**: `jest.setup.js`にモックを追加済み（既に解決済み）

### 2. Cannot use 'use client' with generateStaticParams

**原因**: サーバーコンポーネントとクライアントコンポーネントが混在

**対処**: Server ComponentとClient Componentを分離（現在の実装参照）

### 3. Multiple elements found

**原因**: `getByText`が複数の要素を検出（例: 会社名がHeaderとFooterに存在）

**対処**:
- `getAllByText`を使用して配列の長さをチェック
- `getByRole('heading')`等でより具体的に指定

### 4. Tailwind CSS PostCSS plugin error

**原因**: Tailwind CSS v4ではPostCSSプラグインが別パッケージに分離

**対処**: `@tailwindcss/postcss`をインストール済み（`postcss.config.mjs`で使用）

### 5. LocalStorageが空の場合

**原因**: 初回アクセス時やPrivateモード

**対処**: `useCompanyInfo`がデフォルト値を返す設計（既に実装済み）

## ドキュメント参照先

- **README.md**: プロジェクト概要、セットアップ方法、使用方法
- **docs/実装仕様.md**: 詳細な技術仕様、コンポーネント設計
- **docs/作業計画書.md**: 開発フェーズの詳細計画
- **docs/プラン機能設計.md**: Standard/Premiumの機能差分
- **temp_YYYYMMDD_HHmmss.md**: 作業ログ（最新の修正内容）

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (@tailwindcss/postcss)
- **Framer Motion**
- **Jest + React Testing Library**
- **LocalStorage** (状態管理)

## 今後の拡張予定

### 追加業種（優先順位順）
1. 建設業
2. 美容院
3. 飲食店
4. 医療機関
5. 士業
6. ECサイト

### 機能拡張
- 実際のCMS連携
- お問い合わせフォームの送信機能
- カラーテーマのカスタマイズ
- PDF出力機能
- SEO最適化

## 開発時の注意事項

1. **必ずTDDで進める**: テストファースト、実装はセカンド
2. **既存のテストを変更しない**: 実装側を修正する
3. **作業ログを必ず作成**: `temp_YYYYMMDD_HHmmss.md`（日本時間）
4. **型安全性を維持**: `any`は使用禁止
5. **コメントは日本語**: コード内のコメントは日本語で記載
6. **レスポンシブ対応**: モバイルファースト設計を維持

## トラブルシューティング

問題が発生した場合の確認順序:

1. **テストの実行**: `npm test`で全テストが通過するか確認
2. **ビルドの確認**: `npm run build`でビルドエラーがないか確認
3. **型エラーの確認**: エディタのTypeScriptエラーを確認
4. **ドキュメントの参照**: `docs/`内の仕様書を確認
5. **最新の作業ログ確認**: `temp_*.md`で最近の変更内容を確認

---

**最終更新**: 2025年11月5日
**プロジェクト状態**: Phase 0-10 完了、本番運用可能
