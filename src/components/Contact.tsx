import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, text: "hello@craftovate.com", label: "Email" },
    { icon: Phone, text: "+1 (555) 123-4567", label: "Phone" },
    { icon: MapPin, text: "San Francisco, CA", label: "Location" }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"></div>
      
      {/* Floating Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-300/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-300/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Let's Build Your Digital Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach out to us and let's craft something amazing together. We're excited to hear about your project!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form - Glassmorphism */}
            <div className="animate-fade-in-up">
              <div className="p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 rounded-2xl border-2 border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:bg-white/80 transition-all duration-300 shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14 rounded-2xl border-2 border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:bg-white/80 transition-all duration-300 shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="rounded-2xl border-2 border-gray-200/50 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:bg-white/80 transition-all duration-300 resize-none shadow-lg"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-14 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-2xl"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info - Enhanced Cards */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Get in Touch Card */}
              <div className="p-8 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-center gap-4 group hover:bg-white/50 p-3 rounded-2xl transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{info.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us Card */}
              <div className="p-8 bg-gradient-to-br from-white/80 to-cyan-50/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Follow Us</h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-gray-200/50 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300 group shadow-lg"
                    >
                      <social.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
