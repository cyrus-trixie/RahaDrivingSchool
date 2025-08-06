// components/About.tsx
import { motion } from "framer-motion";
import studentsImage from "@/assets/raha.webp";
import { CheckCircle, Shield, Car, DollarSign } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md flex flex-col items-start text-left sm:items-center sm:text-center"
  >
    <div className="p-2 bg-primary/10 rounded-full mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
  </motion.div>
);

const About = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Trained Instructors",
      description: "Our team consists of highly trained and experienced instructors.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Licensed & Insured",
      description: "We are a fully licensed and insured driving school.",
    },
    {
      icon: <Car className="w-6 h-6 text-primary" />,
      title: "Modern Vehicles",
      description: "Learn on modern and safe vehicles with dual controls.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Friendly Costs",
      description: "We offer affordable rates without compromising on quality.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Image + Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Who is RAHA Driving School?
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              RAHA Driving School was incorporated under the Companies Act (CAP 480) in Nairobi, Kenya. We aim to be a reputable, sustainable, and desirable driving school, providing a rewarding experience and high-quality, professional driving skills to our students.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Integrity", "Honesty", "Trust", "Quality"].map((value, idx) => (
                <span key={idx} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src={studentsImage}
              alt="Driving students with instructor"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Choose Us?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
