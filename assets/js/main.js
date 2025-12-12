document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle Logic
    // Select the button that contains the 'menu' icon text, to handle different classes/breakpoints
    const headerButtons = document.querySelectorAll('header button');
    const menuButton = Array.from(headerButtons).find(btn => btn.textContent.trim() === 'menu');

    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');

            // Toggle icon between 'menu' and 'close'
            const iconSpan = menuButton.querySelector('span');
            if (iconSpan) {
                if (mobileMenu.classList.contains('hidden')) {
                    iconSpan.textContent = 'menu';
                } else {
                    iconSpan.textContent = 'close';
                }
            }
        });
    }
});
