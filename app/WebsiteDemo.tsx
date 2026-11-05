"use client";

import { useState, type CSSProperties } from "react";
import styles from "./WebsiteDemo.module.css";

const whatsappNumber = "254792120237";

type PreviewStyle = {
  name: string;
  bestFor: string;
  headline: string;
  background: string;
  ink: string;
  accent: string;
  accentInk: string;
  card: string;
  line: string;
  radius: string;
  buttonRadius: string;
  headingFont: string;
  bodyFont: string;
  glow: string;
};

const previewStyles: PreviewStyle[] = [
  {
    name: "Soft and friendly",
    bestFor: "Clinics, coaching, kids, cleaning and general services",
    headline: "Friendly, from the first tap.",
    background: "#f0f0f3",
    ink: "#20212a",
    accent: "#444653",
    accentInk: "#ffffff",
    card: "#ffffff",
    line: "#d9d9df",
    radius: "16px",
    buttonRadius: "999px",
    headingFont: "Arial, sans-serif",
    bodyFont: "Arial, sans-serif",
    glow: "transparent",
  },
  {
    name: "Midnight glass",
    bestFor: "Online services, agencies, tech and electronics",
    headline: "Built to move fast.",
    background: "#101317",
    ink: "#f0f1ef",
    accent: "#e2e3df",
    accentInk: "#121416",
    card: "rgba(255,255,255,.07)",
    line: "rgba(255,255,255,.18)",
    radius: "14px",
    buttonRadius: "12px",
    headingFont: "Arial, sans-serif",
    bodyFont: "Arial, sans-serif",
    glow: "#3a3c40",
  },
  {
    name: "Fresh editorial",
    bestFor: "Decor, furniture, food, bakeries, wellness and florists",
    headline: "Made with care, shown with calm.",
    background: "#e9e9e3",
    ink: "#242521",
    accent: "#242521",
    accentInk: "#f2f2ed",
    card: "#f7f7f3",
    line: "#d0d0ca",
    radius: "6px",
    buttonRadius: "6px",
    headingFont: "Georgia, serif",
    bodyFont: "Arial, sans-serif",
    glow: "transparent",
  },
  {
    name: "Plum night",
    bestFor: "Fashion, beauty, events, music and nightlife",
    headline: "Make a bold first impression.",
    background: "#211f22",
    ink: "#f4f1f0",
    accent: "#ded9d6",
    accentInk: "#211f22",
    card: "rgba(255,255,255,.06)",
    line: "rgba(255,255,255,.19)",
    radius: "10px",
    buttonRadius: "10px",
    headingFont: "Arial, sans-serif",
    bodyFont: "Arial, sans-serif",
    glow: "#444044",
  },
  {
    name: "Emerald and mint",
    bestFor: "Interiors, jewelry, hospitality, real estate and premium goods",
    headline: "Quiet luxury, online.",
    background: "#18201c",
    ink: "#edf1ed",
    accent: "#d2d9d3",
    accentInk: "#18201c",
    card: "rgba(255,255,255,.07)",
    line: "rgba(226,236,227,.24)",
    radius: "14px",
    buttonRadius: "999px",
    headingFont: "Georgia, serif",
    bodyFont: "Arial, sans-serif",
    glow: "#36443b",
  },
  {
    name: "Pearl and graphite",
    bestFor: "Boutiques, design studios, architecture and high-end fashion",
    headline: "Restraint is the luxury.",
    background: "#e7e8e9",
    ink: "#202124",
    accent: "#202124",
    accentInk: "#f4f4f4",
    card: "#f5f5f5",
    line: "#c9cacc",
    radius: "0px",
    buttonRadius: "0px",
    headingFont: "Georgia, serif",
    bodyFont: "Arial, sans-serif",
    glow: "transparent",
  },
];

export default function WebsiteDemo() {
  const [businessName, setBusinessName] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selectedStyle = previewStyles[selectedIndex];
  const displayName = businessName.trim() || "Your Business";
  const slug =
    businessName
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "") || "yourbusiness";
  const message = `Hi, I run ${businessName.trim() || "a business"}. I like the “${selectedStyle.name}” look from your website. Please send me my free preview.`;
  const previewVariables = {
    "--preview-bg": selectedStyle.background,
    "--preview-ink": selectedStyle.ink,
    "--preview-accent": selectedStyle.accent,
    "--preview-accent-ink": selectedStyle.accentInk,
    "--preview-card": selectedStyle.card,
    "--preview-line": selectedStyle.line,
    "--preview-radius": selectedStyle.radius,
    "--preview-button-radius": selectedStyle.buttonRadius,
    "--preview-heading-font": selectedStyle.headingFont,
    "--preview-body-font": selectedStyle.bodyFont,
    "--preview-glow": selectedStyle.glow,
  } as CSSProperties;

  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}>
        <h3 className={styles.demoTitle}>Feel how your website could look.</h3>
        <p className={styles.demoLead}>
          Enter your business name, then choose a style. This preview shows how a clear, quick-to-use site could feel on a phone or desktop.
        </p>
      </div>

      <div className={styles.demoControls}>
        <div className={styles.nameField}>
          <label htmlFor="website-demo-name">Your business name</label>
          <input
            id="website-demo-name"
            type="text"
            maxLength={40}
            placeholder="e.g. Amani Bakery"
            autoComplete="organization"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
          />
        </div>

        <div className={styles.stylePicker} role="group" aria-label="Website styles">
          {previewStyles.map((previewStyle, index) => (
            <button
              key={previewStyle.name}
              type="button"
              aria-pressed={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              <span
                className={styles.styleDot}
                style={{ backgroundColor: previewStyle.accent }}
                aria-hidden="true"
              />
              {previewStyle.name}
            </button>
          ))}
        </div>
        <p className={styles.bestFor} aria-live="polite">
          <span>BEST FOR</span> {selectedStyle.bestFor}.
        </p>
      </div>

      <div className={styles.previewFrame}>
        <div className={styles.browserBar} aria-label="Website preview window">
          <span className={styles.browserDots} aria-hidden="true"><i /><i /><i /></span>
          <span className={styles.browserAddress}>{slug}.co.ke</span>
          <span className={styles.browserMark} aria-hidden="true">↗</span>
        </div>

        <div className={styles.websiteMockup} style={previewVariables}>
          <div className={styles.mockGlow} aria-hidden="true" />
          <div className={styles.mockNav}>
            <strong>{displayName}</strong>
            <span className={styles.mockNavAction}>Chat on WhatsApp</span>
          </div>
          <div className={styles.mockHero}>
            <h4>{selectedStyle.headline}</h4>
            <p>Welcome to {displayName}. Ask a question or place an order in one tap on WhatsApp.</p>
            <span className={styles.mockButton}>Order on WhatsApp</span>
          </div>
          <div className={styles.mockCards}>
            <article><strong>What we do</strong><p>Clear, simple and easy to scan.</p></article>
            <article><strong>Pricing</strong><p>Honest prices, no surprises.</p></article>
            <article><strong>Ask us anything</strong><p>Answers in one tap.</p></article>
          </div>
          <span className={styles.mockChat} aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
            </svg>
          </span>
        </div>
      </div>

      <div className={styles.demoCta}>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noreferrer"
        >
          Get this look for my business <span aria-hidden="true">↗</span>
        </a>
        <p className={styles.demoNote}>Free preview for your business. No payment, no pressure.</p>
      </div>
      <p className={styles.demoFootnote}>
        Sample preview. Your real site uses your photos, prices and WhatsApp number. Growth Solutions by Adam.
      </p>
    </div>
  );
}
