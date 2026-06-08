import { Star, Quote } from "lucide-react";
import harshPhoto from "@/assets/testimonial-harsh.png.asset.json";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Harsh Vardhan Singh",
      role: "Discover Scuba Diver",
      quote:
        "I honestly had tears in my eyes while I was underwater, that is how beautiful this experience was. A massive thank you to Utshab and Atul, who were incredibly professional and friendly. Unlike other places where they brief a swarm of people at once, I got a 1:1 ratio with the instructor. I felt completely safe, the equipment was top-notch, and I was actually comfortable enough to enjoy the surreal marine life. I went from being disappointed in diving to now planning my Open Water Course. If you want a real experience and not just a quick dip, definitely come to ScubaDiveIN!",
      rating: 5,
      image: harshPhoto.url,
    },
    {
      name: "Harwinder Singh",
      role: "Verified Google Reviewer",
      quote:
        "I recently went scuba diving with Scuba Dive In, and it was an unforgettable experience! The instructors were knowledgeable, patient, and ensured our safety throughout. The dive sites were breathtaking, with crystal-clear waters and an incredible array of marine life. I spotted hump head parrot fish which was rare, and many corals! The equipment was well-maintained, and the briefing was thorough. Highly recommend Scuba Dive In for a fun and safe scuba diving experience!",
      rating: 5,
      image: null,
    },
    {
      name: "Mayank Yadav",
      role: "First-time Diver",
      quote:
        "Just got back from an unforgettable dive with @Scubadivein and I'm still buzzing! The crew was super friendly, the gear was top-notch, and the underwater world was straight out of a documentary. Saw vibrant coral gardens and a school of neon fish. Every safety check was thorough, and the instructor's calm vibe made me feel totally at ease even as a first-timer. Highly recommend for anyone looking to explore the Andaman's marine magic!",
      rating: 5,
      image: null,
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
            Real reviews from real divers, straight from Google
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/20 mb-2" />
              <p className="text-foreground mb-6 italic flex-1">"{testimonial.quote}"</p>

              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center font-display font-bold text-primary flex-shrink-0">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <div>
                    <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-success font-medium">{testimonial.role}</p>
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
