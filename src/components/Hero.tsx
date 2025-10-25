import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/HEROBG.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/src/assets/hero1.jpg')`
            }}
          ></div>
        </video>
      </div>
      
      {/* Premium Left-Side Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.0))'
        }}
      ></div>


      <div className="container mx-auto pl-6 pr-6 relative z-10 pt-0">
        <div className="max-w-7xl">
          <div className="grid grid-cols-12 gap-12 min-h-screen items-center">
            
            {/* Left Side Content */}
            <div className="col-span-12 lg:col-span-8">
              {/* Professional Digital Studio Chip */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Wrench className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Professional Digital Studio</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-12 leading-tight"
                style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.div 
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Craft. Innovate. Elevate
                </motion.div>
                <motion.div 
                  className="text-blue-500 font-bold"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  your Brand.
                </motion.div>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="text-lg text-white mb-16 leading-relaxed max-w-2xl"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                We craft digital experiences with precision and innovation. Every pixel, every interaction is thoughtfully designed to elevate your brand's story.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Button 
                  size="default" 
                  className="text-base px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border-0 shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 group relative overflow-hidden rounded-lg flex items-center gap-2"
                  onClick={handleGetStarted}
                >
                  <span className="relative z-10 font-semibold">Start Your Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Button 
                  size="default" 
                  variant="outline"
                  className="text-base px-6 py-3 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-lg"
                  onClick={handleViewWork}
                >
                  <span className="font-semibold">View Our Work</span>
                </Button>
              </motion.div>
            </div>
            
            {/* Right Side Elements */}
            <div className="col-span-12 lg:col-span-4 relative">
              {/* Empty right side - content removed */}
            </div>
          </div>
        </div>
        
        {/* Statistics Section - Aligned with Content */}
        <div className="absolute bottom-8 z-20">
          <div className="max-w-7xl">
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              {/* 50+ Projects Delivered */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-8 min-w-[250px]">
                <div className="text-3xl font-bold text-white mb-3">50+</div>
                <div className="text-white/80 text-base font-medium">Projects Delivered</div>
              </div>
              
              {/* 100% Client Satisfaction */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-8 min-w-[250px]">
                <div className="text-3xl font-bold text-white mb-3">100%</div>
                <div className="text-white/80 text-base font-medium">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Horizontal Bar */}
      
      </div>
    </section>
  );
};

export default Hero;

