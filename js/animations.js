
const progressBars = document.querySelectorAll(".progress-fill")

const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progress = entry.target.getAttribute("data-progress")
      entry.target.style.width = `${progress}%`
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

progressBars.forEach((bar) => progressObserver.observe(bar))

const fadeElements = document.querySelectorAll(
  ".project-card, .skill-card, .beyond-card, .highlight-card, .language-card"
)

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, { threshold: 0.1 })

fadeElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  fadeInObserver.observe(el)
})
