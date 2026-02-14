import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
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
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import Quiz from "@/components/landing/Quiz";
import SectionWrapper from "@/components/landing/SectionWrapper";
import ScrollProgress from "@/components/landing/ScrollProgress";

const IndexContent = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleBookClick = () => {
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ScrollProgress />
      <BackgroundEffects />
      <Navigation onBookClick={handleBookClick} />

      <main>
        <Hero onBookClick={handleBookClick} />
        <Problem />
        <Specialist />
        <Roadmap />
        <CaseStudies />
        <SectionWrapper id="assessment" className="overflow-visible">
          <div className="text-center mb-16 animate-reveal">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{t("quiz_label")}</span>
            <h2 className="mt-4">{t("quiz_title_1")} <span className="energy-gradient italic">{t("quiz_title_2")}</span></h2>
            <p className="text-readable mt-6 text-xl">{t("quiz_sub")}</p>
          </div>
          <Quiz />
        </SectionWrapper>
        <ResultsSummary />

        <Pricing onBookClick={handleBookClick} />
        <FAQ />
        <Footer onBookClick={handleBookClick} />
      </main>
      <MobileCTA onBookClick={handleBookClick} />
      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
      <div className="h-20 md:hidden" />
    </div>
  );
}

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
