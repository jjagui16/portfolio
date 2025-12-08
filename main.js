//  HAMBURGER MENU TOGGLE 
// Get references to the hamburger icon and navigation links 
const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('navLinks')

// Add click event to the hamburger menu 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle "show" class to the slide menu open or closed //
    hamburger.classList.toggle('active');// Toggle "active" class to animate hamburger icon into an x
});

// Get the theme toggle button by its ID
const toggleBtn = document.getElementById("themeToggle");

// Check if the user has a saved theme in localStorage
if (localStorage.getItem("theme") === "light") {
    // If saved theme is light, apply the light-mode class to the body
    document.body.classList.add("light-mode");
    // Update the button text to indicate the next toggle will switch to dark mode
    toggleBtn.textContent = "Dark Mode";
}

// Add a click event listener to the toggle button
toggleBtn.addEventListener("click", () => {
    // Toggle the "light-mode" class on the body
    document.body.classList.toggle("light-mode");

    // Check if light-mode is currently active
    if (document.body.classList.contains("light-mode")) {
        // If light mode is active:
        // - Set the button text to "Dark Mode" (next click will switch to dark)
        // - Save the theme preference as "light" in localStorage
        toggleBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        // If dark mode is active:
        // - Set the button text to "Light Mode" (next click will switch to light)
        // - Save the theme preference as "dark" in localStorage
        toggleBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    }
});
