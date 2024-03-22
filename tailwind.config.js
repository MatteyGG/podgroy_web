/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#6A64F1',
        primary_dark : '#1c334f',
        primary_light : '#8F94FB',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};
