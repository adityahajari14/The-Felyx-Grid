import type { Metadata } from "next";

import { ContactPage } from "../../components/contact/ContactPage";
import { Footer, Header } from "../../components/home";

export const metadata: Metadata = {
  title: "Contact | The Felyx Grid",
  description:
    "Start a project with The Felyx Grid. Tell us about your brand, goals, budget, and timeline.",
};

export default function Contact() {
  return (
    <>
      <Header contactHref="#contact-form" hrefPrefix="/" startHref="#contact-form" />
      <ContactPage />
      <Footer hrefPrefix="/" />
    </>
  );
}
