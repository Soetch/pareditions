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
        "low-ranking": "url('/images/low-ranking.png')",
        "ikea": "url('/images/ikea.png')",
        "seth": "url('/images/seth.png')",
        "devil": "url('/images/devil.png')",
        "madison": "url('/images/madison.png')",
        "wood": "url('/images/wood.png')",
        "who": "url('/images/who.png')",
        "lower": "url('/images/lower.png')",
        "lucky": "url('/images/lucky.png')",
      }
    },
  },
  plugins: [],
}
