import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'error', 'info', 'neutral'],
    },
  },
  args: {
    children: 'STABLE',
    variant: 'default',
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge variant="default">DEFAULT</Badge>
      <Badge variant="success">STABLE</Badge>
      <Badge variant="warning">BETA</Badge>
      <Badge variant="error">DEPRECATED</Badge>
      <Badge variant="info">NEW</Badge>
      <Badge variant="neutral">NEUTRAL</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: <span aria-hidden style={{ fontSize: 9 }}>●</span>,
    variant: 'success',
    children: 'LIVE',
  },
};
