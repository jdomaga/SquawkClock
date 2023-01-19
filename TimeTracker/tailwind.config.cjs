const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./index.html"],
	// safelist: [
  //   {
  //     pattern: /./, // flag: remove before pushing to prod... useful for coding but makes huge file
  //   },
  // ],
  theme: {
    extend: {

    },
  },
  plugins: [],
}