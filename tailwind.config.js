import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},

				// Color from 9Kicks logo
				ivory: {
					DEFAULT: '#FBFDEA',
					100: '#515908',
					200: '#a1b110',
					300: '#daec36',
					400: '#eaf58f',
					500: '#fbfdea',
					600: '#fcfdec',
					700: '#fcfef1',
					800: '#fdfef6',
					900: '#fefffa'
				},
				dark_cyan: {
					DEFAULT: '#10878C',
					100: '#031b1c',
					200: '#073739',
					300: '#0a5255',
					400: '#0d6e71',
					500: '#10878c',
					600: '#18c6cc',
					700: '#42e3e9',
					800: '#81edf0',
					900: '#c0f6f8'
				},
				fgray: {
					DEFAULT: '#F1F4F0',
					100: '#203329',
					200: '#283f34',
					300: '#C1BDC7'
				},
				beige: {
					DEFAULT: '#FFFFE8',
					100: '#616100',
					200: '#c2c200',
					300: '#ffff24',
					400: '#ffff85',
					500: '#ffffe8',
					600: '#ffffeb',
					700: '#fffff0',
					800: '#fffff5',
					900: '#fffffa'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Roboto Flex', ...fontFamily.sans]
			}
		}
	}
};

export default config;
