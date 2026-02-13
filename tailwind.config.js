/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#9D7AE8", // Lavender
        "primary-hover": "#8C68DE",
        "background-light": "#F6F1FF", // Soft lavender
        "background-dark": "#2C2636", // Deep plum
        "retro-green": "#BFA7F3", // Lavender tint
        "retro-yellow": "#E9D7FF", // Lilac light
        "retro-pink": "#C7A7FF", // Soft lavender
        "note-yellow": "#F7F0FF",
        "note-blue": "#EEE4FF",
        "note-pink": "#E6D6FF",
        "note-green": "#EBDFFF",
        "pink-200": "#E6D6FF",
        "pink-300": "#D7C2FF",
        "pink-400": "#C2A5FF",
        "pink-500": "#B08CFF",
        "pink-600": "#9D7AE8",
        "pink-700": "#8663C8",
      },
      fontFamily: {
        display: ["'Shrikhand'", "serif"], // Bold Retro
        body: ["'Nunito'", "sans-serif"], // Soft Rounded
        hand: ["'Caveat'", "cursive"], // Handwriting
      },
      backgroundImage: {
        'noise': "url('https://www.transparenttextures.com/patterns/stardust.png')", 
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(157, 122, 232, 0.25)',
        'retro-hover': '2px 2px 0px 0px rgba(157, 122, 232, 0.2)',
        'retro-bold': '6px 6px 0px 0px #9D7AE8',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
