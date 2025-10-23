import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <section id="contact" className="relative py-16 overflow-hidden bg-gray-900">
      {/* Dark Atmospheric Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&q=80')`
        }}
      ></div>
      
      {/* Dark Overlay for Atmosphere */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Large Golden Envelope Icon */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-32 h-32 opacity-20">
        <Mail className="w-full h-full text-yellow-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center">
        {/* Newsletter Signup Form - Centered */}
        <div className="w-full max-w-2xl">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-white mb-6">
              Sign up to our Newsletter
            </h2>
            
            {/* Description */}
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Sign in Our Newsletter and you will instantly be emailed a full list of New Product Information
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your Email Address here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 bg-white rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              
              <Button
                type="submit"
                className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
