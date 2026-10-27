import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Zap, CheckCircle2 } from "lucide-react";

// View Code links to the repository once the GitHub repo URL is set below.
const projectGithubUrl = "https://github.com/Azmat-Tamkeen/electricity-consumption-optimizer";
// Live Demo is enabled only when a working deployed application URL is available.
const projectDemoUrl = ""; // add the deployed app URL here when it is ready

const project = {
  title: "Electricity Consumption & Optimizer System",
  desc: "Developed an electricity consumption analysis application designed to help users monitor appliance-wise energy usage, estimate electricity bills, visualize consumption patterns, and identify opportunities to reduce energy wastage and costs.",
  features: [
    "User registration and login",
    "Appliance-wise electricity usage tracking",
    "Electricity bill estimation based on consumption",
    "Graphical analysis of electricity usage",
    "Energy-saving suggestions",
    "Electricity meter image upload functionality",
  ],
  tech: "Python, Flask, SQLite, HTML, CSS, Pandas, Matplotlib",
};

export const Projects = () => {
  const techList = project.tech.split(",").map((t) => t.trim());
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            subtitle="Hands-on work where I apply what I learn."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <article className="glass rounded-3xl p-6 sm:p-8 group hover:shadow-glow transition-all duration-500 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-primary mb-5 group-hover:rotate-6 transition-transform">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{project.desc}</p>

              <h4 className="text-sm font-semibold tracking-wider uppercase text-gradient mb-3">
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {techList.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {projectGithubUrl ? (
                  <Button asChild variant="hero" size="sm">
                    <a href={projectGithubUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-2 w-4 h-4" /> View Code
                    </a>
                  </Button>
                ) : (
                  <Button variant="hero" size="sm" disabled title="GitHub repository link coming soon">
                    <Github className="mr-2 w-4 h-4" /> View Code
                  </Button>
                )}
                {projectDemoUrl ? (
                  <Button asChild variant="glass" size="sm">
                    <a href={projectDemoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button variant="glass" size="sm" disabled title="Live demo is not available yet">
                    <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                  </Button>
                )}
              </div>
            </div>
          </article>

          <div className="glass rounded-3xl p-6 sm:p-8 border-dashed border-2 border-border flex flex-col items-center justify-center text-center min-h-[300px]">
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
};
