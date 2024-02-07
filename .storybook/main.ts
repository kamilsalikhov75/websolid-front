import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/shared/ui/icons': path.resolve(__dirname, '../src/shared/ui/icons')
      // '@/shared/ui/buttons': path.resolve(__dirname, '../src/shared/ui/buttons'),
      // '@/app/assets/fonts': path.resolve(__dirname, '../src/app/assets/fonts')
    };

    return config;
  }
};
export default config;
