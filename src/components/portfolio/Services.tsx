import { SectionHeading } from "./SectionHeading";
import { BrainCircuit, BarChart3, Cog } from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI / ML Model Development",
    desc: "Designing and training beginner-to-intermediate machine learning models for real-world problems.",
    tag: "Beginner Level",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    desc: "Turning raw datasets into clear, actionable insights with Python, Pandas, and Matplotlib.",
    tag: "Available",
  },
  {
    icon: Cog,
    title: "Python-based Automation",
    desc: "Writing scripts that automate repetitive tasks — from file processing to data scraping.",
    tag: "Available",
  },
];

export const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="container">
      <SectionHeading eyebrow="What I Can Do" title="Services & capabilities" subtitle="Future-ready offerings I'm actively building expertise in." />
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="glass rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-primary mb-5 shadow-glow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full glass mb-3 inline-block">
                {s.tag}
              </span>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);