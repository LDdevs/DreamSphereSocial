/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/mountain-bg.png')"
    },
  },
  plugins: [
    ['postcss-nested'], {}
  ],
}
}
