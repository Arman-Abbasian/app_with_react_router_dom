/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'project': {
          'dark-green': '#045149',
          'light-sky': '#9ec5ce',
          'mid-green': '#21664d',
        },
      },
    },
  },
  plugins: [],
}
