import { useState, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Zap, Plus, Trash2, Pencil } from "lucide-react";
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

const defaultProjects = [
  {
    id: "1",
    title: "Electricity Consumption & Optimizer System",
    desc: "A smart system to monitor household / industrial electricity usage, analyze consumption patterns, and suggest optimization strategies to reduce wastage and bills.",
    tech: "Python, SQLite, OCR, Matplotlib, Pandas",
    githubUrl: "https://github.com/Azmat-Tamkeen",
    demoUrl: "https://azmat-tamkeen.github.io",
    icon: "Zap",
  },
];

export const Projects = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("portfolio_projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newProject, setNewProject] = useState({
    title: "",
    desc: "",
    tech: "",
    githubUrl: "",
    demoUrl: "",
    icon: "Zap",
  });

  useEffect(() => {
    localStorage.setItem("portfolio_projects", JSON.stringify(items));
  }, [items]);

  const handleSave = () => {
    if (!newProject.title || !newProject.desc) return;
    
    if (editingId) {
      setItems(items.map((it: any) => it.id === editingId ? { ...newProject, id: editingId } : it));
    } else {
      const item = {
        ...newProject,
        id: Math.random().toString(36).substr(2, 9),
      };
      setItems([...items, item]);
    }
    
    setNewProject({ title: "", desc: "", tech: "", githubUrl: "", demoUrl: "", icon: "Zap" });
    setEditingId(null);
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((it: any) => it.id !== id));
  };

  const startEdit = (project: any) => {
    setNewProject(project);
    setEditingId(project.id);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <SectionHeading eyebrow="Projects" title="Things I've built" subtitle="Hands-on work where I apply what I learn." />
          <Dialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open);
            if (!open) {
              setEditingId(null);
              setNewProject({ title: "", desc: "", tech: "", githubUrl: "", demoUrl: "", icon: "Zap" });
            }
          }}>
            <DialogTrigger asChild>
              <Button variant="hero" className="gap-2">
                <Plus className="w-4 h-4" /> Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-white/10 text-foreground">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Project" : "Add New Project"}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="p-title">Title</Label>
                  <Input 
                    id="p-title" 
                    value={newProject.title} 
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    placeholder="Project Title"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-desc">Description</Label>
                  <Textarea 
                    id="p-desc" 
                    value={newProject.desc} 
                    onChange={(e) => setNewProject({...newProject, desc: e.target.value})}
                    placeholder="Brief description..."
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-tech">Technologies (comma separated)</Label>
                  <Input 
                    id="p-tech" 
                    value={newProject.tech} 
                    onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
                    placeholder="Python, React, etc."
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-github">GitHub URL</Label>
                  <Input 
                    id="p-github" 
                    value={newProject.githubUrl} 
                    onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
                    placeholder="https://github.com/..."
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-demo">Live Demo / Preview URL</Label>
                  <Input 
                    id="p-demo" 
                    value={newProject.demoUrl} 
                    onChange={(e) => setNewProject({...newProject, demoUrl: e.target.value})}
                    placeholder="https://..."
                    className="bg-background/50"
                  />
                </div>
                <Button onClick={handleSave} className="w-full" variant="hero">
                  {editingId ? "Update Project" : "Save Project"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((p: any) => (
            <article
              key={p.id}
              className="glass rounded-3xl p-8 group hover:shadow-glow transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => startEdit(p)}
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                  title="Edit Project"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(p.id)}
                  className="p-2 rounded-full bg-destructive/10 text-destructive hover:bg-destructive hover:text-white transition-all"
                  title="Delete Project"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-primary mb-5 group-hover:rotate-6 transition-transform">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.split(",").map((t: string) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {t.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="hero" size="sm">
                    <a href={p.githubUrl || "#"} target="_blank" rel="noreferrer">
                      <Github className="mr-2 w-4 h-4" /> View Code
                    </a>
                  </Button>
                  <Button asChild variant="glass" size="sm">
                    <a href={p.demoUrl || "#"} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
          <div className="glass rounded-3xl p-8 border-dashed border-2 border-border flex flex-col items-center justify-center text-center min-h-[300px]">
            <p className="text-5xl mb-3">🚀</p>
            <h3 className="text-xl font-semibold mb-2">More projects coming soon</h3>
            <p className="text-muted-foreground text-sm">
              Currently building new AI/ML experiments. Stay tuned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};