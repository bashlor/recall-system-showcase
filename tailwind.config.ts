import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'background-light': 'var(--color-background-light)',
        'background-dark': 'var(--color-background-dark)',
        'rating-again': 'var(--color-rating-again)',
        'rating-hard': 'var(--color-rating-hard)',
        'rating-good': 'var(--color-rating-good)',
        'rating-easy': 'var(--color-rating-easy)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-sans)',
      },
      borderRadius: {
        default: 'var(--radius-default)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      maxWidth: {
        app: 'var(--max-width-app)',
      },
    },
  },
} satisfies Config;
