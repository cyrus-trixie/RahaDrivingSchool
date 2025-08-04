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
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Training Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See our state-of-the-art facilities and dedicated instructors in action. We are committed to providing a hands-on learning experience for every student.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;