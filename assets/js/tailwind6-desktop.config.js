tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#c04e22", // Burnt orange from filter buttons
                "primary-dark": "#a03d1a",
                "background-light": "#fcf8f2", // Warm off-white
                "background-dark": "#1a1816", // Dark brown/black for dark mode
                "surface-light": "#ffffff",
                "surface-dark": "#2a2622",
                "vintage-brown": "#5D4037",
                "text-light": "#333333",
                "text-dark": "#e0e0e0",
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                body: ["Lato", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
            }
        }
    },
};
