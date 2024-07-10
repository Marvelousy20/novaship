/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        green: "#00997D",
      },

      fontFamily: {
        fRegular: ["Federo-Regular", "sans-serif"],
        IRegular: ["Inter-Regular", "sans-serif"],
        IMedium: ["Inter-Medium", "sans-serif"],
        ISemiBold: ["Inter-SemiBold", "sans-serif"],
        IBold: ["Inter-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
