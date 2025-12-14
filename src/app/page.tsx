import AboutMe from "@/components/aboutMe/AboutMe";
import HeroBanner from "../components/banner/HeroBanner";
import SocialLinks from "@/components/socials/SocialLinks";
import ExprienceProjects from "@/components/experience/ExprienceProjects";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutMe className="max-wid mt-12" />
      <SocialLinks className="max-wid mt-16" />
      <ExprienceProjects className="max-wid mt-16" />
    </main>
  );
}
