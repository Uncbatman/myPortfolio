"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PortfolioProject } from "./project-data";

export default function ProjectMarquee({ projects }: { projects: PortfolioProject[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const forwardX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "-33.333%"],
  );
  const reverseX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-33.333%", "0%"],
  );

  const visuals = projects.flatMap((project) =>
    project.images.map((src, index) => ({
      src,
      name: project.name,
      alt: `${project.name} portfolio visual ${index + 1}`,
    })),
  );

  return (
    <section ref={sectionRef} className="project-marquee" aria-label="A moving preview of selected project visuals">
      <div className="marquee-caption">
        <span>SELECTED VISUALS</span>
        <span>THREE PROJECTS / NINE FRAMES</span>
      </div>
      <div className="marquee-row" aria-hidden="true">
        <motion.div className="marquee-track" style={{ x: forwardX }}>
          {[...visuals, ...visuals, ...visuals].map((visual, index) => (
            <div className="marquee-tile" key={`forward-${index}`}>
              <Image
                src={visual.src}
                alt=""
                width={1280}
                height={956}
                sizes="(max-width: 640px) 76vw, 38vw"
                quality={78}
              />
              <span>{visual.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="marquee-row marquee-row-lower" aria-hidden="true">
        <motion.div className="marquee-track" style={{ x: reverseX }}>
          {[...visuals.slice().reverse(), ...visuals.slice().reverse(), ...visuals.slice().reverse()].map(
            (visual, index) => (
              <div className="marquee-tile" key={`reverse-${index}`}>
                <Image
                  src={visual.src}
                  alt=""
                  width={1280}
                  height={956}
                  sizes="(max-width: 640px) 76vw, 38vw"
                  quality={78}
                />
                <span>{visual.name}</span>
              </div>
            ),
          )}
        </motion.div>
      </div>
      <div className="marquee-bottom-rule" aria-hidden="true" />
    </section>
  );
}
