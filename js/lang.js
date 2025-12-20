const langSelector = document.querySelector(".language-selector")
const langBtn = document.querySelector(".lang-btn")
const langOptions = document.querySelectorAll(".lang-dropdown li")

langBtn.addEventListener("click", () => {
  langSelector.classList.toggle("open")
})

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const lang = option.getAttribute("data-lang")
    const langText = lang.toUpperCase()

    langBtn.innerHTML = `${langText} <span class="arrow">▼</span>`

    langOptions.forEach((opt) => opt.classList.remove("active"))
    option.classList.add("active")

    langSelector.classList.remove("open")
    console.log(`Language changed to: ${lang}`)
  })
})

document.addEventListener("click", (e) => {
  if (!langSelector.contains(e.target)) {
    langSelector.classList.remove("open")
  }
})

