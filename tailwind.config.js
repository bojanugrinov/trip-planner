/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#0541ff',
			secondary: '#3d3839',
		}),

		textColor: (theme) => ({
			...theme('colors'),
			primary: '#3d3839',
		}),

		ringColor: (theme) => ({
			...theme('colors'),
			primary: '#0541ff',
			secondary: '#3d3839',
		}),

		borderColor: (theme) => ({
			...theme('colors'),
			primary: '#0541ff',
			secondary: '#3d3839',
		}),
	},
	plugins: [],
};
