/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-bg": "#36393f",
                "mid-bg": "#2f3136",
                "dark-bg": "#202225",
            },
        },
    },
    plugins: [],
};
