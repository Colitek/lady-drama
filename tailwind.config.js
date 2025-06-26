export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      md: "890px", // zmieniony breakpoint dla wersji desktop
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
    },
    extend: {
      colors: {
        ladydrama: {
          lightest: "var(--ladydrama-lightest)",
          light: "var(--ladydrama-light)",
          DEFAULT: "var(--ladydrama)",
          dark: "var(--ladydrama-dark)",
          darker: "var(--ladydrama-darker)",
          darkest: "var(--ladydrama-darkest)"
        }
      }
    }
  },
  plugins: [],
}
