tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D4A373", // Warm Tan/Gold for buttons/accents
                secondary: "#2C1810", // Dark Coffee Brown
                "background-light": "#FAFAF5", // Light cream background
                "background-dark": "#1A1412", // Very dark brown background for dark mode
                "card-light": "#FFFFFF",
                "card-dark": "#261E1B",
                "text-main-light": "#3E2723",
                "text-main-dark": "#EFEBE9",
                "text-muted-light": "#5D4037",
                "text-muted-dark": "#BCAAA4",
                "panel-dark": "#32221C" // Specific dark panel color
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
                script: ['Dancing Script', 'cursive'],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to bottom, rgba(26,26,26,0.3), rgba(26,26,26,0.8))",
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
};
