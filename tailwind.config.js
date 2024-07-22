/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.795, 0.05, 0.795, 0.035)',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
    },
  },
  plugins: [],
}

