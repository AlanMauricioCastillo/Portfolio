module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a945c7", // Matching the existing neon color
        dark: "#121212",
        darker: "#0a0a0a",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
