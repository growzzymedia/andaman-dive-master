const CareerDestinations = () => {
  const destinations = [
    { country: "Maldives", flag: "🇲🇻", description: "Luxury resort diving" },
    { country: "Thailand", flag: "🇹🇭", description: "Koh Tao, Phuket" },
    { country: "Indonesia", flag: "🇮🇩", description: "Bali, Komodo" },
    { country: "Egypt", flag: "🇪🇬", description: "Red Sea diving" },
    { country: "Australia", flag: "🇦🇺", description: "Great Barrier Reef" },
    { country: "Mexico", flag: "🇲🇽", description: "Cenotes, Cozumel" },
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
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <span className="text-5xl mb-3 block group-hover:scale-110 transition-transform">{dest.flag}</span>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{dest.country}</h3>
              <p className="text-sm text-muted-foreground">{dest.description}</p>
            </div>
          ))}
        </div>

        {/* Placement guarantee */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center text-primary-foreground">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            95% of our students get placed within 30 days
          </h3>
          <p className="text-lg opacity-90 mb-6">
            We don't just train you—we help launch your career with resume building, interview prep, and direct connections to partner dive centers worldwide.
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
