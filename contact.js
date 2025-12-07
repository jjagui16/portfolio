// Select the contact form element. Using the form's ID ensures we only attach validation to the contact form
const form = document.getElementById("contactForm");

// This listener runs when the user clicks the "Send" button
form.addEventListener("submit", function(event) {
    let isValid = true;// Track overall form validityu
    let messages = [];// Store messges for all validation errors

// Retrieve and clean input values by using trim to remove extra spaces 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

/* ---------------------------
    NAME VALIDATION
    - Must be at least 2 characters
    - Ensures the user provides a real name
    --------------------------- */
    if (name.length < 2) {
        messages.push("Name must be at least 2 characters.");
        isValid = false;
    }

/* ---------------------------
    EMAIL VALIDATION
    - Must follow standard email format
    - Uses a simple regular expression to test validity
    - Prevents submission of invalid emails
    --------------------------- */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messages.push("Please enter a valid email address.");
        isValid = false;
    }

/* ---------------------------
    MESSAGE VALIDATION
    - Must be at least 10 characters
    - Ensures the message is meaningful
    --------------------------- */
    if (message.length < 10) {
        messages.push("Message must be at least 10 characters.");
        isValid = false;
    }

// Prevent submission if invalid validations
    if (!isValid) {
        event.preventDefault();// Stop default form submission
        alert(messages.join("\n"));// Show errors to user
    }
});