import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    label: 'Email digest',
    description: 'Weekly summary of your activity.',
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const NoLabel: Story = {
  args: {
    label: undefined,
    description: undefined,
    'aria-label': 'Toggle dark mode',
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Stack: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Toggle label="Email digest" description="Weekly summary" defaultChecked />
      <Toggle label="Slack alerts" description="Real-time mentions" />
      <Toggle label="In-app banners" description="Tips & onboarding" defaultChecked />
    </div>
  ),
};
