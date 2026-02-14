import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";

const ResultsSummary = () => {
    const { t } = useLanguage();

    const stats = [
        { value: t("results_stat_1"), label: t("results_stat_1_label") },
        { value: t("results_stat_2"), label: t("results_stat_2_label") },
        { value: t("results_stat_3"), label: t("results_stat_3_label") },
    ];

    return (
        <SectionWrapper id="results-summary" bgVariant="default" className="py-20 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="text-center p-8 rounded-3xl bg-secondary/20 border border-border/50 animate-reveal"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="text-5xl md:text-6xl font-black text-primary mb-3">
                            {stat.value}
                        </div>
                        <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest text-balance">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ResultsSummary;
