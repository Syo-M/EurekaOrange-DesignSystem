/**
 * EurekaOrange Design System — Tailwind CSS Config v1.0.0
 *
 * Usage:
 *   // tailwind.config.js
 *   const eoConfig = require('./tailwind.config.js');
 *   module.exports = { ...eoConfig, content: ['./src/**\/*.{js,jsx,ts,tsx,html}'] };
 *
 *   // Or extend your existing config:
 *   module.exports = {
 *     theme: { extend: require('./tailwind.config.js').theme.extend }
 *   }
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],

  theme: {
    extend: {
      /* ── Colors ─────────────────────────────── */
      colors: {
        jade: {
          50:  '#e8fdf6',
          100: '#c4f7e8',
          200: '#8eefd4',
          300: '#52e2bc',
          400: '#1ecfa3',  /* Primary */
          500: '#0fb389',
          600: '#098f6d',
          700: '#066b51',
          800: '#034636',
          900: '#01231b',
          DEFAULT: '#1ecfa3',
        },
        ink: {
          0:   '#ffffff',
          50:  '#f5f5f3',
          100: '#e8e7e3',
          200: '#c8c7c0',
          300: '#9b9a91',
          400: '#6e6d63',
          500: '#484740',
          600: '#2e2d28',
          700: '#1c1b18',
          800: '#111110',
          900: '#080807',
        },
        accent: {
          electric: '#a855f7',
          acid:     '#84cc16',
          ice:      '#06b6d4',
        },
        /* Semantic (CSS var-based for theme switching) */
        surface: {
          bg:      'var(--eo-surface-bg)',
          base:    'var(--eo-surface-base)',
          raised:  'var(--eo-surface-raised)',
          overlay: 'var(--eo-surface-overlay)',
          border:  'var(--eo-surface-border)',
        },
        eo: {
          text:        'var(--eo-text-primary)',
          'text-2':    'var(--eo-text-secondary)',
          'text-3':    'var(--eo-text-tertiary)',
          accent:      'var(--eo-accent)',
          'accent-h':  'var(--eo-accent-hover)',
          'accent-a':  'var(--eo-accent-active)',
          'accent-s':  'var(--eo-accent-subtle)',
        },
      },

      /* ── Typography ─────────────────────────── */
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
        code:    ['Space Mono', 'monospace'],
      },
      fontSize: {
        'xs':   ['0.75rem',   { lineHeight: '1rem' }],
        'sm':   ['0.875rem',  { lineHeight: '1.25rem' }],
        'base': ['1rem',      { lineHeight: '1.5rem' }],
        'lg':   ['1.125rem',  { lineHeight: '1.75rem' }],
        'xl':   ['1.25rem',   { lineHeight: '1.75rem' }],
        '2xl':  ['1.5rem',    { lineHeight: '2rem' }],
        '3xl':  ['1.875rem',  { lineHeight: '2.25rem' }],
        '4xl':  ['2.25rem',   { lineHeight: '2.5rem' }],
        '5xl':  ['3rem',      { lineHeight: '1' }],
        '6xl':  ['3.75rem',   { lineHeight: '1' }],
        '7xl':  ['4.5rem',    { lineHeight: '1' }],
        '8xl':  ['6rem',      { lineHeight: '1' }],
      },
      letterSpacing: {
        tight:   '-0.04em',
        snug:    '-0.02em',
        normal:  '0em',
        wide:    '0.05em',
        wider:   '0.1em',
        widest:  '0.15em',
      },

      /* ── Spacing ────────────────────────────── */
      spacing: {
        px:  '1px',
        0:   '0px',
        1:   '0.25rem',
        2:   '0.5rem',
        3:   '0.75rem',
        4:   '1rem',
        5:   '1.25rem',
        6:   '1.5rem',
        7:   '1.75rem',
        8:   '2rem',
        9:   '2.25rem',
        10:  '2.5rem',
        12:  '3rem',
        14:  '3.5rem',
        16:  '4rem',
        20:  '5rem',
        24:  '6rem',
        28:  '7rem',
        32:  '8rem',
        40:  '10rem',
        48:  '12rem',
        56:  '14rem',
        64:  '16rem',
      },

      /* ── Border radius ──────────────────────── */
      borderRadius: {
        none: '0px',
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        '2xl':'20px',
        '3xl':'28px',
        '4xl':'32px',
        full: '9999px',
        DEFAULT: '8px',
      },

      /* ── Shadows ────────────────────────────── */
      boxShadow: {
        xs:       '0 1px 2px rgba(0,0,0,0.3)',
        sm:       '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        md:       '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
        lg:       '0 10px 30px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.3)',
        xl:       '0 20px 60px rgba(0,0,0,0.7)',
        glow:     '0 0 40px rgba(30,207,163,0.35), 0 0 80px rgba(30,207,163,0.15)',
        'glow-sm':'0 0 16px rgba(30,207,163,0.4)',
        none:     'none',
      },

      /* ── Transitions / Animations ───────────── */
      transitionTimingFunction: {
        'out':    'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.45, 0, 0.55, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'in':     'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: {
        instant: '80ms',
        fast:    '150ms',
        normal:  '220ms',
        slow:    '350ms',
        crawl:   '500ms',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-up': {
          from: { transform: 'translateY(100%)' },
          to:   { transform: 'translateY(0)' },
        },
        'elastic-in': {
          '0%':   { transform: 'scale(0.5)', opacity: '0' },
          '60%':  { transform: 'scale(1.08)' },
          '80%':  { transform: 'scale(0.96)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(30,207,163,0.4)' },
          '50%':       { boxShadow: '0 0 0 12px rgba(30,207,163,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':    'fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up':   'slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        'elastic-in': 'elastic-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        float:        'float 6s ease-in-out infinite',
        shimmer:      'shimmer 2s linear infinite',
      },

      /* ── Backdrop blur ──────────────────────── */
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },

      /* ── Screen breakpoints ─────────────────── */
      screens: {
        xs:  '480px',
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1536px',
      },
    },
  },

  plugins: [],
};
