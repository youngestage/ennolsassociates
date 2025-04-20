
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface ServiceRequestFormProps {
  serviceType?: "engineering" | "procurement" | "construction";
  className?: string;
}

export function ServiceRequestForm({ serviceType, className }: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getServiceSpecificFields = () => {
    switch (serviceType) {
      case "engineering":
        return (
          <>
            <Select
              name="projectType"
              onValueChange={(value) => handleSelectChange("projectType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="design">Design & Planning</SelectItem>
                <SelectItem value="consultation">Technical Consultation</SelectItem>
                <SelectItem value="analysis">Structural Analysis</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </>
        );
      case "procurement":
        return (
          <>
            <Input
              name="itemList"
              placeholder="List of items needed"
              onChange={handleChange}
            />
            <Input
              name="quantity"
              type="number"
              placeholder="Estimated quantity"
              onChange={handleChange}
            />
          </>
        );
      case "construction":
        return (
          <>
            <Select
              name="constructionType"
              onValueChange={(value) => handleSelectChange("constructionType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Construction Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
              </SelectContent>
            </Select>
            <Input
              name="projectLocation"
              placeholder="Project Location"
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      // Simulating form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (!formData.name || !formData.email || !formData.requirements) {
        throw new Error("Please fill in all required fields");
      }
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        requirements: "",
      });
      
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name <span className="text-enors-red">*</span>
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email <span className="text-enors-red">*</span>
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (123) 456-7890"
          />
        </div>
        
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
        </div>

        {getServiceSpecificFields()}
        
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Budget Range
          </label>
          <Input
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Estimated Budget"
          />
        </div>
        
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Timeline
          </label>
          <Input
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="Expected Timeline"
          />
        </div>
      </div>
      
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Project Requirements <span className="text-enors-red">*</span>
        </label>
        <Textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Please describe your project requirements in detail..."
          required
          className="min-h-32"
        />
      </div>
      
      {errorMessage && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}
      
      {isSuccess && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-700">
          Thank you for your request! We'll get back to you shortly.
        </div>
      )}
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-enors-orange hover:bg-enors-red text-white md:w-auto"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}
