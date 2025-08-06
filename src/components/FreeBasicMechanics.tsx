// components/FreeBasicMechanics.tsx
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

// Placeholder images for the mechanic section from the PDF.
// Replace these with your actual images for the best representation.
import mechanicImage1 from "@/assets/images/33.jpg"; // Corresponds to [Image 11] on page 8 or similar on page 11
import mechanicImage2 from "@/assets/images/34.jpg"; // Corresponds to [Image 12] on page 8 or similar on page 11
import mechanicImage3 from "@/assets/images/35.jpg"; // Another relevant image for mechanics

const FreeBasicMechanics = () => {
  const mechanicImages = [
    {
      src: mechanicImage1,
      alt: "A mechanic working on a car engine, demonstrating basic maintenance.",
      caption: "Hands-on Engine Basics"
    },
    {
      src: mechanicImage2,
      alt: "An instructor explaining car components to a student during a mechanic session.",
      caption: "Understanding Your Vehicle"
    },
    {
      src: mechanicImage3,
      alt: "Tools and parts laid out for a basic car maintenance lesson.",
      caption: "Essential Tools & Parts"
    },
  ];

  return (
    <section id="free-basic-mechanics" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Free Basic Mechanic Training
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            As part of our commitment to producing well-rounded drivers, we offer **free basic mechanic training**. This essential knowledge empowers you to understand your vehicle, perform simple checks, and handle minor issues on the road.
          </p>
        </motion.div>
        
        {/* Images and Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mechanicImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Add more text or a call to action if needed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn practical skills that go beyond just driving, ensuring you're confident and prepared for anything on the road.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeBasicMechanics;
