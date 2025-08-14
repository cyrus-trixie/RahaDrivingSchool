"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Assuming EnrollmentForm and images are available at these paths
import EnrollmentForm from "./EnrollmentForm";
import manualCarImage from "@/assets/raha2.webp";
import motobikeImage from "@/assets/images/moto.jpg";
import automaticCarImage from "@/assets/raha1.webp";
import lorryImage from "@/assets/images/lorry.png";

const Courses = () => {
  // State to manage the active branch, enrollment form visibility, and selected course
  const [branch, setBranch] = useState<"nakuru-main" | "thika" | "kiamunyi">("nakuru-main");
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // Data for all courses, organized by branch
  const coursesData = {
    "nakuru-main": [
      {
        id: "full-course-b",
        title: "Full Course B category",
        license_class: "B, B1, B2, B3",
        price: "KSh 13,000",
        tuition: 10500,
        pdl: 650,
        testBooking: 1050,
        interim: 800,
        deposit: 5000,
        duration: "4 weeks",
        image: manualCarImage,
        category: "Nakuru Town Main Branch",
        features: [
          "PDL & Test Booking Included",
          "20 Practical Lessons",
          "20 Theory Lessons",
          "Highway & Town Driving",
          "In-depth Theory Classes",
          "Flexible Payment Plan",
          "Certified Instructors",
        ],
      },
      {
        id: "refresher-course",
        title: "Short Course",
        license_class: "B",
        price: "KSh 10,000",
        tuition: 8300,
        pdl: 650,
        testBooking: 1050,
        interim: 0,
        deposit: 5000,
        duration: "1-2 weeks",
        image: automaticCarImage,
        category: "Nakuru Town Main Branch",
        features: [
          "PDL & Test Booking Included",
          "Ideal for licensed drivers",
          "Customized refresher lessons",
          "Build confidence on the road",
          "Flexible Scheduling",
          "Manual & Automatic available",
        ],
      },
    ],
    "thika": [
      {
        id: "class-a",
        title: "Class A: Motorbike & Tuk Tuk",
        license_class: "A",
        price: "KSh 8,200",
        tuition: 6500,
        pdl: 650,
        testBooking: 1050,
        interim: 0,
        deposit: 5000,
        duration: "Custom Duration",
        image: motobikeImage,
        category: "Thika Branch",
        features: [
          "Covers A1, A2, A3 Licenses",
          "PDL & Test Booking Included",
          "Practical Motorbike Lessons",
          "Certified Instructors",
        ],
      },
      {
        id: "class-b",
        title: "Class B: Saloon Car (Manual & Auto)",
        license_class: "B",
        price: "KSh 12,700",
        tuition: 11000,
        pdl: 650,
        testBooking: 1050,
        interim: 0,
        deposit: 5000,
        duration: "Custom Duration",
        image: manualCarImage,
        category: "Thika Branch",
        features: [
          "Covers B1, B2, B3 Licenses",
          "PDL & Test Booking Included",
          "Comprehensive Car Lessons",
        ],
      },
      {
        id: "class-c",
        title: "Class C: Lorry",
        license_class: "C",
        price: "KSh 15,700",
        tuition: 14000,
        pdl: 650,
        testBooking: 1050,
        interim: 0,
        deposit: 5000,
        duration: "Custom Duration",
        image: lorryImage,
        category: "Thika Branch",
        features: [
          "Covers C1, CE, CD Licenses",
          "PDL & Test Booking Included",
          "Hands-on Heavy Vehicle Lessons",
        ],
      },
      {
        id: "class-bc",
        title: "Class B & C Combined",
        license_class: "B + C",
        price: "KSh 19,200",
        tuition: 17500,
        pdl: 650,
        testBooking: 1050,
        interim: 0,
        deposit: 5000,
        duration: "Custom Duration",
        image: automaticCarImage,
        category: "Thika Branch",
        features: [
          "Comprehensive Package for Both B & C",
          "PDL & Test Booking Included",
        ],
      },
    ],
    "kiamunyi": [
      // Only one course is now available for the Kiamunyi branch as requested
      {
        id: "kiamunyi-category-b",
        title: "Category B, B1, B2, B3",
        license_class: "B, B1, B2, B3",
        price: "KSh 15,000",
        tuition: 13300,
        pdl: 650,
        testBooking: 1050,
        interim: 0,
        deposit: 5000,
        duration: "Custom Duration",
        image: manualCarImage, // Using a manual car image for the driving course
        category: "Kiamunyi Branch",
        features: [
          "PDL: KSh 650",
          "Test Booking: KSh 1,050",
          "Tuition Fee: KSh 13,300",
          "Comprehensive Training for B, B1, B2, B3",
          "Flexible Payment Plan",
          "Certified Instructors",
        ],
      },
    ],
  };

  const courses = coursesData[branch];

  const handleEnroll = (courseId: string) => {
    setSelectedCourse(courseId);
    setEnrollmentOpen(true);
  };

  return (
    <section id="courses" className="py-16 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Courses & Fees
          </h2>
          <p className="text-lg text-[#BBBBBB] max-w-2xl mx-auto">
            Choose your branch and course based on your needs and training level.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 space-x-4 flex-wrap">
          <Button
            className={`${
              branch === "nakuru-main"
                ? "bg-[#00FF84] text-black"
                : "bg-[#2E2E2E] text-[#BBBBBB]"
            } px-4 py-2 rounded-lg m-2`}
            onClick={() => setBranch("nakuru-main")}
          >
            Nakuru Town Main Branch
          </Button>
          <Button
            className={`${
              branch === "thika"
                ? "bg-[#00FF84] text-black"
                : "bg-[#2E2E2E] text-[#BBBBBB]"
            } px-4 py-2 rounded-lg m-2`}
            onClick={() => setBranch("thika")}
          >
            Thika Branch
          </Button>
          <Button
            className={`${
              branch === "kiamunyi"
                ? "bg-[#00FF84] text-black"
                : "bg-[#2E2E2E] text-[#BBBBBB]"
            } px-4 py-2 rounded-lg m-2`}
            onClick={() => setBranch("kiamunyi")}
          >
            Kiamunyi Branch
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course, index) => {
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="max-w-lg mx-auto w-full"
              >
                <Card className="shadow-lg overflow-hidden h-full bg-[#2E2E2E] border-2 border-transparent hover:border-[#00FF84] flex flex-col justify-between">
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[#00FF84] text-black px-2 py-1 rounded text-xs font-medium">
                      {course.category}
                    </div>
                  </div>
                  <CardHeader className="text-center pb-2 flex-shrink-0">
                    <CardTitle className="text-3xl font-extrabold text-[#F5F5F5]">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-[#BBBBBB] font-semibold mt-1">
                      {course.duration}
                    </CardDescription>
                    <div className="mt-4 text-left space-y-1">
                      <p className="text-sm font-medium text-[#BBBBBB]">
                        Tuition Fee: <span className="font-bold text-[#F5F5F5]">KSh {course.tuition.toLocaleString()}</span>
                      </p>
                      <p className="text-sm font-medium text-[#BBBBBB]">
                        NTSA Fees
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-0.5 text-xs text-[#888888]">
                        <li>PDL: KSh {course.pdl.toLocaleString()}</li>
                        <li>Test Booking: KSh {course.testBooking.toLocaleString()}</li>
                        {course.interim > 0 && (
                          <li>Interim: KSh {course.interim.toLocaleString()}</li>
                        )}
                      </ul>
                      {course.originalPrice && (
                        <div className="text-sm text-[#666666] line-through">
                          {course.originalPrice}
                        </div>
                      )}
                      <div className="text-4xl font-black text-[#00FF84]">
                        {course.price}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-[#BBBBBB]">
                        License Class: {course.license_class}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <ul className="space-y-3 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-base text-[#BBBBBB]"
                        >
                          <Check className="w-5 h-5 text-[#00FF84] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                        <p className="text-sm font-medium text-[#BBBBBB] text-center mb-2">
                          Deposit: <span className="font-bold text-[#F5F5F5]">KSh {course.deposit.toLocaleString()}</span>
                        </p>
                      <Button
                        className="w-full hover:scale-105 transition-transform duration-200 bg-[#00FF84] hover:bg-[#00e876] text-black"
                        onClick={() => handleEnroll(course.id)}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
