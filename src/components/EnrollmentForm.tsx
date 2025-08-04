import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const EnrollmentForm = ({ isOpen, onClose, selectedCourse }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: selectedCourse || "",
    preferredTime: "",
    hasLicense: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success("Enrollment submitted successfully! We'll contact you soon.");
    onClose();
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      course: "",
      preferredTime: "",
      hasLicense: ""
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enroll in Course</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <Label htmlFor="course">Course Type</Label>
            <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-course">Full Course (Manual)</SelectItem>
                <SelectItem value="refresher-course">Refresher Course</SelectItem>
                <SelectItem value="b-a2-course">Vehicle & Motorcycle (B/A2)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="preferredTime">Preferred Time</Label>
            <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="hasLicense">Do you have a learner's permit?</Label>
            <Select value={formData.hasLicense} onValueChange={(value) => setFormData({...formData, hasLicense: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Enrollment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;