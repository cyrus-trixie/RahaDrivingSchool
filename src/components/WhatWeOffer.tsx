// components/WhatWeOffer.tsx
import { motion } from "framer-motion";
import practicalsImage from "@/assets/images/4.jpg";
import theoryImage from "@/assets/images/18.jpg";
import pdlImage from "@/assets/images/19.jpg";
import modelTownBoardImage from "@/assets/images/23.jpg";
import { Car, BookOpen, FileText, Map } from "lucide-react";

const ServiceCard = ({ icon, title, description, imageSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-[#2E2E2E] p-6 rounded-xl shadow-xl text-center hover:shadow-2xl transition-shadow"
  >
    <div className="relative mb-4 overflow-hidden rounded-lg">
      <img
        src={imageSrc}
        alt={`Image for ${title}`}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-3 bg-[#00FF84]/10 rounded-full mb-4 inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
      {title}
    </h3>
    <p className="text-[#BBBBBB] text-sm">{description}</p>
  </motion.div>
);

const WhatWeOffer = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6 text-[#00FF84]" />,
      title: "DRIVING PRACTICALS",
      description:
        "Our hands-on practical driving sessions are designed to build your confidence and skills on the road with our trained instructors and modern fleet.",
      imageSrc: practicalsImage,
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#00FF84]" />,
      title: "DRIVING THEORY",
      description:
        "We provide in-depth theory sessions to help you master traffic rules, road signs, and safe driving principles before you get behind the wheel.",
      imageSrc: theoryImage,
    },
    {
      icon: <FileText className="w-6 h-6 text-[#00FF84]" />,
      title: "P.DL (PROVISIONAL DRIVING LICENSE)",
      description:
        "We assist you through the process of applying for your Provisional Driving License (P.DL), the first step to becoming a licensed driver.",
      imageSrc: pdlImage,
    },
    {
      icon: <Map className="w-6 h-6 text-[#00FF84]" />,
      title: "THEORY TRAINING MODEL TOWN BOARD",
      description:
        "Our comprehensive model town board training helps you visualize and practice complex road rules and scenarios in a controlled environment.",
      imageSrc: modelTownBoardImage,
    },
  ];

  return (
    <section id="what-we-offer" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F5F5F5] mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-[#BBBBBB] max-w-2xl mx-auto">
            At RAHA Driving School, we offer a complete learning package to make you a confident and skilled driver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
