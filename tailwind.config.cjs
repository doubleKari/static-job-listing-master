/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "750px",
      desktop: "1440px",
    },
    fontFamily: {
      spartan: ["League Spartan", "sans-serifs"],
    },
    extend: {
      colors: {
        cyan: {
          100: "#effafa",
          200: "#eef6f6",
          300: "#5ba4a4",
          400: "#7b8e8e",
          500: "#2c3a3a",
        },
      },
    },
  },
  plugins: [],
};
