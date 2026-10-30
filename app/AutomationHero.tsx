"use client";

import { FadeUp } from "./FadeUp";

const headlineWords = ["WE", "BUILD", "END-TO-END", "AI", "AUTOMATION", "SYSTEMS."];

export default function AutomationHero() {
  return (
    <>
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
          type="video/mp4"
        />
      </video>

      <section id="top" className="automation-hero" aria-labelledby="automation-heading">
        <nav className="hero-nav" aria-label="Primary navigation">
          <a className="hero-brand" href="#top" aria-label="Uncbatman home">
            &lt;Uncbatman /&gt;
          </a>
          <div className="hero-nav-links">
            <a href="https://www.linkedin.com/in/adam-mbori-65468b350" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Uncbatman" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:adamfounder23@gmail.com">Email</a>
          </div>
        </nav>

        <div className="automation-hero-content">
          <h2 className="automation-hero-heading" id="automation-heading">
            {headlineWords.map((word, index) => (
              <FadeUp
                as="span"
                className="automation-hero-word"
                delay={0.15 + index * 0.08}
                duration={0.7}
                y={32}
                key={word}
              >
                {word}
              </FadeUp>
            ))}
          </h2>

          <FadeUp as="p" className="automation-hero-subtext" delay={0.9}>
            We provide all-in-one AI automation services in one place.
          </FadeUp>
        </div>
      </section>
    </>
  );
}
