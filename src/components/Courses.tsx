// app/(main)/courses/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";

// Images
// Ensure these paths are correct for your project
import manualCarImage from "@/assets/raha2.webp";
import automaticCarImage from "@/assets/raha1.webp";

const Courses = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    {
      id: "full-course",
      title: "Full Course (Manual)",
      price: "KSh 13,500",
      originalPrice: "KSh 17,000",
      duration: "4 weeks",
      image: manualCarImage,
      category: "Beginner Driver",
      features: [
        "🔥 August Time Offer",
        "PDL & Test Booking Included",
        "Comprehensive Practical Lessons",
        "Highway & Town Driving",
        "In-depth Theory Classes",
        "Flexible Payment Plan",
        "Certified Instructors"
      ]
    },
    {
      id: "refresher-course",
      title: "Short Course",
      price: "KSh 10,000",
      duration: "1-2 weeks",
      image: automaticCarImage,
      category: "Experienced Drivers",
      features: [
        "PDL & Test Booking Included",
        "Ideal for licensed drivers",
        "Customized refresher lessons",
        "Build confidence on the road",
        "Flexible Scheduling",
        "Manual & Automatic available"
      ]
    },
  ];

  const handleEnroll = (courseId: string) => {
    setSelectedCourse(courseId);
    setEnrollmentOpen(true);
  };

  return (
    <section id="courses" className="py-16 bg-muted/30 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Courses & Fees
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose your course based on your needs and training level.
          </p>
        </motion.div>

        {/* Grid for the course cards */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              // Apply max-width and auto margins to reduce card size and center it within its grid column
              className="max-w-lg mx-auto w-full"
            >
              <Card className="shadow-lg overflow-hidden h-full dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 flex flex-col">
                <div className="aspect-video relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {course.category}
                  </div>
                </div>
                <CardHeader className="text-center pb-2 flex-shrink-0">
                  <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400 font-semibold mt-1">
                    {course.duration}
                  </CardDescription>
                  <div className="mt-4">
                    {course.originalPrice && (
                      <div className="text-sm text-gray-400 dark:text-gray-500 line-through">
                        {course.originalPrice}
                      </div>
                    )}
                    <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                      {course.price}
                    </div>
                    {/* Display the deposit option */}
                    <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Or pay KSh 5,000 deposit
                    </p>
                  </div>
                </CardHeader>
                {/* Ensure the button is visible by managing flex-grow */}
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-3 mb-6"> {/* Removed flex-grow from here */}
                    {course.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-base text-gray-700 dark:text-gray-300"
                      >
                        <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* mt-auto pushes the button to the bottom */}
                  <div className="mt-auto">
                    <Button
                      className="w-full hover:scale-105 transition-transform duration-200 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                      onClick={() => handleEnroll(course.id)}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <EnrollmentForm
          isOpen={enrollmentOpen}
          onClose={() => setEnrollmentOpen(false)}
          selectedCourse={selectedCourse}
        />
      </div>
    </section>
  );
};

export default Courses;
