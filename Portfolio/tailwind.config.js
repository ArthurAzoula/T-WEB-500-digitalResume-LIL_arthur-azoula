/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'soft-mint-green': '#D1E8E2',
        'deep-teal': '#19747E',
        'light-sky-blue': '#A9D6E5',
        'light-gray': '#E2E2E2',
      },
      textColor: {
        'soft-mint-green': '#D1E8E2',
        'deep-teal': '#19747E',
        'light-sky-blue': '#A9D6E5',
        'light-gray': '#E2E2E2',
      },
    },
  },
  plugins: [],
};
