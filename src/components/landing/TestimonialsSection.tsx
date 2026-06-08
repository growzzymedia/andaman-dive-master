import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Divemaster at Maldives Resort",
      before: "IT Professional, Bangalore",
      quote: "Best decision of my life. I went from coding in a cubicle to diving in the Maldives. The training was intense but the placement support was incredible.",
      rating: 5,
    },
    {
      name: "Priya Menon",
      role: "Dive Instructor, Thailand",
      before: "Marketing Executive, Mumbai",
      quote: "The Zero to Hero program changed everything. Within 2 months of completing my Divemaster, I was working in Koh Tao. Now I'm an instructor!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Divemaster, Andaman Islands",
      before: "Fresh Graduate, Delhi",
      quote: "I came here right after college not knowing what to do with my life. Now I have a career I love, in paradise. The instructors here are world-class.",
      rating: 5,
    },
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from people who took the leap
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/20 mb-2" />
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>

              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center font-display font-bold text-primary">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-success font-medium">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">Before: {testimonial.before}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
