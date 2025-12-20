const techTabs = document.querySelectorAll(".tech-tab")
const techItems = document.querySelectorAll(".tech-item")
const techTrack = document.querySelector(".tech-track")

techTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    techTabs.forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")

    const category = tab.getAttribute("data-category")

    techItems.forEach((item) => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.classList.remove("hidden")
      } else {
        item.classList.add("hidden")
      }
    })

    techTrack.style.animation = "none"
    techTrack.offsetHeight
    techTrack.style.animation = null
  })
})

function duplicateTechItems() {
  const items = techTrack.innerHTML
  techTrack.innerHTML = items + items
}
duplicateTechItems()
