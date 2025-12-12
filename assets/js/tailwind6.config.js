/* ========================================
   Vintage Coffee & Kitchen - Tailwind Configuration
   ======================================== */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#e68019",
                "accent": "#2A9D8F",
                "secondary": "#2C1810",
                "background-light": "#f8f7f6",
                "background-dark": "#211911",
                "card-light": "#FFFFFF",
                "card-dark": "#261E1B",
                "paper": "#ffffff",
                "paper-dark": "#2c2219",
                "stone-paper": "#f4f2f0",
                "panel-dark": "#32221C",
                "surface-dark": "#2a2018",
                "text-main": "#181411",
                "text-main-light": "#3E2723",
                "text-main-dark": "#EFEBE9",
                "text-muted": "#887563",
                "text-muted-light": "#5D4037",
                "text-muted-dark": "#BCAAA4",
                "ink": "#181411",
                "ink-light": "#887563",
            },
            fontFamily: {
                "display": ["Noto Serif", "serif"],
                "body": ["Noto Sans", "sans-serif"],
                "serif": ["Playfair Display", "serif"],
                "sans": ["Lato", "sans-serif"],
                "script": ["Dancing Script", "cursive"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "1.5rem",
                "full": "9999px"
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
