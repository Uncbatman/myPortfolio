import TypewriterText from "./TypewriterText";

const emailSubject = encodeURIComponent("Let's build something together");

export default function EditorialHero() {
  return (
    <header className="portfolio-hero" id="top">
      <video
        className="hero-film"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/automation-video-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-film-wash" aria-hidden="true" />
      <div className="hero-graphic" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="hero-inner">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="nav-brand" href="#top" aria-label="Adam Mbori, also known as Uncbatman">
            <span>AM<span className="brand-dot">.</span></span>
            <span className="nav-brand-caption">UNC BATMAN</span>
          </a>
          <div className="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#services">WHAT I DO</a>
            <a href="#work">WORK</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="hero-overline"><span className="red-dot" /> PERSONAL PORTFOLIO / 2026</p>
          <h1 className="hero-name">
            <TypewriterText text="Adam Mbori" className="hero-name-type" speed={74} delay={180} />
          </h1>
          <p className="hero-role">
            <TypewriterText
              text="Uncbatman — Creative Web / AI / Automation"
              className="hero-role-type"
              speed={28}
              delay={900}
            />
          </p>
          <p className="hero-intro">
            I turn curious ideas into memorable websites, useful AI integrations, and automations that make digital work better.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#contact">
              START A PROJECT <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-quiet" href="#work">
              EXPLORE SELECTED WORK <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-bottomline">
          <span>WEBSITES / AI INTEGRATIONS / AUTOMATION</span>
          <span>CURIOUS BY DEFAULT <span className="hero-spark" aria-hidden="true">✳</span></span>
        </div>
        <a
          className="hero-contact-mail"
          href={`mailto:adamfounder23@gmail.com?subject=${emailSubject}`}
          aria-label="Email Adam Mbori about a project"
        >
          LET&apos;S MAKE IT REAL <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
