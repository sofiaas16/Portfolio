/* Language Selector */

const langSelector = document.querySelector(".language-selector");
const langBtn = document.querySelector(".lang-btn");
const langOptions = document.querySelectorAll(".lang-dropdown li");

langBtn.addEventListener("click", () => {
  langSelector.classList.toggle("open");
});

langOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const lang = option.getAttribute("data-lang");
    const langText = lang.toUpperCase();

    langBtn.innerHTML = `${langText} <span class="arrow">▼</span>`;

    langOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    langSelector.classList.remove("open");
    localStorage.setItem("language", lang)
    setLanguage(lang);
  });
});

document.addEventListener("click", (e) => {
  if (!langSelector.contains(e.target)) {
    langSelector.classList.remove("open");
  }
});

/*Translations*/

const translations = {
  en: {
    nav: ["About", "Technologies", "Projects", "Skills", "Languages", "Beyond Tech"],
    heroGreeting: "Hello, I'm",
    heroTitle: "Software Developer",
    heroDesc: "Building elegant solutions with clean code and modern technologies.",
    heroButtons: ["View Projects", "Contact Me"],

    aboutTitle: "About Me",
    aboutText: [
      "I'm a software developer with a passion for creating intuitive web experiences. With a background in both frontend and backend technologies, I enjoy tackling challenges that require both technical precision and creative problem-solving.",
      "Currently focused on building scalable applications using modern frameworks and best practices. I believe in writing clean, maintainable code and continuously learning new technologies."
    ],
    highlights: ["Year Experience", "Projects", "Technologies"],

    techTitle: "Technologies",
    projectsTitle: "Latest Projects",

    projectTags: ["Full Stack Project", "Web App", "API"],
    projectDescriptions: [
      "Interactive web application to manage Formula 1 circuits, drivers, and vehicles with simulations, local data persistence, and animated race visualizations.",
      "Interactive web application to manage Formula 1 circuits, drivers, and vehicles with simulations, local data persistence, and animated race visualizations.",
      "Simple web application that consumes the Rick & Morty API to display and filter characters by name using dynamic cards and JavaScript."
    ],
    viewProject: "View Project →",

    skillsTitle: "Soft Skills",
    skills: [
      ["Leadership", "Guiding teams with clarity, responsibility, and a results-driven mindset"],
      ["Team-Work", "Collaborating effectively to achieve shared goals and outcomes"],
      ["Communication", "Expressing ideas clearly and listening actively in technical and non-technical contexts"],
      ["Creativity", "Generating innovative solutions and fresh approaches to problem-solving"],
      ["Adaptability", "Quickly adjusting to new technologies, tools, and changing environments"],
      ["Proactivity", "Taking initiative and anticipating challenges before they arise"]
    ],

    languagesTitle: "Languages",
    languageNames: ["Spanish", "English", "French"],
    languageLevels: ["Native", "Fluent", "Intermediate"],

    pagesMenu: ["Contact", "Learning", "Projects"],

    beyondTitle: "Beyond Tech",
    beyondSubtitle: "When I'm not coding, you'll find me...",
    beyond: [
      ["Reading", "Mystery and romance novels"],
      ["Music", "Discovering new artists"],
      ["Languages", "Learning new languages"],
      ["Travel", "Exploring new cultures"]
    ],

    footerTagline: "Building the web, one line at a time."
  },

  es: {
    nav: ["Sobre mí", "Tecnologías", "Proyectos", "Habilidades", "Idiomas", "Más allá de la tecnología"],
    heroGreeting: "Hola, soy",
    heroTitle: "Desarrolladora de Software",
    heroDesc: "Creando soluciones elegantes con código limpio y tecnologías modernas.",
    heroButtons: ["Ver Proyectos", "Contáctame"],

    aboutTitle: "Sobre mí",
    aboutText: [
      "Soy una desarrolladora de software apasionada por crear experiencias web intuitivas. Con experiencia en frontend y backend, disfruto enfrentar desafíos que combinan precisión técnica y creatividad.",
      "Actualmente enfocada en construir aplicaciones escalables usando frameworks modernos y buenas prácticas. Creo firmemente en escribir código limpio, mantenible y en el aprendizaje continuo."
    ],
    highlights: ["Año de experiencia", "Proyectos", "Tecnologías"],

    techTitle: "Tecnologías",
    projectsTitle: "Últimos Proyectos",

    projectTags: ["Proyecto Full Stack", "Aplicación Web", "API"],
    projectDescriptions: [
      "Aplicación web interactiva para gestionar circuitos, pilotos y vehículos de Fórmula 1 con simulaciones, persistencia de datos local y visualizaciones animadas de carreras.",
      "Aplicación web interactiva para gestionar circuitos, pilotos y vehículos de Fórmula 1 con simulaciones, persistencia de datos local y visualizaciones animadas de carreras.",
      "Aplicación web sencilla que consume la API de Rick & Morty para mostrar y filtrar personajes por nombre usando tarjetas dinámicas y JavaScript."
    ],
    viewProject: "Ver Proyecto →",

    skillsTitle: "Habilidades Blandas",
    skills: [
      ["Liderazgo", "Guiar equipos con claridad, responsabilidad y enfoque en resultados"],
      ["Trabajo en equipo", "Colaborar eficazmente para alcanzar objetivos comunes"],
      ["Comunicación", "Expresar ideas claramente y escuchar activamente"],
      ["Creatividad", "Generar soluciones innovadoras y enfoques frescos"],
      ["Adaptabilidad", "Ajustarse rápidamente a nuevas tecnologías y entornos"],
      ["Proactividad", "Tomar iniciativa y anticipar desafíos"]
    ],

    languagesTitle: "Idiomas",
    languageNames: ["Español", "Inglés", "Francés"],
    languageLevels: ["Nativo", "Fluido", "Intermedio"],

    pagesMenu: ["Contacto", "Aprendizaje", "Proyectos"],

    beyondTitle: "Más allá de la tecnología",
    beyondSubtitle: "Cuando no estoy programando, me encontrarás...",
    beyond: [
      ["Lectura", "Novelas de misterio y romance"],
      ["Música", "Descubriendo nuevos artistas"],
      ["Idiomas", "Aprendiendo nuevos idiomas"],
      ["Viajar", "Explorando nuevas culturas"]
    ],

    footerTagline: "Construyendo la web, una línea a la vez."
  },

  fr: {
    nav: ["À propos", "Technologies", "Projets", "Compétences", "Langues", "Au-delà de la tech"],
    heroGreeting: "Bonjour, je suis",
    heroTitle: "Développeuse Logiciel",
    heroDesc: "Création de solutions élégantes avec un code propre et des technologies modernes.",
    heroButtons: ["Voir les projets", "Me contacter"],

    aboutTitle: "À propos de moi",
    aboutText: [
      "Je suis une développeuse logiciel passionnée par la création d'expériences web intuitives. Avec une expérience en frontend et backend, j'aime relever des défis techniques et créatifs.",
      "Actuellement concentrée sur le développement d'applications évolutives avec des frameworks modernes et de bonnes pratiques. Je crois au code propre et à l'apprentissage continu."
    ],
    highlights: ["An d'expérience", "Projets", "Technologies"],

    techTitle: "Technologies",
    projectsTitle: "Derniers Projets",

    projectTags: ["Projet Full Stack", "Application Web", "API"],
    projectDescriptions: [
      "Application web interactive pour gérer les circuits, pilotes et véhicules de Formule 1 avec des simulations, une persistance locale des données et des visualisations animées.",
      "Application web interactive pour gérer les circuits, pilotes et véhicules de Formule 1 avec des simulations, une persistance locale des données et des visualisations animées.",
      "Application web simple consommant l’API Rick & Morty pour afficher et filtrer les personnages par nom à l’aide de cartes dynamiques et JavaScript."
    ],
    viewProject: "Voir le projet →",

    skillsTitle: "Compétences Douces",
    skills: [
      ["Leadership", "Diriger les équipes avec clarté et responsabilité"],
      ["Travail d'équipe", "Collaborer efficacement pour atteindre des objectifs communs"],
      ["Communication", "Exprimer clairement les idées"],
      ["Créativité", "Proposer des solutions innovantes"],
      ["Adaptabilité", "S'adapter rapidement aux nouveaux environnements"],
      ["Proactivité", "Prendre des initiatives"]
    ],

    languagesTitle: "Langues",
    languageNames: ["Espagnol", "Anglais", "Français"],
    languageLevels: ["Natif", "Courant", "Intermédiaire"],

    pagesMenu: ["Contact", "Apprentissage", "Projets"],

    beyondTitle: "Au-delà de la tech",
    beyondSubtitle: "Quand je ne code pas, vous me trouverez...",
    beyond: [
      ["Lecture", "Romans policiers et romantiques"],
      ["Musique", "Découvrir de nouveaux artistes"],
      ["Langues", "Apprendre de nouvelles langues"],
      ["Voyage", "Découvrir de nouvelles cultures"]
    ],

    footerTagline: "Construire le web, une ligne à la fois."
  }
};

