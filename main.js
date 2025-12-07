//  HAMBURGER MENU TOGGLE 
// Get references to the hamburger icon and navigation links 
const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('navLinks')

// Add click event to the hamburger menu 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle "show" class to the slide menu open or closed //
    hamburger.classList.toggle('active');// Toggle "active" class to animate hamburger icon into an x
});
