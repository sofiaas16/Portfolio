document.addEventListener("DOMContentLoaded", () => {
  const pagesSelector = document.querySelector(".pages-selector")
  const pagesBtn = document.querySelector(".pages-btn")

  if (!pagesSelector || !pagesBtn) return

  pagesBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    pagesSelector.classList.toggle("open")
  })

  document.addEventListener("click", (e) => {
    if (!pagesSelector.contains(e.target)) {
      pagesSelector.classList.remove("open")
    }
  })
})
