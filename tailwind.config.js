/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#213555",
        blue: "#3E5879",
        beige: "#D8C4B6",
        "light-beige": "#F5EFE7",
      },
    },
    plugins: [],
  },
};
