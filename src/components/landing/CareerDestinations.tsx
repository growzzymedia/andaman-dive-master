import destMaldives from "@/assets/dest-maldives.jpg";
import destThailand from "@/assets/dest-thailand.jpg";
import destIndonesia from "@/assets/dest-indonesia.jpg";
import destEgypt from "@/assets/dest-egypt.jpg";
import destAustralia from "@/assets/dest-australia.jpg";
import destMexico from "@/assets/dest-mexico.jpg";

const CareerDestinations = () => {
  const destinations = [
    { country: "Maldives", flag: "🇲🇻", description: "Luxury resort diving", image: destMaldives },
    { country: "Thailand", flag: "🇹🇭", description: "Koh Tao, Phuket", image: destThailand },
    { country: "Indonesia", flag: "🇮🇩", description: "Bali, Komodo", image: destIndonesia },
    { country: "Egypt", flag: "🇪🇬", description: "Red Sea diving", image: destEgypt },
    { country: "Australia", flag: "🇦🇺", description: "Great Barrier Reef", image: destAustralia },
    { country: "Mexico", flag: "🇲🇽", description: "Cenotes, Cozumel", image: destMexico },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Where Our Divemasters <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your PADI Divemaster certification opens doors to diving destinations worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-10">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Background image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={`Diving in ${dest.country}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-2xl mb-1 block">{dest.flag}</span>
                <h3 className="font-display text-sm font-bold text-white mb-0.5">{dest.country}</h3>
                <p className="text-xs text-white/80">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placement guarantee */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center text-primary-foreground">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            95% of our students get placed within 30 days
          </h3>
          <p className="text-lg opacity-90 mb-6">
            We don't just train you, we help launch your career with resume building, interview prep, and direct connections to partner dive centers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Resume Building</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Interview Preparation</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Partner Connections</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Ongoing Career Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDestinations;
