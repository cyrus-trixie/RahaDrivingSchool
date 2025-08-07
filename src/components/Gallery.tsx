// components/Gallery.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Image imports
import carsImage from "@/assets/car2.jpg";
import parallelParking from "@/assets/raha1.webp";
import highwayDriving from "@/assets/car1.jpg";
import nightDriving from "@/assets/car.jpg";
import image20 from "@/assets/images/5.jpg";
import image23 from "@/assets/images/30.jpg";
import image24 from "@/assets/images/32.jpg";
import image25 from "@/assets/images/25.jpg";
import image26 from "@/assets/images/26.jpg";
import image27 from "@/assets/images/27.jpg";
import image28 from "@/assets/images/28.jpg";
import image29 from "@/assets/images/29.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: parallelParking, alt: "Parallel parking practice" },
    { src: highwayDriving, alt: "Highway driving lessons" },
    { src: nightDriving, alt: "Night driving practice" },
    { src: carsImage, alt: "Modern vehicle fleet" },
    { src: image20, alt: "A driving instructor demonstrating a concept on a blackboard to a group of students in a classroom setting." },
    { src: image23, alt: "A driving student practicing reversing maneuvers in a controlled environment." },
    { src: image24, alt: "A student learning to check their mirrors and blind spots during a lesson." },
    { src: image25, alt: "An instructor giving one-on-one feedback to a student using a whiteboard." },
    { src: image26, alt: "A close-up of a student's hands on the steering wheel, learning proper grip." },
    { src: image27, alt: "A student and instructor discussing a model town board to understand traffic rules." },
    { src: image28, alt: "A view of the driving school's classroom with students engaged in a theory lesson." },
    { src: image29, alt: "A wide shot of a driving student and instructor practicing maneuvers in a spacious training area." },
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-[#BBBBBB] max-w-2xl mx-auto">
            See our modern fleet of training vehicles that are meticulously maintained for your safety and comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer border border-[#2E2E2E] hover:border-[#00FF84]"
              onClick={() => handleImageClick(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#BBBBBB] transition"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery image"
            className="max-w-full max-h-full rounded-xl shadow-2xl border-4 border-[#00FF84]"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
