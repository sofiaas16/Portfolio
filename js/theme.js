const themeToggle = document.querySelector(".theme-toggle")
const body = document.body

const savedTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", savedTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})
