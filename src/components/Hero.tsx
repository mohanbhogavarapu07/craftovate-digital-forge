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
      {/* Modern House Background with Sunset */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/hero1.jpg'), url('./src/assets/hero1.jpg')`
        }}
      ></div>
      
      {/* Premium Left-Side Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.0))'
        }}
      ></div>


      <div className="container mx-auto pl-6 pr-6 relative z-10 pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-6 min-h-screen items-center">
            
            {/* Left Side Content */}
            <div className="col-span-12 lg:col-span-6">
              {/* Professional Digital Studio Chip */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Wrench className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Professional Digital Studio</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ 
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Craft. Innovate.
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Elevate
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  your Brand.
                </motion.span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="text-base text-white mb-8 leading-relaxed max-w-xl"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                We craft digital experiences with precision and innovation. Every pixel, every interaction is thoughtfully designed to elevate your brand's story.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
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
            <div className="col-span-12 lg:col-span-6 relative">
              {/* Empty right side - content removed */}
            </div>
          </div>
        </div>
        
        {/* Statistics Section - Perfectly Aligned with Content */}
        <div className="absolute bottom-6 left-6 z-20">
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            {/* 50+ Projects Delivered */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 min-w-[200px]">
              <div className="text-2xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm font-medium">Projects Delivered</div>
            </div>
            
            {/* 100% Client Satisfaction */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-6 min-w-[200px]">
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm font-medium">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Horizontal Bar */}
      
      </div>
    </section>
  );
};

export default Hero;