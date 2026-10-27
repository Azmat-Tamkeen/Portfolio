import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BadgeCheck, Code2, Cpu, Download, Eye, type LucideIcon } from "lucide-react";

type CertificateType = "pdf" | "image";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  icon: LucideIcon;
  /** File inside `public`, e.g. "/certificates/cisco-python-essentials.pdf". */
  file: string;
  /** "pdf" opens in a new tab, "image" opens a responsive preview. */
  fileType: CertificateType;
}

// To add a certificate: drop the file into `public/certificates/` and add an entry here.
const certifications: Certificate[] = [
  {
    id: "cisco-operating-systems-basics",
    title: "Operating Systems Basics",
    issuer: "Cisco",
    icon: Cpu,
    file: "/certificates/cisco-operating-systems-basics.pdf",
    fileType: "pdf",
  },
  {
    id: "python-essentials",
    title: "Python Essentials",
    issuer: "",
    icon: Code2,
    file: "/certificates/python-essentials.jpeg",
    fileType: "image",
  },
];

const buildDownloadName = (c: Certificate) => {
  const ext = c.file.split(".").pop() || (c.fileType === "image" ? "png" : "pdf");
  const base = `${c.issuer}-${c.title}-Certificate`
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${base}.${ext}`;
};

export const Certifications = () => {
  const [preview, setPreview] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Certifications"
            title="Verified learning"
            subtitle="Certifications that back up my technical foundation."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((c) => {
            const Icon = c.icon;
            const isImage = c.fileType === "image";
            const downloadName = buildDownloadName(c);

            return (
              <div
                key={c.id}
                className="glass rounded-3xl p-6 sm:p-8 group hover:-translate-y-2 hover:shadow-glow transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-primary shrink-0 shadow-glow">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full glass mb-3 inline-flex items-center gap-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-primary" /> Certified
                    </span>
                    <h3 className="text-xl font-bold mb-1">{c.title}</h3>
                    {c.issuer && <p className="text-sm text-muted-foreground">{c.issuer}</p>}
                  </div>
                </div>

                <div className="relative mt-6 pt-5 border-t border-border/60 flex flex-wrap gap-3">
                  {isImage ? (
                    <Button variant="hero" size="sm" onClick={() => setPreview(c)}>
                      <Eye className="mr-2 w-4 h-4" /> View Certificate
                    </Button>
                  ) : (
                    <Button asChild variant="hero" size="sm">
                      <a href={c.file} target="_blank" rel="noreferrer">
                        <Eye className="mr-2 w-4 h-4" /> View Certificate
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="glass" size="sm">
                    <a href={c.file} download={downloadName}>
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
              alt={`${preview.title} certificate issued by ${preview.issuer}`}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
