// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Loading Animation
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1500); // Hides loader after 1.5 seconds
});

// Dynamic Project Filtering System
const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        projectItems.forEach(item => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Dynamic Project Searching System
const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {
        const projectText = project.innerText.toLowerCase();
        if (projectText.includes(searchTerm)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    }
});
