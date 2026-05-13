import {
  AboutSection,
  FAQSection,
  Footer,
  Header,
  HeroSection,
  ManifestoSection,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  SocialSection,
} from "../components/home";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-cream">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ManifestoSection />
      <PortfolioSection />
      <ProcessSection />
      <SocialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
