module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      Dongle: ["Dongle", "sans-serif"],
      Fredoka: ["Fredoka One", "sans-serif"]
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      '1xl': "2.5rem",
      '3xl': "3.5rem"
    }
  },
  plugins: [],
}
