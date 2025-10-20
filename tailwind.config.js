/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        redCrayola: "#ee4266",
        night: "#0a0f0d",
        silver: "#c4cbca",
        yellowLight: "#fcd34d",
        orange: "#ff6900",
      },
    },
  },
};
