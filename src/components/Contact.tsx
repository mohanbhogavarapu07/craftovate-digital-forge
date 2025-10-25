import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const handleWorkTogether = () => {
    navigate('/contact');
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
              className="text-4xl font-bold text-white mb-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Let's Work Together
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-white/90 text-lg mb-8 leading-relaxed text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Send a message and we will get back to you as soon as possible.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                onClick={handleWorkTogether}
                className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Work Together
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
