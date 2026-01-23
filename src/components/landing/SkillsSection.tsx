import { Compass, Users, MessageSquare, ShieldCheck, Globe } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Compass,
      title: "Lead Guided Underwater Tours",
      description: "Navigate dive sites and lead groups safely through underwater adventures",
    },
    {
      icon: Users,
      title: "Assist PADI Instructors",
      description: "Support teaching activities and help students during training sessions",
    },
    {
      icon: MessageSquare,
      title: "Conduct Professional Briefings",
      description: "Deliver engaging and informative dive briefings to groups",
    },
    {
      icon: ShieldCheck,
      title: "Emergency Response & Rescue",
      description: "Handle underwater emergencies with confidence and skill",
    },
    {
      icon: Globe,
      title: "Work Worldwide",
      description: "Your certification is recognized at PADI centers in 180+ countries",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What You'll <span className="text-primary">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Graduate with the skills and confidence to work as a diving professional anywhere in the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
