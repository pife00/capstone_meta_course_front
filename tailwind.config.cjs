/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",

    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    fontFamily: {
      Markazi: ["Markazi", "Markazi"],
    },
    colors: {
      myGreen: "#495E57",
      myYellow: "#F4CE14",
    },
  },
  plugins: [require("flowbite/plugin")],
};
