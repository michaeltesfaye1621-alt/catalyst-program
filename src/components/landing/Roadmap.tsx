import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Wrench, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Roadmap = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: Flame,
      phase: t("roadmap_phase1_label"),
      title: t("roadmap_phase1_title"),
      subtitle: t("roadmap_phase1_subtitle"),
      description: t("roadmap_phase1_desc"),
    },
    {
      icon: Wrench,
      phase: t("roadmap_phase2_label"),
      title: t("roadmap_phase2_title"),
      subtitle: t("roadmap_phase2_subtitle"),
      description: t("roadmap_phase2_desc"),
    },
    {
      icon: Shield,
      phase: t("roadmap_phase3_label"),
      title: t("roadmap_phase3_title"),
      subtitle: t("roadmap_phase3_subtitle"),
      description: t("roadmap_phase3_desc"),
    },
  ];

  return (
    <section id="roadmap" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("roadmap_title_1")} <span className="text-primary">{t("roadmap_title_2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("roadmap_sub")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <Card 
              key={index}
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
