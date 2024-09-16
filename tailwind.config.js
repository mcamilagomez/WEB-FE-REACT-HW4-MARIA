/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        moderustic: ["Public Sans"], // Añade la fuente Moderustic
      },
    },
  },
  plugins: [],
}

