
const languageSelector = document.querySelector(".language-selector")
const langBtn = document.querySelector(".lang-btn")
const langOptions = document.querySelectorAll(".lang-dropdown li")

const pagesSelector = document.querySelector(".pages-selector")
const pagesBtn = document.querySelector(".pages-btn")

const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navLinks = document.querySelector(".nav-links")


langBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  languageSelector.classList.toggle("open")
  pagesSelector.classList.remove("open")
})

pagesBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  pagesSelector.classList.toggle("open")
  languageSelector.classList.remove("open")
})

document.addEventListener("click", (e) => {
  if (!e.target.closest(".language-selector")) languageSelector.classList.remove("open")
  if (!e.target.closest(".pages-selector")) pagesSelector.classList.remove("open")
})


mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open")
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    languageSelector.classList.remove("open")
    pagesSelector.classList.remove("open")
  }
})


const translations = {
  en: {
    nav: ["Home", "Get in Touch", "Profiles"],
    pages: ["Contact", "Learning", "Projects"],

    contactTitle: "Get in Touch",
    contactDesc: "Feel free to reach out for collaborations or just a friendly hello!",
    placeholders: ["Your Name", "Your Email", "Your Message"],
    sendBtn: "Send Message",

    profilesTitle: "My Profiles",
    roles: ["Software Developer", "@sofiaas16"],
    descriptions: [
      "👩‍💻 Junior Full Stack Developer | Frontend & Backend | HTML, CSS, JS, PHP, SQL | Agile | UI & Logic | Teamwork & Leadership",
      "Software Developer with a background in computer systems and continuous professional training. Check out my repositories and contributions!"
    ],
    links: ["View LinkedIn", "View GitHub"],

    footer: "Building the web, one line at a time."
  },

  es: {
    nav: ["Inicio", "Contacto", "Perfiles"],
    pages: ["Contacto", "Aprendizaje", "Proyectos"],

    contactTitle: "Contáctame",
    contactDesc: "No dudes en escribirme para colaboraciones o simplemente para saludar.",
    placeholders: ["Tu Nombre", "Tu Correo", "Tu Mensaje"],
    sendBtn: "Enviar Mensaje",

    profilesTitle: "Mis Perfiles",
    roles: ["Desarrolladora de Software", "@sofiaas16"],
    descriptions: [
      "👩‍💻 Desarrolladora Full Stack Junior | Frontend & Backend | HTML, CSS, JS, PHP, SQL | Agile | UI & Lógica | Trabajo en Equipo & Liderazgo",
      "Desarrolladora de software con formación en sistemas informáticos y capacitación profesional continua. ¡Revisa mis repositorios y contribuciones!"
    ],
    links: ["Ver LinkedIn", "Ver GitHub"],

    footer: "Construyendo la web, una línea a la vez."
  },

  fr: {
    nav: ["Accueil", "Contact", "Profils"],
    pages: ["Contact", "Apprentissage", "Projets"],

    contactTitle: "Me contacter",
    contactDesc: "N'hésitez pas à me contacter pour des collaborations ou simplement dire bonjour.",
    placeholders: ["Votre Nom", "Votre Email", "Votre Message"],
    sendBtn: "Envoyer le message",

    profilesTitle: "Mes Profils",
    roles: ["Développeuse Logiciel", "@sofiaas16"],
    descriptions: [
      "👩‍💻 Développeuse Full Stack Junior | Frontend & Backend | HTML, CSS, JS, PHP, SQL | Agile | UI & Logique | Travail d’équipe & Leadership",
      "Développeuse logiciel avec une formation en systèmes informatiques et un perfectionnement professionnel continu. Découvrez mes dépôts et contributions !"
    ],
    links: ["Voir LinkedIn", "Voir GitHub"],

    footer: "Construire le web, une ligne à la fois."
  }
}

function setLanguage(lang) {
  const t = translations[lang]

  document.querySelectorAll(".nav-links a").forEach((el, i) => el.textContent = t.nav[i])
  document.querySelectorAll(".pages-dropdown a").forEach((el, i) => el.textContent = t.pages[i])

  document.querySelector(".contact-left-title h2").textContent = t.contactTitle
  document.querySelector(".contact-left-title p").textContent = t.contactDesc

  document.querySelectorAll(".contact-input").forEach((el, i) => {
    el.placeholder = t.placeholders[i]
  })

  document.querySelector(".contact-btn").childNodes[0].textContent = t.sendBtn + " "

  document.querySelector(".profiles-section .section-title").textContent = t.profilesTitle

  document.querySelectorAll(".profile-role").forEach((el, i) => el.textContent = t.roles[i])
  document.querySelectorAll(".profile-description").forEach((el, i) => el.textContent = t.descriptions[i])
  document.querySelectorAll(".profile-link").forEach((el, i) => {
    el.lastChild.textContent = " " + t.links[i]
  })

  document.querySelector(".footer-tagline").textContent = t.footer
}


langOptions.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.dataset.lang
    localStorage.setItem("language", lang)
    setLanguage(lang)

    langBtn.innerHTML = `${lang.toUpperCase()} <span class="arrow">▼</span>`
    langOptions.forEach(o => o.classList.remove("active"))
    option.classList.add("active")

    languageSelector.classList.remove("open")
  })
})


const savedLanguage = localStorage.getItem("language") || "en"
setLanguage(savedLanguage)

langBtn.innerHTML = `${savedLanguage.toUpperCase()} <span class="arrow">▼</span>`
langOptions.forEach(o =>
  o.classList.toggle("active", o.dataset.lang === savedLanguage)
)
