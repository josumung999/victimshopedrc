module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      Dongle: ["Dongle", "sans-serif"],
      Fredoka: ["Fredoka One", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
      Syncopate: ["Syncopate", "sans-serif"]
    },
    fontSize: {
      'sm': ".6rem",
      '1xl': "1.5rem",
      '2xl': "2rem",
      '3xl': "4rem"
    }
  },
  plugins: [],
}
