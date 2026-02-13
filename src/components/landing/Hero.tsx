import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import drThorneImg from "@/assets/dr-thorne.jpg";

interface HeroProps {
  onBookClick: () => void;
}

const Hero = ({ onBookClick }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mb-6">
              {t("hero_headline_1")}{" "}
              <span className="text-primary">{t("hero_headline_2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              {t("hero_sub")}
            </p>
            <Button 
              onClick={onBookClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 group"
            >
              {t("hero_cta")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <img 
                src={drThorneImg} 
                alt="Dr. Aris Thorne - Clinical Physiotherapist" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
