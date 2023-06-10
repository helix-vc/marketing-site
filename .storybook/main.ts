import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // {
    //   name: '@storybook/addon-styling',
    //   options: {
    //     // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
    //     // For more details on this addon's options.
    //     // postCss: true,
    //   },
    // },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // NOTE: __variable_inter-normal is hard coded and actually comes from StorybookWrapper component
  previewBody: `
    <body class="sb-show-main sb-main-padded __variable_inter-normal scroll-smooth font-sans antialiased [font-feature-settings:'ss01']">
    </body>
  `,
};

export default config;
