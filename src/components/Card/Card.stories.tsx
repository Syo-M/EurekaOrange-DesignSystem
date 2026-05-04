import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    glow: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3 style={{ marginBottom: 8 }}>Aurora Dashboard</h3>
        <p style={{ color: 'var(--eo-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
          チームのデザイントークン使用状況を可視化します。
        </p>
      </>
    ),
  },
};

export const WithMeta: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 16,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 18 }}>Prism Mobile</h3>
        <Badge variant="warning">BETA</Badge>
      </div>
      <p
        style={{
          color: 'var(--eo-text-secondary)',
          fontSize: 14,
          lineHeight: 1.6,
          marginBottom: 24,
        }}
      >
        モバイル特化のデザインシステム。Touch-first トークンセット同梱。
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button size="sm">Open</Button>
        <Button size="sm" variant="ghost">
          Docs
        </Button>
      </div>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <Card size="sm">Small (sm)</Card>
      <Card size="md">Medium (md)</Card>
      <Card size="lg">Large (lg)</Card>
    </div>
  ),
};

export const Glow: Story = {
  args: {
    glow: true,
    children: 'Card with subtle accent glow',
  },
};
