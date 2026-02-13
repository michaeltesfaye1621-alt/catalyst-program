import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Specialist from "@/components/landing/Specialist";
import Roadmap from "@/components/landing/Roadmap";
import CaseStudies from "@/components/landing/CaseStudies";
import FAQ from "@/components/landing/FAQ";
import Pricing from "@/components/landing/Pricing";
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
          <Specialist />
          <Roadmap />
          <CaseStudies />
          <FAQ />
          <Pricing onBookClick={handleBookClick} />
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
