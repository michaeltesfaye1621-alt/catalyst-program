import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudies = () => {
  const { t } = useLanguage();

  const caseStudies = [
    { initials: "M.K.", quote: t("cases_quote_1"), mobilityRestored: 94 },
    { initials: "S.L.", quote: t("cases_quote_2"), mobilityRestored: 98 },
    { initials: "A.B.", quote: t("cases_quote_3"), mobilityRestored: 87 },
  ];

  return (
    <section id="case-studies" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("cases_title_1")} <span className="text-primary">{t("cases_title_2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("cases_sub")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.initials}
              className="bg-background border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold">{study.initials}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{t("cases_verified")}</span>
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{study.quote}"
                </blockquote>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("cases_mobility")}</span>
                    <span className="text-primary font-semibold">{study.mobilityRestored}%</span>
                  </div>
                  <Progress value={study.mobilityRestored} className="h-2 bg-muted [&>div]:bg-primary" />
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
