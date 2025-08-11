import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

// A new, nested data structure to link courses to their respective branches.
const branchCourses: {
  [key: string]: {
    id: string;
    name: string;
    price: number;
    licenseClass: string;
  }[];
} = {
  "nakuru-main": [
    { id: "full-course-b", name: "Nakuru Main: Class B (18 yrs)", price: 13000, licenseClass: "B" },
    { id: "full-course-c1", name: "Nakuru Main: Class C1 (22 yrs)", price: 16000, licenseClass: "C1" },
    { id: "full-course-d1", name: "Nakuru Main: Class D1 (22 yrs)", price: 12000, licenseClass: "D1" },
    { id: "full-course-a2", name: "Nakuru Main: Class A2 (18 yrs)", price: 6000, licenseClass: "A2" },
    { id: "refresher-course", name: "Nakuru Main: Short Course", price: 10000, licenseClass: "B" },
  ],
  "thika": [
    { id: "class-a", name: "Thika: Class A - Motorbike", price: 8200, licenseClass: "A" },
    { id: "class-b", name: "Thika: Class B - Saloon Car", price: 13700, licenseClass: "B" },
    { id: "class-c", name: "Thika: Class C - Lorry", price: 15700, licenseClass: "C" },
    { id: "class-bc", name: "Thika: Class B & C Combined", price: 19200, licenseClass: "B + C" },
  ],
  "kaimunyi": [
    // The previous courses have been removed and replaced with this single entry.
    { id: "kaimunyi-class-b", name: "Kaimunyi: Category B, B1, B2, B3", price: 15000, licenseClass: "B, B1, B2, B3" },
  ],
};

// A helper object to quickly get all course prices for the emailjs service.
const coursePrices = Object.values(branchCourses).reduce((acc, courses) => {
  courses.forEach(course => {
    acc[course.id] = course.price;
  });
  return acc;
}, {} as { [key: string]: number });

const EnrollmentForm = ({ isOpen, onClose, selectedCourse }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: selectedCourse || "",
    preferredTime: "",
    licenseClass: "",
    branch: "",
  });

  const [price, setPrice] = useState(0);
  const [availableCourses, setAvailableCourses] = useState<any[]>([]);

  // Effect to handle initial selection and branch change logic
  useEffect(() => {
    if (selectedCourse) {
      // Find the course's branch and set the form data
      const branchId = Object.keys(branchCourses).find(branchKey => 
        branchCourses[branchKey].some(course => course.id === selectedCourse)
      );

      if (branchId) {
        setFormData((prev) => ({ ...prev, course: selectedCourse, branch: branchId }));
        const courseDetails = branchCourses[branchId].find(c => c.id === selectedCourse);
        setPrice(courseDetails?.price || 0);
        setAvailableCourses(branchCourses[branchId]);
      } else {
        setFormData((prev) => ({ ...prev, course: "", branch: "" }));
        setPrice(0);
        setAvailableCourses([]);
      }
    } else {
      // Reset if no course is pre-selected
      setFormData((prev) => ({ ...prev, course: "", branch: "" }));
      setPrice(0);
      setAvailableCourses([]);
    }
  }, [selectedCourse]);

  const handleChange = (field: string, value: string) => {
    // Special handling for the 'branch' field to reset the course and load new options
    if (field === "branch") {
      setFormData((prev) => ({ ...prev, branch: value, course: "", licenseClass: "" }));
      setAvailableCourses(branchCourses[value] || []);
      setPrice(0);
    } else if (field === "course") {
      // When a course is selected, find its details to set the price and license class
      const selectedCourseDetails = availableCourses.find(c => c.id === value);
      setFormData((prev) => ({ ...prev, course: value, licenseClass: selectedCourseDetails?.licenseClass || "" }));
      setPrice(selectedCourseDetails?.price || 0);
    } else {
      // For all other fields, just update the state
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          preferred_time: formData.preferredTime,
          license_class: formData.licenseClass,
          branch: formData.branch,
          price: price.toLocaleString("en-KE", { style: "currency", currency: "KSh" }),
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      toast.success("You're enrolled! We'll reach out via phone or email.", {
        style: {
          background: "#0f766e",
          color: "#fff",
          border: "1px solid #0d9488",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        },
      });

      onClose();
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        course: "",
        preferredTime: "",
        licenseClass: "",
        branch: "",
      });
      setPrice(0);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-zinc-200 overflow-y-auto max-h-[90vh]"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-700 text-center">
            Enroll in a Course
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-zinc-800">
          {/* Full Name */}
          <div className="grid gap-1.5 col-span-1">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="e.g. John Doe"
              required
            />
          </div>

          {/* Phone */}
          <div className="grid gap-1.5 col-span-1">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="07XXXXXXXX"
              required
            />
          </div>

          {/* Email */}
          <div className="grid gap-1.5 col-span-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Branch */}
          <div className="grid gap-1.5 col-span-1">
            <Label>Branch</Label>
            <Select value={formData.branch} onValueChange={(val) => handleChange("branch", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nakuru-main">Nakuru Main - Pioneer Plaza</SelectItem>
                <SelectItem value="thika">Thika Branch - Wabere St.</SelectItem>
                <SelectItem value="kaimunyi">Kaimunyi Branch - Olive Inn</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course */}
          <div className="grid gap-1.5 col-span-1">
            <Label>Course</Label>
            <Select value={formData.course} onValueChange={(val) => handleChange("course", val)} disabled={!formData.branch}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {availableCourses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* License Category */}
          <div className="grid gap-1.5 col-span-1">
            <Label>License Class</Label>
            <Input
              value={formData.licenseClass}
              onChange={(e) => handleChange("licenseClass", e.target.value)}
              disabled
              placeholder="Auto-filled"
            />
          </div>

          {/* Preferred Time */}
          <div className="grid gap-1.5 col-span-1">
            <Label>Preferred Time</Label>
            <Select value={formData.preferredTime} onValueChange={(val) => handleChange("preferredTime", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose time slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price (Auto shown) */}
          {price > 0 && (
            <div className="col-span-full bg-zinc-100 text-center py-3 rounded">
              <p className="text-zinc-700 font-medium">
                Total Price: <span className="text-blue-700 font-bold">KSh {price.toLocaleString()}</span>
              </p>
            </div>
          )}

          {/* Submit / Cancel Buttons */}
          <div className="col-span-full flex gap-4 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-1/2"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-1/2 bg-blue-700 text-white hover:bg-blue-800"
            >
              Enroll Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;
