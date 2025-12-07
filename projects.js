/* ==============================================
PROJECTS SLIDESHOW
Allows users to navigate through project screenshots
============================================== */

let currentSlide = 0; // Track the current slide
const slides = document.querySelectorAll(".slide");

// Function to show a specific slide by index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none"; // Only show current slide
    });
}

// Initialize slideshow by showing the first slide
showSlide(currentSlide);

// Next and Previous buttons
document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length; // Wrap around to first slide
    showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Wrap to last slide
    showSlide(currentSlide);
});
