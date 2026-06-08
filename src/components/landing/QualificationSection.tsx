import { Check, X } from "lucide-react";

const QualificationSection = () => {
  const forYou = [
    "You want a career that lets you travel the world",
    "You're ready to commit 6-10 weeks of intensive training",
    "You're at least 18 years old and physically fit",
    "You dream of working in Maldives, India, Thailand, Bali and many more",
  ];

  const notForYou = [
    "You're looking for a weekend hobby course",
    "You just want a quick diving experience",
    "You're not ready for full-time commitment",
    "You're unwilling to relocate for career opportunities",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Is This <span className="text-primary">For You?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Divemaster course is a serious professional commitment. Make sure you're ready for the journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* This is for you */}
          <div className="bg-success/5 border-2 border-success/20 rounded-2xl p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-success mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
                <Check className="w-5 h-5 text-success-foreground" />
              </div>
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-destructive mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                <X className="w-5 h-5 text-destructive-foreground" />
              </div>
              This is NOT for you if...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
