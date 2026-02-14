import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const CaseStudies = () => {
  const { t } = useLanguage();

  const caseStudies = [
    { initials: "M.K.", quote: t("cases_quote_1"), mobilityRestored: 94, delay: "animate-stagger-1", result: "Saved from surgery" },
    { initials: "S.L.", quote: t("cases_quote_2"), mobilityRestored: 98, delay: "animate-stagger-2", result: "Ironman podium" },
    { initials: "A.B.", quote: t("cases_quote_3"), mobilityRestored: 87, delay: "animate-stagger-3", result: "Return to sport" },
  ];

  const partners = [
    "ELITE ATHLETICS", "CLINICAL PERFORMANCE", "PRO PHYSIO ASSO", "biomech.lab", "OLYMPIC STANDARDS"
  ];

  return (
    <SectionWrapper id="case-studies" className="relative overflow-visible">
      <div className="text-center mb-16 md:mb-24 animate-reveal">
        <h2 className="mb-6">
          {t("cases_title_1")} <span className="energy-gradient">{t("cases_title_2")}</span>
        </h2>
        <p className="text-readable">{t("cases_sub")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={study.initials}
            className={`glass-card rounded-[2.5rem] transition-all duration-700 hover:shadow-[0_0_50px_rgba(0,209,209,0.1)] group animate-reveal ${study.delay}`}
          >
            <div className="glass-card-border" />
            <div className="pt-8 px-8 pb-10 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <span className="text-primary font-bold text-lg group-hover:text-primary-foreground transition-colors">{study.initials}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">{study.initials}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">{t("cases_verified")}</span>
                </div>
              </div>
              <blockquote className="text-foreground text-lg mb-8 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                "{study.quote}"
              </blockquote>

              <div className="relative h-20 overflow-hidden">
                <div className="absolute inset-0 transition-all duration-500 group-hover:-translate-y-full">
                  <div className="h-full flex flex-col justify-end">
                    <span className="text-sm font-bold text-primary flex items-center gap-2">
                      {study.result}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 translate-y-full transition-all duration-500 group-hover:translate-y-0">
                  <div className="h-full space-y-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("cases_mobility")}</span>
                      <span className="text-2xl font-black text-primary">{study.mobilityRestored}%</span>
                    </div>
                    <Progress value={study.mobilityRestored} className="h-2 bg-white/5 [&>div]:bg-primary shadow-[0_0_10px_rgba(0,209,209,0.3)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center animate-reveal animate-stagger-4">
        <p className="text-muted-foreground mb-6">See how your journey could look</p>
        <a
          href="#pricing"
          className="inline-flex items-center text-primary font-bold hover:underline group text-lg"
        >
          Explore Pricing
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Partner Logobar */}
      <div className="mt-32 pt-16 border-t border-white/5">
        <p className="text-center text-xs font-bold text-muted-foreground/40 uppercase tracking-[0.3em] mb-12">Trusted by clinicians and elite performers at</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map(p => (
            <span key={p} className="text-sm md:text-base font-black tracking-tighter whitespace-nowrap">{p}</span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CaseStudies;
