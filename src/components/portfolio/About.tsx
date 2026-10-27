import { Brain, Lightbulb, Rocket, Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const paragraphs = [
  "I'm a third-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Mahatma Gandhi Institute of Technology (MGIT), with a CGPA of 9.70.",
  "I'm passionate about Data Science, Software Development, and solving real-world problems through technology. I enjoy developing practical projects using Python and exploring data-driven solutions.",
  "I'm continuously strengthening my programming, problem-solving, and technical skills while exploring emerging AI technologies and seeking internship opportunities in AI/ML, Data Science, and Software Development.",
];

const traits = [
  { icon: Brain, title: "Quick Learner", desc: "Absorbs new tech and frameworks fast." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Loves breaking down complex challenges." },
  { icon: Rocket, title: "Tech Enthusiast", desc: "Always experimenting with what's next." },
  { icon: Code2, title: "Builder Mindset", desc: "Turns ideas into working products." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <SectionHeading eyebrow="About Me" title="Crafting intelligence with curiosity" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="glass rounded-3xl p-6 sm:p-8 space-y-4 shadow-elegant">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
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
