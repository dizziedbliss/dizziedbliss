import { PageDoodles } from "@/components/PageDoodles";
import { Nav } from "@/components/Nav";
import { HomeSection } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProfilesSection } from "@/components/ProfilesSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { imgTextureBg } from "@/config/assets";

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-canvas"
      style={{
        backgroundImage: `
          linear-gradient(var(--color-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      <img
        src={imgTextureBg}
        alt=""
        aria-hidden
        className="fixed inset-0 z-0 h-full w-full object-cover opacity-10 pointer-events-none select-none"
      />
      <PageDoodles />
      <div className="relative z-10">
        <Nav />
        <HomeSection />
        <ProjectsSection />
        <ProfilesSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
