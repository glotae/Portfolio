// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the default form submission behavior
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Form submitted successfully!");
        // Optionally, reset the form after submission
        document.getElementById("contact-form").reset();
    }
});

// Add additional features here as needed (e.g., animations, interactive timelines, etc.)
