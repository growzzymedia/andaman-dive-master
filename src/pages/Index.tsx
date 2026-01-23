import HeroSection from "@/components/landing/HeroSection";
import QualificationSection from "@/components/landing/QualificationSection";
import CourseTimeline from "@/components/landing/CourseTimeline";
import SkillsSection from "@/components/landing/SkillsSection";
import TrustSection from "@/components/landing/TrustSection";
import CareerDestinations from "@/components/landing/CareerDestinations";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import LeadForm from "@/components/landing/LeadForm";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QualificationSection />
      <CourseTimeline />
      <SkillsSection />
      <TrustSection />
      <CareerDestinations />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <LeadForm />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
