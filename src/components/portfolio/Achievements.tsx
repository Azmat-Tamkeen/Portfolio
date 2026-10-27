import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, Eye, Trophy, Award, type LucideIcon } from "lucide-react";

type AchievementType = "pdf" | "image";

interface Achievement {
  id: string;
  icon: LucideIcon;
  title: string;
  org: string;
  desc: string;
  tag: string;
  /** File inside `public`, e.g. "/certificates/mgit-first-year-academic-topper.pdf". */
  file: string;
  /** "pdf" opens in a new tab, "image" opens a responsive preview. */
  fileType: AchievementType;
}

// To add an achievement: drop the file into `public/certificates/` and add an entry here.
const achievements: Achievement[] = [
  {
    id: "first-year-academic-topper",
    icon: Trophy,
    title: "First-Year Academic Topper",
    org: "MGIT",
    desc: "Awarded an Academic Topper Certificate and Medal for outstanding academic performance in the first year of B.Tech.",
    tag: "Academic Topper",
    file: "/certificates/mgit-first-year-academic-topper.pdf",
    fileType: "pdf",
  },
  {
    id: "hackathon-participant",
    icon: Award,
    title: "Hackathon Participant",
    org: "MGIT",
    desc: "Participated in the MGIT Hackathon, demonstrating problem-solving, innovation, and teamwork skills.",
    tag: "Hackathon",
    file: "/certificates/mgit-hackathon-participation.pdf",
    fileType: "pdf",
  },
];

const buildDownloadName = (a: Achievement) => {
  const ext = a.file.split(".").pop() || (a.fileType === "image" ? "png" : "pdf");
  const base = `${a.org}-${a.title}`
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${base}.${ext}`;
};

export const Achievements = () => {
  const [preview, setPreview] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container">
        <div className="mb-10">
          <SectionHeading
            eyebrow="My Success Stories"
            title="Achievements & Milestones"
            subtitle="Key highlights of my academic journey so far."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((a) => {
            const Icon = a.icon;
            const isImage = a.fileType === "image";
            const downloadName = buildDownloadName(a);

            return (
              <div
                key={a.id}
                className="glass rounded-3xl p-6 sm:p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-primary mb-5 shadow-glow">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full glass mb-3 inline-block">
                    {a.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{a.title}</h3>
                  <p className="text-sm text-gradient font-medium mb-3">{a.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>

                <div className="relative mt-6 pt-5 border-t border-border/60 flex flex-wrap gap-3">
                  {isImage ? (
                    <Button variant="hero" size="sm" onClick={() => setPreview(a)}>
                      <Eye className="mr-2 w-4 h-4" /> View Certificate
                    </Button>
                  ) : (
                    <Button asChild variant="hero" size="sm">
                      <a href={a.file} target="_blank" rel="noreferrer">
                        <Eye className="mr-2 w-4 h-4" /> View Certificate
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="glass" size="sm">
                    <a href={a.file} download={downloadName}>
                      <Download className="mr-2 w-4 h-4" /> Download
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={Boolean(preview)} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="glass border-[hsl(var(--glass-border))] text-foreground max-w-3xl">
          <DialogHeader>
            <DialogTitle>{preview?.title}</DialogTitle>
          </DialogHeader>
          {preview?.file && (
            <img
              src={preview.file}
              alt={`${preview.title} certificate from ${preview.org}`}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
