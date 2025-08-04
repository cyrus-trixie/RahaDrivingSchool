import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-driving-lesson.jpg";
import ntsaLogo from "@/assets/ntsa-approved (2).png";
import { Award } from "lucide-react";

interface HeroProps {
  onEnroll: (courseId?: string) => void;
}

const Hero = ({ onEnroll }: HeroProps) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]"
      >
        {/* NTSA Approval Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <img src={ntsaLogo} alt="NTSA Approved" className="w-18 h-8" />
            <span className="text-sm font-medium">NTSA Approved</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Licensed Instructors</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Learn to Drive with Confidence
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Professional driving instruction with certified instructors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
            onClick={() => onEnroll()} // 👈 This triggers the popup form
          >
            Enroll Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
