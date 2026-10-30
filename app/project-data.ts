export type PortfolioProject = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  images: [string, string, string];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "nextlevel-studio",
    number: "01",
    name: "Nextlevel Studio",
    category: "CLIENT WEBSITE",
    description:
      "A client website project shaped into a distinctive digital presence for Nextlevel Studio.",
    images: [
      "/projects/nextlevel-1.webp",
      "/projects/nextlevel-2.webp",
      "/projects/nextlevel-3.webp",
    ],
  },
  {
    id: "aura-brand-identity",
    number: "02",
    name: "Aura Brand Identity",
    category: "PERSONAL PROJECT",
    description:
      "A self-initiated identity exploration with an expressive, nature-inspired visual direction.",
    images: ["/projects/aura-1.webp", "/projects/aura-2.webp", "/projects/aura-3.webp"],
  },
  {
    id: "solaris-digital",
    number: "03",
    name: "Solaris Digital",
    category: "CLIENT WEBSITE",
    description:
      "A client digital project built around vivid imagery and an optimistic, memorable online presence.",
    images: [
      "/projects/solaris-1.webp",
      "/projects/solaris-2.webp",
      "/projects/solaris-3.webp",
    ],
  },
];
