/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {},
    theme: {
      extend: {
        colors: {
          primary: '#432818',
          secondary: '#bb9457'
        }
      }
    }
  },
  plugins: [],
};