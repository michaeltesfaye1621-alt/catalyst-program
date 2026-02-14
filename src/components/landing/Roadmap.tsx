import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Wrench, Shield, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";

const Roadmap = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: Flame,
      phase: t("roadmap_phase1_label"),
      title: t("roadmap_phase1_title"),
      subtitle: t("roadmap_phase1_subtitle"),
      description: t("roadmap_phase1_desc"),
      delay: "animate-stagger-1"
    },
    {
      icon: Wrench,
      phase: t("roadmap_phase2_label"),
      title: t("roadmap_phase2_title"),
      subtitle: t("roadmap_phase2_subtitle"),
      description: t("roadmap_phase2_desc"),
      delay: "animate-stagger-2"
    },
    {
      icon: Shield,
      phase: t("roadmap_phase3_label"),
      title: t("roadmap_phase3_title"),
      subtitle: t("roadmap_phase3_subtitle"),
      description: t("roadmap_phase3_desc"),
      delay: "animate-stagger-3"
    },
  ];

  return (
    <SectionWrapper id="roadmap">
      <div className="text-center mb-16 md:mb-24 animate-reveal">
        <h2 className="mb-6">
          {t("roadmap_title_1")} <span className="text-primary">{t("roadmap_title_2")}</span>
        </h2>
        <p className="text-readable">
          {t("roadmap_sub")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
        {phases.map((phase, index) => (
          <Card
            key={index}
            className={`bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 group animate-reveal ${phase.delay}`}
          >
            <CardHeader className="text-center pb-4 pt-10">
              <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500 group-hover:rotate-6">
                <phase.icon className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  {phase.phase}
                </span>
                <CardTitle className="text-2xl font-bold pt-2">{phase.title}</CardTitle>
                <p className="text-sm text-primary font-semibold tracking-wide uppercase">{phase.subtitle}</p>
              </div>
            </CardHeader>
            <CardContent className="text-center px-8 pb-12">
              <p className="text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 text-center animate-reveal animate-stagger-4">
        <p className="text-muted-foreground mb-6">Ready to start the journey?</p>
        <a
          href="#pricing"
          className="inline-flex items-center text-primary font-bold hover:underline group text-lg"
        >
          {t("pricing_cta")}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Roadmap;
