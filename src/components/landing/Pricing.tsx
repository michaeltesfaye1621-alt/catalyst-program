import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

interface PricingProps {
  onBookClick: () => void;
}

const features = [
  "Complete Biomechanical Blueprint",
  "12 Weekly In-Person Sessions",
  "24/7 Concierge Messaging",
  "Custom App Video Portal",
  "Progress Tracking Dashboard",
  "Lifetime Exercise Library Access",
];

const Pricing = ({ onBookClick }: PricingProps) => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Program <span className="text-primary">Investment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An investment in your health that pays dividends for life.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Primary Pricing Card */}
          <Card className="bg-background border-2 border-primary/30 relative overflow-hidden hover:border-primary/50 transition-all duration-300">
            {/* Accent Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <CardHeader className="text-center pb-4 pt-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Complete Program
              </p>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                The 12-Week Catalyst Program
              </CardTitle>
              <div className="mt-4">
                <span className="text-5xl md:text-6xl font-extrabold">€2,350</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features List */}
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                onClick={onBookClick}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6 group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Secondary Option */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-2">Not ready for the full program?</p>
            <button 
              onClick={onBookClick}
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
            >
              Initial Diagnostic Assessment – €295
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
