import { Clock, GraduationCap, MapPin, Globe, Waves } from "lucide-react";
import phaseOpenwater from "@/assets/phase-openwater.jpg";
import phaseAdvanced from "@/assets/phase-advanced.jpg";
import phaseRescue from "@/assets/phase-rescue.jpg";
import phaseDivemaster from "@/assets/phase-divemaster.jpg";

const CourseTimeline = () => {
  const phases = [
    {
      phase: 1,
      title: "Open Water Diver",
      duration: "3-4 days",
      description: "Your first certification - learn the fundamentals of scuba diving",
      color: "bg-primary",
      image: phaseOpenwater,
    },
    {
      phase: 2,
      title: "Advanced Open Water",
      duration: "2-3 days",
      description: "Deep dives & specialty skills - navigation, night diving, and more",
      color: "bg-primary/80",
      image: phaseAdvanced,
    },
    {
      phase: 3,
      title: "Rescue Diver + EFR",
      duration: "4-5 days",
      description: "1-day Emergency First Response (EFR) + 3-4 days underwater rescue & emergency management skills",
      color: "bg-primary/60",
      image: phaseRescue,
    },
    {
      phase: 4,
      title: "Divemaster Professional",
      duration: "4-6 weeks",
      description: "Lead dives, assist instructors & become a certified professional",
      color: "bg-accent",
      image: phaseDivemaster,
    },
  ];

  const highlights = [
    { icon: Clock, label: "Duration", value: "45 Days (6-10 weeks)" },
    { icon: GraduationCap, label: "Eligibility", value: "18+ years, basic swimming" },
    { icon: MapPin, label: "Location", value: "Havelock Island, Andaman" },
    { icon: Globe, label: "Language", value: "English" },
    { icon: Waves, label: "Logged Dives", value: "Minimum 60 by completion" },
  ];

  return (
    <section id="course-timeline" className="py-16 md:py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your <span className="text-primary">Zero to Hero</span> Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform from a complete beginner to a certified PADI Divemaster in just 45 days
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-accent transform md:-translate-x-1/2" />

            {phases.map((phase, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Phase number circle */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-full ${phase.color} flex items-center justify-center shadow-lg`}>
                  <span className="font-display text-2xl font-bold text-white">{phase.phase}</span>
                </div>

                {/* Content card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                    {/* Phase image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={phase.image}
                        alt={phase.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary">Phase {phase.phase}</span>
                        <span className="text-sm text-muted-foreground">• {phase.duration}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key highlights */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-4 text-center shadow-sm border border-border">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="font-display text-sm font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTimeline;
