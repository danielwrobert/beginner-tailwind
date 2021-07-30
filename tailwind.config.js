const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./*.html'], // see https://tailwindcss.com/docs/installation#building-your-css
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: colors.orange,
				teal: colors.teal,
				'light-blue': colors.lightBlue,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
