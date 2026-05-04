import { useState, useEffect } from "react";
import { GraduationCap, School, BookOpen, Pencil, Plus, Trash2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
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

const defaultEducation = [
  {
    id: "1",
    icon: "GraduationCap",
    period: "Present",
    title: "B.Tech — AI & Machine Learning",
    place: "Mahatma Gandhi Institute of Technology",
    detail: "Currently pursuing",
  },
  {
    id: "2",
    icon: "School",
    period: "2022 – 2024",
    title: "Intermediate (MPC)",
    place: "Sri Sai Co-op Junior College",
    detail: "CGPA: 9.85 / 10",
  },
  {
    id: "3",
    icon: "BookOpen",
    period: "2022",
    title: "10th Grade",
    place: "Modern High School",
    detail: "CGPA: 9.8 / 10",
  },
];

const iconMap = {
  GraduationCap,
  School,
  BookOpen,
};

export const Education = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("portfolio_education");
    return saved ? JSON.parse(saved) : defaultEducation;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    period: "",
    title: "",
    place: "",
    detail: "",
    icon: "GraduationCap",
  });

  useEffect(() => {
    localStorage.setItem("portfolio_education", JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (!newItem.title || !newItem.place) return;
    setItems([...items, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]);
    setNewItem({ period: "", title: "", place: "", detail: "", icon: "GraduationCap" });
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((it) => it.id !== id));
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <SectionHeading eyebrow="Education" title="My academic journey" />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" size="sm" className="gap-2">
                <Plus className="w-4 h-4" /> Add Education
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-white/10 text-foreground">
              <DialogHeader>
                <DialogTitle>Add Education Detail</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Period</Label>
                  <Input value={newItem.period} onChange={(e) => setNewItem({...newItem, period: e.target.value})} placeholder="e.g. 2022 - 2024" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label>Degree / Title</Label>
                  <Input value={newItem.title} onChange={(e) => setNewItem({...newItem, title: e.target.value})} placeholder="e.g. B.Tech" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label>Institution</Label>
                  <Input value={newItem.place} onChange={(e) => setNewItem({...newItem, place: e.target.value})} placeholder="e.g. MGIT" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label>Detail</Label>
                  <Input value={newItem.detail} onChange={(e) => setNewItem({...newItem, detail: e.target.value})} placeholder="e.g. CGPA: 9.8" className="bg-background/50" />
                </div>
                <Button onClick={handleAdd} className="w-full" variant="hero">Add Item</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
          <div className="space-y-12">
            {items.map((it, i) => {
              const Icon = iconMap[it.icon as keyof typeof iconMap] || GraduationCap;
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
                      <button 
                        onClick={() => handleDelete(it.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-destructive/10 text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-white"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
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