/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'white': 'hsl(0, 0%, 100%)', //darkmode-text,lightmode-elements
        // light mode
        'dark-gray': 'hsl(0, 0%, 52%)', //input
        'very-dark-blue': 'hsl(200, 15%, 8%)', //text
        'very-light-gray': 'hsl(200, 15%, 8%)', //backgound

        // dark mode
        'dark-blue': 'hsl(209, 23%, 22%)', //elements
        'very-dark-blue': 'hsl(207, 26%, 17%)', //Backgound
      },
    },
  },
  plugins: [],
}

