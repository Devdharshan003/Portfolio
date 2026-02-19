import { Navbar } from "@/components/layout/Navbar";
import { SocialStrip } from "@/components/layout/SocialStrip";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Loader } from "@/components/ui/Loader";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { InternshipsSection } from "@/components/sections/InternshipsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { HeroDitheringCard } from "@/components/ui/hero-dithering-card";

export default function Home() {
  return (
    <PageTransition>
      <Loader />
      <ScrollProgress />
      <div className="fixed inset-0 z-0">
        <HeroDitheringCard />
      </div>
      <Navbar />
      <SocialStrip />
      <main className="relative z-[2]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <InternshipsSection />
        <ResearchSection />
        <CertificationsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
