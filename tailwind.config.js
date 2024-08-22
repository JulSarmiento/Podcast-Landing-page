/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'purple' : '#572EE5',
      'light-gray'  : '#F3F5F8'
    },
    extend: {},
  },
  plugins: [],
}

