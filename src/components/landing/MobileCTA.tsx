import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface MobileCTAProps {
  onBookClick: () => void;
}

const MobileCTA = ({ onBookClick }: MobileCTAProps) => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden">
      <Button 
        onClick={onBookClick}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-5"
      >
        {t("mobile_cta")}
      </Button>
    </div>
  );
};

export default MobileCTA;
