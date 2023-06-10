import React from 'react';

import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-styling';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { StorybookWrapper } from '../src/components/StorybookWrapper'

const customViewports = {
  '2xl': {
    name: '2xl',
    styles: {
      height: '1112px',
      width: '1536px',
    },
  },
  lg: {
    name: 'Lg',
    styles: {
      height: '1112px',
      width: '1024px',
    },
  },
  md: {
    name: 'Md',
    styles: {
      height: '896px',
      width: '768px',
    },
  },
  sm: {
    name: 'Sm',
    styles: {
      height: '568px',
      width: '640px',
    },
  },
  xl: {
    name: 'Xl',
    styles: {
      height: '1112px',
      width: '1280px',
    },
  },
};


const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
  (Story) => {
    return <StorybookWrapper>{<Story />}</StorybookWrapper>;
  }
];

export default preview;
