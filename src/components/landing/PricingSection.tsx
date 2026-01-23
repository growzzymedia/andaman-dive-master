import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "One-Time Payment",
      total: "₹2,00,000",
      structure: "Pay 2 weeks before start",
      popular: false,
      savings: "Best Value",
    },
    {
      name: "2 Months Plan",
      total: "₹2,20,000",
      structure: "₹1,10,000 × 2 installments",
      popular: true,
      savings: null,
    },
    {
      name: "3 Months Plan",
      total: "₹2,40,000",
      structure: "₹80,000 × 3 installments",
      popular: false,
      savings: null,
    },
    {
      name: "6 Months Plan",
      total: "₹2,70,000",
      structure: "₹45,000 × 6 installments",
      popular: false,
      savings: "Most Flexible",
    },
  ];

  const included = [
    "All PADI course materials & certifications",
    "Equipment rental throughout training",
    "60+ logged dives",
    "Career placement assistance",
    "Instructor mentorship",
    "Accommodation referrals",
  ];

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Investment in Your <span className="text-primary">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible payment options to make your dream career accessible
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular ? "border-accent shadow-lg scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" /> Most Popular
                </div>
              )}
              {plan.savings && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-success text-success-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.savings}
                </div>
              )}
              
              <h3 className="font-display text-lg font-bold text-foreground mb-2 mt-2">{plan.name}</h3>
              <p className="font-display text-3xl font-bold text-primary mb-2">{plan.total}</p>
              <p className="text-sm text-muted-foreground mb-4">{plan.structure}</p>
              
              <Button 
                onClick={scrollToForm}
                className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"}`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="bg-muted rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            What's Included in Every Package
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-success-foreground" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            All prices + 18% GST | Zero to Hero Package: ₹2,36,000 (incl. GST)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
