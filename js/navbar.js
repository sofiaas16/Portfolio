const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navLinks = document.querySelector(".nav-links")
const navbar = document.querySelector(".navbar")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("open")
  navLinks.classList.toggle("open")
})

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("open")
    navLinks.classList.remove("open")
  })
})

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    navbar.style.boxShadow = "0 4px 20px var(--shadow)"
  } else {
    navbar.style.boxShadow = "none"
  }
})
