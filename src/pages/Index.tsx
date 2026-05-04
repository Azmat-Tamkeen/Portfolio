import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.title = "Azmat Tamkeen — Aspiring AI/ML Engineer & Python Developer";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.name = "description";
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Portfolio of Azmat Tamkeen — B.Tech AI & ML student, Python developer, building real-world AI projects.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
