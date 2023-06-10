/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        display: ['DM Sans', 'var(--font-dm)', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', 'var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
    fontSize: {
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
    },
  },
};
