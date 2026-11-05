import EditorialHero from "./EditorialHero";
import BuildLab from "./BuildLab";
import WebsiteDemo from "./WebsiteDemo";

export default function Home() {
  return (
    <main className="portfolio-page">
      <EditorialHero />

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
            <p className="about-summary paragraph-panel">
              I&apos;m Adam Mbori—Uncbatman online. I turn curious ideas into expressive websites, practical AI integrations, and useful automations. I&apos;m always learning, reading, and testing new ideas; away from the screen, I recharge outdoors and stay active.
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
              <p className="paragraph-panel">My business has its own home on the web; this space is about me and the things I love building.</p>
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
            <p className="services-heading-note">WEB DESIGN / DIGITAL EXPERIENCES</p>
          </div>
          <div className="services-feature-layout">
            <div className="services-heading-wrap">
              <h2 className="services-heading" id="services-title">
                Design-led.<br />Built to work.
              </h2>
            </div>
            <article className="service-feature">
              <div className="service-feature-meta">
                <span>01 / MY FOCUS</span>
                <span>DESIGN + DEVELOPMENT</span>
              </div>
              <h3 className="service-feature-title">Websites &amp; digital experiences</h3>
              <p className="paragraph-panel service-feature-copy">
                I build expressive, mobile-ready websites that make your offer clear and give customers an easy next step.
              </p>
              <a className="service-feature-link" href="#work">
                EXPLORE THE INTERACTIVE PREVIEW <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="work-section page-section" id="work" aria-labelledby="work-title">
        <div className="section-shell work-heading">
          <div className="section-index">
            <span>03</span>
            <span>INTERACTIVE WEBSITE PREVIEW</span>
          </div>
          <div className="work-title-row">
            <h2 className="editorial-heading" id="work-title">See what your site<br />could become.</h2>
            <p className="paragraph-panel">Enter a business name and compare six distinct directions for a polished small-business website. When one feels right, ask me for a free preview of your own.</p>
          </div>
        </div>
        <div className="section-shell">
          <WebsiteDemo />
          <BuildLab />
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
            <p className="contact-intro paragraph-panel">
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
