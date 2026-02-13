import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

interface NavigationProps {
  onBookClick: () => void;
}

const Navigation = ({ onBookClick }: NavigationProps) => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          {t("nav_logo_prefix")} <span className="text-primary">{t("nav_logo_accent")}</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted"
          >
            <Globe className="h-4 w-4" />
            <span className="font-medium">{language === "en" ? "DE" : "EN"}</span>
          </button>
          <Button 
            onClick={scrollToPricing}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            {t("nav_cta")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
