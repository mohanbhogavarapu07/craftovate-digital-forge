import { useState } from "react";
import { Check, Plus, Minus, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    message: ""
  });

  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const faqs = [
    {
      q: "What is CustomerShip CRM?",
      a: "CustomerShip is a cloud-based CRM platform designed to streamline customer management, sales processes, and marketing efforts. With tools like sales automation, omnichannel support, and data-driven marketing, it helps businesses build stronger customer relationships and increase efficiency."
    },
    {
      q: "How can CustomerShip improve my sales process?",
      a: "CustomerShip streamlines your sales process by providing automated lead tracking, pipeline management, and customer communication tools. It helps you identify opportunities, track progress, and close deals more effectively."
    },
    {
      q: "Is CustomerShip suitable for small businesses?",
      a: "Absolutely! CustomerShip is designed to scale with your business. We offer flexible pricing plans and features that work for small startups and growing enterprises alike."
    },
    {
      q: "Can I manage customer support from multiple channels?",
      a: "Yes, CustomerShip provides omnichannel support capabilities, allowing you to manage customer inquiries from email, phone, chat, and social media all in one unified platform."
    },
    {
      q: "Can I customize the features of CustomerShip for my business?",
      a: "Definitely! CustomerShip offers extensive customization options including custom fields, workflows, and integrations to match your specific business processes and requirements."
    },
    {
      q: "How secure is my data with CustomerShip?",
      a: "CustomerShip prioritizes data security with enterprise-grade encryption, secure cloud infrastructure, and compliance with industry standards to ensure your data is always protected."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Get in Touch with Our Sales Team!
                  </h1>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Whether you have questions about our plans, need a personalized demo, or want to discuss specific requirements for your organization, our knowledgeable sales team is here to assist you every step of the way.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Let us guide you through your features, pricing, and more!</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">We're here to ensure you have a seamless experience.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Let's talk about how we can collaborate.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Share your thoughts, ideas, or suggestions on how we can make Craftovate even better.</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form */}
              <div className="lg:pl-8">
                <Card className="bg-gray-800 border-gray-700 rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white font-medium mb-2 block">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="jobTitle" className="text-white font-medium mb-2 block">
                        Job Title
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("jobTitle", value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Select job title" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="ceo">CEO</SelectItem>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                          <SelectItem value="business-owner">Business Owner</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white font-medium mb-2 block">
                        Business Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <div className="flex gap-2">
                        <Select defaultValue="+1">
                          <SelectTrigger className="w-24 bg-gray-700 border-gray-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="+1">🇺🇸 +1</SelectItem>
                            <SelectItem value="+44">🇬🇧 +44</SelectItem>
                            <SelectItem value="+91">🇮🇳 +91</SelectItem>
                            <SelectItem value="+62">🇮🇩 +62</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="88-888-888-888"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white font-medium mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Input message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
                    >
                      Submit
                    </Button>

                    <p className="text-sm text-gray-400 text-center">
                      By submitting this form you agree to our friendly privacy policy.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Check out our FAQs to learn more about how CustomerShip can elevate your business.
              </p>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-800 border-b border-gray-700 last:border-b-0 transition-all duration-300 ${
                    expandedFAQ === index 
                      ? 'border border-gray-500 shadow-lg shadow-gray-500/20' 
                      : 'border border-transparent'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors"
                  >
                    <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                    <div className="flex-shrink-0">
                      {expandedFAQ === index ? (
                        <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                          <Minus className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                          <Plus className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed text-base">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start Growing Your Business With Craftovate Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a small team or a large enterprise, Craftovate is designed to meet your digital needs. See how our platform can help you scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                Get Started for Free
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-medium">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
