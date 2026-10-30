import EditorialHero from "./EditorialHero";
import ProjectMarquee from "./ProjectMarquee";
import ProjectStack from "./ProjectStack";
import { portfolioProjects } from "./project-data";

const services = [
  {
    number: "01",
    title: "Websites & digital experiences",
    label: "DESIGN / DEVELOPMENT",
    description:
      "From the first sketch to the final details, I build expressive, responsive websites with strong visual direction and a clear purpose.",
  },
  {
    number: "02",
    title: "AI integrations",
    label: "AI / APIS / TOOLING",
    description:
      "I connect AI models, APIs, and everyday tools to solve real problems—using AI where it adds value, not just for the novelty.",
  },
  {
    number: "03",
    title: "Automations & workflows",
    label: "SYSTEMS / AUTOMATION",
    description:
      "I make repetitive work simpler by connecting systems and building thoughtful, dependable workflows around how people actually work.",
  },
];

export default function Home() {
  return (
    <main className="portfolio-page">
      <EditorialHero />
      <ProjectMarquee projects={portfolioProjects} />

      <section className="about-section page-section" id="about" aria-labelledby="about-title">
        <div className="section-shell about-layout">
          <div className="section-index">
            <span>01</span>
            <span>ABOUT ADAM</span>
          </div>
          <div className="about-copy">
            <p className="section-eyebrow">A CREATIVE MIND, ALWAYS BUILDING</p>
            <h2 className="editorial-heading" id="about-title">
              Curiosity is how I get there.
            </h2>
            <p className="about-lead">
              I&apos;m Adam Mbori—Uncbatman online. I love taking an idea from “what if?” to something real on the web.
            </p>
            <p className="about-body">
              I build expressive websites, explore how AI can solve everyday problems, and connect tools into useful integrations and automations. I&apos;m always learning, reading, and testing a new idea. Away from the screen, I recharge outdoors and stay active with a workout. That curiosity follows me into everything I make.
            </p>
          </div>
          <aside className="about-aside" aria-label="A few things that keep me curious">
            <p className="aside-label">CURRENT OPERATING SYSTEM</p>
            <ul className="interest-list">
              <li><span>01</span> Keep learning</li>
              <li><span>02</span> Read widely</li>
              <li><span>03</span> Get outdoors</li>
              <li><span>04</span> Move / train</li>
            </ul>
            <div className="about-business">
              <span>ALSO BUILDING</span>
              <a href="https://growth-solutions-indol.vercel.app/" target="_blank" rel="noreferrer">
                Growth Solutions <span aria-hidden="true">↗</span>
              </a>
              <p>My business has its own home on the web; this space is about me and the things I love building.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="services-section page-section" id="services" aria-labelledby="services-title">
        <div className="section-shell">
          <div className="services-heading-row">
            <div className="section-index section-index-dark">
              <span>02</span>
              <span>WHAT I LOVE TO BUILD</span>
            </div>
            <p className="services-heading-note">DESIGN WITH INTENTION. TECHNOLOGY WITH A REASON.</p>
          </div>
          <h2 className="services-heading" id="services-title">Creative technology,<br />made useful.</h2>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-copy">
                  <div className="service-title-row">
                    <h3>{service.title}</h3>
                    <span>{service.label}</span>
                  </div>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="services-endnote">
            <span>IDEA → DESIGN → BUILD → LEARN → REPEAT</span>
            <span className="services-end-mark" aria-hidden="true">✳</span>
          </div>
        </div>
      </section>

      <section className="work-section page-section" id="work" aria-labelledby="work-title">
        <div className="section-shell work-heading">
          <div className="section-index">
            <span>03</span>
            <span>SELECTED PROJECTS</span>
          </div>
          <div className="work-title-row">
            <h2 className="editorial-heading" id="work-title">Made with<br />curiosity.</h2>
            <p>Three pieces from my visual practice—each one a chance to explore, make, and push an idea further.</p>
          </div>
        </div>
        <div className="section-shell">
          <ProjectStack projects={portfolioProjects} />
        </div>
      </section>

      <section className="contact-section page-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-layout">
          <div className="section-index">
            <span>04</span>
            <span>THE NEXT IDEA</span>
          </div>
          <div className="contact-copy">
            <p className="section-eyebrow">HAVE A GOOD PROBLEM?</p>
            <h2 className="contact-heading" id="contact-title">Let&apos;s build<br />something useful.</h2>
            <p className="contact-intro">
              Have a website, AI integration, or automation idea? Tell me what you&apos;re imagining. I&apos;d love to help make it real.
            </p>
            <a
              className="button button-light contact-button"
              href="mailto:adamfounder23@gmail.com?subject=Let%27s%20build%20something%20together"
            >
              START A PROJECT <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">ADAM MBORI <span>/ UNC BATMAN</span></a>
        <div className="footer-links">
          <a href="mailto:adamfounder23@gmail.com">EMAIL ↗</a>
          <a href="https://www.linkedin.com/in/adam-mbori-65468b350" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href="https://github.com/Uncbatman" target="_blank" rel="noreferrer">GITHUB ↗</a>
        </div>
        <span className="footer-copyright">© 2026 ADAM MBORI</span>
      </footer>
    </main>
  );
}
