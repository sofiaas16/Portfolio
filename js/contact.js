// Theme toggle functionality (inherited from theme.js)
const themeToggle = document.querySelector(".theme-toggle")
const body = document.body

const savedTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", savedTheme)

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme === "light" ? "dark" : "light"
    body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  })
}

// Language selector dropdown
const languageSelector = document.querySelector(".language-selector")
const langBtn = document.querySelector(".lang-btn")

if (langBtn && languageSelector) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    languageSelector.classList.toggle("open")
    // Close pages dropdown if open
    document.querySelector(".pages-selector")?.classList.remove("open")
  })

  // Language selection
  document.querySelectorAll(".lang-dropdown li").forEach((item) => {
    item.addEventListener("click", () => {
      const lang = item.dataset.lang
      document.querySelectorAll(".lang-dropdown li").forEach((li) => li.classList.remove("active"))
      item.classList.add("active")
      langBtn.innerHTML = `${lang.toUpperCase()} <span class="arrow">▼</span>`
      languageSelector.classList.remove("open")
    })
  })
}

// Pages selector dropdown
const pagesSelector = document.querySelector(".pages-selector")
const pagesBtn = document.querySelector(".pages-btn")

if (pagesBtn && pagesSelector) {
  pagesBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    pagesSelector.classList.toggle("open")
    // Close language dropdown if open
    document.querySelector(".language-selector")?.classList.remove("open")
  })
}

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  document.querySelector(".language-selector")?.classList.remove("open")
  document.querySelector(".pages-selector")?.classList.remove("open")
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navLinks = document.querySelector(".nav-links")

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  })
}
