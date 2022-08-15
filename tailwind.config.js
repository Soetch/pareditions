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
        "worstfear": "url('/images/worstfear.png')",
        "chase": "url('/images/chase.png')",
        "bird": "url('/images/bird.png')",
        "against": "url('/images/against.png')",
        "dew": "url('/images/den.png')",
        "muscles": "url('/images/muscles.png')",
        "unsafe": "url('/images/unsafe.png')",
        "device": "url('/images/device.png')",
        "school": "url('/images/school.png')",
        "forgotten": "url('/images/forgotten.png')",
        "brightness": "url('/images/brightness.png')",
        "relife": "url('/images/relife.png')",
        "nightmare": "url('/images/nightmare.png')",
      }
    },
  },
  plugins: [],
}