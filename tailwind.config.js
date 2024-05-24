/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nav: '#121212',
        primary: '#0A192F',
        secondary: '#DB504A',
        offset: '#FDD400',
        offset_secondary: '#ff8000'
      },
    },
  },
  plugins: [],
}

