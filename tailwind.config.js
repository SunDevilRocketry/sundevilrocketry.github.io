/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#111111',
          paper: '#f5f2ee',
          accent: '#d9b36a',
          accentSoft: 'rgba(217, 179, 106, 0.14)',
          accentStrong: 'rgba(217, 179, 106, 0.22)',
        },
      },
      boxShadow: {
        glow: '0 0 80px rgba(91, 111, 255, 0.28)',
      },
    },
  },
  plugins: [],
}

