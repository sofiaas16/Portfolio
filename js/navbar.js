// Mobile menu
const mobileBtn = document.getElementById("mobile-btn");
const navLinks = document.querySelector(".nav-links");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Dropdown menu
const menuBtn = document.getElementById("menu-btn");
const menuDropdown = document.getElementById("menu-dropdown");

menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("hidden");
});

// Language menu
const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});
