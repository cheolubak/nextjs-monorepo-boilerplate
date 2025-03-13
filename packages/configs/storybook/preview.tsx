import type { Preview } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const baseStorybookPreview: Preview = {
  decorators: [(Story) => <Story />],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
