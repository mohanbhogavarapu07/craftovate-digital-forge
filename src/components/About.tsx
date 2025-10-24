import { Lightbulb, Rocket, TrendingUp, Brain, HandHeart, Palette, Hammer } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const featureCards = [
    {
      icon: HandHeart,
      title: "Handcrafted Care",
      description: "Every project is crafted with the same attention to detail as a master artisan's work."
    },
    {
      icon: Palette,
      title: "Artistic Vision",
      description: "We blend traditional craftsmanship with modern digital techniques to create unique experiences."
    },
    {
      icon: TrendingUp,
      title: "Organic Growth",
      description: "We nurture your brand's growth naturally, like tending to a carefully cultivated garden."
    },
    {
      icon: Hammer,
      title: "Master Craftsmanship",
      description: "Years of experience and passion for perfection in every line of code and pixel we create."
    }
  ];

  return (
    <section id="about" className="pt-24 pb-8 relative overflow-hidden bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Clean Luxury Layout - Split Section */}
        <div className="grid lg:grid-cols-2 gap-0 min-h-[80vh]">
          
          {/* LEFT SIDE - Full Image with Gradient Overlay */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Our Artisans at Work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT SIDE - Clean White Background with Typography */}
          <motion.div 
            className="bg-white flex items-center justify-center p-16"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="max-w-md">
              {/* Title */}
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6 tracking-wider uppercase"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Handcrafted with Love
              </motion.h2>
              
              {/* Thin Underline Accent */}
              <motion.div 
                className="w-16 h-0.5 bg-orange-400 mb-12"
                initial={{ width: 0 }}
                animate={isInView ? { width: "4rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              ></motion.div>
              
              {/* Description Paragraphs */}
              <motion.div 
                className="space-y-8 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <p className="text-lg font-light">
                  Like a master potter shaping clay, we mold digital experiences with patience, 
                  skill, and an unwavering commitment to excellence.
                </p>
                <p className="text-lg font-light">
                  Every project begins with understanding your vision, then we carefully craft 
                  each element by hand, ensuring no detail is overlooked.
                </p>
                <p className="text-lg font-light">
                  We believe in the power of human touch in digital creation, where technology 
                  serves as our tools, not our master.
                </p>
              </motion.div>
              
              {/* Learn More Link */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              >
                <a 
                  href="#about" 
                  className="text-gray-900 font-medium tracking-wider uppercase text-sm hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
