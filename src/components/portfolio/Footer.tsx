import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Azmat-Tamkeen", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/azmat-tamkeen-45ab82369", label: "LinkedIn" },
  { icon: Mail, href: "mailto:azmatchand9581@gmail.com", label: "Email" },
];

export const Footer = () => (
  <footer className="border-t border-border/50 py-10 mt-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Azmat Tamkeen</span>. Crafted with passion.
      </p>
      <div className="flex gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-9 h-9 grid place-items-center glass rounded-full hover:text-primary transition-colors"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);