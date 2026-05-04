import { SectionHeading } from "./SectionHeading";
import { Code, BrainCircuit, Wrench } from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code,
    items: [
      { name: "Python", level: 85 },
      { name: "C / C++", level: 70 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    title: "AI / ML & Data",
    icon: BrainCircuit,
    items: [
      { name: "Machine Learning", level: 70 },
      { name: "Data Visualization", level: 80 },
      { name: "NumPy / Pandas", level: 75 },
    ],
  },
  {
    title: "Tools & Tech",
    icon: Wrench,
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "Jupyter / Colab", level: 85 },
      { name: "SQLite", level: 70 },
    ],
  },
];

const badges = ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Git", "GitHub", "SQLite", "OCR", "VS Code", "Jupyter"];

export const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="container">
      <SectionHeading eyebrow="Skills" title="What I work with" subtitle="A growing toolkit focused on AI, data, and clean engineering." />
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="glass rounded-3xl p-7 hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-primary">
                <cat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.items.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {badges.map((b) => (
          <span
            key={b}
            className="glass px-4 py-2 rounded-full text-sm font-medium hover:text-primary hover:scale-105 transition-all cursor-default"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);