# EurekaOrange Design System — プロジェクト振り返り

> Claude Design で生成されたデザインドキュメント群を、**完全な npm パッケージ + 公開ドキュメントサイト**まで仕上げた記録。

**期間**: 2026-05-03 〜 2026-05-05
**最終バージョン**: `v1.0.0`

---

## 🎯 ゴール

「Claude Design で出力された HTML ベースのデザインドキュメント」を以下に進化させる：

1. **整合性の取れたトークン定義**
2. **再利用可能な React コンポーネントライブラリ**
3. **公式ドキュメントサイト（GitHub Pages + Storybook）**
4. **npm に公開された配布パッケージ**

---

## 📦 最終成果物

| 種別 | URL |
|------|-----|
| **npm パッケージ** | https://www.npmjs.com/package/@eurekaorange/design-system |
| **GitHub リポジトリ** | https://github.com/Syo-M/EurekaOrange-DesignSystem |
| **GitHub Pages（HTML ドキュメント）** | https://syo-m.github.io/EurekaOrange-DesignSystem/ |
| **Storybook（コンポーネントカタログ）** | https://syo-m.github.io/EurekaOrange-DesignSystem/storybook/ |

### インストール方法

```bash
npm install @eurekaorange/design-system
```

```tsx
import { Button, Badge, Card } from '@eurekaorange/design-system';
import '@eurekaorange/design-system/css';
```

---

## 🗂️ 実施した作業（Phase 別）

### Phase C-4: トークン整合性監査 ✅

複数の HTML / CSS ファイルにまたがるトークン定義の不一致を解消。

#### 主な修正
- **リブランド残骸の修正**: `--eo-orange-*` → `--eo-jade-*` （`tokens.html`）
- **角丸サイズの統一**:
  - CSS: `xl=16, 2xl=20`
  - Figma export: `xl=20, 2xl=32` ← CSS に合わせて修正
- **不足トークンの追加**:
  - スペーシング: `7, 9, 14, 28, 32` を追加
  - 半径: `3xl=28, 4xl=32` を追加
  - シャドウ: `xs` を追加
  - セマンティック: `accent-text`, `status-*`, `accent/glow` を追加
- **選択色（`::selection`）** をオレンジ → ジェードに

#### 影響ファイル
- `eureka-orange.css`（source of truth）
- `tokens.html`
- `figma-variables.html`
- `light-mode-tokens.html`

---

### Phase C-1: 不足コンポーネント追加 ✅

`components.html` に **10個のコンポーネント**を追加。同一ファイル内の3つの新セクションに集約。

#### 追加されたコンポーネント

| Section | コンポーネント | 特徴 |
|---------|----------------|------|
| **08 Overlays** | Tooltip × 4 placements | top/bottom/left/right |
| | Dropdown Menu | `aria-haspopup`, `aria-expanded`, Escape, outside-click |
| | Popover | アロー付き, `role="dialog"` |
| **09 Tabs & Auxiliary** | Underline Tabs | `role=tablist/tab/tabpanel`, `aria-selected`, badge counter |
| | Breadcrumb | `<nav>` landmark, `aria-current` |
| | Pagination | 省略アルゴリズム, `aria-current`, disabled states |
| **10 Display** | Avatar (4 sizes) | Initial fallback |
| | Avatar Group | オーバーラップ + `+N` indicator |
| | Status Avatar | online/away/offline ドット |
| | Skeleton | shimmer CSS animation |
| | Accordion | max-height アニメーション, `aria-expanded` |

#### 既存セクション（保持）
01 Buttons / 02 Badges / 03 Forms / 04 Cards / 05 Tables / 06 Modals / 07 Toasts

---

### Phase C-2: アクセシビリティ監査・修正 ✅

WCAG AA 準拠を目指して全面的に修正。

#### 主な修正

##### コントラスト比（WCAG AA: 4.5:1 以上）
- ダークモード `--eo-text-tertiary`: `#6e6d63` (3.93:1) → **`#84837a` (5.0:1)** ✅
- ライトモード `--eo-accent-text`: 新規追加 → `#066b51` (jade-700, 5.5:1) ✅

##### フォーカス管理
- `:focus-visible`: outline-offset 2 → 3, `border-radius: 2px` 追加
- `:focus:not(:focus-visible) { outline: none; }` でマウス時の不要なフォーカスリングを抑制

##### スキップリンク & SR-only ユーティリティ
```css
.eo-skip-link    /* フォーカス時のみ表示される「Skip to main content」 */
.eo-sr-only      /* スクリーンリーダーのみ */
```

##### ARIA 属性の追加
- すべての Modal: `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`
- Drawer の閉じるボタン: `aria-label="Close drawer"`
- Sidebar: `<div>` → **`<nav aria-label="Component sections">`**
- 検索ボックス: `<label class="eo-sr-only">` 関連付け
- Modal/Drawer: Escape キーで閉じる `useEffect` 実装

