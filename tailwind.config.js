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
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'repeatType': 'loop'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
    
    plugins: [
      ['postcss-nested'], {}
    ],
  }
}
