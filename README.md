# EurekaOrange Design System

> Token-based React component library with dark/light mode, Storybook docs, and CSS custom properties.
>
> *トークンベースの React コンポーネントライブラリ。ダーク／ライトモード、Storybook ドキュメント、CSS カスタムプロパティに対応。*

[![npm version](https://img.shields.io/npm/v/@eurekaorange/design-system.svg)](https://www.npmjs.com/package/@eurekaorange/design-system)
[![license](https://img.shields.io/npm/l/@eurekaorange/design-system.svg)](LICENSE)
[![storybook](https://img.shields.io/badge/storybook-live-ff4785.svg)](https://eurekaorange.github.io/design-system/)

---

## Quick start / クイックスタート

```bash
npm install @eurekaorange/design-system
```

### 1 — Import the CSS tokens / CSSトークンを読み込む

```ts
// In your app entry point (e.g. main.tsx / index.ts)
// アプリのエントリポイント（main.tsx / index.ts など）に追加
import '@eurekaorange/design-system/css';
```

### 2 — Set a theme / テーマを設定する

Add `data-theme="dark"` (or `"light"`) to your `<html>` element. The default without the attribute is **dark**.

> `<html>` 要素に `data-theme="dark"`（または `"light"`）を指定します。属性がない場合のデフォルトは **dark** です。

```html
<html data-theme="dark">…</html>
```

### 3 — Use components / コンポーネントを使う

```tsx
import { Button, Badge, Input, Toggle, Card } from '@eurekaorange/design-system';

export default function App() {
  return (
    <Card glow>
      <Badge variant="success">Live</Badge>
      <h2>Hello EurekaOrange</h2>
      <Input label="Email" placeholder="you@example.com" />
      <Toggle label="Enable notifications" />
      <Button variant="primary">Get started →</Button>
    </Card>
  );
}
```

---

## Components / コンポーネント

| Component | Variants / Sizes | Description / 説明 |
|-----------|-----------------|-------------|
| `Button`  | 4 variants × 5 sizes | Primary, secondary, ghost, danger; icon-only + round modes<br>プライマリ／セカンダリ／ゴースト／デンジャー、アイコンのみ・円形モード対応 |
| `Badge`   | 6 variants | Default, success, warning, danger, info, outline<br>デフォルト／成功／警告／エラー／情報／アウトライン |
| `Input`   | — | Label, hint, error states; prefix / suffix slots<br>ラベル・ヒント・エラー状態、前後にアイコンスロット対応 |
| `Toggle`  | — | Native checkbox; label + optional description<br>ネイティブ checkbox、ラベル＋任意の説明文 |
| `Card`    | sm / md / lg + glow | Surface container with optional accent glow<br>サーフェスコンテナ、オプションでアクセントグロー |

### Button

```tsx
<Button variant="primary" size="md" leadingIcon={<PlusIcon />}>
  Create project
</Button>

<Button variant="ghost" size="sm" iconOnly round>
  <SearchIcon />
</Button>
```

**Props**

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `leadingIcon` | `ReactNode` — leading icon / 先頭アイコン | — |
| `trailingIcon` | `ReactNode` — trailing icon / 末尾アイコン | — |
| `iconOnly` | `boolean` — icon-only button / アイコンのみ表示 | `false` |
| `round` | `boolean` — fully rounded / 完全な円形 | `false` |
| `disabled` | `boolean` | `false` |

### Badge

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="danger">Error</Badge>
```

**Props** — `variant`: `'default' | 'success' | 'warning' | 'danger' | 'info' | 'outline'`

### Input

```tsx
<Input
  label="Search"
  placeholder="Type to search…"
  hint="Results update as you type"
  prefix={<SearchIcon />}
/>

<Input label="Password" error="Password must be at least 8 characters" />
```

**Props** — extends all `<input>` HTML attributes plus / `<input>` の HTML 属性をすべて継承し、以下を追加:

| Prop | Type | Description / 説明 |
|------|------|-------------------|
| `label` | `string` | Field label / フィールドラベル |
| `hint` | `string` | Helper text / 補足テキスト |
| `error` | `string` | Error message (overrides hint) / エラーメッセージ（hint より優先） |
| `prefix` | `ReactNode` | Left-side adornment / 左側のアイコン等 |
| `suffix` | `ReactNode` | Right-side adornment / 右側のアイコン等 |
| `containerClassName` | `string` | Wrapper class / 外側ラッパーのクラス |

### Toggle

```tsx
<Toggle label="Dark mode" description="Applies system-wide" defaultChecked />
```

### Card

```tsx
<Card size="md" glow>
  <p>Content goes here</p>
</Card>
```

**Props** — `size`: `'sm' | 'md' | 'lg'`; `glow`: `boolean`

---

## Design tokens / デザイントークン

All tokens are CSS custom properties with the `--eo-` prefix. Import the stylesheet and use them anywhere:

> すべてのトークンは `--eo-` 接頭辞付きの CSS カスタムプロパティです。スタイルシートを読み込めばどこでも使用できます。

```css
.my-element {
  color: var(--eo-text-primary);
  background: var(--eo-surface-raised);
  border: 1px solid var(--eo-surface-border);
  border-radius: var(--eo-radius-lg);
  box-shadow: var(--eo-shadow-md);
}
```

### Colour palette / カラーパレット

| Token | Dark | Light |
|-------|------|-------|
| `--eo-jade-400` | `#1ecfa3` | `#1ecfa3` |
| `--eo-jade-500` | `#0fb389` | `#0fb389` |
| `--eo-ink-0` | `#ffffff` | `#ffffff` |
| `--eo-ink-900` | `#0d0d0b` | `#0d0d0b` |

### Semantic tokens / セマンティックトークン

| Token | Purpose / 用途 |
|-------|---------|
| `--eo-accent` | Primary brand colour / ブランドメインカラー |
| `--eo-accent-subtle` | Tinted background / 淡い背景色 |
| `--eo-accent-border` | Accent border / ring / アクセントボーダー・リング |
| `--eo-accent-text` | Accessible accent text (≥ 4.5:1) / アクセシブルなアクセントテキスト |
| `--eo-text-primary` | Body text / 本文テキスト |
| `--eo-text-secondary` | Muted text / 控えめなテキスト |
| `--eo-text-tertiary` | Placeholder / metadata / プレースホルダ・メタ情報 |
| `--eo-text-disabled` | Disabled state / 無効状態 |
| `--eo-surface-bg` | Page background / ページ背景 |
| `--eo-surface-raised` | Card / panel surface / カード・パネル表面 |
| `--eo-surface-border` | Subtle divider / 控えめな区切り線 |
| `--eo-shadow-xs … xl` | Elevation shadows / 浮き上がりの影 |
| `--eo-focus-ring` | `:focus-visible` ring color / フォーカスリング色 |

### Spacing / 余白

Tokens `--eo-space-{n}` for `n` ∈ `1 2 3 4 5 6 7 8 9 10 12 14 16 20 24 28 32`. Based on a 4 px grid: `--eo-space-1 = 4px`, `--eo-space-4 = 16px`.

> `--eo-space-{n}` トークン（`n` は `1 2 3 4 5 6 7 8 9 10 12 14 16 20 24 28 32`）。4px グリッド基準で、`--eo-space-1 = 4px`、`--eo-space-4 = 16px`。

### Border radius / 角丸

| Token | Value |
|-------|-------|
| `--eo-radius-sm` | 4 px |
| `--eo-radius-md` | 8 px |
| `--eo-radius-lg` | 12 px |
| `--eo-radius-xl` | 16 px |
| `--eo-radius-2xl` | 20 px |
| `--eo-radius-3xl` | 28 px |
| `--eo-radius-4xl` | 32 px |
| `--eo-radius-full` | 9999 px |

### Typography / タイポグラフィ

| Token | Value |
|-------|-------|
| `--eo-font-display` | Space Grotesk, system-ui |
| `--eo-font-mono` | DM Mono, monospace |

---

## Tailwind integration / Tailwind 連携

```js
// tailwind.config.js
import eoPreset from '@eurekaorange/design-system/tailwind';

export default {
  presets: [eoPreset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

---

## Dark / Light mode / ダーク・ライトモード

Toggle themes at runtime:

> ランタイムでテーマを切り替える:

```ts
document.documentElement.setAttribute('data-theme', 'light');
```

Or match system preference:

> もしくは OS の設定に追従:

```ts
const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', theme);
```

---

## Storybook

```bash
npm run storybook        # dev server on :6006 / 開発サーバー起動
npm run build-storybook  # static build → storybook-static/ / 静的ビルド
```

---

## Build / ビルド

```bash
npm run build   # ESM + CJS + .d.ts → dist/
```

Output / 出力:

```
dist/
  index.mjs     # ESM bundle / ESM バンドル
  index.cjs     # CommonJS bundle / CommonJS バンドル
  index.d.ts    # TypeScript declarations / 型定義
```

---

## HTML / vanilla usage / HTML 単体での利用

All HTML pages in `docs/` work standalone — just open in a browser. Load the CSS (one level up from `docs/`) and optionally `nav.js` for the shared navigation:

> `docs/` 配下の HTML ページはブラウザで開くだけで動作します。`docs/` から見て一つ上の階層にある CSS と、共通ナビ用の `nav.js` を読み込みます:

```html
<link rel="stylesheet" href="../eureka-orange.css">
<script src="nav.js"></script>
```

Local preview / ローカルプレビュー:

```bash
npm run preview
# → http://localhost:8000/docs/index.html
```

---

## GitHub Pages

The static HTML pages are published to GitHub Pages automatically. Push to `main` → GitHub Actions deploys (see `.github/workflows/deploy.yml`).

> 静的 HTML ページは GitHub Pages に自動公開されます。`main` に push すると GitHub Actions がデプロイします（`.github/workflows/deploy.yml` 参照）。

- Pages root → redirects to `/docs/index.html` / ルートは `/docs/index.html` にリダイレクト
- Storybook → `/storybook/`

---

## npm publish / npm 公開

```bash
# Ensure you're logged in / ログイン
npm login

# Build first / 先にビルド
npm run build

# Dry-run to inspect what will be published / 公開内容を事前確認
npm publish --dry-run

# Publish (scoped packages require --access public the first time)
# 公開（スコープ付きパッケージの初回は --access public が必須）
npm publish --access public
```

---

## Repository structure / リポジトリ構成

```
.
├── eureka-orange.css       # Source of truth — all CSS tokens & utilities
│                           # 全 CSS トークン・ユーティリティの本体
├── tailwind.config.js      # Tailwind preset / Tailwind プリセット
├── src/                    # React component source / React コンポーネントソース
│   ├── index.ts            # Package entry point / パッケージエントリポイント
│   ├── utils/cn.ts         # classname helper / クラス名ヘルパー
│   └── components/
│       ├── Button/
│       ├── Badge/
│       ├── Input/
│       ├── Toggle/
│       └── Card/
├── docs/                   # Standalone HTML documentation pages
│   │                       # 単体動作する HTML ドキュメントページ
│   ├── index.html          # Design system hub / デザインシステムハブ
│   ├── tokens.html         # Token reference / トークンリファレンス
│   ├── components.html     # Component catalog / コンポーネントカタログ
│   ├── figma-variables.html  # Figma variable export / Figma 変数エクスポート
│   ├── brand-assets.html   # Logo & brand assets / ロゴ・ブランドアセット
│   ├── icons.html          # Icon system / アイコンシステム
│   ├── grid.html           # Grid system / グリッドシステム
│   ├── motion.html         # Motion principles / モーション原則
│   ├── dashboard.html      # Product demo — dashboard / ダッシュボードデモ
│   ├── landing.html        # Product demo — landing / ランディングページデモ
│   ├── settings.html       # Product demo — settings / 設定画面デモ
│   ├── nav.js              # Shared navigation script / 共通ナビスクリプト
│   └── tweaks-panel.jsx    # In-page React component / ページ内 React コンポーネント
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── dist/                   # Build output (npm package) / ビルド成果物（npm 配布物）
```

---

## License / ライセンス

MIT © EurekaOrange
