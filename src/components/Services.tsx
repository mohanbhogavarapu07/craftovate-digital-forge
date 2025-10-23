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
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/3 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Asymmetric Layout: 40% Left, 60% Right */}
        <div className="grid grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE - 40% width */}
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-8">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight">
                TRENDING
              </h2>
              <h3 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                SERVICES
              </h3>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                Comprehensive digital solutions designed to accelerate your business growth and enhance your market presence.
              </p>
              
              {/* Premium CTA Button */}
              <Link to="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-block"
                >
                  <div className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 backdrop-blur-sm">
                    <div className="flex items-center justify-center">
                      <span className="text-white font-bold text-lg tracking-wider uppercase mr-3">
                        VIEW ALL SERVICES
                      </span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Premium Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE - 60% width */}
          <div className="col-span-12 lg:col-span-7">
            {/* Premium Service Grid - 3x2 Layout */}
            <div className="grid grid-cols-3 gap-6">
              {services.slice(0, 6).map((service, index) => {
                const gradients = [
                  'from-blue-500 to-blue-700',      // BRAND - Blue
                  'from-purple-500 to-purple-700',  // WEB - Purple  
                  'from-teal-500 to-teal-700',      // UI/UX - Teal
                  'from-orange-500 to-orange-700', // MOBILE - Orange
                  'from-pink-500 to-pink-700',     // DIGITAL - Pink
                  'from-indigo-500 to-indigo-700'  // BUSINESS - Indigo
                ];
                
                const colors = ['blue', 'purple', 'teal', 'orange', 'pink', 'indigo'];
                const currentColor = colors[index];
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group relative cursor-pointer"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    {/* Premium Service Card */}
                    <div className={`relative h-64 p-6 rounded-2xl overflow-hidden flex flex-col justify-center items-center text-center transition-all duration-500 ${
                      index === 0 
                        ? `bg-gradient-to-br ${gradients[index]} shadow-2xl shadow-${currentColor}-500/25` 
                        : `bg-gradient-to-br ${gradients[index]} shadow-lg hover:shadow-xl`
                    } group-hover:shadow-2xl`}>
                      
                      {/* Glassmorphism Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Premium Icon Container */}
                      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                        index === 0 
                          ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                          : `bg-white/20 backdrop-blur-sm border border-white/30`
                      } group-hover:scale-110 group-hover:rotate-3`}>
                        <service.icon className="w-7 h-7 text-white" />
                        
                        {/* Icon Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Premium Typography */}
                      <div className="relative z-10">
                        <h3 className="text-sm font-bold mb-2 tracking-wider uppercase text-white group-hover:text-white/90 transition-colors duration-300">
                          {service.title.split(' ')[0]}
                        </h3>
                        
                        <p className="text-xs font-medium tracking-widest uppercase text-white/80 group-hover:text-white/70 transition-colors duration-300">
                          TRENDY COLLECTION
                        </p>
                      </div>

                      {/* Premium Hover Effects */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${currentColor}-500/0 via-${currentColor}-500/0 to-${currentColor}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      {/* Premium Border Glow */}
                      <div className={`absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;