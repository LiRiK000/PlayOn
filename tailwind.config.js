/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			desktop: '1920px',
			laptop: '1024px',
			tablet: '768px',
			phone: '380px',
		},
		extend: {
			colors: {
				pink: '#FF2C78',
				gray: '#ACACAC',
				white: '#D9D9D9',
				dark: '#1D1731',
			},
			fontFamily: {
				heading: 'Poppins, sans-serif',
				body: 'Poppins, sans-serif',
			},
			fontWeight: {
				normal: '400',
				semibold: '600',
			},
		},
	},
	plugins: [],
};
