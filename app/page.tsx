import { BenefitsSection } from "@/components/site/benefits";
import { ContactSection } from "@/components/site/contact";
import { FaqSection } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { PortfolioSection } from "@/components/site/portfolio";
import { ProcessSection } from "@/components/site/process";
import { ServicesSection } from "@/components/site/services";
import { TrustSection } from "@/components/site/trust";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip pb-10 pt-6">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <PortfolioSection />
        <TrustSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
