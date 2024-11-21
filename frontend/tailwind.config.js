/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'green': '0 4px 6px rgba(0, 128, 0, 0.5)',
      },
      boxShadow: {
        'purple': '0 4px 6px rgba(128, 0, 128, 0.5)',  // Purple shadow
      },
    },
  },
  plugins: [],
}

