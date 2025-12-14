tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#E67E22", // Vibrant orange/amber
                "primary-dark": "#D35400",
                "accent-brown": "#4E342E", // Deep espresso brown
                "background-light": "#F9F5F0", // Warm off-white paper tone
                "background-sidebar": "#FFFFFF",
                "surface-card": "#FFFFFF",
                "surface-dark": "#261C19", // Very dark coffee bean for contrast sections
                "surface-highlight": "#FFF3E0", // Light amber highlight
                "text-main": "#3E2723", // Dark brown
                "text-secondary": "#8D6E63", // Muted brown
                "price-color": "#E67E22",
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
                'soft': '0 8px 30px rgba(0,0,0,0.04)',
                'card': '0 4px 12px rgba(62, 39, 35, 0.05)',
                'floating': '0 10px 40px -10px rgba(230, 126, 34, 0.3)',
            }
        }
    },
};
