export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
