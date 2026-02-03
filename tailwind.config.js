/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'protocol-blue': '#0066FF',
        'success-green': '#00B87C',
        'warning-amber': '#FFB020',
        'error-red': '#FF4458',

        // Neutral colors
        'dark': '#0A0E27',
        'medium-gray': '#64748B',
        'light-gray': '#E2E8F0',
        'off-white': '#F8FAFC',

        // Accent colors
        'agent-purple': '#8B5CF6',
        'merchant-teal': '#14B8A6',
        'payment-orange': '#FB923C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '44px', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
