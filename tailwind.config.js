// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//    content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//    plugins: [
//     require('daisyui'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ✅ important
  theme: {
    extend: {},
  },
  plugins: [],
};
