/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},

		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#222831',
			secondary: '#76ABAE',
			tertiary: '#31363F',
		}),

		textColor: (theme) => ({
			...theme('colors'),
			primary: '#222831',
			secondary: '#76ABAE',
			tertiary: '#31363F',
		}),

		borderColor: (theme) => ({
			...theme('colors'),
			primary: '#222831',
			secondary: '#76ABAE',
			tertiary: '#31363F',
		}),
	},
	plugins: [],
};
