/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        afs: {
          primary: "#5B2D8E",
          accent: "#9C27B0",
          text: "#222222",
          muted: "#F5F5F5",
          soft: "#F7F1FB",
          line: "#E8DFF2"
        }
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(91, 45, 142, 0.35)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "afs-radial": "radial-gradient(circle at top, rgba(156, 39, 176, 0.22), transparent 45%)",
        "afs-hero": "linear-gradient(135deg, rgba(91, 45, 142, 0.98), rgba(156, 39, 176, 0.86))"
      }
    }
  },
  plugins: []
};
