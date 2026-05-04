import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Tokens',
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

const SWATCHES = {
  Jade: ['50','100','200','300','400','500','600','700','800','900'].map(
    (s) => ({ name: `--eo-jade-${s}`, varName: `--eo-jade-${s}` })
  ),
  Ink: ['0','50','100','200','300','400','500','600','700','800','900'].map(
    (s) => ({ name: `--eo-ink-${s}`, varName: `--eo-ink-${s}` })
  ),
};

const Swatch = ({ varName }: { varName: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start',
    }}
  >
    <div
      style={{
        width: '100%',
        height: 64,
        borderRadius: 8,
        background: `var(${varName})`,
        border: '1px solid var(--eo-surface-border)',
      }}
    />
    <div
      style={{
        fontFamily: 'var(--eo-font-mono)',
        fontSize: 11,
        color: 'var(--eo-text-tertiary)',
      }}
    >
      {varName}
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {Object.entries(SWATCHES).map(([group, items]) => (
        <section key={group}>
          <h3
            style={{
              fontFamily: 'var(--eo-font-mono)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--eo-accent)',
              marginBottom: 16,
            }}
          >
            ─── {group}
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 16,
            }}
          >
            {items.map((s) => (
              <Swatch key={s.name} varName={s.varName} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

export const Spacing: Story = {
  render: () => {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20, 24, 32];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {sizes.map((n) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <code
              style={{
                fontFamily: 'var(--eo-font-mono)',
                fontSize: 12,
                color: 'var(--eo-text-secondary)',
                width: 140,
              }}
            >
              --eo-space-{n}
            </code>
            <div
              style={{
                height: 16,
                width: `var(--eo-space-${n})`,
                background: 'var(--eo-accent)',
                borderRadius: 4,
              }}
            />
          </div>
        ))}
      </div>
    );
  },
};

export const Radius: Story = {
  render: () => {
    const radii: Array<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'> = [
      'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl',
    ];
    return (
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {radii.map((r) => (
          <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: 'var(--eo-accent-subtle)',
                border: '1px solid var(--eo-accent-border)',
                borderRadius: `var(--eo-radius-${r})`,
              }}
            />
            <code
              style={{
                fontFamily: 'var(--eo-font-mono)',
                fontSize: 11,
                color: 'var(--eo-text-tertiary)',
              }}
            >
              --eo-radius-{r}
            </code>
          </div>
        ))}
      </div>
    );
  },
};
