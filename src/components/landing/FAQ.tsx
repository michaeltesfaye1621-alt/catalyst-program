import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What about health insurance coverage?",
    answer: "Many private health insurance plans in Germany cover physiotherapy treatments. We provide detailed invoices that you can submit to your insurance provider for reimbursement. During your initial consultation, we can discuss your specific coverage and help you understand what expenses may be covered.",
  },
  {
    question: "How much time does this take daily?",
    answer: "The daily commitment is approximately 15 minutes of prescribed exercises and movement protocols. These are designed to integrate seamlessly into your routine—whether you're at home, in the office, or traveling. Consistency with these short sessions is key to achieving lasting results.",
  },
  {
    question: "How does the App + Concierge model work?",
    answer: "Upon enrollment, you receive access to a custom video portal featuring your personalized exercise library, progress tracking, and educational content. The Concierge Messaging service provides 24/7 access to Dr. Thorne's team for questions, form checks, and support between sessions. Think of it as having a physiotherapist in your pocket.",
  },
  {
    question: "Who is this program designed for?",
    answer: "The Catalyst Method is designed for anyone with a body seeking lasting relief and peak performance—elite athletes recovering from injury, professionals dealing with chronic pain from desk work, active individuals wanting to prevent future issues, and anyone who refuses to accept pain as a permanent companion.",
  },
  {
    question: "What makes this different from traditional physiotherapy?",
    answer: "Traditional therapy often treats symptoms. The Catalyst Method is a comprehensive biomechanical approach that identifies and corrects the root cause of dysfunction. We don't just get you back to baseline—we engineer your body to perform better than before the injury occurred.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before starting your transformation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
