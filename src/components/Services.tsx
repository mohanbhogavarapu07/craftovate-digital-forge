import { Palette, Code, Target, Megaphone, Sparkles, Smartphone, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Services = () => {
  const navigate = useNavigate();

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
    <section id="services" className="py-24 relative overflow-hidden bg-white">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Handcrafted decorative elements */}
        <div className="absolute -top-8 -left-8 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
            <path d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute -top-4 -right-4 w-20 h-20 opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6,3"/>
          </svg>
        </div>

        {/* Header with modern styling */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in relative">
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 relative">
              <span className="block">Our</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive digital solutions designed to accelerate your business growth and enhance your market presence.
          </p>
        </div>

        {/* Elegant Cards Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group relative cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
            >
              {/* Uniform Card Container */}
              <div className="relative h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden flex flex-col">
                
                {/* Subtle Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-50/0 group-hover:from-gray-50/50 group-hover:to-gray-50/30 transition-all duration-300"></div>
                
                {/* Icon with Consistent Sizing */}
                <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 ease-out flex-shrink-0`}>
                  <service.icon className="w-6 h-6 text-white" />
                  
                  {/* Subtle Icon Glow */}
                  <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Card Content with Consistent Layout */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-200 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link - Consistent Positioning */}
                  <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-200">
                    <div className="flex items-center justify-end text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                      <span className="mr-1">Learn More</span>
                      <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>

                {/* Elegant Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300 ease-out"></div>

                {/* Focus Ring for Accessibility */}
                <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus:ring-blue-500/20 transition-all duration-200"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button with modern styling */}
        <div className="flex justify-center mt-12 relative z-20">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white hover:shadow-lg transition-all duration-300 group/btn px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <span className="relative z-10">View All Services</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;