/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		fontFamily:{
			"sans"
		}
		extend: {
			colors: {
				"twitter-blue": "#1da1f2",
			},
		},
	},
	plugins: [],
};
