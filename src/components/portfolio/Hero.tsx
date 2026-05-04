import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Azmat Tamkeen</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            Aspiring AI/ML Engineer · Python Developer · Tech Enthusiast
          </p>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            A motivated B.Tech student passionate about Artificial Intelligence and
            Machine Learning. I build real-world projects with Python, data
            visualization, and a curious problem-solving mindset.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">
                View Projects <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">
                <Mail /> Contact Me
              </a>
            </Button>
          </div>
          <div className="flex gap-3 pt-4">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "#contact" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
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
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-glow animate-float">
              <img
                src={profile}
                alt="Azmat Tamkeen — Aspiring AI/ML Engineer"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-elegant animate-float" style={{ animationDelay: "1s" }}>
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold">B.Tech AI & ML</p>
            </div>
            <div className="absolute -top-2 -right-2 glass rounded-2xl px-4 py-3 shadow-elegant animate-float" style={{ animationDelay: "2s" }}>
              <p className="text-xs text-muted-foreground">Focus</p>
              <p className="text-sm font-semibold text-gradient">Python · ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};