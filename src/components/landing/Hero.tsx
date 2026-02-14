import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import drThorneImg from "@/assets/dr-thorne.jpg";
import MagneticButton from "@/components/ui/magnetic-button";

interface HeroProps {
  onBookClick: () => void;
}

const Hero = ({ onBookClick }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[90vh] flex items-center pt-24 pb-16 relative">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-reveal">
            <h1 className="mb-6 text-balance leading-none">
              {t("hero_headline_1")}{" "}
              <span className="energy-gradient block sm:inline">{t("hero_headline_2")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              {t("hero_sub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start animate-reveal-up animate-stagger-1">
              <MagneticButton
                onClick={onBookClick}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10 py-7 h-auto group transition-all"
              >
                {t("hero_cta")}
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </MagneticButton>
            </div>
          </div>


          <div className="animate-reveal animate-stagger-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
              <img
                src={drThorneImg}
                alt="Dr. Aris Thorne - Clinical Physiotherapist"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};



export default Hero;
