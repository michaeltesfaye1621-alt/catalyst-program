import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudies = () => {
  const { t } = useLanguage();

  const caseStudies = [
    { initials: "M.K.", quote: t("cases_quote_1"), mobilityRestored: 94, delay: "animate-stagger-1" },
    { initials: "S.L.", quote: t("cases_quote_2"), mobilityRestored: 98, delay: "animate-stagger-2" },
    { initials: "A.B.", quote: t("cases_quote_3"), mobilityRestored: 87, delay: "animate-stagger-3" },
  ];

  return (
    <section id="case-studies" className="section-padding bg-card/20">
      <div className="container-narrow">
        <div className="text-center mb-16 md:mb-24 animate-reveal">
          <h2 className="mb-6">
            {t("cases_title_1")} <span className="text-primary">{t("cases_title_2")}</span>
          </h2>
          <p className="text-readable">{t("cases_sub")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={study.initials}
              className={`bg-background/40 backdrop-blur-sm border-border/50 rounded-3xl transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 animate-reveal ${study.delay}`}
            >
              <CardContent className="pt-8 px-8 pb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{study.initials}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{study.initials}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{t("cases_verified")}</span>
                  </div>
                </div>
                <blockquote className="text-foreground text-lg mb-8 leading-relaxed italic">
                  "{study.quote}"
                </blockquote>
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("cases_mobility")}</span>
                    <span className="text-2xl font-bold text-primary">{study.mobilityRestored}%</span>
                  </div>
                  <Progress value={study.mobilityRestored} className="h-2.5 bg-muted/50 [&>div]:bg-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CaseStudies;