##### ランドマーク
- `<main id="main-content" tabIndex={-1}>` を主要ページに追加

---

### Phase C-5: Storybook + React コンポーネントライブラリ ✅

**Option B（React 化）** を選択。Vite ライブラリモードで配布パッケージを構築。

#### 環境構築
```
.storybook/
  main.ts        # Storybook config (react-vite + autodocs)
  preview.ts     # CSS import, withThemeByDataAttribute (dark/light切替)
src/
  index.ts       # パッケージエントリ（5コンポーネント export）
  utils/cn.ts    # classname helper
  components/
    Button/
    Badge/
    Input/
    Toggle/
    Card/
  Welcome.stories.tsx
  Tokens.stories.tsx
tsconfig.json + tsconfig.build.json
vite.config.ts   # ESM + CJS + .d.ts 出力
```

#### 実装した React コンポーネント（5つ）

| コンポーネント | バリアント / サイズ | 特徴 |
|---------------|---------------------|------|
| **Button** | 4 variants × 5 sizes | `forwardRef`, leadingIcon/trailingIcon, iconOnly, round |
| **Badge** | 6 variants | default / success / warning / danger / info / outline |
| **Input** | — | label / hint / error, prefix / suffix slots, `aria-invalid` |
| **Toggle** | — | native checkbox-based, label + description |
| **Card** | sm/md/lg + glow | accent glow option |

#### 詰まったポイント
**TypeScript 型衝突**: `InputProps extends InputHTMLAttributes<HTMLInputElement>` で `prefix` プロパティが衝突
（`HTMLInputElement.prefix: string` vs 自前の `prefix: ReactNode`）

**解決**: `Omit` で除外して再宣言
```typescript
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  // ...
}
```

#### Storybook
- `.storybook/preview.ts` で `@storybook/addon-themes` の `withThemeByDataAttribute` を使い、`data-theme="dark"|"light"` を切替
- `Welcome.stories.tsx` でランディングページ
- `Tokens.stories.tsx` で Colors / Spacing / Radius のビジュアル一覧

---

### Phase E: ナビゲーション統一 ✅

12ページ（HTML）の各バラバラなナビを、**1ファイル `nav.js` に共通化**。

#### `nav.js` の特徴
- **自己完結型 CSS**: `eureka-orange.css` がなくても動く
- **z-index: 9000 / position: fixed**: 全ページで最上位に固定表示
- **グループ別ドロップダウン**:
  - Foundation: Tokens / Figma / Light-Dark
  - Components
  - Design: Brand / Icons / Grid / Motion
  - Product: Dashboard / Settings
- **テーマトグル**: 🌙/☀️ ボタン、`localStorage` で永続化、`prefers-color-scheme` 自動検出
- **アクティブページのハイライト**
- **キーボードアクセシビリティ**: Escape でドロップダウン閉じる、focus visible ring
- **レスポンシブ**: 640px 未満ではグループラベル非表示

#### 全ページに導入
12個の HTML ファイルすべてに `<script src="nav.js"></script>` を追加。
既存の手書きナビ（`index.html`, `grid.html`）を撤去。
`components.html` のサイドバーは `top: 52px` にオフセット（共通ナビ分のスペース確保）。

---

### Phase D: 配布・公開 ✅

#### 1. **README.md** 作成
- インストール手順
- 5コンポーネントすべての API ドキュメント（props テーブル + コード例）
- トークン一覧テーブル（Color / Semantic / Spacing / Radius / Typography）
- Tailwind 統合方法
- ダーク/ライトモード切替方法
- ビルド / 公開手順
- リポジトリ構造

#### 2. **package.json** 整備
```json
{
  "name": "@eurekaorange/design-system",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": { "types": "...", "import": "...", "require": "..." },
    "./css": "./eureka-orange.css",
    "./tailwind": "./tailwind.config.js"
  },
  "scripts": {
    "prepublishOnly": "npm run typecheck && npm run build",
    "release": "npm version patch && npm publish --access public"
  },
  "peerDependencies": { "react": ">=18", "react-dom": ">=18" }
}
```

#### 3. **GitHub Actions ワークフロー**
`.github/workflows/deploy.yml` を作成。`main` への push で：
1. `npm ci`
2. `typecheck`
3. `build-storybook`
4. HTML ページ + CSS + nav.js + Storybook を `_site/` に集約
5. GitHub Pages にデプロイ

#### 4. **Git 初期化 → GitHub push**
```bash
git init
git add .
git commit -m "Initial commit: EurekaOrange Design System v1.0.0"
git remote add origin https://github.com/Syo-M/EurekaOrange-DesignSystem.git
git push -u origin main
```
→ 41 ファイル / 16,453 行のコミットを push 完了

#### 5. **npm 公開**

詰まったポイント：
- **2FA 必須**: publish には常に OTP が必要
- **Security Key 認証**: TOTP アプリではなく Touch ID で 2FA 設定 → `--auth-type=web` フラグでブラウザ認証
- **スコープ未登録**: ユーザー名 `eureka_orange`（アンダースコア有り）に対し、パッケージスコープが `@eurekaorange`（無し） → `Scope not found`

