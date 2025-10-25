import { useState } from "react";
import { Check, Mail, Phone, MapPin, Plus, X, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "What digital services does Craftovate offer?",
      a: "Craftovate specializes in comprehensive digital solutions including web development, mobile app development, digital marketing, UI/UX design, e-commerce solutions, and cloud services. We help businesses transform their digital presence and grow online."
    },
    {
      q: "How long does a typical project take to complete?",
      a: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications or mobile apps can take 2-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We offer flexible engagement models and pricing options to accommodate different budgets and requirements. Our team is experienced in scaling solutions as your business grows."
    },
    {
      q: "What technologies and platforms do you use?",
      a: "We use modern, industry-standard technologies including React, Node.js, Python, React Native, Flutter, AWS, Google Cloud, and more. Our technology choices are always based on your specific needs, scalability requirements, and long-term business goals."
    },
    {
      q: "Do you provide ongoing support and maintenance?",
      a: "Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes regular updates, security patches, performance monitoring, and technical support to keep your systems running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Contact Form Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Get in Touch with Our Sales Team!
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you have questions about our plans, need a personalized demo, or want to discuss specific requirements for your organization, our knowledgeable sales team is here to assist you every step of the way.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Let us guide you through your features, pricing, and more!</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">We're here to ensure you have a seamless experience.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Let's talk about how we can collaborate.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Share your thoughts, ideas, or suggestions on how we can make Craftovate even better.</p>
                  </div>
                </div>
                        </div>

              {/* Right Content - Contact Form */}
              <div className="lg:pl-8">
                <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
                      <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                        Name
                      </Label>
                          <Input
                            id="name"
                            type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                          />
                        </div>


                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                        Email Address
                      </Label>
                          <Input
                            id="email"
                            type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                      <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[100px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form you agree to our privacy policy.
                    </p>
                  </form>
                </Card>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our digital services and solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.q}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === index ? (
                          <X className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                        )}
                      </div>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFAQ === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
