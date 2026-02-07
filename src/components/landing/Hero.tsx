import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
}

const Hero = ({ onBookClick }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mb-6">
              Stop Managing Pain.{" "}
              <span className="text-primary">Start Your Transformation.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              A 12-week biomechanical blueprint designed by Dr. Aris Thorne to reclaim your peak performance.
            </p>
            <Button 
              onClick={onBookClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 group"
            >
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Placeholder Image */}
          <div className="animate-slide-in-right">
            <div className="relative aspect-[4/5] bg-card rounded-2xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">📷</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Dr. Aris Thorne<br />Professional Photo
                  </p>
                </div>
              </div>
              {/* Accent Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
