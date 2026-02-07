import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onBookClick: () => void;
}

const Footer = ({ onBookClick }: FooterProps) => {
  return (
    <footer className="py-24">
      <div className="container mx-auto px-4">
        {/* Conversion CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready for your <span className="text-primary">last first session?</span>
          </h2>
          <Button 
            onClick={onBookClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-10 py-6 group"
          >
            Book Your Session
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Footer Info */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold tracking-tight">
              THE <span className="text-primary">CATALYST</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>Dr. Aris Thorne · Clinical Physiotherapy</p>
              <p className="mt-1">Germany · Biomedical Excellence</p>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Catalyst Physio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
