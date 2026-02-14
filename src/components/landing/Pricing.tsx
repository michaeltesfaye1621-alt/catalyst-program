import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import MagneticButton from "@/components/ui/magnetic-button";

interface PricingProps {
  onBookClick: () => void;
}

const Pricing = ({ onBookClick }: PricingProps) => {
  const { t } = useLanguage();

  const features = [
    t("pricing_feat_1"),
    t("pricing_feat_2"),
    t("pricing_feat_3"),
    t("pricing_feat_4"),
    t("pricing_feat_5"),
    t("pricing_feat_6"),
  ];

  return (
    <SectionWrapper id="pricing" className="relative overflow-visible">
      <div className="text-center mb-16 md:mb-24 animate-reveal">
        <h2 className="mb-6">
          {t("pricing_title_1")} <span className="energy-gradient">{t("pricing_title_2")}</span>
        </h2>
        <p className="text-readable">{t("pricing_sub")}</p>
      </div>

      <div className="max-w-2xl mx-auto animate-reveal animate-stagger-1 relative">
        <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full z-[-1] opacity-50" />

        <div className="glass-card rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="glass-card-border" />

          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="text-center pb-8 pt-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              {t("pricing_label")}
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{t("pricing_name")}</h3>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-7xl font-black tracking-tighter text-foreground shimmer-text px-4">€2,350</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 font-medium uppercase tracking-tighter opacity-70">
                Value comparison: €3,600+ if billed as individual sessions
              </p>
            </div>
          </div>

          <div className="px-8 md:px-12 pb-14 space-y-10">
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 list-none">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </div>

            <div className="space-y-6">
              <MagneticButton
                onClick={onBookClick}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-black text-xl py-8 rounded-2xl shadow-xl shadow-primary/20 border-0"
              >
                {t("pricing_cta")}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </MagneticButton>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground font-semibold">NEXT STEP: 60-Minute Diagnostic Consultation</p>
                <p className="text-xs text-muted-foreground/60 italic leading-relaxed">
                  Following your booking, we'll schedule your first deep-dive assessment to map your biomechanical blueprint.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 glass-premium border border-white/5 rounded-2xl p-6">
          <p className="text-muted-foreground mb-3 text-sm font-medium">{t("pricing_alt_label")}</p>
          <button
            onClick={onBookClick}
            className="text-primary hover:text-primary/80 font-bold text-lg underline underline-offset-8 transition-all hover:underline-offset-4"
          >
            {t("pricing_alt_link")}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;

