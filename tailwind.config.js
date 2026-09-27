/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        github: {
          black: "#0d1117",
          dark: "#161b22",
          border: "#30363d",
          green: "#2ea44f",
          text: "#c9d1d9"
        }
      }
    }
  },
  plugins: []
};
