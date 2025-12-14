tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D97706", // Warmer orange-brown like the button in ref
                "primary-dark": "#B45309",
                "accent-brown": "#5D4037", // Dark brown for text headings
                "background-light": "#FDFBF7", // Creamy off-white background
                "background-sidebar": "#FFFFFF", // White sidebar
                "surface-card": "#FFFFFF",
                "surface-highlight": "#FFF8F1", // Very light orange/cream highlight
                "text-main": "#3E2723", // Dark coffee brown
                "text-secondary": "#795548", // Lighter brown text
                "price-color": "#D97706", // Orange price
            },
            fontFamily: {
                display: ["'Playfair Display'", "serif"],
                body: ["'Lato'", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
            }
        },
    },
};
