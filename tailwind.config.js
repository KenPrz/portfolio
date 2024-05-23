/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0A192F',
        secondary: '#DB504A',
        offset: '#FDD400'
      }
    },
  },
  plugins: [],
}

