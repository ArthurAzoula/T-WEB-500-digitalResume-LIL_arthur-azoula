/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-purple": '#1F0318',
        "champagne": '#EEE0CB',
        "bole": '#7F534B',
        "chamoisee": '#8c705f',
        "black-raisin": '#1e1a1d',
        "dark-gray": "#151515"
      },
      textColor: {
        "dark-purple": '#1F0318',
        "champagne": '#EEE0CB',
        "bole": '#7F534B',
        "chamoisee": '#8c705f',
        "black-raisin": '#1e1a1d'
      },
      fontFamily: {
        custom: ['font-mono', 'mono', 'sans-serif'], // Remplacez "CustomFont" par le nom de votre police de caractères
      },
      colors: {
        "dark-purple": '#1F0318',
        "champagne": '#EEE0CB',
        "bole": '#7F534B',
        "chamoisee": '#8c705f',
        "black-raisin": '#1e1a1d',
        "dark-gray": "#151515"
      }
    },
  },
  plugins: [],
};
