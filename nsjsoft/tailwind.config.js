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
        primary: "#E2E2E2",
        blue: "#377DFF",
        gray: "#383638",
        grayLight: "#0B0F15",
      },
    },
  },
  plugins: [],
};
