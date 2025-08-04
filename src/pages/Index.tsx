import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/EnrollmentForm"; // ⬅️ import the form

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
      <Hero onEnroll={handleEnroll} /> {/* 👈 pass the function as prop */}
      <About />
      <Courses onEnroll={handleEnroll} /> {/* 👈 same here */}
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
