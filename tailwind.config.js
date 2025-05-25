/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce1f6',
          200: '#99c3ed',
          300: '#66a5e3',
          400: '#3387da',
          500: '#0074d9', // Main primary
          600: '#005db1',
          700: '#004789',
          800: '#003161',
          900: '#001a38',
        },
        secondary: {
          50: '#e6f5f5',
          100: '#ccebeb',
          200: '#99d7d7',
          300: '#66c2c2',
          400: '#33aeae',
          500: '#008b8b', // Main secondary
          600: '#007373',
          700: '#005c5c',
          800: '#004444',
          900: '#002d2d',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffe7cc',
          200: '#ffcf99',
          300: '#ffb766',
          400: '#ff9f33',
          500: '#ff851b', // Main accent
          600: '#cc6b16',
          700: '#995112',
          800: '#66360c',
          900: '#331b06',
        },
        success: {
          500: '#2ECC40',
        },
        warning: {
          500: '#FFDC00',
        },
        error: {
          500: '#FF4136',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'wave': 'wave 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};