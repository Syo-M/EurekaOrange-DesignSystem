import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Project name',
    placeholder: 'e.g. EurekaOrange v2',
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: 'Choose a memorable name (3–40 chars).' },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Valid email is required.',
    defaultValue: 'broken@',
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Username',
    placeholder: 'eureka',
    prefix: <span aria-hidden>@</span>,
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search docs…',
    suffix: <kbd style={{ fontSize: 10, opacity: 0.7 }}>⌘K</kbd>,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Min. 8 characters',
    hint: 'Use a mix of letters, numbers, and symbols.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Read-only value',
  },
};
