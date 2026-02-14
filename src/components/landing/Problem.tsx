import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { AlertCircle, XCircle, TrendingDown } from "lucide-react";
import ComparisonTable from "./ComparisonTable";

const Problem = () => {
    const { t } = useLanguage();

    const painPoints = [
        {
            icon: XCircle,
            text: t("problem_p1"),
        },
        {
            icon: TrendingDown,
            text: t("problem_p2"),
        },
        {
            icon: AlertCircle,
            text: t("problem_p3"),
        },
    ];

    return (
        <SectionWrapper id="problem" className="relative overflow-visible">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-reveal">
                    <h2 className="mb-8 text-balance">
                        {t("problem_title_1")} <span className="energy-gradient block">{t("problem_title_2")}</span>
                    </h2>
                    <div className="space-y-6">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex gap-4 items-start group">
                                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                                    <point.icon className="h-5 w-5 text-primary" />
                                </div>
                                <p className="text-lg text-muted-foreground">{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="glass-card rounded-[3rem] p-10 md:p-16 animate-reveal animate-stagger-1 relative overflow-hidden">
                    <div className="glass-card-border" />
                    <h3 className="mb-6 text-3xl font-bold">{t("problem_card_title")}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10">
                        {t("problem_card_text")}
                    </p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-transparent rounded-full" />
                </div>
            </div>

            <div className="mt-20">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{t("method_label")}</span>
                    <h2 className="mt-4 text-3xl md:text-5xl">{t("method_title_1")} <span className="text-primary italic">{t("method_title_2")}</span></h2>
                </div>
                <ComparisonTable />
            </div>
        </SectionWrapper>
    );
};

export default Problem;
