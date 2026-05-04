# EurekaOrange Design System

> Token-based React component library with dark/light mode, Storybook docs, and CSS custom properties.

[![npm version](https://img.shields.io/npm/v/@eurekaorange/design-system.svg)](https://www.npmjs.com/package/@eurekaorange/design-system)
[![license](https://img.shields.io/npm/l/@eurekaorange/design-system.svg)](LICENSE)
[![storybook](https://img.shields.io/badge/storybook-live-ff4785.svg)](https://eurekaorange.github.io/design-system/)

---

## Quick start

```bash
npm install @eurekaorange/design-system
```

### 1 — Import the CSS tokens

```ts
// In your app entry point (e.g. main.tsx / index.ts)
import '@eurekaorange/design-system/css';
```

### 2 — Set a theme

Add `data-theme="dark"` (or `"light"`) to your `<html>` element.  
The default without the attribute is **dark**.

```html
<html data-theme="dark">…</html>
```

### 3 — Use components

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

## Components

| Component | Variants / Sizes | Description |
|-----------|-----------------|-------------|
| `Button`  | 4 variants × 5 sizes | Primary, secondary, ghost, danger; icon-only + round modes |
| `Badge`   | 6 variants | Default, success, warning, danger, info, outline |
| `Input`   | — | Label, hint, error states; prefix / suffix slots |
| `Toggle`  | — | Native checkbox; label + optional description |
| `Card`    | sm / md / lg + glow | Surface container with optional accent glow |

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
| `leadingIcon` | `ReactNode` | — |
| `trailingIcon` | `ReactNode` | — |
| `iconOnly` | `boolean` | `false` |
| `round` | `boolean` | `false` |
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

**Props** — extends all `<input>` HTML attributes plus:

| Prop | Type |
|------|------|
| `label` | `string` |
| `hint` | `string` |
| `error` | `string` |
| `prefix` | `ReactNode` |
| `suffix` | `ReactNode` |
| `containerClassName` | `string` |

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

## Design tokens

All tokens are CSS custom properties with the `--eo-` prefix.  
Import the stylesheet and use them anywhere:

```css
.my-element {
  color: var(--eo-text-primary);
  background: var(--eo-surface-raised);
  border: 1px solid var(--eo-surface-border);
  border-radius: var(--eo-radius-lg);
  box-shadow: var(--eo-shadow-md);
}
```

### Colour palette

| Token | Dark | Light |
|-------|------|-------|
| `--eo-jade-400` | `#1ecfa3` | `#1ecfa3` |
| `--eo-jade-500` | `#0fb389` | `#0fb389` |
| `--eo-ink-0` | `#ffffff` | `#ffffff` |
| `--eo-ink-900` | `#0d0d0b` | `#0d0d0b` |

### Semantic tokens

| Token | Purpose |
|-------|---------|
| `--eo-accent` | Primary brand colour |
| `--eo-accent-subtle` | Tinted background |
| `--eo-accent-border` | Accent border / ring |
| `--eo-accent-text` | Accessible accent text (≥ 4.5:1) |
| `--eo-text-primary` | Body text |
| `--eo-text-secondary` | Muted text |
| `--eo-text-tertiary` | Placeholder / metadata |
| `--eo-text-disabled` | Disabled state |
| `--eo-surface-bg` | Page background |
| `--eo-surface-raised` | Card / panel surface |
| `--eo-surface-border` | Subtle divider |
| `--eo-shadow-xs … xl` | Elevation shadows |
| `--eo-focus-ring` | `:focus-visible` ring color |

### Spacing

Tokens `--eo-space-{n}` for `n` ∈ `1 2 3 4 5 6 7 8 9 10 12 14 16 20 24 28 32`.  
Based on a 4 px grid: `--eo-space-1 = 4px`, `--eo-space-4 = 16px`.

### Border radius

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

### Typography

| Token | Value |
|-------|-------|
| `--eo-font-display` | Space Grotesk, system-ui |
| `--eo-font-mono` | DM Mono, monospace |

---

## Tailwind integration

```js
// tailwind.config.js
import eoPreset from '@eurekaorange/design-system/tailwind';

export default {
  presets: [eoPreset],
  content: ['./src/**/*.{ts,tsx}'],
};
```

---

## Dark / Light mode

Toggle themes at runtime:

```ts
document.documentElement.setAttribute('data-theme', 'light');
```

Or match system preference:

```ts
const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', theme);
```

---

## Storybook

```bash
npm run storybook        # dev server on :6006
npm run build-storybook  # static build → storybook-static/
```

---

## Build

```bash
npm run build   # ESM + CJS + .d.ts → dist/
```

Output:

```
dist/
  index.mjs     # ESM bundle
  index.cjs     # CommonJS bundle
  index.d.ts    # TypeScript declarations
```

---

## HTML / vanilla usage

All pages in this repo work standalone — just open in a browser.  
Load the CSS and optionally `nav.js` for the shared navigation:

```html
<link rel="stylesheet" href="eureka-orange.css">
<script src="nav.js"></script>
```

---

## GitHub Pages

The static HTML pages are published to GitHub Pages via the `gh-pages` branch.  
Push `main` → GitHub Actions deploys automatically (see `.github/workflows/deploy.yml`).

Storybook is deployed to `https://<org>.github.io/design-system/storybook/`.

---

## npm publish

```bash
# Ensure you're logged in
npm login

# Build first
npm run build

# Dry-run to inspect what will be published
npm publish --dry-run

# Publish (scoped packages require --access public the first time)
npm publish --access public
```

---

## Repository structure

```
.
├── eureka-orange.css       # Source of truth — all CSS tokens & utilities
├── nav.js                  # Shared navigation for HTML pages
├── tailwind.config.js      # Tailwind preset
├── src/
│   ├── index.ts            # Package entry point
│   ├── utils/cn.ts         # classname helper
│   └── components/
│       ├── Button/
│       ├── Badge/
│       ├── Input/
│       ├── Toggle/
│       └── Card/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── index.html              # Design system hub
├── tokens.html             # Token reference
├── components.html         # Component catalog
├── figma-variables.html    # Figma variable export
├── brand-assets.html       # Logo & brand assets
├── icons.html              # Icon system
├── grid.html               # Grid system
├── motion.html             # Motion principles
├── dashboard.html          # Product demo — dashboard
├── landing.html            # Product demo — landing page
└── settings.html           # Product demo — settings
```

---

## License

MIT © EurekaOrange
