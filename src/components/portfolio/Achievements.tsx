import { useState, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { Trophy, Award, Star, Plus, Trash2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialAchievements = [
  {
    id: "1",
    icon: "Trophy",
    title: "Academic Excellence",
    desc: "Achieved an outstanding CGPA of 9.85/10 in Intermediate (MPC) at Sri Sai Co-op Junior College.",
    tag: "9.85 CGPA",
  },
  {
    id: "2",
    icon: "Award",
    title: "Secondary Education Milestone",
    desc: "Completed 10th Grade with a high CGPA of 9.8/10 at Modern High School.",
    tag: "9.8 CGPA",
  },
  {
    id: "3",
    icon: "Star",
    title: "B.Tech Specialization",
    desc: "Currently specializing in Artificial Intelligence and Machine Learning at MGIT, maintaining a strong academic record.",
    tag: "In Progress",
  },
];

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Star: Star,
};

export const Achievements = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("portfolio_achievements");
    return saved ? JSON.parse(saved) : initialAchievements;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [newAch, setNewAch] = useState({
    title: "",
    desc: "",
    tag: "",
    icon: "Award",
    certificate: null as string | null,
  });

  useEffect(() => {
    localStorage.setItem("portfolio_achievements", JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (!newAch.title || !newAch.desc) return;
    const item = {
      ...newAch,
      id: Math.random().toString(36).substr(2, 9),
    };
    setItems([...items, item]);
    setNewAch({ title: "", desc: "", tag: "", icon: "Award", certificate: null });
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((it: any) => it.id !== id));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAch({ ...newAch, certificate: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <SectionHeading 
            eyebrow="My Success Stories" 
            title="Achievements & Milestones" 
            subtitle="Key highlights of my professional and academic journey so far." 
          />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" className="gap-2">
                <Plus className="w-4 h-4" /> Add Achievement
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-white/10 text-foreground">
              <DialogHeader>
                <DialogTitle>Add New Achievement</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    value={newAch.title} 
                    onChange={(e) => setNewAch({...newAch, title: e.target.value})}
                    placeholder="e.g. Hackathon Winner"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="desc">Description</Label>
                  <Textarea 
                    id="desc" 
                    value={newAch.desc} 
                    onChange={(e) => setNewAch({...newAch, desc: e.target.value})}
                    placeholder="Describe your achievement..."
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tag">Tag / Badge</Label>
                  <Input 
                    id="tag" 
                    value={newAch.tag} 
                    onChange={(e) => setNewAch({...newAch, tag: e.target.value})}
                    placeholder="e.g. 1st Place"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Certificate (Optional)</Label>
                  <div className="flex items-center gap-4">
                    <Button 
                      type="button" 
                      variant="glass" 
                      onClick={() => document.getElementById("cert-upload")?.click()}
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" /> 
                      {newAch.certificate ? "Change Certificate" : "Upload Certificate"}
                    </Button>
                    <input 
                      id="cert-upload" 
                      type="file" 
                      accept="image/*,application/pdf" 
                      className="hidden" 
                      onChange={handleFileUpload}
                    />
                  </div>
                  {newAch.certificate && (
                    <div className="text-xs text-primary flex items-center gap-1 mt-1">
                      Certificate attached! <Button variant="ghost" size="icon" className="h-4 w-4" onClick={() => setNewAch({...newAch, certificate: null})}><X className="w-3 h-3"/></Button>
                    </div>
                  )}
                </div>
                <Button onClick={handleAdd} className="w-full" variant="hero">
                  Save Achievement
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((a: any) => {
            const Icon = iconMap[a.icon as keyof typeof iconMap] || Award;
            return (
              <div key={a.id} className="glass rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <button 
                  onClick={() => handleDelete(a.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-destructive/10 text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-white"
                  title="Delete Achievement"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="relative">
                  <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-primary mb-5 shadow-glow">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full glass mb-3 inline-block">
                    {a.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
                  {a.certificate && (
                    <Button variant="glass" size="sm" asChild className="w-full">
                      <a href={a.certificate} target="_blank" rel="noreferrer">
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

