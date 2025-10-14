import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

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
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10 animate-pulse"></div>
      
      {/* Floating shapes decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Creative Digital Studio</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Craft. Innovate.{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Elevate
              </span>{" "}
              your Brand.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              We help startups and businesses design, build, and grow their digital presence 
              through innovative branding, stunning websites, and strategic marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:border-primary transition-smooth"
                onClick={handleViewWork}
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="Creative digital workspace" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-lg border animate-float hidden lg:block">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-2xl shadow-lg border animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
