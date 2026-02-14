import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import drThorneImg from "@/assets/dr-thorne.jpg";
import SectionWrapper from "./SectionWrapper";
import Signature from "./Signature";


const Specialist = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="specialist" className="relative overflow-visible">
      <div className="text-center mb-16 md:mb-24 animate-reveal">
        <h2 className="mb-6">
          {t("specialist_title_1")} <span className="energy-gradient">{t("specialist_title_2")}</span> {t("specialist_title_3")}
        </h2>
        <p className="text-readable">
          {t("specialist_sub")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex justify-center animate-reveal animate-stagger-1">
          <div className="relative group">
            <div className="glass-card w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden rotate-2 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
              <div className="glass-card-border" />
              <img
                src={drThorneImg}
                alt="Dr. Aris Thorne"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
              />
            </div>
            <div className="absolute -inset-4 rounded-3xl border border-primary/20 -z-10 -rotate-3 group-hover:rotate-0 transition-all duration-500" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        <div className="animate-reveal animate-stagger-2">
          <h3 className="mb-6 text-primary text-3xl font-bold">{t("specialist_name")}</h3>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            {t("specialist_bio")}
          </p>

          <blockquote className="relative p-8 rounded-2xl glass-premium border-l-4 border-primary shadow-inner overflow-hidden">
            <Quote className="absolute -left-3 -top-3 h-10 w-10 text-primary/20" />
            <p className="text-xl font-medium italic text-foreground leading-snug relative z-10">
              {t("specialist_quote")}
            </p>
          </blockquote>

          <Signature />

          <div className="mt-10 flex flex-wrap gap-4">

            <span className="px-5 py-2.5 bg-secondary/50 backdrop-blur-sm border border-border rounded-xl text-sm font-semibold text-secondary-foreground">
              {t("specialist_cred_1")}
            </span>
            <span className="px-5 py-2.5 bg-secondary/50 backdrop-blur-sm border border-border rounded-xl text-sm font-semibold text-secondary-foreground">
              {t("specialist_cred_2")}
            </span>
            <span className="px-5 py-2.5 bg-secondary/50 backdrop-blur-sm border border-border rounded-xl text-sm font-semibold text-secondary-foreground">
              {t("specialist_cred_3")}
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Specialist;
