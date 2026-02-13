import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  onBookClick: () => void;
}

const Footer = ({ onBookClick }: FooterProps) => {
  const { t } = useLanguage();

  return (
    <footer className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            {t("footer_headline_1")} <span className="text-primary">{t("footer_headline_2")}</span>
          </h2>
          <Button 
            onClick={onBookClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-6 group"
          >
            {t("footer_cta")}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold tracking-tight">
              {t("nav_logo_prefix")} <span className="text-primary">{t("nav_logo_accent")}</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>{t("footer_subtitle")}</p>
              <p className="mt-1">{t("footer_location")}</p>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t("footer_copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
