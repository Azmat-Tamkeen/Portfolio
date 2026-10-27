import { GraduationCap, School, BookOpen } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const education = [
  {
    id: "1",
    icon: GraduationCap,
    period: "In Progress",
    title: "Bachelor of Technology (B.Tech)",
    place: "Mahatma Gandhi Institute of Technology (MGIT)",
    detail: "Specialization: AI & ML | CGPA: 9.70 / 10",
  },
  {
    id: "2",
    icon: School,
    period: "2022 – 2024",
    title: "Intermediate (MPC)",
    place: "Sri Sai Co-op Junior College",
    detail: "CGPA: 9.85 / 10",
  },
  {
    id: "3",
    icon: BookOpen,
    period: "2022",
    title: "Secondary School (Class X)",
    place: "Modern High School",
    detail: "CGPA: 9.8 / 10",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container">
        <div className="mb-10">
          <SectionHeading eyebrow="Education" title="My academic journey" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          <div className="space-y-12">
            {education.map((it, i) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.id}
                  className={`relative flex md:items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } group`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow z-10" />
                  <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="glass rounded-2xl p-6 hover:shadow-glow-purple transition-all relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 grid place-items-center rounded-xl bg-gradient-primary">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xs font-semibold tracking-wider uppercase text-gradient">
                          {it.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{it.title}</h3>
                      <p className="text-muted-foreground text-sm">{it.place}</p>
                      <p className="mt-2 text-sm font-medium text-foreground">{it.detail}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
