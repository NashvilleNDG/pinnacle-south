/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navyDark: "#0f2744",
        navyMid: "#1a3a5c",
        cream: "#f5f0eb",
        copper: "#AC7B4A",
        textDark: "#1c2b3a",
        textMuted: "#6b7a8d",
        border: "#e5ddd4",
        processMuted: "#8a9bb0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.15em",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 39, 68, 0.10)",
      },
    },
  },
  plugins: [],
};

