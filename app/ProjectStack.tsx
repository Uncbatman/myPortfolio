"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import type { PortfolioProject } from "./project-data";

const contactEmail = "adamfounder23@gmail.com";

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: shellRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.34, 1],
    reduceMotion ? [1, 1, 1] : [0.94, 1, 0.96],
  );
  const subject = encodeURIComponent(`Project enquiry: ${project.name}`);
  const stackStyle = { "--stack-index": index } as CSSProperties;

  return (
    <div ref={shellRef} className="project-card-shell" style={stackStyle}>
      <div className="project-card-sticky">
        <motion.article className="project-card" style={{ scale }}>
          <div className="project-card-heading">
            <span className="project-number">{project.number}</span>
            <div className="project-title-block">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
            </div>
            <span className="project-counter">SELECTED WORK / 03</span>
          </div>

          <div className="project-card-gallery">
            <div className="project-image-pair">
              <div className="project-image-frame project-image-small">
                <Image
                  src={project.images[0]}
                  alt={`${project.name} project visual one`}
                  width={1280}
                  height={956}
                  sizes="(max-width: 700px) 45vw, 30vw"
                  quality={82}
                />
              </div>
              <div className="project-image-frame project-image-small">
                <Image
                  src={project.images[1]}
                  alt={`${project.name} project visual two`}
                  width={1280}
                  height={956}
                  sizes="(max-width: 700px) 45vw, 30vw"
                  quality={82}
                />
              </div>
            </div>
            <div className="project-image-frame project-image-featured">
              <Image
                src={project.images[2]}
                alt={`${project.name} project visual three`}
                width={1280}
                height={956}
                sizes="(max-width: 700px) 48vw, 55vw"
                quality={82}
              />
            </div>
          </div>

          <div className="project-card-foot">
            <p>{project.description}</p>
            <a href={`mailto:${contactEmail}?subject=${subject}`}>
              BUILD SOMETHING LIKE THIS <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

const experiments = [
  {
    name: "whatsapp-agent",
    label: "CONVERSATION AUTOMATION",
    description:
      "An automated ordering flow that turns a business number into an interactive storefront, with product browsing and order logging.",
    href: "https://github.com/Uncbatman/whatsapp-agent",
  },
  {
    name: "whatsapp-accelerator",
    label: "API INTEGRATION / ONBOARDING",
    description:
      "A guided onboarding tool designed to make Meta developer setup and API credentials easier for non-technical business owners.",
    href: "https://github.com/Uncbatman/whatsapp-accelerator",
  },
];

export default function ProjectStack({ projects }: { projects: PortfolioProject[] }) {
  return (
    <>
      <div className="project-stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <section className="build-lab" aria-labelledby="build-lab-title">
        <div className="build-lab-heading">
          <div>
            <p className="section-eyebrow">INTEGRATIONS / AUTOMATION</p>
            <h3 id="build-lab-title">Other things I&apos;ve built.</h3>
          </div>
          <p>
            Alongside visual work, I like taking an idea apart, learning how it works, and connecting the pieces into a useful tool.
          </p>
        </div>
        <div className="experiment-grid">
          {experiments.map((experiment, index) => (
            <a
              className="experiment-card"
              href={experiment.href}
              key={experiment.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="experiment-card-top">
                <span>0{index + 1} / OPEN SOURCE</span>
                <span aria-hidden="true">↗</span>
              </div>
              <p className="experiment-label">{experiment.label}</p>
              <h4>{experiment.name}</h4>
              <p className="experiment-description">{experiment.description}</p>
              <span className="experiment-link">VIEW REPOSITORY <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
