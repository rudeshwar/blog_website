// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

// Add event listener for dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>' // Sun icon for light mode
    : '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
});

// Responsive Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Add event listener for navbar toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

