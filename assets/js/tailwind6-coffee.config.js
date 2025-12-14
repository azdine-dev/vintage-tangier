tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#8B5E3C", // Coffee brown color derived from wood tones
                "background-light": "#F9F5F0", // Warm off-white paper color
                "background-dark": "#1A1A1A", // Dark charcoal for contrast
                "surface-light": "#FFFFFF",
                "surface-dark": "#2A2A2A",
                "text-light": "#2D2D2D",
                "text-dark": "#E5E5E5",
                "accent": "#D4A373", // Lighter wood tone
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                sans: ["Lato", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                'xl': "1rem",
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
            }
        },
    },
};
