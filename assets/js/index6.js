/* ========================================
   Vintage Coffee & Kitchen - Main JavaScript
   ======================================== */

// ========== Hero Carousel Functionality ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicator');
const track = document.getElementById('heroCarousel');
const totalSlides = slides.length;

/**
 * Updates the carousel position and indicator states
 */
function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((ind, index) => {
        if (index === currentSlide) {
            ind.classList.add('active');
            ind.classList.remove('bg-white/50');
        } else {
            ind.classList.remove('active');
            ind.classList.add('bg-white/50');
        }
    });
}

/**
 * Navigate to a specific slide
 * @param {number} index - The slide index to navigate to
 */
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

/**
 * Navigate to the next slide
 */
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

/**
 * Navigate to the previous slide
 */
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Auto-advance carousel every 6 seconds
setInterval(nextSlide, 6000);