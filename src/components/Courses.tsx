// app/(main)/courses/page.tsx or wherever you're calling it
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
import manualCarImage from "@/assets/raha2.webp";
import automaticCarImage from "@/assets/raha4.webp";
import proCarImage from "@/assets/pro-car.jpg";

const Courses = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    {
      id: "full-course",
      title: "Full Course (Manual)",
      price: "KSh 13,500",
      duration: "4 weeks",
      image: manualCarImage,
      category: "Beginner Driver",
      features: [
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
      title: "Refresher Course",
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
    {
      id: "b-a2-course",
      title: "Vehicle & Motorcycle (B/A2)",
      price: "KSh 7,000",
      duration: "3 weeks",
      image: proCarImage,
      category: "Class B & A2 License",
      features: [
        "PDL & Test Booking Included",
        "Get both Car & Motorcycle license",
        "NTSA-Approved Curriculum",
        "Expert Instructors for both",
        "Safety First Approach",
        "Affordable & Quick Path to Licensing"
      ]
    }
  ];

  const handleEnroll = (courseId: string) => {
    setSelectedCourse(courseId);
    setEnrollmentOpen(true);
  };

  return (
    <section id="courses" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Courses & Fees
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your course based on car type and training level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-lg overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {course.category}
                  </div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.duration}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {course.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full hover:scale-105 transition-transform duration-200"
                    onClick={() => handleEnroll(course.id)}
                  >
                    Enroll Now
                  </Button>
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
