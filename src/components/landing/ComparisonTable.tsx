import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ComparisonTable = () => {
    const { t } = useLanguage();

    const comparisons = [
        {
            feature: t("method_feat1"),
            traditional: t("method_feat1_trad"),
            catalyst: t("method_feat1_cat"),
        },
        {
            feature: t("method_feat2"),
            traditional: t("method_feat2_trad"),
            catalyst: t("method_feat2_cat"),
        },
        {
            feature: t("method_feat3"),
            traditional: t("method_feat3_trad"),
            catalyst: t("method_feat3_cat"),
        },
        {
            feature: t("method_feat4"),
            traditional: t("method_feat4_trad"),
            catalyst: t("method_feat4_cat"),
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto mt-20 animate-reveal animate-stagger-2">
            <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl relative">
                <div className="glass-card-border" />
                <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 relative z-10">
                    <div className="p-6 md:p-8 font-bold text-muted-foreground uppercase tracking-widest text-xs">{t("method_feature")}</div>
                    <div className="p-6 md:p-8 font-bold text-center bg-white/5">{t("method_traditional")}</div>
                    <div className="p-6 md:p-8 font-bold text-center text-primary bg-primary/5">{t("method_catalyst")}</div>
                </div>
                {comparisons.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors relative z-10">
                        <div className="p-6 md:p-8 text-sm md:text-base font-semibold border-r border-white/5 flex items-center">{item.feature}</div>
                        <div className="p-6 md:p-8 text-sm text-center text-muted-foreground/60 border-r border-white/5 flex items-center justify-center">
                            <span className="flex items-center gap-2">
                                <X className="w-4 h-4 text-destructive/50" />
                                {item.traditional}
                            </span>
                        </div>
                        <div className="p-6 md:p-8 text-sm md:text-base text-center font-bold flex items-center justify-center bg-primary/5">
                            <span className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-primary" />
                                {item.catalyst}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComparisonTable;
