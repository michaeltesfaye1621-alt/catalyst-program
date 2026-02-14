import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { sections } from "@/config/sections";
import MagneticButton from "@/components/ui/magnetic-button";

interface NavigationProps {
  onBookClick: () => void;
}

const Navigation = ({ onBookClick }: NavigationProps) => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = sections.filter(s =>
    ["roadmap", "case-studies", "pricing", "faq"].includes(s.id)
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container-narrow h-16 glass-premium rounded-2xl flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-2xl">
        <a href="#" className="text-xl font-black tracking-tighter text-foreground hover:opacity-80 transition-opacity ml-2">
          {t("nav_logo_prefix")} <span className="energy-gradient">{t("nav_logo_accent")}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all relative group"
            >
              {t(item.labelKey)}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="flex items-center gap-2 text-[10px] font-black text-muted-foreground hover:text-primary transition-all px-3 py-1.5 rounded-xl border border-white/10 hover:border-primary/30"
            aria-label={`Switch language to ${language === "en" ? "German" : "English"}`}
          >
            <Globe className="h-3.5 w-3.5" />
            <span className="uppercase">{language === "en" ? "DE" : "EN"}</span>
          </button>

          <MagneticButton
            onClick={onBookClick}
            className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-2 rounded-xl h-9 text-xs transition-all border-0"
          >
            {t("nav_cta")}
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};


export default Navigation;
