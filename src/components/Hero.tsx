import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/herobg.jpg";

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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Content */}
          <div className="animate-fade-in text-white text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Creative Digital Studio</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white text-left">
              Craft. Innovate.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Elevate
              </span>{" "}
              your Brand.
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl text-left">
              We help startups and businesses design, build, and grow their digital presence 
              through innovative branding, stunning websites, and strategic marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gradient-primary shadow-lg hover:shadow-glow transition-smooth group"
                onClick={handleGetStarted}
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white border border-purple-400 transition-smooth"
                onClick={handleViewWork}
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Floating stats cards */}
          <div className="flex justify-start gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 animate-float">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
