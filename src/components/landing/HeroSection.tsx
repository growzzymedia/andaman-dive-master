import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Globe, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-diving.jpg";
import logoMain from "@/assets/logo-main.png";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProgram = () => {
    document.getElementById("course-timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Scuba diver underwater in crystal clear ocean"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,30,60,0.7) 0%, rgba(0,60,100,0.5) 40%, rgba(0,80,120,0.6) 100%)"
          }}
        />
      </div>
      
      {/* Animated bubbles/particles effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-4 h-4 bg-white/30 rounded-full top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-6 h-6 bg-white/20 rounded-full top-1/3 right-1/3 animate-pulse delay-300" />
        <div className="absolute w-3 h-3 bg-white/40 rounded-full bottom-1/4 left-1/3 animate-pulse delay-500" />
        <div className="absolute w-5 h-5 bg-white/25 rounded-full top-1/2 right-1/4 animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* PADI Certified Banner - Most Prominent */}
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-6 py-3 rounded-full shadow-lg">
              <Award className="w-6 h-6" />
              <span className="font-display font-bold text-lg md:text-xl tracking-wide">PADI 5-Star Dive Center</span>
              <Award className="w-6 h-6" />
            </div>
          </div>

          {/* Brand Logo */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={logoMain} 
              alt="ScubaDiveIn Logo" 
              className="h-24 md:h-32 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              95% Placement Rate
            </Badge>
            <Badge variant="secondary" className="bg-white/15 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm">
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
              className="border-2 border-white bg-white/20 text-white hover:bg-white/30 font-display font-bold px-8 py-6 rounded-full backdrop-blur-sm shadow-lg"
            >
              Explore Zero to Hero Program
            </Button>
          </div>

          {/* Urgency countdown timer */}
          <div className="animate-fade-in mb-8" style={{ animationDelay: "0.8s" }}>
            <CountdownTimer />
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-4">
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
