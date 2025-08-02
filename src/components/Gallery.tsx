import { motion } from "framer-motion";
import classroomImage from "@/assets/classroom-session.jpg";
import carsImage from "@/assets/car2.jpg";
import instructorTeaching from "@/assets/table.jpg";
import parallelParking from "@/assets/raha1.webp";
import highwayDriving from "@/assets/car1.jpg";
import nightDriving from "@/assets/car.jpg";

const Gallery = () => {
  const images = [
    {
      src: instructorTeaching,
      alt: "Professional driving instruction",
      title: "Expert Instructors"
    },
    {
      src: parallelParking,
      alt: "Parallel parking practice",
      title: "Parking Skills"
    },
    {
      src: highwayDriving,
      alt: "Highway driving lessons",
      title: "Highway Training"
    },
    {
      src: nightDriving,
      alt: "Night driving practice",
      title: "Night Lessons"
    },
    {
      src: classroomImage,
      alt: "Theory classes",
      title: "Theory Sessions"
    },
    {
      src: carsImage,
      alt: "Modern vehicle fleet",
      title: "Modern Fleet"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Training Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            See our modern facilities and training in action
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;