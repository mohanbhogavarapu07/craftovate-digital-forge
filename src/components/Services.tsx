import { Palette, Code, FileText, Target, Smartphone, Globe, BarChart3, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Create memorable brand identities with custom logos and visual guidelines.",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build stunning, responsive websites with powerful functionality.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Develop native and cross-platform mobile applications.",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: FileText,
      title: "Marketing Collateral",
      description: "Design professional company profiles and marketing materials.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies for business growth.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Provide data-driven insights to optimize your digital presence.",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Extend your team with our expert designers and developers.",
      gradient: "from-indigo-500 to-blue-700"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-cyan-400/5 to-blue-600/5"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground">
            What we offer to help you grow
          </p>
        </motion.div>

        {/* Scrolling Cards Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-80 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center">
            {/* Auto-scrolling cards in straight line */}
            <div className="flex items-center space-x-6 animate-scroll-horizontal">
              {/* Duplicate set for seamless loop */}
              {[...services, ...services, ...services].map((service, index) => {
                return (
                  <motion.div
                    key={`${service.title}-${index}`}
                    whileHover={{ scale: 1.1, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-80 h-64 group cursor-pointer"
                  >
                    <div className="w-full h-full p-6 bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-400 ease-in-out hover:shadow-[0_15px_30px_rgba(128,90,213,0.3)]">
                      {/* Icon */}
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12 relative z-20"
        >
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white hover:shadow-xl hover:scale-105 group transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Custom CSS for animation */}
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-horizontal {
          animation: scroll-horizontal 20s linear infinite;
        }
        
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;