import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavbarBottom from "@/components/NavbarBottom";
import ProjectSection from "@/components/ProjectSection";
import { RetroGridDemo } from "@/components/RetroGridDemo";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import SkillSection from "@/components/SkillSection";

export default function page() {
  return (
    <>
      <ScrollFadeIn>
        <HeroSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <AboutSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ProjectSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <SkillSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <EducationSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Footer />
      </ScrollFadeIn>
      {/* <RetroGridDemo /> */}
      <NavbarBottom />
    </>
  );
}
