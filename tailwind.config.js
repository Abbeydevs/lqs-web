/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'white-fade': '#F9F9F9',
        'white-dark': 'AEBCD4',
        'white-extra-fade': '#ECF4FA',
        'blue': '#033B71',
        'blue-dark': '#011930',
        'green': '#00948A',
        'black': '#1F242E',
        'grey': '#797C7F',
        'grey-light': '#F9F5ED',
        'yellow': '#AF8435',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
