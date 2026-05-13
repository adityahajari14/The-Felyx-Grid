import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header, Footer } from "../../../components/home";
import { PortfolioDetailPage } from "../../../components/portfolio/PortfolioPages";
import { getProjectBySlug, portfolioProjects } from "../../../lib/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | The Felyx Grid",
    };
  }

  return {
    title: `${project.name} | The Felyx Grid`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header contactHref="/contact#contact-form" hrefPrefix="/" startHref="/contact#contact-form" />
      <PortfolioDetailPage project={project} />
      <Footer hrefPrefix="/" />
    </>
  );
}
