import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { sections } from "@/config/sections";

interface NavigationProps {
  onBookClick: () => void;
}

const Navigation = ({ onBookClick }: NavigationProps) => {
  const { language, setLanguage, t } = useLanguage();

  // Filter sections that should appear in nav (Process, Results, Pricing, FAQ)
  const navItems = sections.filter(s =>
    ["roadmap", "case-studies", "pricing", "faq"].includes(s.id)
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-narrow h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter text-foreground hover:opacity-80 transition-opacity">
          {t("nav_logo_prefix")} <span className="text-primary">{t("nav_logo_accent")}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all px-3 py-1.5 rounded-xl border border-border/50 hover:border-primary/30"
            aria-label={`Switch language to ${language === "en" ? "German" : "English"}`}
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase">{language === "en" ? "DE" : "EN"}</span>
          </button>

          <Button
            onClick={onBookClick}
            className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-5 rounded-xl h-auto transition-all hover:scale-105 active:scale-95"
          >
            {t("nav_cta")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
