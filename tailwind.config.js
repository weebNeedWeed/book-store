const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "theme-color-1": "#1E5631",
      "theme-color-2": "#A4DE02",
      "theme-color-3": "#76BA1B",
      "theme-color-4": "#4C9A2A",
      "theme-color-5": "#ACDF87",
      "theme-color-6": "#68BB59",
      gray: colors.trueGray,
      white: colors.white,
    },
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
  },
  variants: {},
  plugins: [],
  important: true,
};
