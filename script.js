// Portfolio JavaScript Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the portfolio
    initializePortfolio()
  })
  
  function initializePortfolio() {
    // Navigation functionality
    setupNavigation()
  
    // Skills animation
    setupSkillsAnimation()
  
    // Contact form
    setupContactForm()
  
    // Smooth animations on scroll
    setupScrollAnimations()
  
    // Resume functionality
    setupResumeLink()
  }
  
  // Navigation Setup
  function setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link")
    const sections = document.querySelectorAll(".section")
  
    // Declare openResume function here
    window.openResume = () => {
      // Create a link to your resume PDF
      const resumeUrl = "assets/documents/Sara_Zambrano_Resume.pdf"
      window.open(resumeUrl, "_blank")
    }
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const targetSection = this.getAttribute("data-section")
  
        // Handle resume link differently
        if (targetSection === "resume") {
          window.openResume()
          return
        }
  
        // Remove active class from all nav links
        navLinks.forEach((navLink) => navLink.classList.remove("active"))
  
        // Add active class to clicked nav link
        this.classList.add("active")
  
        // Hide all sections
        sections.forEach((section) => section.classList.remove("active"))
  
        // Show target section
        const targetSectionElement = document.getElementById(targetSection)
        if (targetSectionElement) {
          targetSectionElement.classList.add("active")
  
          // Trigger animations for the new section
          triggerSectionAnimations(targetSectionElement)
        }
      })
    })
  }
  
  // Skills Animation Setup
  function setupSkillsAnimation() {
    const skillBars = document.querySelectorAll(".skill-progress")
  
    // Function to animate skill bars
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width + "%"
        }, 300)
      })
    }
  
    // Animate skills when about section is active
    const aboutSection = document.getElementById("about")
    if (aboutSection && aboutSection.classList.contains("active")) {
      setTimeout(animateSkillBars, 500)
    }
  
    // Re-animate when switching to about section
    document.addEventListener("sectionChanged", (e) => {
      if (e.detail.section === "about") {
        setTimeout(animateSkillBars, 300)
      }
    })
  }
  
  // Contact Form Setup
  function setupContactForm() {
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Get form data
        const formData = new FormData(this)
        const name = formData.get("name")
        const email = formData.get("email")
        const subject = formData.get("subject")
        const message = formData.get("message")
  
        // Basic validation
        if (!name || !email || !subject || !message) {
          showNotification("Please fill in all fields.", "error")
          return
        }
  
        if (!isValidEmail(email)) {
          showNotification("Please enter a valid email address.", "error")
          return
        }
  
        // Simulate form submission
        const submitButton = this.querySelector(".submit-button")
        const originalText = submitButton.innerHTML
  
        submitButton.innerHTML = `
                  <svg class="button-icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                  Sending...
              `
        submitButton.disabled = true
  
        // Simulate API call
        setTimeout(() => {
          showNotification("Message sent successfully! I'll get back to you soon.", "success")
          this.reset()
          submitButton.innerHTML = originalText
          submitButton.disabled = false
        }, 2000)
      })
    }
  }
  
  // Scroll Animations Setup
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      })
    }, observerOptions)
  
    // Observe all cards and project items
    const animatedElements = document.querySelectorAll(".card, .service-card, .project-card")
    animatedElements.forEach((el) => observer.observe(el))
  }
  
  // Resume Link Setup
  function setupResumeLink() {
    // You can replace this with the actual path to your resume PDF
    // openResume function is declared in setupNavigation
  }
  
  // Utility Functions
  function triggerSectionAnimations(section) {
    // Dispatch custom event for section change
    const event = new CustomEvent("sectionChanged", {
      detail: { section: section.id },
    })
    document.dispatchEvent(event)
  
    // Add slide-up animation to section content
    section.classList.add("slide-up")
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  function showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
          <div class="notification-content">
              <span class="notification-message">${message}</span>
              <button class="notification-close">&times;</button>
          </div>
      `
  
    // Add notification styles
    notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
          color: white;
          font-weight: 500;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          max-width: 400px;
      `
  
    // Set background color based on type
    const colors = {
      success: "#10b981",
      error: "#ef4444",
      info: "#3b82f6",
    }
    notification.style.backgroundColor = colors[type] || colors.info
  
    // Add to document
    document.body.appendChild(notification)
  
    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)
  
    // Close functionality
    const closeBtn = notification.querySelector(".notification-close")
    closeBtn.addEventListener("click", () => {
      removeNotification(notification)
    })
  
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(notification)
    }, 5000)
  }
  
  function removeNotification(notification) {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }
  
  // Smooth scrolling for internal links
  document.addEventListener("click", (e) => {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault()
      const targetId = e.target.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
  
  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("fade-in")
  
    // Trigger initial animations
    setTimeout(() => {
      const aboutSection = document.getElementById("about")
      if (aboutSection && aboutSection.classList.contains("active")) {
        triggerSectionAnimations(aboutSection)
      }
    }, 300)
  })
  
  // Add CSS for spinning animation
  const style = document.createElement("style")
  style.textContent = `
      .animate-spin {
          animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(360deg);
          }
      }
      
      .notification-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
      }
      
      .notification-close {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          line-height: 1;
      }
      
      .notification-close:hover {
          opacity: 0.8;
      }
  `
  document.head.appendChild(style)
  