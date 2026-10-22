import { useEffect } from "react";
import { RouterProvider, useRouter } from "@/router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SpillTheTea } from "@/components/SpillTheTea";
import { HomePage } from "@/pages/HomePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { ContactPage } from "@/pages/ContactPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function Pages() {
  const { path } = useRouter();

  if (path === "/") return <HomePage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/skills") return <SkillsPage />;
  if (path.startsWith("/project/")) return <ProjectPage slug={path.slice("/project/".length)} />;
  return <NotFoundPage />;
}

// experiment: while you're looking away, the cat's fate is unknown
function useSchrodingerTitle() {
  useEffect(() => {
    let saved = document.title;
    const onChange = () => {
      if (document.hidden) {
        saved = document.title;
        document.title = "Is the cat dead? · Max!!";
      } else {
        document.title = saved;
      }
    };
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
}

export default function App() {
  useSchrodingerTitle();

  return (
    <RouterProvider>
      <div className="noise noise-fixed min-h-screen overflow-x-hidden bg-canvas">
        <Nav />
        <main>
          <Pages />
        </main>
        <Footer />
        <SpillTheTea />
      </div>
    </RouterProvider>
  );
}
