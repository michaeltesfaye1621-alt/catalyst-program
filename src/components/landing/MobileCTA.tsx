import { Button } from "@/components/ui/button";

interface MobileCTAProps {
  onBookClick: () => void;
}

const MobileCTA = ({ onBookClick }: MobileCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden">
      <Button 
        onClick={onBookClick}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-5"
      >
        Start Program
      </Button>
    </div>
  );
};

export default MobileCTA;
