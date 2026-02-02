/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "noir": "#0B0B0D",
        "graphite": "#17181C",
        "gold": "#C8A15A",
        "mist": "#F5F5F7"
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: []
};
