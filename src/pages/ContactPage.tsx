import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Linkedin, Twitter, Instagram, MessageCircle, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", project: "" });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      category: "General",
      icon: MessageCircle,
      questions: [
        {
          q: "What services does Craftovate offer?",
          a: "We offer comprehensive digital services including branding & identity design, website design & development, company profiles, marketing collateral, digital strategy, content creation, and ongoing support."
        },
        {
          q: "What industries do you work with?",
          a: "We work with clients across various industries including technology, e-commerce, healthcare, finance, retail, and professional services. Our diverse experience allows us to adapt our approach to any sector."
        },
        {
          q: "Where is Craftovate located?",
          a: "We're based in San Francisco, CA, but we work with clients globally. Our team operates with a remote-first approach, allowing us to collaborate with businesses anywhere in the world."
        }
      ]
    },
    {
      category: "Process & Timeline",
      icon: Clock,
      questions: [
        {
          q: "What is your typical project process?",
          a: "Our process typically includes: 1) Discovery & Research, 2) Strategy & Planning, 3) Design & Development, 4) Review & Refinement, 5) Launch & Delivery, 6) Ongoing Support. Each phase includes client collaboration and feedback."
        },
        {
          q: "How long does a project take?",
          a: "Timeline varies by project scope. A basic website takes 2-3 weeks, comprehensive branding projects take 4-6 weeks, and enterprise solutions are scoped individually. We'll provide a detailed timeline during our initial consultation."
        },
        {
          q: "Can you work with tight deadlines?",
          a: "Yes! We offer rush services for projects with urgent timelines. Contact us to discuss your deadline and we'll let you know if we can accommodate it. Rush projects may incur additional fees."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      icon: DollarSign,
      questions: [
        {
          q: "How much do your services cost?",
          a: "Our pricing varies based on project scope and complexity. We offer packages starting at $2,999 for starter projects, $6,999 for professional packages, and custom pricing for enterprise solutions. Check our Pricing page for details."
        },
        {
          q: "Do you require a deposit?",
          a: "Yes, we typically require 50% upfront to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers, credit cards (Visa, Mastercard, AmEx), PayPal, and for enterprise clients, we can accommodate purchase orders and net payment terms."
        }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30">
        {/* Background Animations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-blue-100/20 to-indigo-100/15 animate-gentle-flow" style={{
            clipPath: 'polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%)'
          }}></div>
          
          <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-tl from-purple-100/15 to-pink-100/10 animate-gentle-flow-reverse" style={{
            clipPath: 'polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%)',
            animationDelay: '3s'
          }}></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-indigo-200/8 rounded-full blur-xl animate-soft-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-tl from-purple-200/8 to-pink-200/6 rounded-full blur-xl animate-soft-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
                <MessageCircle className="w-4 h-4 mr-2" />
                Let's Connect
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Let's Build Your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Story
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Reach out to us and let's craft something amazing together. We're excited to hear about your project!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-600 text-lg">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>
                </div>

                <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/30">
                  <CardContent className="p-0">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                            placeholder="Enter your email address"
                          />
                        </div>

                        <div>
                          <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Description
                          </label>
                          <Textarea
                            id="project"
                            name="project"
                            required
                            value={formData.project}
                            onChange={handleInputChange}
                            rows={6}
                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                            placeholder="Tell us about your project, goals, and any specific requirements..."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Send className="w-5 h-5" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                  <p className="text-gray-600 text-lg">
                    Prefer to reach out directly? Here are our contact details.
                  </p>
                </div>

                {/* Contact Info Card */}
                <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-white to-indigo-50/30 backdrop-blur-sm">
                  <CardContent className="p-0 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">hello@craftovate.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM PST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                        <p className="text-gray-600">San Francisco, CA</p>
                        <p className="text-sm text-gray-500">Remote-first, Global reach</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${social.color} hover:scale-110`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
                <MessageCircle className="w-4 h-4 mr-2" />
                Common Questions
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Find answers to common questions about our services, process, and pricing.
              </p>
            </motion.div>

            <div className="space-y-8">
              {faqs.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
                  </div>
                  
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${sectionIndex}-${index}`} className="border-b border-gray-100 last:border-b-0">
                          <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-blue-50/50 transition-colors text-left">
                            <span className="font-semibold text-gray-900">{faq.q}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gentleFlow {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(10px) translateY(-3px);
            clip-path: polygon(0% 55%, 25% 35%, 50% 65%, 75% 45%, 100% 55%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(-5px) translateY(2px);
            clip-path: polygon(0% 65%, 25% 45%, 50% 75%, 75% 55%, 100% 65%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(7px) translateY(-1px);
            clip-path: polygon(0% 58%, 25% 38%, 50% 68%, 75% 48%, 100% 58%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes gentleFlowReverse {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(-8px) translateY(3px);
            clip-path: polygon(0% 0%, 100% 35%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(4px) translateY(-2px);
            clip-path: polygon(0% 0%, 100% 45%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(-6px) translateY(1px);
            clip-path: polygon(0% 0%, 100% 38%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1.05);
          }
          50% {
            transform: translateY(-5px) translateX(-3px) scale(0.95);
          }
          75% {
            transform: translateY(-15px) translateX(2px) scale(1.02);
          }
        }
        
        .animate-gentle-flow {
          animation: gentleFlow 10s ease-in-out infinite;
        }
        
        .animate-gentle-flow-reverse {
          animation: gentleFlowReverse 13s ease-in-out infinite;
        }
        
        .animate-soft-float {
          animation: softFloat 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
