"use client";

import { FadeUp } from "./FadeUp";

const headlineWords = ["WE", "TURN", "WHATSAPP", "CHATS", "INTO", "SALES."];

export default function AutomationHero() {
  return (
    <>
      <video
        className="hero-background-video"
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
      <div className="hero-video-tint" aria-hidden="true" />

      <section id="top" className="automation-hero" aria-labelledby="automation-heading">
        <nav className="hero-nav" aria-label="Primary navigation">
          <a className="hero-brand" href="#top" aria-label="Adam Mbori, also known as Uncbatman">
            <span className="hero-brand-name">Adam Mbori</span>
            <span className="hero-brand-alias">Uncbatman</span>
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
            WhatsApp setup, fast one-page websites, and sales follow-ups for businesses across Kenya.
          </FadeUp>
        </div>
      </section>
    </>
  );
}
