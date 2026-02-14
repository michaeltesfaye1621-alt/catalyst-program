import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Specialist from "@/components/landing/Specialist";
import Roadmap from "@/components/landing/Roadmap";
import CaseStudies from "@/components/landing/CaseStudies";
import ResultsSummary from "@/components/landing/ResultsSummary";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import BookingModal from "@/components/landing/BookingModal";
import MobileCTA from "@/components/landing/MobileCTA";

const Index = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBookClick = () => {
    setBookingModalOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation onBookClick={handleBookClick} />
        <main>
          <Hero onBookClick={handleBookClick} />
          <Problem />
          <Specialist />
          <Roadmap />
          <CaseStudies />
          <ResultsSummary />
          <Pricing onBookClick={handleBookClick} />
          <FAQ />
          <Footer onBookClick={handleBookClick} />
        </main>
        <MobileCTA onBookClick={handleBookClick} />
        <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
        <div className="h-20 md:hidden" />
      </div>
    </LanguageProvider>
  );
};

export default Index;
