/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: "#353b48",
        "dark-gray": "#2f3640",
        link: "#fbc531",
        "light-gray": "#f9fafc",
        yellow: "fbc531",
      },
      gridTemplateColumns: {
        experience: "repeat(3, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
