import { useState, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { Code, BrainCircuit, Wrench, Plus, Trash2, Pencil } from "lucide-react";
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
import { Slider } from "@/components/ui/slider";

const defaultCategories = [
  {
    id: "1",
    title: "Programming",
    icon: "Code",
    items: [
      { name: "Python", level: 85 },
      { name: "C / C++", level: 70 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    id: "2",
    title: "AI / ML & Data",
    icon: "BrainCircuit",
    items: [
      { name: "Machine Learning", level: 70 },
      { name: "Data Visualization", level: 80 },
      { name: "NumPy / Pandas", level: 75 },
    ],
  },
  {
    id: "3",
    title: "Tools & Tech",
    icon: "Wrench",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "Jupyter / Colab", level: 85 },
      { name: "SQLite", level: 70 },
    ],
  },
];

const iconMap = {
  Code,
  BrainCircuit,
  Wrench,
};

export const Skills = () => {
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("portfolio_skills");
    return saved ? JSON.parse(saved) : defaultCategories;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: "", level: 80, categoryId: "1" });

  useEffect(() => {
    localStorage.setItem("portfolio_skills", JSON.stringify(categories));
  }, [categories]);

  const handleAddSkill = () => {
    if (!newSkill.name) return;
    const updated = categories.map((cat: any) => {
      if (cat.id === newSkill.categoryId) {
        return { ...cat, items: [...cat.items, { name: newSkill.name, level: newSkill.level }] };
      }
      return cat;
    });
    setCategories(updated);
    setNewSkill({ name: "", level: 80, categoryId: "1" });
    setIsOpen(false);
  };

  const handleDeleteSkill = (catId: string, skillName: string) => {
    const updated = categories.map((cat: any) => {
      if (cat.id === catId) {
        return { ...cat, items: cat.items.filter((s: any) => s.name !== skillName) };
      }
      return cat;
    });
    setCategories(updated);
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <SectionHeading eyebrow="Skills" title="What I work with" subtitle="A growing toolkit focused on AI, data, and clean engineering." />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" size="sm" className="gap-2">
                <Plus className="w-4 h-4" /> Add Skill
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-white/10 text-foreground">
              <DialogHeader>
                <DialogTitle>Add New Skill</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <select 
                    className="w-full p-2 rounded-md bg-background/50 border border-border"
                    value={newSkill.categoryId}
                    onChange={(e) => setNewSkill({...newSkill, categoryId: e.target.value})}
                  >
                    {categories.map((cat: any) => (
                      <option key={cat.id} value={cat.id}>{cat.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Skill Name</Label>
                  <Input value={newSkill.name} onChange={(e) => setNewSkill({...newSkill, name: e.target.value})} placeholder="e.g. TensorFlow" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label>Proficiency Level ({newSkill.level}%)</Label>
                  <Slider 
                    value={[newSkill.level]} 
                    onValueChange={(val) => setNewSkill({...newSkill, level: val[0]})}
                    max={100}
                    step={5}
                  />
                </div>
                <Button onClick={handleAddSkill} className="w-full" variant="hero">Add Skill</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat: any) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] || Code;
            return (
              <div key={cat.id} className="glass rounded-3xl p-7 hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-primary">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((s: any) => (
                    <div key={s.name} className="group">
                      <div className="flex justify-between text-sm mb-1.5 items-center">
                        <span className="font-medium">{s.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{s.level}%</span>
                          <button 
                            onClick={() => handleDeleteSkill(cat.id, s.name)}
                            className="opacity-0 group-hover:opacity-100 text-destructive hover:scale-110 transition-all"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};