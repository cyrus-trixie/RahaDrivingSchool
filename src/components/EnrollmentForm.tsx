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

const coursePrices: { [key: string]: number } = {
  "full-course": 13500,
  "short-course": 10000,
  "class-a": 8200,
  "class-b": 13700,
  "class-c": 15700,
  "class-bc": 19200,
};

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

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
      setPrice(coursePrices[selectedCourse] || 0);
    } else {
      setFormData((prev) => ({ ...prev, course: "" }));
      setPrice(0);
    }
  }, [selectedCourse]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "course") {
      setPrice(coursePrices[value] || 0);
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
                <SelectItem value="thika">Thika Branch - Wabere St.</SelectItem>
                <SelectItem value="nakuru-main">Nakuru Main - Pioneer Plaza</SelectItem>
                <SelectItem value="nakuru-branch">Nakuru Branch - Olive Inn</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course */}
          <div className="grid gap-1.5 col-span-1">
            <Label>Course</Label>
            <Select value={formData.course} onValueChange={(val) => handleChange("course", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-course">Full Course (Manual)</SelectItem>
                <SelectItem value="short-course">Short Course</SelectItem>
                <SelectItem value="class-a">Class A - Motorbike</SelectItem>
                <SelectItem value="class-b">Class B - Saloon Car</SelectItem>
                <SelectItem value="class-c">Class C - Lorry</SelectItem>
                <SelectItem value="class-bc">Class B & C Combined</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* License Category */}
          <div className="grid gap-1.5 col-span-1">
            <Label>License Class</Label>
            <Select value={formData.licenseClass} onValueChange={(val) => handleChange("licenseClass", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select license class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">Class A - Motorbike</SelectItem>
                <SelectItem value="B1-automatic">B1 - Automatic Car</SelectItem>
                <SelectItem value="B2-manual">B2 - Manual Car</SelectItem>
                <SelectItem value="C">Class C - Heavy Vehicles</SelectItem>
              </SelectContent>
            </Select>
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
