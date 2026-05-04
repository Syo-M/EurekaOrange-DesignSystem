import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../eureka-orange.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'eo-bg',
      values: [
        { name: 'eo-bg',     value: 'var(--eo-surface-bg)' },
        { name: 'eo-raised', value: 'var(--eo-surface-raised)' },
      ],
    },
    layout: 'padded',
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { dark: 'dark', light: 'light' },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
