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
        'panel-raised': 'var(--color-panel-raised)',
        'surface-base': 'var(--color-surface-base)',
        'surface-raised': 'var(--color-surface-raised)',
        hairline: 'var(--color-hairline)',
        stroke: 'var(--color-stroke)',
        muted: 'var(--color-muted)',
        datum: 'var(--color-datum)',
        'border-subtle': 'var(--color-border-subtle)',
        'border-default': 'var(--color-border-default)',
        'rating-again': 'var(--color-rating-again)',
        'rating-hard': 'var(--color-rating-hard)',
        'rating-good': 'var(--color-rating-good)',
        'rating-easy': 'var(--color-rating-easy)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
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
