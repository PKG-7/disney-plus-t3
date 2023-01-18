/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg-image": "url('/images/login-background.jpg')",
      },
    },
  },
  plugins: [],
};
