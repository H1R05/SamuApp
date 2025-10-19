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
        veronica: "#9c1cfd",
        redCrayola: "#ee4266",
        night: "#0a0f0d",
        silver: "#c4cbca",
        verdigris: "#3cbbb1",
        coral: "#EB9486",
        yellowLight: "#fcd34d",
      },
    },
  },
};
