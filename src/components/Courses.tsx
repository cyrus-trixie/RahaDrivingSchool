import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";
import manualCarImage from "@/assets/raha2.webp";
import automaticCarImage from "@/assets/raha4.webp";
import proCarImage from "@/assets/pro-car.jpg";

const Courses = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    {
      id: "manual",
      title: "Manual Transmission",
      price: "KSh 25,000",
      duration: "4 weeks", 
      image: manualCarImage,
      category: "Standard Cars",
      features: [
        "20 practical lessons",
        "Highway driving",
        "Parking skills",
        "Theory classes",
        "Free retake",
        "Pay in installments"
      ]
    },
    {
      id: "automatic",
      title: "Automatic Transmission", 
      price: "KSh 30,000",
      duration: "3 weeks",
      image: automaticCarImage,
      category: "Modern Cars",
      features: [
        "15 practical lessons",
        "City & highway driving",
        "Modern vehicles",
        "Theory classes",
        "Free retake",
        "Pay in installments"
      ]
    },
    {
      id: "pro",
      title: "Pro Driver Course",
      price: "KSh 45,000", 
      duration: "6 weeks",
      image: proCarImage,
      category: "Premium Vehicles",
      features: [
        "30 practical lessons",
        "Defensive driving",
        "Night training",
        "Advanced skills",
        "Commercial basics",
        "Pay in installments"
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
                      <li key={featureIndex} className="flex items-center text-sm">
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