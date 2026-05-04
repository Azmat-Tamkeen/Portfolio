import { useState } from "react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const info = [
  { icon: Mail, label: "Email", value: "azmat.tamkeen@example.com", href: "mailto:azmat.tamkeen@example.com" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/azmat-tamkeen", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "@azmat-tamkeen", href: "https://github.com" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast({ title: "Please check your inputs", description: res.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thanks for reaching out — I'll reply soon." });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let's build something together" subtitle="Have an idea, opportunity, or question? My inbox is open." />
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-2 space-y-4">
            {info.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-primary shrink-0">
                  <i.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  <p className="font-medium truncate">{i.value}</p>
                </div>
              </a>
            ))}
          </div>
          <form onSubmit={onSubmit} className="md:col-span-3 glass rounded-3xl p-8 space-y-5 shadow-elegant">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                maxLength={1000}
              />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
              {loading ? "Sending..." : (<><Send /> Send Message</>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};