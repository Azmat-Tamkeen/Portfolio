import { useState, useEffect } from "react";
import { Brain, Lightbulb, Rocket, Code2, Pencil } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const defaultContent = {
  p1: "I'm a motivated B.Tech student specializing in Artificial Intelligence and Machine Learning at MGIT.",
  p2: "My passion lies in building impactful real-world projects using Python and data visualization — turning raw data into intelligent solutions.",
  p3: "I'm currently sharpening my skills in modern AI/ML workflows, automation, and clean code."
};

const traits = [
  { icon: Brain, title: "Quick Learner", desc: "Absorbs new tech and frameworks fast." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Loves breaking down complex challenges." },
  { icon: Rocket, title: "Tech Enthusiast", desc: "Always experimenting with what's next." },
  { icon: Code2, title: "Builder Mindset", desc: "Turns ideas into working products." },
];

export const About = () => {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem("portfolio_about");
    return saved ? JSON.parse(saved) : defaultContent;
  });
  const [tempContent, setTempContent] = useState(content);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio_about", JSON.stringify(content));
  }, [content]);

  const handleSave = () => {
    setContent(tempContent);
    setIsOpen(false);
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <SectionHeading eyebrow="About Me" title="Crafting intelligence with curiosity" />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
                <Pencil className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-white/10 text-foreground max-w-2xl">
              <DialogHeader>
                <DialogTitle>Edit About Me</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Textarea 
                    value={tempContent.p1} 
                    onChange={(e) => setTempContent({...tempContent, p1: e.target.value})}
                    placeholder="Paragraph 1"
                    className="min-h-[100px] bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    value={tempContent.p2} 
                    onChange={(e) => setTempContent({...tempContent, p2: e.target.value})}
                    placeholder="Paragraph 2"
                    className="min-h-[100px] bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    value={tempContent.p3} 
                    onChange={(e) => setTempContent({...tempContent, p3: e.target.value})}
                    placeholder="Paragraph 3"
                    className="min-h-[100px] bg-background/50"
                  />
                </div>
                <Button onClick={handleSave} className="w-full" variant="hero">
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="glass rounded-3xl p-8 space-y-4 shadow-elegant">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.p1}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.p2}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.p3}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {traits.map((t) => (
              <div key={t.title} className="glass rounded-2xl p-6 hover:-translate-y-2 hover:shadow-glow transition-all duration-300 group">
                <div className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
                  <t.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};