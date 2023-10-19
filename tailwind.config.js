/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      mweather: ["Merriweather", "serif"],
      roboto: ["Roboto", "sans-serif"],
      monts: ["Montserrat", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: "#362934",
      light: "#e1d7c9",
      medium: "#d5cabe",
      dark: "#a69290",
      blue: "#687f9a",
      dblue: "#1d1838",
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
