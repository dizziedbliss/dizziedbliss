import { HomeSection } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { usePageTitle } from "@/usePageTitle";

export function HomePage() {
  usePageTitle("Max!! · Adithya");
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
    </>
  );
}
