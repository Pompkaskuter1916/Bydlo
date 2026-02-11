/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f4fce8',
                    100: '#e6f9cd',
                    200: '#ceef9c',
                    300: '#afe064',
                    400: '#93ce38',
                    500: '#80bc40', // Base color from logo
                    600: '#62962d',
                    700: '#4b7520',
                    800: '#3e5d1e',
                    900: `#344e1c`,
                    950: '#1a2b0b',
                }
            }
        },
    },
    plugins: [],
}
