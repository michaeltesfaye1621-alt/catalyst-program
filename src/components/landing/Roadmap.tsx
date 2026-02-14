import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import RoadmapIcon from "./RoadmapIcon";

const Roadmap = () => {
  const { t } = useLanguage();

  const phases = [
    {
      type: 'flame',
      phase: t("roadmap_phase1_label"),
      title: t("roadmap_phase1_title"),
      subtitle: t("roadmap_phase1_subtitle"),
      description: t("roadmap_phase1_desc"),
      delay: "animate-stagger-1"
    },
    {
      type: 'wrench',
      phase: t("roadmap_phase2_label"),
      title: t("roadmap_phase2_title"),
      subtitle: t("roadmap_phase2_subtitle"),
      description: t("roadmap_phase2_desc"),
      delay: "animate-stagger-2"
    },
    {
      type: 'shield',
      phase: t("roadmap_phase3_label"),
      title: t("roadmap_phase3_title"),
      subtitle: t("roadmap_phase3_subtitle"),
      description: t("roadmap_phase3_desc"),
      delay: "animate-stagger-3"
    },
  ];

  return (
    <SectionWrapper id="roadmap" className="relative overflow-visible">
      <div className="text-center mb-16 md:mb-24 animate-reveal">
        <h2 className="mb-6">
          {t("roadmap_title_1")} <span className="energy-gradient">{t("roadmap_title_2")}</span>
        </h2>
        <p className="text-readable">
          {t("roadmap_sub")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`glass-card rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 group animate-reveal ${phase.delay}`}
          >
            <div className="glass-card-border" />
            <div className="text-center pb-12 pt-12 px-8 relative z-10">
              <div className="mx-auto w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-700 group-hover:rotate-6 shadow-[0_0_30px_rgba(0,209,209,0.1)] group-hover:shadow-primary/30 overflow-hidden">
                <RoadmapIcon
                  type={phase.type as any}
                  className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-all duration-700 group-hover:scale-125"
                />
              </div>
              <div className="space-y-3 mb-6">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                  {phase.phase}
                </span>
                <h3 className="text-2xl font-black pt-4">{phase.title}</h3>
                <p className="text-xs text-primary font-black tracking-widest uppercase opacity-80">{phase.subtitle}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {phase.description}
              </p>
            </div>
          </div>
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
