import IntroSection from "@/features/intro-section/introSection";
import ProjectsSection from "@/features/projects-section/projectsSection";
import SkillsSection from "@/features/skills-section/skillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 bg-black pb-4">
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
