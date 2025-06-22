export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      ladydrama: {
        light: "var(--ladydrama-light)",
        DEFAULT: "var(--ladydrama)",
        dark: "var(--ladydrama-dark)"
      }
    }
  }
},
  plugins: [],
}
