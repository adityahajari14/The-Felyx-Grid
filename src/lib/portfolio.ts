import portfolioData from "../data/portfolioData.json";

export type PortfolioProject = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  images: string[];
  link: string;
  description: string;
  services: string[];
  tech: string[];
  testimonial: string | null;
  results: string | null;
};

export const portfolioProjects = portfolioData as PortfolioProject[];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, count = 3) {
  return portfolioProjects.filter((project) => project.slug !== slug).slice(0, count);
}
