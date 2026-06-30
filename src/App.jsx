import { useEffect, useState } from "react";

const skillGroups = [
  {
    title: { en: "Programming Languages", fr: "Langages de programmation" },
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: { en: "Frontend", fr: "Frontend" },
    items: ["React", "React Native", "Angular"],
  },
  {
    title: { en: "Backend", fr: "Backend" },
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    title: { en: "Database", fr: "Base de données" },
    items: ["PostgreSQL", "Prisma ORM", "SQL"],
  },
  {
    title: { en: "Real-Time", fr: "Temps réel" },
    items: ["Socket.IO", "Server-Sent Events"],
  },
  {
    title: { en: "Infrastructure", fr: "Infrastructure" },
    items: ["Render", "Vercel", "Supabase", "Supabase Storage"],
  },
  {
    title: { en: "Dev Tools", fr: "Outils de développement" },
    items: ["Git", "Docker", "DBeaver"],
  },
  {
    title: { en: "Security", fr: "Sécurité" },
    items: [
      "JWT Authentication",
      "Refresh Tokens",
      "Role-Based Access Control",
      "Guards / Permissions",
      "Audit Logs",
    ],
  },
  {
    title: { en: "IoT & Embedded Systems", fr: "IoT & systèmes embarqués" },
    items: ["Raspberry Pi", "STM32", "ESP32", "Sensors", "Automation"],
  },
  {
    title: { en: "Electronics", fr: "Électronique" },
    items: ["PCB Design", "Embedded Electronics", "Industrial Electronics"],
  },
];

const profileImage = "/images/profile/profile.png";
const logoImage = "/branding/logo.png";

const projects = [
  {
    slug: "ng-driver",
    title: "NG Driver",
    type: { en: "Mobile + Backend Platform", fr: "Plateforme mobile + backend" },
    description: {
      en: "Real-time mobility platform connecting passengers and drivers with offer management, tracking and administration.",
      fr: "Plateforme de mobilité temps réel reliant passagers et conducteurs avec système d'offres, tracking et administration.",
    },
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Supabase",
      "Render",
      "Vercel",
    ],
    images: [
      "/images/projects/ng-driver/ng-driver-1.png",
      "/images/projects/ng-driver/ng-driver-2.png",
      "/images/projects/ng-driver/ng-driver-3.png",
    ],
  },
  {
    slug: "gest-stb",
    title: "GEST.STB",
    type: { en: "Enterprise Web Application", fr: "Application web d'entreprise" },
    description: {
      en: "Management system for IT and electronic equipment in an enterprise environment.",
      fr: "Système de gestion du parc d'équipements informatiques et électroniques pour environnement d'entreprise.",
    },
    technologies: ["Angular", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    images: [
      "/images/projects/gest-stb/gest-stb-1.png",
      "/images/projects/gest-stb/gest-stb-2.png",
    ],
  },
  {
    slug: "svm",
    title: "Souffle de Vie Manager",
    type: { en: "Web Application", fr: "Application web" },
    description: {
      en: "Administrative member management platform with attendance tracking, absence management and reports.",
      fr: "Plateforme de gestion administrative des membres avec suivi de présence, absences et rapports.",
    },
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO"],
    images: ["/images/projects/svm/svm-1.png", "/images/projects/svm/svm-2.png"],
  },
  {
    slug: "iot",
    title: "Smart Greenhouse",
    type: { en: "IoT System", fr: "Système IoT" },
    description: {
      en: "Greenhouse automation system based on Raspberry Pi, sensors and embedded control logic.",
      fr: "Système d'automatisation de serre basé sur Raspberry Pi, capteurs et logique de contrôle embarquée.",
    },
    technologies: ["Raspberry Pi", "Sensors", "Automation", "Embedded Electronics"],
    images: ["/images/projects/iot/iot-1.png", "/images/projects/iot/iot-2.png"],
  },
  {
    slug: "real-estate",
    title: "Real Estate Search Platform",
    type: { en: "Web Application", fr: "Application web" },
    description: {
      en: "Web platform for searching real estate listings from a structured database.",
      fr: "Plateforme web permettant la recherche d'annonces immobilières dans une base de données.",
    },
    technologies: ["JavaScript", "Backend API", "SQL Database"],
    images: [],
  },
];

