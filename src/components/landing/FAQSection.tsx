import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the prerequisites for the Divemaster course?",
      answer: "You need to be at least 18 years old, a certified PADI Advanced Open Water Diver, have completed PADI Rescue Diver certification, and have at least 40 logged dives. If you're new to diving, our Zero to Hero program covers all prerequisites.",
    },
    {
      question: "Do I need to own my own diving equipment?",
      answer: "No, all equipment is included in your training package. However, many students choose to invest in their own mask, fins, and wetsuit for comfort. We can help you purchase equipment at discounted rates.",
    },
    {
      question: "Is accommodation included in the course fee?",
      answer: "Accommodation is not included in the base fee, but we have partnerships with local guesthouses offering special rates for our students (₹500-1500/night). We'll help you find the perfect stay.",
    },
    {
      question: "What is the typical daily schedule during training?",
      answer: "Training typically runs 6 days a week. Mornings start with dive sessions (6:30 AM - 12 PM), followed by lunch break, then theory classes and practical workshops in the afternoon (2 PM - 5 PM).",
    },
    {
      question: "Can I work internationally with this certification?",
      answer: "Yes! PADI is the world's largest diving organization with over 6,600 dive centers in 180+ countries. Your Divemaster certification is internationally recognized and allows you to work anywhere in the world.",
    },
    {
      question: "What if I fail a component of the course?",
      answer: "We have a 98% pass rate, but if you need extra time on any skill, we provide additional training at no extra cost. Our goal is your success, and we'll work with you until you're confident.",
    },
    {
      question: "How soon can I start working after certification?",
      answer: "95% of our graduates are placed within 30 days of certification. We actively connect you with our partner dive centers and help with resume building and interview preparation.",
    },
    {
      question: "What's the best time to do the course in Andaman?",
      answer: "The best diving conditions are from October to May. Monsoon season (June-September) has limited visibility. We recommend booking 2-3 months in advance for peak season batches.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before starting your journey
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
