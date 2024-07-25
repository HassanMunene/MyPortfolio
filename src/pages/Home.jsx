import react from 'react';
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Home;