const copy = {
  en: {
    nav: ["About", "Skills", "Projects", "Contact"],
    homeLabel: "NEO-GOSEN KISSAMBOU home",
    role: "Full Stack Software Developer",
    specialization: "Mobile • Web • Desktop Applications • Backend Systems • IoT • Embedded Electronics",
    hero:
      "Full Stack software developer specialized in the development of mobile, web and desktop applications. I design complete systems including frontend interfaces, backend architectures, APIs, databases, real-time infrastructures and embedded electronics.",
    viewProjects: "View Projects",
    contact: "Contact",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutText1:
      "I am a Full Stack Software Developer focused on building modern applications across mobile, web and desktop platforms.",
    aboutText2:
      "My work involves designing complete end-to-end software systems including frontend development, backend architecture, APIs, databases, deployment, IoT and embedded electronics.",
    skillsEyebrow: "Skills / Expertise",
    skillsTitle: "Skills",
    projectsEyebrow: "Projects",
    projectsTitle: "Projects",
    detailsEyebrow: "Project Details",
    detailsTitle: "Project Details",
    detailsLink: "Project Details",
    technologies: "Technologies",
    images: "Images",
    noImage: "No image required.",
    contactText:
      "I am available for freelance projects involving mobile, web, full-stack software development, IoT and embedded electronics.",
    finalMessage:
      "Full Stack Software Developer building complete systems across mobile, web, desktop and embedded environments.",
    close: "Close",
    switchLanguage: "FR",
    switchLabel: "Passer en français",
  },
  fr: {
    nav: ["À propos", "Compétences", "Projets", "Contact"],
    homeLabel: "Accueil NEO-GOSEN KISSAMBOU",
    role: "Développeur logiciel full stack",
    specialization:
      "Mobile • Web • Applications desktop • Systèmes backend • IoT • Électronique embarquée",
    hero:
      "Développeur logiciel full stack spécialisé dans le développement d'applications mobiles, web et desktop. Je conçois des systèmes complets incluant interfaces frontend, architectures backend, APIs, bases de données, infrastructures temps réel et électronique embarquée.",
    viewProjects: "Voir les projets",
    contact: "Contact",
    aboutEyebrow: "À propos",
    aboutTitle: "À propos de moi",
    aboutText1:
      "Je suis développeur logiciel full stack, orienté vers la création d'applications modernes sur mobile, web et desktop.",
    aboutText2:
      "Mon travail couvre la conception de systèmes logiciels complets : frontend, backend, APIs, bases de données, déploiement, IoT et électronique embarquée.",
    skillsEyebrow: "Compétences / Expertise",
    skillsTitle: "Compétences",
    projectsEyebrow: "Projets",
    projectsTitle: "Projets",
    detailsEyebrow: "Détails des projets",
    detailsTitle: "Détails des projets",
    detailsLink: "Détails du projet",
    technologies: "Technologies",
    images: "Images",
    noImage: "Aucune image requise.",
    contactText:
      "Je suis disponible pour des missions freelance en développement mobile, web, full-stack, IoT et électronique embarquée.",
    finalMessage:
      "Développeur logiciel full stack construisant des systèmes complets pour environnements mobile, web, desktop et embarqués.",
    close: "Fermer",
    switchLanguage: "EN",
    switchLabel: "Switch to English",
  },
};

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [language, setLanguage] = useState("en");
  const t = copy[language];

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function openImage(src, alt) {
    setSelectedImage({ src, alt });
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <div className="masthead">
        <a className="logo-anchor" href="#hero" aria-label={t.homeLabel}>
          <span className="brand-logo-wrap brand-logo-wrap-large">
            <img src={logoImage} alt="NEO-GOSEN KISSAMBOU logo" className="brand-logo" />
          </span>
        </a>
        <header className="topbar">
          <a className="brand" href="#hero">
            <span className="brand-text">NEO-GOSEN KISSAMBOU</span>
          </a>
          <nav className="nav">
            <a href="#about">{t.nav[0]}</a>
            <a href="#skills">{t.nav[1]}</a>
            <a href="#projects">{t.nav[2]}</a>
            <a href="#contact">{t.nav[3]}</a>
          </nav>
          <button
            className="language-toggle"
            type="button"
            aria-label={t.switchLabel}
            onClick={() => setLanguage((current) => (current === "en" ? "fr" : "en"))}
          >
            {t.switchLanguage}
          </button>
        </header>
      </div>

      <main>
        <section className="hero-section section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.role}</p>
            <h1>NEO-GOSEN KISSAMBOU</h1>
            <p className="hero-specialization">{t.specialization}</p>
            <p className="hero-description">{t.hero}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.viewProjects}
              </a>
              <a className="button button-secondary" href="#contact">
                {t.contact}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <button
                className="image-button"
                type="button"
                onClick={() => openImage(profileImage, "NEO-GOSEN KISSAMBOU profile")}
              >
                <img src={profileImage} alt="NEO-GOSEN KISSAMBOU profile" className="profile-image" />
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="glass-panel about-panel">
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">{t.skillsEyebrow}</p>
            <h2>{t.skillsTitle}</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="glass-panel skill-card" key={group.title.en}>
                <h3>{group.title[language]}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">{t.projectsEyebrow}</p>
            <h2>{t.projectsTitle}</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="glass-panel project-card" key={project.slug}>
                <div className="project-card-top">
                  <span className="project-index">{project.title}</span>
                  <p className="project-type">{project.type[language]}</p>
                </div>
                <p className="project-description">{project.description[language]}</p>
                <ul className="tag-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a className="project-link" href={`#project-${project.slug}`}>
                  {t.detailsLink}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="project-details">
          <div className="section-heading">
            <p className="eyebrow">{t.detailsEyebrow}</p>
            <h2>{t.detailsTitle}</h2>
          </div>
          <div className="details-stack">
            {projects.map((project) => (
              <article className="glass-panel detail-card" id={`project-${project.slug}`} key={project.slug}>
                <div className="detail-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-type">{project.type[language]}</p>
                  </div>
                </div>
                <p className="project-description">{project.description[language]}</p>
                <div className="detail-columns">
                  <div>
                    <h4>{t.technologies}</h4>
                    <ul className="tag-list">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>{t.images}</h4>
                    {project.images.length ? (
                      <div className="image-grid">
                        {project.images.map((image) => (
                          <figure className="image-card" key={image}>
                            <button
                              className="image-button"
                              type="button"
                              onClick={() => openImage(image, project.title)}
                            >
                              <img src={image} alt={project.title} />
                            </button>
                            <figcaption>{image}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : (
                      <p className="muted-text">{t.noImage}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">{t.contact}</p>
            <h2>{t.contact}</h2>
          </div>
          <div className="glass-panel contact-panel">
            <p>{t.contactText}</p>
            <div className="contact-links">
              <a href="tel:+21624309776">+216 24 309 776</a>
              <a href="mailto:kissambouneogosen3@gmail.com">kissambouneogosen3@gmail.com</a>
            </div>
            <p className="final-message">{t.finalMessage}</p>
          </div>
        </section>
      </main>

      {selectedImage ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
          >
            {t.close}
          </button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { App };
