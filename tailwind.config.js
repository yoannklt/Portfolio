/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0D1117", // Fond principal
                text: "#E6EDF3", // Texte principal
                accentBlue: "#58A6FF",
                accentRed: "#FF4D4D",
                borderCustom: "#30363D", // Bordures
            },
        },
    },
    plugins: [],
};
