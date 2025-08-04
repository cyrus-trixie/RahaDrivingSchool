// components/About.tsx
import { motion } from "framer-motion";
import studentsImage from "@/assets/raha.webp";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              About Our Driving School
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              As an **NTSA-certified** driving school with over 15 years of experience, we're dedicated to
              providing top-tier training. We offer the most affordable rates in town without
              compromising on quality. Our professional instructors provide comprehensive,
              personalized training to help you become a **safe, confident, and skilled driver**.
            </p>
            <div className="flex items-center text-primary font-semibold mb-8">
              <CheckCircle className="w-5 h-5 mr-2" />
              NTSA Certified for Your Peace of Mind
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-primary mb-1"
                >
                  5000+
                </motion.div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Students Trained</div>
              </div>
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-primary mb-1"
                >
                  15+
                </motion.div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Years of Experience</div>
              </div>
              <div className="text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-primary mb-1"
                >
                  98%
                </motion.div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">First-Time Pass Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src={studentsImage} 
              alt="Driving students with instructor" 
              className="rounded-xl shadow-2xl w-full max-w-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;