/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        129000: "1rem",
      },
      colors: {
        "coding-red": "#D85B5F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
