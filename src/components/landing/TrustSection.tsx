import { Award, TrendingUp, Users, Globe, MapPin, GraduationCap } from "lucide-react";

const TrustSection = () => {
  const trustItems = [
    { icon: Award, title: "PADI 5-Star", subtitle: "Dive Center Certified" },
    { icon: TrendingUp, title: "95% Placement", subtitle: "Rate for Graduates" },
    { icon: Users, title: "500+ Divemasters", subtitle: "Successfully Trained" },
    { icon: Globe, title: "180+ Countries", subtitle: "International Recognition" },
    { icon: MapPin, title: "Andaman's Premier", subtitle: "Training Facility" },
    { icon: GraduationCap, title: "Expert Instructors", subtitle: "1000+ Dives Each" },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">ScubaDiveIn?</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Join Andaman's most trusted dive training center with a proven track record of success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-secondary-foreground/70">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
