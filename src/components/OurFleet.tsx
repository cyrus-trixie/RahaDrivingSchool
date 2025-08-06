// components/OurFleet.tsx
import { motion } from "framer-motion";
import studentsImage from "@/assets/raha.webp"; // Example: A branded car image
import car1Image from "@/assets/car1.jpg";     // Example: Another car image
import car2Image from "@/assets/car2.jpg";     // Example: Another car image
import carImage from "@/assets/car.jpg";       // Example: Another car image
import raha1Image from "@/assets/raha1.webp";   // Example: Another branded car image

const OurFleet = () => {
  // Define the images for your fleet.
  // Replace these with your actual car images for the best representation.
  const fleetImages = [
    {
      src: studentsImage,
      alt: "RAHA Driving School branded pickup truck, clean and ready for lessons.",
      title: "Branded Pickup Truck"
    },
    {
      src: raha1Image,
      alt: "RAHA Driving School branded compact car, perfect for city driving.",
      title: "Branded Compact Car"
    },
    {
      src: car1Image,
      alt: "Modern sedan from our fleet, comfortable for new drivers.",
      title: "Modern Sedan"
    },
    {
      src: car2Image,
      alt: "Another reliable vehicle in our diverse driving school fleet.",
      title: "Reliable Fleet Vehicle"
    },
    {
      src: carImage,
      alt: "Driving school car parked, ready for the next practical lesson.",
      title: "Ready for Lessons"
    }
  ];

  return (
    <section id="our-fleet" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our diverse and meticulously maintained fleet of modern vehicles. Each car is equipped with dual controls and is regularly serviced to ensure your safety and provide the optimal learning environment.
          </p>
        </motion.div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetImages.map((image, index) => (
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
              {/* Overlay with title on hover */}
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

export default OurFleet;
