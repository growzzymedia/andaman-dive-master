import galleryTraining from "@/assets/gallery-training.jpg";
import galleryAndaman from "@/assets/gallery-andaman.jpg";
import galleryUnderwater from "@/assets/gallery-underwater.jpg";
import galleryInstructors from "@/assets/gallery-instructors.jpg";

const ImageGallery = () => {
  const images = [
    {
      src: galleryTraining,
      alt: "Scuba diving training session in crystal clear water",
      title: "Expert Training",
    },
    {
      src: galleryAndaman,
      alt: "Beautiful Havelock Island beach in Andaman",
      title: "Paradise Location",
    },
    {
      src: galleryUnderwater,
      alt: "Colorful coral reef with marine life",
      title: "Stunning Dive Sites",
    },
    {
      src: galleryInstructors,
      alt: "Professional dive instructor team",
      title: "World-Class Instructors",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience the <span className="text-primary">Adventure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Train in one of the world's most beautiful diving destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg font-bold text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
