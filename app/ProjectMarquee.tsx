import Image from "next/image";
import type { PortfolioProject } from "./project-data";

export default function ProjectMarquee({ projects }: { projects: PortfolioProject[] }) {
  const visuals = projects.flatMap((project) =>
    project.images.map((src) => ({
      src,
      name: project.name,
    })),
  );

  return (
    <section className="project-marquee" aria-label="A moving preview of selected project visuals">
      <div className="marquee-caption">
        <span>SELECTED VISUALS</span>
        <span>THREE PROJECTS / NINE FRAMES</span>
      </div>
      <div className="marquee-row" aria-hidden="true">
        <div className="marquee-track marquee-track-forward">
          {[...visuals, ...visuals].map((visual, index) => (
            <div className="marquee-tile" key={`forward-${index}`}>
              <Image
                src={visual.src}
                alt=""
                width={1280}
                height={956}
                sizes="(max-width: 794px) 270px, (max-width: 1265px) 34vw, 430px"
                quality={75}
              />
              <span>{visual.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-row marquee-row-lower" aria-hidden="true">
        <div className="marquee-track marquee-track-reverse">
          {[...visuals.slice().reverse(), ...visuals.slice().reverse()].map((visual, index) => (
            <div className="marquee-tile" key={`reverse-${index}`}>
              <Image
                src={visual.src}
                alt=""
                width={1280}
                height={956}
                sizes="(max-width: 794px) 270px, (max-width: 1265px) 34vw, 430px"
                quality={75}
              />
              <span>{visual.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-bottom-rule" aria-hidden="true" />
    </section>
  );
}
