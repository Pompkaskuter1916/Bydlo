/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Barlow Condensed', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            colors: {
                // Amber/Gold — main accent
                brand: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#c8922a', // warm gold
                    600: '#a97820',
                    700: '#8a6018',
                    800: '#6b4a10',
                    900: '#3d2a08',
                    950: '#1f1504',
                },
                // Earth red — secondary accent (from business card)
                earth: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#dc2626',
                    600: '#b91c1c',
                    700: '#991b1b',
                    800: '#7f1d1d',
                    900: '#450a0a',
                    950: '#220404',
                },
                // Forest dark — backgrounds
                forest: {
                    50: '#f3f6f0',
                    100: '#e2e9db',
                    200: '#c4d4b7',
                    300: '#a0b88e',
                    400: '#7d9b6a',
                    500: '#5d7e4d',
                    600: '#48643c',
                    700: '#39502f',
                    800: '#2a3c22',
                    900: '#141a0a',
                    950: '#0a0c08', // near-black dark forest
                },
            },
            backgroundImage: {
                'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [],
}
