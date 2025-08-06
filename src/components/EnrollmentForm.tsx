// components/EnrollmentForm.tsx
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
};

const EnrollmentForm = ({
  isOpen,
  onClose,
  selectedCourse,
}: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: selectedCourse || "",
    preferredTime: "",
    licenseClass: "",
    branch: "", // Added a new field for branch
  });
  const [price, setPrice] = useState(0);

  // Effect to update the form when a new course is pre-selected
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
          branch: formData.branch, // Added the new branch field
          price: price.toLocaleString('en-KE', { style: 'currency', currency: 'KSh' }), // Added the price
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
      <DialogContent className="max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-zinc-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-700">
            Course Enrollment
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 text-zinc-800">
          <div className="grid gap-1.5">
            <Label htmlFor="fullName" className="text-sm text-zinc-600">
              Full Name
            </Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="e.g. John Doe"
              required
              className="focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="phone" className="text-sm text-zinc-600">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="07XXXXXXXX"
              required
              className="focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="email" className="text-sm text-zinc-600">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="example@email.com"
              required
              className="focus-visible:ring-2 focus-visible:ring-blue-600"
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="course" className="text-sm text-zinc-600">
              Course Type
            </Label>
            <Select
              value={formData.course}
              onValueChange={(val) => handleChange("course", val)}
            >
              <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-blue-600">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-course">Full Course (Manual)</SelectItem>
                <SelectItem value="short-course">Short Course</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="licenseClass" className="text-sm text-zinc-600">
              Category of Class
            </Label>
            <Select
              value={formData.licenseClass}
              onValueChange={(val) => handleChange("licenseClass", val)}
            >
              <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-blue-600">
                <SelectValue placeholder="Select license class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="B1-automatic">B1 Automatic Car</SelectItem>
                <SelectItem value="B2-manual">B2 Manual Car</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="branch" className="text-sm text-zinc-600">
              Choose Branch
            </Label>
            <Select
              value={formData.branch}
              onValueChange={(val) => handleChange("branch", val)}
            >
              <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-blue-600">
                <SelectValue placeholder="Select a branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thika">Wabere Street behind Zuri Centre, Thika</SelectItem>
                <SelectItem value="nakuru-main">Main Office: Pioneer Plaza, Nakuru</SelectItem>
                <SelectItem value="nakuru-branch">Branch: Olive Inn, Kiamunyi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="preferredTime" className="text-sm text-zinc-600">
              Preferred Time
            </Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(val) => handleChange("preferredTime", val)}
            >
              <SelectTrigger className="focus-visible:ring-2 focus-visible:ring-blue-600">
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {price > 0 && (
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Price: <span className="text-blue-700">Ksh {price.toLocaleString()}</span>
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full border-zinc-300 hover:border-zinc-400"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white"
            >
              Submit Enrollment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;