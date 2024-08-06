/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nian: ["Nian", "Nian-Bold", "Nian-Light", "Nian-ExtraBold"],
      },
      colors: {
        primary: "#377DFF",
        gray: "#383638",
        grayLight: "#464646",
      },
    },
  },
  plugins: [],
};
