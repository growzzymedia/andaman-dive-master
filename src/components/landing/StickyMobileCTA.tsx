import { MessageCircle } from "lucide-react";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a 
        href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20the%20Divemaster%20course"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-success text-success-foreground font-display font-bold text-base py-4 px-6 shadow-lg"
      >
        <MessageCircle className="w-5 h-5" />
        Talk to Course Advisor
      </a>
    </div>
  );
};

export default StickyMobileCTA;
