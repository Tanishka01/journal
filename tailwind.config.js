/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": "'Playfair Display'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        koulen: "Koulen",
        lateef: "Lateef",
      },
    },
    colors: {
      gray: {
        "100": "#e1f5fa",
        "200": "#f4eae5",
        "300": "rgba(208, 245, 255, 0.53)",
      },
      black: "#000",
      white: "#fff",
    },
    fontSize: { xs: "15px", sm: "36px", base: "40px", lg: "64px" },
  },
  corePlugins: { preflight: false },
};
