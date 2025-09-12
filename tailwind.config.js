/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea580c", // Arancione
        secondary: "#1f2937", // Grigio scuro
        accent: "#fb923c", // Arancione chiaro
      },
    },
  },
  plugins: [],
};
