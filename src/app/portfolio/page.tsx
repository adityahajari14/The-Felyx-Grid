import type { Metadata } from "next";

import { Header, Footer } from "../../components/home";
import { PortfolioIndexPage } from "../../components/portfolio/PortfolioPages";

export const metadata: Metadata = {
  title: "Portfolio | The Felyx Grid",
  description:
    "Explore websites, platforms, marketplaces, and product experiences crafted by The Felyx Grid.",
};

export default function Portfolio() {
  return (
    <>
      <Header contactHref="/contact#contact-form" hrefPrefix="/" startHref="/contact#contact-form" />
      <PortfolioIndexPage />
      <Footer hrefPrefix="/" />
    </>
  );
}
