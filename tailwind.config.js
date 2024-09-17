/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ibm: ["'IBM Plex Sans'", 'sans-serif'],
                mplus: ["'M PLUS Rounded 1c'", 'sans-serif'],
                code: ["'Source Code Pro', 'monospace'"],
                sughoiy: ["Sughoiy"],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
}
