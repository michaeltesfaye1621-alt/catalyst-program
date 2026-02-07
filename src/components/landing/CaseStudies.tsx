import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const caseStudies = [
  {
    initials: "M.K.",
    quote: "After years of chronic back pain, I'm now training harder than ever. Dr. Thorne's method changed my life.",
    mobilityRestored: 94,
  },
  {
    initials: "S.L.",
    quote: "Professional footballer, ACL recovery. Back on the pitch in record time with better performance than before.",
    mobilityRestored: 98,
  },
  {
    initials: "A.B.",
    quote: "At 62, I thought my hiking days were over. Now I've completed three mountain treks this year alone.",
    mobilityRestored: 87,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Success stories from patients who reclaimed their lives through The Catalyst Method.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.initials}
              className="bg-background border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                {/* Patient Initials */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold">{study.initials}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Verified Patient</span>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{study.quote}"
                </blockquote>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mobility Restored</span>
                    <span className="text-primary font-semibold">{study.mobilityRestored}%</span>
                  </div>
                  <Progress 
                    value={study.mobilityRestored} 
                    className="h-2 bg-muted [&>div]:bg-primary"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
