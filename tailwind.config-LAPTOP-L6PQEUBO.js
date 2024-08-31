/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F6F8FC',
    },
    },
  },
  plugins: [],
}

