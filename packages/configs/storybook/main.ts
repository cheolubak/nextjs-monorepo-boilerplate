import type { StorybookConfig } from '@storybook/nextjs';

export const baseNextJsStorybookConfig: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.tsx'],
  typescript: { reactDocgen: 'react-docgen-typescript' },
};
