import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <section id="contact" className="relative py-16 overflow-hidden bg-gray-900" ref={sectionRef}>
      {/* Contact Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/contactbg.jpeg')`
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
        <motion.div 
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            {/* Heading */}
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Let's Work together
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-white/90 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Send a message and we will get back to you as soon as possible.
            </motion.p>
            
            {/* Newsletter Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
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
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
