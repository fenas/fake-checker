/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "zigzag/**/*.{ts,html}"],
  theme: {
    extend: {
      colors: {
        blackish: "#484847",
        offWhite: "#ffff",
        primary: "var(--primary)",
        "primary-transparent-10": "var(--primary-transparent-10)",
      },
    },
  },
  plugins: [],
};
