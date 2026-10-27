import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin, Download, Target, GraduationCap, Briefcase } from "lucide-react";

const status = [
  { icon: Target, label: "Focus", value: "Python · AI/ML · Data Science" },
  { icon: GraduationCap, label: "Currently", value: "B.Tech" },
  { icon: Briefcase, label: "Open to", value: "AI/ML, Data Science & Software Development Internships" },
];

export const Hero = () => {
  const profile = "/image/az.png";
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Azmat Tamkeen</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Aspiring AI/ML Engineer · Data Science Enthusiast · Python Developer
          </p>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            Motivated third-year B.Tech student specializing in Artificial Intelligence and Machine
            Learning, with a CGPA of 9.70. Passionate about Data Science, Software Development, and
            building real-world solutions using Python. Actively seeking internship opportunities to
            apply technical knowledge and gain industry experience.
          </p>
          <div className="flex flex-wrap gap-3">
            {status.map((s) => (
              <div
                key={s.label}
                className="glass rounded-full px-4 py-1.5 text-sm flex items-center gap-2"
              >
                <s.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{s.label}:</span>
                <span className="font-medium">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild variant="hero" size="lg">
              <a href="/resume.pdf" download>
                <Download className="mr-2 w-5 h-5" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg" className="border-primary/20">
              <a href="#contact">
                <Mail className="mr-2 w-5 h-5" /> Hire Me
              </a>
            </Button>
          </div>
          <div className="flex gap-3 pt-4">
            {[
              { icon: Github, href: "https://github.com/Azmat-Tamkeen" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/azmat-tamkeen-45ab82369" },
              { icon: Mail, href: "mailto:azmatchand9581@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-11 h-11 grid place-items-center glass rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-glow-pulse" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[hsl(var(--glass-border))] shadow-glow animate-float">
              <img
                src={profile}
                alt="Azmat Tamkeen — Aspiring AI/ML Engineer"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
