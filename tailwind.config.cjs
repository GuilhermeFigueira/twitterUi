/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				"twitter-blue": "#1da1f2",
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
};
