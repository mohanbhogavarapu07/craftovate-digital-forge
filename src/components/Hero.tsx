import { Button } from "@/components/ui/button";
import { ArrowRight, HandHeart } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-900/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Professional badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-blue-300/30 mb-8 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10"></div>
            <HandHeart className="w-5 h-5 text-blue-300 relative z-10" />
            <span className="text-sm font-medium text-blue-100 relative z-10 tracking-wide">Professional Digital Studio</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white text-left relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Craft. Innovate.
            </motion.span>
            <motion.span 
              className="block relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Elevate
              </span>
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              your Brand.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-50 mb-10 max-w-3xl text-left leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We craft digital experiences with precision and innovation. Every pixel, 
            every interaction is thoughtfully designed to elevate your brand's story.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-2 border-blue-400/30 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
                onClick={handleGetStarted}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-transparent border-2 border-blue-300/50 text-blue-100 hover:bg-blue-500/10 hover:border-blue-300 transition-all duration-300 group"
                onClick={handleViewWork}
              >
                <span className="group-hover:text-blue-200 transition-colors">View Our Work</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional stats cards */}
        <motion.div 
          className="flex justify-start gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-2 border-blue-300/30 relative overflow-hidden"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-blue-200 mb-2">50+</div>
              <div className="text-sm text-blue-100/80 font-medium">Projects Delivered</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-2 border-cyan-300/30 relative overflow-hidden"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-cyan-200 mb-2">100%</div>
              <div className="text-sm text-cyan-100/80 font-medium">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle decorative elements */}
      <motion.div 
        className="absolute bottom-8 left-8 w-24 h-24 opacity-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1, opacity: 0.3 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300">
          <path d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </motion.div>
      
    </section>
  );
};

export default Hero;