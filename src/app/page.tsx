import AboutMe from "@/components/aboutMe/AboutMe";
import HeroBanner from "../components/banner/HeroBanner";
import SocialLinks from "@/components/socials/SocialLinks";
import ExprienceProjects from "@/components/experience/ExprienceProjects";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutMe className="max-w-6xl mx-auto mt-12" />
      <SocialLinks className="max-w-6xl mx-auto mt-16" />
      <ExprienceProjects className="max-w-6xl mx-auto mt-16" />
      <ProjectsSection className="max-w-6xl mx-auto mt-16" />
    </main>
  );
}
 