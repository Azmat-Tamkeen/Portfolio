import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/50 py-10 mt-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Azmat Tamkeen</span>. Crafted with passion.
      </p>
      <div className="flex gap-3">
        {[Github, Linkedin, Mail].map((Icon, i) => (
          <a key={i} href="#" className="w-9 h-9 grid place-items-center glass rounded-full hover:text-primary transition-colors">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);