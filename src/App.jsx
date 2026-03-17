import { useEffect, useState } from "react";

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "Angular"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Prisma ORM", "SQL"],
  },
  {
    title: "Real-Time",
    items: ["Socket.IO", "Server-Sent Events"],
  },
  {
    title: "Infrastructure",
    items: ["Render", "Vercel", "Supabase", "Supabase Storage"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "Docker", "DBeaver"],
  },
  {
    title: "Security",
    items: [
      "JWT Authentication",
      "Refresh Tokens",
      "Role-Based Access Control",
      "Guards / Permissions",
      "Audit Logs",
    ],
  },
  {
    title: "IoT",
    items: ["Raspberry Pi", "ESP32", "Sensors", "Automation"],
  },
];

const profileImage = "/images/profile/profile.png";
const logoImage = "/branding/logo.png";

const projects = [
  {
    slug: "ng-driver",
    title: "NG Driver",
    type: "Mobile + Backend Platform",
    description:
      "Plateforme de mobilite temps reel reliant passagers et conducteurs avec systeme d'offres, tracking et administration.",
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
    type: "Enterprise Web Application",
    description:
      "Systeme de gestion du parc d'equipements informatiques et electroniques pour environnement d'entreprise.",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    images: [
      "/images/projects/gest-stb/gest-stb-1.png",
      "/images/projects/gest-stb/gest-stb-2.png",
    ],
  },
  {
    slug: "svm",
    title: "Souffle de Vie Manager",
    type: "Web Application",
    description:
      "Plateforme de gestion administrative des membres avec suivi de presence, absences et rapports.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO"],
    images: ["/images/projects/svm/svm-1.png", "/images/projects/svm/svm-2.png"],
  },
  {
    slug: "iot",
    title: "Smart Greenhouse",
    type: "IoT System",
    description:
      "Systeme d'automatisation de serre base sur Raspberry Pi pour surveiller et controler l'environnement.",
    technologies: ["Raspberry Pi", "Sensors", "Automation"],
    images: ["/images/projects/iot/iot-1.png", "/images/projects/iot/iot-2.png"],
  },
  {
    slug: "real-estate",
    title: "Real Estate Search Platform",
    type: "Web Application",
    description:
      "Plateforme web permettant la recherche d'annonces immobilieres dans une base de donnees.",
    technologies: ["JavaScript", "Backend API", "SQL Database"],
    images: [],
  },
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

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
        <a className="logo-anchor" href="#hero" aria-label="NEO-GOSEN home">
          <span className="brand-logo-wrap brand-logo-wrap-large">
            <img src={logoImage} alt="NEO-GOSEN logo" className="brand-logo" />
          </span>
        </a>
        <header className="topbar">
          <a className="brand" href="#hero">
            <span className="brand-text">NEO-GOSEN</span>
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </div>

      <main>
        <section className="hero-section section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack Software Developer</p>
            <h1>NEO-GOSEN</h1>
            <p className="hero-specialization">
              Mobile • Web • Desktop Applications • Backend Systems • IoT
            </p>
            <p className="hero-description">
              Full Stack software developer specialized in the development of mobile, web and
              desktop applications. I design complete systems including frontend interfaces,
              backend architectures, APIs, databases and real-time infrastructures.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <button
                className="image-button"
                type="button"
                onClick={() => openImage(profileImage, "NEO-GOSEN profile")}
              >
                <img src={profileImage} alt="NEO-GOSEN profile" className="profile-image" />
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>About Me</h2>
          </div>
          <div className="glass-panel about-panel">
            <p>
              I am a Full Stack Software Developer focused on building modern applications across
              mobile, web and desktop platforms.
            </p>
            <p>
              My work involves designing complete end-to-end software systems including frontend
              development, backend architecture, APIs, databases and deployment.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills / Expertise</p>
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="glass-panel skill-card" key={group.title}>
                <h3>{group.title}</h3>
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
            <p className="eyebrow">Projects</p>
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="glass-panel project-card" key={project.slug}>
                <div className="project-card-top">
                  <span className="project-index">{project.title}</span>
                  <p className="project-type">{project.type}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a className="project-link" href={`#project-${project.slug}`}>
                  Project Details
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="project-details">
          <div className="section-heading">
            <p className="eyebrow">Project Details</p>
            <h2>Project Details</h2>
          </div>
          <div className="details-stack">
            {projects.map((project) => (
              <article className="glass-panel detail-card" id={`project-${project.slug}`} key={project.slug}>
                <div className="detail-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-type">{project.type}</p>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="detail-columns">
                  <div>
                    <h4>Technologies</h4>
                    <ul className="tag-list">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Images</h4>
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
                      <p className="muted-text">No image required.</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Contact</h2>
          </div>
          <div className="glass-panel contact-panel">
            <p>
              I am available for freelance projects involving mobile, web and full-stack software
              development.
            </p>
            <div className="contact-links">
              <a href="tel:+21624309776">+216 24 309 776</a>
              <a href="tel:+21621277388">+216 21 277 388</a>
              <a href="mailto:kissambouneogosen3@gmail.com">kissambouneogosen3@gmail.com</a>
            </div>
            <p className="final-message">
              Full Stack Software Developer building complete systems across mobile, web and
              desktop environments.
            </p>
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
            Close
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
