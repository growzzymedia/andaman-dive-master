import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import ctaImage from "@/assets/cta-underwater.jpg";

const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div 
          className="max-w-4xl mx-auto rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={ctaImage}
              alt="Scuba diver swimming toward sunlight"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(0,90,140,0.85) 0%, rgba(0,50,80,0.9) 100%)"
              }}
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 z-[1]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 z-[1]" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500+ successful divemasters who started their journey with us. Your dream career is just 45 days away.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-bold text-lg px-8 py-6 rounded-full"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a 
                href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20the%20Divemaster%20course"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white bg-white/20 text-white hover:bg-white/30 font-display font-bold px-8 py-6 rounded-full shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Talk to Course Advisor
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