解決：
1. https://www.npmjs.com/org/create で **`eurekaorange` 組織を新規作成**（無料）
2. `npm publish --access public --auth-type=web` 実行
3. ブラウザで Security Key 認証 → 公開成功 🎉

```
+ @eurekaorange/design-system@1.0.0
```

---

## 📊 数字で見るプロジェクト

| 項目 | 数値 |
|------|------|
| Git 初回コミット行数 | 16,453 行 |
| HTML ドキュメントページ数 | 12 ページ |
| React コンポーネント数 | 5 個 |
| Storybook ストーリー数 | 10+ 個 |
| `--eo-*` トークン数 | 200+ 個 |
| npm パッケージサイズ | 18.7 kB（packed） / 73.8 kB（unpacked） |
| 含まれるファイル | 15 ファイル |

---

## 🎓 学び・ハマったところメモ

### 1. TypeScript の `extends` における型互換性
HTML 標準属性（`HTMLInputElement.prefix: string`）と React 用 props を併用する場合、`Omit<...>` で衝突を避ける。

### 2. CSS variables を使った dark/light モード
`data-theme` 属性で切り替える方式は、JS のロジックがほぼ不要で、Tailwind との相性も良い。

### 3. WCAG AA コントラスト
`#6e6d63` のような淡いグレーは見た目で OK でも 3.93:1 で**未達**。**実測必須**。

### 4. npm 公開のスコープ
- スコープ名 = ユーザー名 or 組織名 という制約は意外と引っかかる
- ユーザー名にアンダースコアがあると、組織を別途作るのが結局スムーズ

### 5. Security Key（WebAuthn）と CLI publish
TOTP アプリと違って 6桁コードが生成されないので、`npm publish --auth-type=web` でブラウザ認証フローに乗せる。

### 6. fixed nav と既存レイアウト
`position: fixed; top: 0` の共通ナビを後付けで入れる場合、`body { padding-top: 52px }` と既存 sticky 要素の z-index 整理が必要。

---

## 🚀 今後の拡張アイデア

短期：
- [ ] `npm install` 後の動作確認（別プロジェクトから import）
- [ ] GitHub Pages のデプロイ確認
- [ ] バージョン `v1.0.1` のテストリリース

中期：
- [ ] コンポーネント追加（Toast, Modal, Dropdown を React 化）
- [ ] Vitest + Testing Library でユニットテスト
- [ ] `bundle-analyzer` でバンドルサイズ可視化
- [ ] CHANGELOG.md の自動生成（`changesets` 等）

長期：
- [ ] Figma プラグイン連携（Variables Sync）
- [ ] 追加テーマ（C-3）— 例: violet / amber / rose
- [ ] React Native 対応（`@eurekaorange/design-system-native`）
- [ ] Vue / Svelte ラッパー

---

## 📁 最終的なリポジトリ構造

```
ClaudeDesignDocs/
├── .github/workflows/
│   └── deploy.yml                 # GitHub Pages 自動デプロイ
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── .gitignore
├── README.md                       # 公開ドキュメント
├── PROJECT_RETROSPECTIVE.md        # ← この振り返りファイル
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
├── vite.config.ts
├── tailwind.config.js
├── eureka-orange.css               # ★ source of truth
├── nav.js                          # ★ 共通ナビ
├── src/
│   ├── index.ts                    # npm エントリポイント
│   ├── utils/cn.ts
│   ├── Welcome.stories.tsx
│   ├── Tokens.stories.tsx
│   └── components/
│       ├── Button/{Button.tsx, Button.stories.tsx}
│       ├── Badge/{Badge.tsx, Badge.stories.tsx}
│       ├── Input/{Input.tsx, Input.stories.tsx}
│       ├── Toggle/{Toggle.tsx, Toggle.stories.tsx}
│       └── Card/{Card.tsx, Card.stories.tsx}
└── *.html                          # 12個のドキュメントページ
    ├── index.html                  # ハブ
    ├── tokens.html
    ├── components.html
    ├── figma-variables.html
    ├── light-mode-tokens.html
    ├── brand-assets.html
    ├── icons.html
    ├── grid.html
    ├── motion.html
    ├── dashboard.html
    ├── settings.html
    ├── landing.html
    └── EurekaOrange Design System.html  # 元の生成ファイル
```

---

## 🙏 謝辞

このプロジェクトは Claude Design で生成された初期テンプレートを土台に、**Claude Code との対話を通じて段階的に育てた**ものです。

開始時点：
> 「このディレクトリは ClaudeDesign で作成したファイルが入っているものです。まず、このディレクトリ内をみて、どんなことができるのか提案してください。」

完了時点：
> 「+ @eurekaorange/design-system@1.0.0」（npm publish 成功）

---

**EurekaOrange Design System v1.0.0** — 🎉 公開済み
