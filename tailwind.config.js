module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
          '2xl': '4rem',
          DEFAULT: '1rem',
          lg: '2rem',
          sm: '1rem',
          xl: '3rem',
      },
  },
    extend: {
      colors: {
        'exhibition-grey': '#676767',
        'back-btn' : '#0029FF',
        'yellow': '#FED330',
        'green': '#27ae60',
    },
    },
  },
  plugins: [],
}