import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Wrench, Shield } from "lucide-react";

const phases = [
  {
    icon: Flame,
    phase: "Phase 1",
    title: "IGNITE",
    subtitle: "Relief & Inflammation Control",
    description: "Immediate pain relief through targeted interventions. We identify the root cause and eliminate acute inflammation to prepare your body for rebuilding.",
  },
  {
    icon: Wrench,
    phase: "Phase 2",
    title: "REBUILD",
    subtitle: "Functional Mobility & Strength",
    description: "Restore your body's natural movement patterns. Progressive exercises designed to rebuild strength while correcting biomechanical imbalances.",
  },
  {
    icon: Shield,
    phase: "Phase 3",
    title: "SUSTAIN",
    subtitle: "Performance & Injury Proofing",
    description: "Lock in your gains with advanced protocols. Build resilience and performance capacity that prevents future injuries and exceeds your baseline.",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The 3-Phase <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured 12-week journey designed to take you from pain to peak performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <Card 
              key={phase.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <phase.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {phase.phase}
                </span>
                <CardTitle className="text-2xl font-bold mt-1">{phase.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{phase.subtitle}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {phase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
