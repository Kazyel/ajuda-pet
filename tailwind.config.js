/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			text: {
				50: '#f9ebf2',
				100: '#f3d8e6',
				200: '#e8b0cc',
				300: '#dc89b3',
				400: '#d06299',
				500: '#c43b80',
				600: '#9d2f66',
				700: '#76234d',
				800: '#4f1733',
				900: '#270c1a',
				950: '#14060d'
			},
			background: {
				50: '#f2f2f2',
				100: '#e6e6e6',
				200: '#cccccc',
				300: '#b3b3b3',
				400: '#999999',
				500: '#808080',
				600: '#666666',
				700: '#4d4d4d',
				800: '#333333',
				900: '#1a1a1a',
				950: '#0d0d0d'
			},
			primary: {
				50: '#f9ebf2',
				100: '#f4d7e6',
				200: '#e8b0cd',
				300: '#dd88b4',
				400: '#d1619b',
				500: '#c63982',
				600: '#9e2e68',
				700: '#77224e',
				800: '#4f1734',
				900: '#280b1a',
				950: '#14060d'
			},
			secondary: {
				50: '#f9ebf2',
				100: '#f4d7e6',
				200: '#e8b0cd',
				300: '#dd88b4',
				400: '#d1619b',
				500: '#c63982',
				600: '#9e2e68',
				700: '#77224e',
				800: '#4f1734',
				900: '#280b1a',
				950: '#14060d'
			},
			accent: {
				50: '#f9ebf2',
				100: '#f4d7e6',
				200: '#e8b0cd',
				300: '#dd88b4',
				400: '#d1619b',
				500: '#c63982',
				600: '#9e2e68',
				700: '#77224e',
				800: '#4f1734',
				900: '#280b1a',
				950: '#14060d'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			gridTemplateRows: {
				// Simple 8 row grid
				8: 'repeat(9, minmax(0, 1fr))'
			}
		}
	},
	plugins: []
};
