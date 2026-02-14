import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: t("faq_q5"), answer: t("faq_a5") }, // Moved "What makes this different" to top (major objection)
    { question: t("faq_q1"), answer: t("faq_a1") },
    { question: t("faq_q2"), answer: t("faq_a2") },
    { question: t("faq_q3"), answer: t("faq_a3") },
    { question: t("faq_q4"), answer: t("faq_a4") },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16 md:mb-24 animate-reveal">
          <h2 className="mb-6">
            {t("faq_title_1")} <span className="text-primary">{t("faq_title_2")}</span>
          </h2>
          <p className="text-readable">{t("faq_sub")}</p>
        </div>

        <div className="max-w-3xl mx-auto animate-reveal animate-stagger-1 text-lg">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl px-8 transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/5"
              >
                <AccordionTrigger className="text-left font-bold hover:no-underline hover:text-primary py-6 transition-colors group">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 text-center animate-reveal animate-stagger-2">
          <p className="text-muted-foreground mb-6">Have more questions?</p>
          <Button
            variant="outline"
            className="border-primary/30 hover:border-primary text-primary hover:bg-primary/5 rounded-xl px-8 py-6 h-auto"
            onClick={() => window.location.href = '#pricing'}
          >
            See Pricing & Details
          </Button>
        </div>
      </div>
    </section>
  );
};


export default FAQ;
