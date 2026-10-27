import { SectionHeading } from "./SectionHeading";
import { Code2, Database, BarChart3, Globe, Wrench, FileSpreadsheet } from "lucide-react";

const categories = [
  {
    id: "1",
    title: "Programming Languages",
    icon: Code2,
    items: ["Python"],
  },
  {
    id: "2",
    title: "Databases",
    icon: Database,
    items: ["SQL", "MySQL"],
  },
  {
    id: "3",
    title: "Data Science & Analytics",
    icon: BarChart3,
    items: ["Pandas", "NumPy", "Matplotlib", "Excel"],
  },
  {
    id: "4",
    title: "Web Technologies",
    icon: Globe,
    items: ["HTML", "CSS"],
  },
  {
    id: "5",
    title: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    id: "6",
    title: "Productivity Tools",
    icon: FileSpreadsheet,
    items: ["MS Office"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            subtitle="A growing toolkit focused on AI, data, and clean engineering."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="glass rounded-3xl p-6 sm:p-7 hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-primary">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
