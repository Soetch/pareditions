/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "perles": "url('/images/perles.png')",
        "unshakeable": "url('/images/unshakeable.png')",
      }
    },
  },
  plugins: [],
}
