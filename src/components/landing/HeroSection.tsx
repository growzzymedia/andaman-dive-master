import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Globe, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProgram = () => {
    document.getElementById("course-timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, hsl(210 100% 8%) 0%, hsl(200 100% 20%) 40%, hsl(180 60% 35%) 100%)"
        }}
      />
      
      {/* Animated bubbles/particles effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-4 h-4 bg-white/30 rounded-full top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-6 h-6 bg-white/20 rounded-full top-1/3 right-1/3 animate-pulse delay-300" />
        <div className="absolute w-3 h-3 bg-white/40 rounded-full bottom-1/4 left-1/3 animate-pulse delay-500" />
        <div className="absolute w-5 h-5 bg-white/25 rounded-full top-1/2 right-1/4 animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              PADI Certified
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              95% Placement Rate
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              International License
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Become a PADI Certified{" "}
            <span className="text-accent">Divemaster</span>
            <br />
            in 45 Days
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Turn your passion for diving into a worldwide career. Train in the pristine waters of{" "}
            <span className="text-success font-semibold">Andaman Islands</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg"
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-display font-bold text-lg px-8 py-6 rounded-full shadow-lg animate-pulse-glow"
            >
              Check Your Eligibility
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToProgram}
              className="border-white/30 text-white hover:bg-white/10 font-display font-semibold px-8 py-6 rounded-full backdrop-blur-sm"
            >
              Explore Zero to Hero Program
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-8">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(200 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
