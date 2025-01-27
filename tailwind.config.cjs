const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: "#007BFF",
        border: "#C7E2FF",
        muted: "#366AA1",
        foreground: "#002348",
        background: "#ffffff",
        chip: "#C5E1FF",
        "chip-text": "#00448D",
        card: "#FAFDFF",
      },
    },
  },
  plugins: [],
};
