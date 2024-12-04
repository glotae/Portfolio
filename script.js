// JavaScript for Menu Toggle (Responsive)
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

// Smooth Scroll
function scrollToSection(section) {
  window.location.href = section;
}

// Form Validation (for contact.html)
if (document.querySelector('#contactForm')) {
  document.querySelector('#contactForm').addEventListener('submit', (event) => {
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    if (!email.value || !message.value) {
      alert('Please fill in all fields.');
      event.preventDefault();
    }
  });
}
