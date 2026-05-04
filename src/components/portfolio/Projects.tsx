import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Zap } from "lucide-react";

const projects = [
  {
    title: "Electricity Consumption & Optimizer System",
    desc: "A smart system to monitor household / industrial electricity usage, analyze consumption patterns, and suggest optimization strategies to reduce wastage and bills.",
    tech: ["Python", "SQLite", "OCR", "Matplotlib", "Pandas"],
    icon: Zap,
    features: ["Real-time data tracking", "Usage analytics dashboard", "AI-driven optimization tips"],
  },
];

export const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="container">
      <SectionHeading eyebrow="Projects" title="Things I've built" subtitle="Hands-on work where I apply what I learn." />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => (
          <article
            key={p.title}
            className="glass rounded-3xl p-8 group hover:shadow-glow transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-primary mb-5 group-hover:rotate-6 transition-transform">
                <p.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild variant="hero" size="sm">
                  <a href="#" target="_blank" rel="noreferrer">
                    <Github /> View Code
                  </a>
                </Button>
                <Button asChild variant="glass" size="sm">
                  <a href="#" target="_blank" rel="noreferrer">
                    <ExternalLink /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
        <div className="glass rounded-3xl p-8 border-dashed border-2 border-border flex flex-col items-center justify-center text-center min-h-[300px]">
          <p className="text-5xl mb-3">🚀</p>
          <h3 className="text-xl font-semibold mb-2">More projects coming soon</h3>
          <p className="text-muted-foreground text-sm">
            Currently building new AI/ML experiments. Stay tuned.
          </p>
        </div>
      </div>
    </div>
  </section>
);