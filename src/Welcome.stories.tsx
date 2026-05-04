import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};
export default meta;

type Story = StoryObj;

export const Introduction: Story = {
  render: () => (
    <div
      style={{
        minHeight: '100vh',
        padding: '64px 56px',
        background: 'var(--eo-surface-bg)',
        color: 'var(--eo-text-primary)',
        fontFamily: 'var(--eo-font-display)',
      }}
    >
      <div style={{ maxWidth: 720 }}>
        <div
          style={{
            fontFamily: 'var(--eo-font-mono)',
            fontSize: 11,
            color: 'var(--eo-accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          ─── Storybook · v1.0.0
        </div>
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          EurekaOrange
          <br />
          <span className="eo-gradient-text">Design System</span>
        </h1>
        <p
          style={{
            fontSize: 16,
            color: 'var(--eo-text-secondary)',
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          トークンベースの React コンポーネントライブラリ。
          サイドバーから各コンポーネントを選択して、
          ライブプレビューと props ドキュメントを確認できます。
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {[
            { label: 'Button', desc: '4 variants × 5 sizes' },
            { label: 'Badge',  desc: '6 variants for status' },
            { label: 'Input',  desc: 'with label / hint / error' },
            { label: 'Toggle', desc: 'native checkbox-based' },
            { label: 'Card',   desc: '3 sizes + glow option' },
          ].map((c) => (
            <div
              key={c.label}
              style={{
                padding: 20,
                background: 'var(--eo-surface-raised)',
                border: '1px solid var(--eo-surface-border)',
                borderRadius: 12,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>
                {c.label}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--eo-text-tertiary)',
                  fontFamily: 'var(--eo-font-mono)',
                }}
              >
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
