/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    themes: ["light", "cupcake", "pastel"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
