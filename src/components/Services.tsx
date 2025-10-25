import { Palette, Code, Target, Megaphone, Sparkles, Smartphone, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Services = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Handle scrolling to service section when page loads with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const serviceId = hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 500); // Delay to ensure page is fully loaded
    }
  }, []);

  const handleServiceClick = (serviceTitle: string) => {
    // Navigate to services page with the specific service section
    const serviceId = serviceTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
    navigate(`/services#${serviceId}`);
    
    // Scroll to the specific service section after navigation
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);
  };

  const services = [
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "Craft compelling visual identities that resonate with your audience and drive brand recognition.",
      gradient: "from-slate-600 to-slate-800"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build high-performance, scalable web applications with cutting-edge technology and best practices.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Create intuitive, user-centered digital experiences that drive engagement and conversion.",
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Develop native and cross-platform mobile applications that deliver exceptional user experiences.",
      gradient: "from-green-600 to-green-800"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Drive growth through data-driven marketing strategies and comprehensive digital campaigns.",
      gradient: "from-orange-600 to-orange-800"
    },
    {
      icon: Target,
      title: "Business Strategy",
      description: "Develop comprehensive digital strategies that align with your business objectives and market position.",
      gradient: "from-indigo-600 to-indigo-800"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Leverage artificial intelligence to automate processes, enhance decision-making, and drive innovation across your business.",
      gradient: "from-emerald-600 to-emerald-800"
    }
  ];

  return (
    <section id="services" className="py-12 relative overflow-hidden bg-white" ref={ref}>
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/3 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Asymmetric Layout: 40% Left, 60% Right */}
        <div className="grid grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE - 40% width */}
          <motion.div 
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <motion.h2 
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                TRENDING
              </motion.h2>
              <motion.h3 
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                SERVICES
              </motion.h3>
              <motion.div 
                className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 mb-8"
                initial={{ width: 0 }}
                animate={isInView ? { width: "6rem" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              ></motion.div>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed font-light mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                Comprehensive digital solutions designed to accelerate your business growth and enhance your market presence.
              </motion.p>
              
              {/* Compact CTA Button with Floating Animation */}
              <Link to="/services">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -8, 0]
                  } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 1, ease: "easeOut" },
                    scale: { duration: 0.6, delay: 1, ease: "easeOut" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-block"
                >
                  <div className="px-6 py-3 bg-black rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <div className="flex items-center justify-center">
                      <span className="text-white font-semibold text-sm tracking-wide uppercase mr-2">
                        VIEW ALL SERVICES
                      </span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE - 60% width */}
          <motion.div 
            className="col-span-12 lg:col-span-7 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Service Cards Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {services.slice(0, 4).map((service, index) => {
                const gradients = [
                  'from-red-300 via-red-200 to-red-50',        // BRAND - Light Red gradient
                  'from-blue-300 via-blue-200 to-blue-50',     // WEB - Light Blue gradient
                  'from-purple-300 via-purple-200 to-purple-50', // UI/UX - Light Purple gradient  
                  'from-green-300 via-green-200 to-green-50'   // MOBILE - Light Green gradient
                ];
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 100, rotateX: 15 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: [0, -6, 0],
                      rotateX: 0
                    } : { opacity: 0, y: 100, rotateX: 15 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6 + (index * 0.2),
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group relative cursor-pointer"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    {/* Service Card - Equal Size with Gradient and Drop Shadow */}
                    <div 
                      className={`relative bg-gradient-to-br ${gradients[index]} rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 group cursor-pointer text-left h-64 flex flex-col justify-between`}
                      onClick={() => handleServiceClick(service.title)}
                    >
                      {/* Dark Rounded Square Icon - Inside card, left aligned */}
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex-1 flex flex-col justify-between">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                          {service.description}
                        </p>
                        
                        {/* Learn More Link */}
                        <div className="flex justify-start">
                          <span className="text-gray-700 hover:text-gray-900 font-medium text-xs flex items-center gap-1 transition-colors duration-200">
                            Learn More
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;