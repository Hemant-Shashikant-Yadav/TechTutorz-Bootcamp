/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange': {
          50: '#fff8f1',
          100: '#ffe9d5',
          200: '#ffd2a9',
          300: '#ffb272',
          400: '#fe8737',
          500: '#fc6a0f',
          600: '#e9530a',
          700: '#c0400c',
          800: '#993512',
          900: '#7c2e13',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};