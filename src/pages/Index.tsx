// pages/index.tsx
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeOffer from "@/components/WhatWeOffer";
import FreeBasicMechanics from "@/components/FreeBasicMechanics";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/EnrollmentForm";

const Index = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleEnroll = (courseId = "") => {
    setSelectedCourse(courseId);
    setEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onEnroll={handleEnroll} />
      <About />
      <WhatWeOffer />
      <FreeBasicMechanics />
      <Courses onEnroll={handleEnroll} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <EnrollmentForm
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        selectedCourse={selectedCourse}
      />
    </div>
  );
};

export default Index;