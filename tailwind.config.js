/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-dark": "#161b22",
        "secondary-dark": "#333354",
        "tertiary-dark": "#7c7cb7",
        "base-dark": "#242438",
        "green-dark": "#395B64",
        "yellow-dark": "#F2C94C",
        "blue-dark": "#160040",
        "orange-dark": "#B3541E",
        "purple-dark": "#3F0071",
      },
    },
    variants: {
      extends: {
        display: ['group-focus'],
        opacity: ['group-focus'],
        inset: ['group-focus']
      },
    },
  },
  plugins: [],
};
