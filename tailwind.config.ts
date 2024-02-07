import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 0px 8px 0px #EAEAEA',
        xl: '0 8px 8px -4px rgba(16, 25, 40, 0.03), 0 24px 32px -4px rgba(16, 25, 40, 0.08)'
      },
      colors: {
        black: '#000000',
        blue: { 300: '#818EFF', 500: '#4C5EFF' },
        grey: '#ADADAD',
        purple: '#A696FF',
        turquoise: '#1DE6B3',
        white: '#FFFFFF'
      },

      fontFamily: {
        nunito: 'var(--font-nunito)'
      }
    }
  }
};
export default config;
