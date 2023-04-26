/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'lilita': ['"Lilita One"', 'cursive'],
      },
      backgroundImage: {
        'banner': "url('./src/assets/banner.svg')",
        'banner-mobile': "url('./src/assets/bannerMobile.svg')",
      }
    },
  },
  plugins: [],
}