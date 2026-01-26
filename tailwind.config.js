/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#ff9500",
                "secondary-blue": "#6399ce",
                "background-light": "#f5f6f8",
                "background-dark": "#0a0f1a",
                "surface-dark": "#121a2b",
                "border-dark": "#253451",
                "text-secondary": "#94a3b8",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Noto Sans", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.375rem",
                lg: "0.75rem",
                xl: "1rem",
                full: "9999px",
            },
        },
    },
    plugins: [],
}
