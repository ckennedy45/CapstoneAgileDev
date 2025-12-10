// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

// Create overlay element
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Update aria-expanded
  const isExpanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
});

// Mobile dropdown toggle
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      // Only toggle if clicking the main dropdown link
      if (e.target.closest('.dropdown') && !e.target.closest('.dropdown-content')) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    }
  });
});

// Close menu on window resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  }
});