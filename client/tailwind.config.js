/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    './index/html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      'dark-blue-plane': '#053B50',
      'light-blue-border': '#64CCC5'
    },
    extend: {},
  },
  plugins: [],
}

