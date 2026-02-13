import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import drThorneImg from "@/assets/dr-thorne.jpg";

const Specialist = () => {
  const { t } = useLanguage();

  return (
    <section id="specialist" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("specialist_title_1")} <span className="text-primary">{t("specialist_title_2")}</span> {t("specialist_title_3")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("specialist_sub")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 overflow-hidden">
                <img 
                  src={drThorneImg} 
                  alt="Dr. Aris Thorne" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20 -z-10" />
              <div className="absolute -inset-4 rounded-full border border-primary/10 -z-10" />
            </div>
          </div>

          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4">{t("specialist_name")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("specialist_bio")}
            </p>

            <blockquote className="relative pl-6 border-l-2 border-primary">
              <Quote className="absolute -left-4 -top-2 h-8 w-8 text-primary/30" />
              <p className="text-lg font-medium italic text-foreground mb-2">
                {t("specialist_quote")}
              </p>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                {t("specialist_cred_1")}
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                {t("specialist_cred_2")}
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                {t("specialist_cred_3")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
