/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Teachers"', 'sans-serif'], // Set Teachers as the default sans-serif font
      },
      keyframes: {
        // Fade Animations
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "flip-in": {
          "0%": { transform: "rotateY(-180deg)", opacity: "0" },
          "100%": { transform: "rotateY(0)", opacity: "1" },
        },

        // Slide Animations
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-up-fade": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down-fade": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left-fade": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right-fade": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        // Fade Animations
        "fade-up": "fade-up 0.5s ease-in-out forwards",
        "fade-down": "fade-down 0.5s ease-in-out forwards",
        "fade-left": "fade-left 0.5s ease-in-out forwards",
        "fade-right": "fade-right 0.5s ease-in-out forwards",
        "fade-in": "fade-in 0.5s ease-in forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "fade-scale": "fade-scale 0.5s ease-in-out forwards",
        "flip-in": "flip-in 0.6s ease-in-out forwards",

        // Slide Animations
        "slide-up": "slide-up 0.5s ease-in-out forwards",
        "slide-down": "slide-down 0.5s ease-in-out forwards",
        "slide-left": "slide-left 0.5s ease-in-out forwards",
        "slide-right": "slide-right 0.5s ease-in-out forwards",
        "slide-up-fade": "slide-up-fade 0.5s ease-in-out forwards",
        "slide-down-fade": "slide-down-fade 0.5s ease-in-out forwards",
        "slide-left-fade": "slide-left-fade 0.5s ease-in-out forwards",
        "slide-right-fade": "slide-right-fade 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