/* For language switching */

function setLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll(".nav-links a").forEach((el, i) => {
    el.textContent = t.nav[i];
  });

  document.querySelector(".hero-greeting").textContent = t.heroGreeting;
  document.querySelector(".hero-title").textContent = t.heroTitle;
  document.querySelector(".hero-description").textContent = t.heroDesc;

  document.querySelectorAll(".hero-cta a").forEach((el, i) => {
    el.textContent = t.heroButtons[i];
  });

  document.querySelector("#about .section-title").textContent = t.aboutTitle;
  document.querySelectorAll(".about-text p").forEach((el, i) => {
    el.textContent = t.aboutText[i];
  });
  document.querySelectorAll(".highlight-label").forEach((el, i) => {
    el.textContent = t.highlights[i];
  });

  document.querySelector("#technologies .section-title").textContent = t.techTitle;
  document.querySelector("#projects .section-title").textContent = t.projectsTitle;

  document.querySelectorAll(".project-tag").forEach((el, i) => {
    el.textContent = t.projectTags[i];
  });
  document.querySelectorAll(".project-description").forEach((el, i) => {
    el.textContent = t.projectDescriptions[i];
  });
  document.querySelectorAll(".project-link:first-child").forEach((el) => {
    el.textContent = t.viewProject;
  });

  document.querySelector("#skills .section-title").textContent = t.skillsTitle;
  document.querySelectorAll(".skill-card").forEach((card, i) => {
    card.querySelector("h3").textContent = t.skills[i][0];
    card.querySelector("p").textContent = t.skills[i][1];
  });

  document.querySelector("#languages .section-title").textContent = t.languagesTitle;
  document.querySelectorAll(".language-name").forEach((el, i) => {
    el.textContent = t.languageNames[i];
  });
  document.querySelectorAll(".language-level").forEach((el, i) => {
    el.textContent = t.languageLevels[i];
  });

  document.querySelectorAll(".pages-dropdown a").forEach((el, i) => {
    el.textContent = t.pagesMenu[i];
  });

  document.querySelector("#beyond .section-title").textContent = t.beyondTitle;
  document.querySelector(".section-subtitle").textContent = t.beyondSubtitle;
  document.querySelectorAll(".beyond-card").forEach((card, i) => {
    card.querySelector("h3").textContent = t.beyond[i][0];
    card.querySelector("p").textContent = t.beyond[i][1];
  });

  document.querySelector(".footer-tagline").textContent = t.footerTagline;
}



const savedLanguage = localStorage.getItem("language") || "en";
setLanguage(savedLanguage);

/* Update button + active state */
langBtn.innerHTML = `${savedLanguage.toUpperCase()} <span class="arrow">▼</span>`;

langOptions.forEach((option) => {
  option.classList.toggle(
    "active",
    option.getAttribute("data-lang") === savedLanguage
  );
});