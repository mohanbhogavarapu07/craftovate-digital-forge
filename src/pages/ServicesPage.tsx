import { Palette, Code, Target, Megaphone, BarChart, Sparkles, Smartphone, Globe, ArrowRight, CheckCircle, Star, Zap, Shield, Award, TrendingUp, Users, Brain, Search, FileText, Paintbrush, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
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

  const services = [
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "Craft compelling visual identities that resonate with your audience and drive brand recognition.",
      features: [
        "Strategic Brand Positioning",
        "Logo & Visual Identity Design",
        "Brand Guidelines & Standards",
        "Creative Direction & Art Direction"
      ],
      gradient: "from-slate-600 to-slate-800",
      accent: "bg-slate-100",
      stats: "500+ Brands",
      category: "Design"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build high-performance, scalable web applications with cutting-edge technology and best practices.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development & Integration",
        "Performance Optimization"
      ],
      gradient: "from-blue-600 to-blue-800",
      accent: "bg-blue-100",
      stats: "200+ Projects",
      category: "Development"
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Create intuitive, user-centered digital experiences that drive engagement and conversion.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Interaction",
        "Usability Testing & Optimization"
      ],
      gradient: "from-purple-600 to-purple-800",
      accent: "bg-purple-100",
      stats: "98% Satisfaction",
      category: "Design"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Develop native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android Development",
        "React Native & Flutter",
        "Progressive Web Apps",
        "App Store Optimization"
      ],
      gradient: "from-green-600 to-green-800",
      accent: "bg-green-100",
      stats: "50+ Apps",
      category: "Development"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Drive growth through data-driven marketing strategies and comprehensive digital campaigns.",
      features: [
        "SEO & Content Marketing",
        "Social Media Strategy",
        "Paid Advertising Campaigns",
        "Analytics & Performance Tracking"
      ],
      gradient: "from-orange-600 to-orange-800",
      accent: "bg-orange-100",
      stats: "300% ROI",
      category: "Marketing"
    },
    {
      icon: Target,
      title: "Business Strategy",
      description: "Develop comprehensive digital strategies that align with your business objectives and market position.",
      features: [
        "Digital Transformation",
        "Market Analysis & Research",
        "Competitive Intelligence",
        "Growth Strategy & Planning"
      ],
      gradient: "from-indigo-600 to-indigo-800",
      accent: "bg-indigo-100",
      stats: "95% Success Rate",
      category: "Strategy"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Leverage artificial intelligence to automate processes, enhance decision-making, and drive innovation across your business.",
      features: [
        "Machine Learning Solutions",
        "Process Automation",
        "Predictive Analytics",
        "Intelligent Chatbots & Assistants"
      ],
      gradient: "from-emerald-600 to-emerald-800",
      accent: "bg-emerald-100",
      stats: "40% Efficiency Gain",
      category: "Technology"
    }
  ];

  const stats = [
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: TrendingUp, label: "Growth Rate", value: "300%" },
    { icon: Shield, label: "Success Rate", value: "98%" }
  ];

  return (
    <div>
       {/* Hero Section with Services */}
       <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 relative bg-white overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto text-center mb-12">
             
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
               Our{" "}
               <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                 Services
               </span>
             </h1>
             <p className="text-lg sm:text-xl text-gray-600 mb-0 max-w-2xl mx-auto">
               We craft exceptional digital experiences that drive business growth and create lasting impact.
             </p>

          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            {/* Services Grid - Modern Card Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => {
                  const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
                  return (
                  <Card
                    key={index}
                    id={serviceId}
                    className="group relative overflow-hidden bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                  {/* Card Header */}
                  <CardHeader className="p-8 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="secondary" className={`${service.accent} text-gray-700 border-0 font-medium`}>
                        {service.category}
                      </Badge>
                      </div>
                      
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-8 pt-0">
                      {/* Features List */}
                    <ul className="space-y-4 mb-8">
                        {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    
                    {/* Stats */}
                    <div className="mb-6 p-4 rounded-xl bg-gray-50">
                      <div className="text-xl font-bold text-gray-900 mb-1">{service.stats}</div>
                      <div className="text-sm text-gray-600">Proven Results</div>
                    </div>
                      
                      {/* CTA Button */}
                      <Link to="/contact">
                        <Button 
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white hover:shadow-lg transition-all duration-300 group/btn"
                          size="lg"
                        >
                        Get Started
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - How We Work */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                How We Work
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our proven methodology ensures exceptional results through a structured, collaborative approach that transforms ideas into digital excellence.
              </motion.p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Discovery",
                  description: "We start by understanding your business goals, target audience, and market landscape to create a solid foundation.",
                  icon: Search,
                  delay: 0.1
                },
                {
                  title: "Strategy",
                  description: "We develop a comprehensive digital strategy tailored to your specific needs and business objectives.",
                  icon: FileText,
                  delay: 0.3
                },
                {
                  title: "Design",
                  description: "We create stunning visual experiences that reflect your brand and engage your target audience.",
                  icon: Paintbrush,
                  delay: 0.5
                },
                {
                  title: "Launch",
                  description: "We meticulously develop and deploy your solution, ensuring everything works perfectly from day one.",
                  icon: Rocket,
                  delay: 0.7
                }
              ].map((process, index) => (
                <motion.div 
                  key={index} 
                  className="group text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: process.delay }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-all duration-300">
                      <process.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-gray-400 to-transparent h-px"></div>

      {/* CTA Section - Modern Corporate */}
      <section className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500">
        {/* Subtle geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.1]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Ready to Get Started?
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white tracking-tight">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Partner with us to create digital experiences that drive results and exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom hover effects */
        .group:hover .group-hover\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\:rotate-3 {
          transform: rotate(3deg);
        }
        
        /* Gradient text animation */
        .gradient-text {
          background: linear-gradient(45deg, #3B82F6, #8B5CF6, #06B6D4);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Code-inspired animations */
        @keyframes codeFlow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes dataPulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        .animate-code-flow {
          animation: codeFlow 8s linear infinite;
        }
        
        .animate-data-pulse {
          animation: dataPulse 3s ease-in-out infinite;
        }
        
        /* Professional Smooth Animation Effects */
        @keyframes smoothWave {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 80% 100%, 0% 100%);
          }
          25% {
            transform: translateY(-8px) translateX(4px) scale(1.02);
            clip-path: polygon(0% 0%, 100% 0%, 100% 55%, 75% 100%, 0% 100%);
          }
          50% {
            transform: translateY(-4px) translateX(-2px) scale(0.98);
            clip-path: polygon(0% 0%, 100% 0%, 100% 65%, 85% 100%, 0% 100%);
          }
          75% {
            transform: translateY(-12px) translateX(2px) scale(1.01);
            clip-path: polygon(0% 0%, 100% 0%, 100% 58%, 78% 100%, 0% 100%);
          }
        }
        
        @keyframes smoothWaveReverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 80%);
          }
          25% {
            transform: translateY(6px) translateX(-3px) scale(1.02);
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 75%);
          }
          50% {
            transform: translateY(3px) translateX(1px) scale(0.98);
            clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 85%);
          }
          75% {
            transform: translateY(9px) translateX(-1px) scale(1.01);
            clip-path: polygon(22% 0%, 100% 0%, 100% 100%, 0% 78%);
          }
        }
        
        @keyframes gentleFlow {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 50%, 25% 30%, 50% 60%, 75% 40%, 100% 50%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(10px) translateY(-3px);
            clip-path: polygon(0% 45%, 25% 25%, 50% 55%, 75% 35%, 100% 45%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(-5px) translateY(2px);
            clip-path: polygon(0% 55%, 25% 35%, 50% 65%, 75% 45%, 100% 55%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(7px) translateY(-1px);
            clip-path: polygon(0% 48%, 25% 28%, 50% 58%, 75% 38%, 100% 48%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes gentleFlowReverse {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 0%, 100% 30%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(-8px) translateY(3px);
            clip-path: polygon(0% 0%, 100% 25%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(4px) translateY(-2px);
            clip-path: polygon(0% 0%, 100% 35%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(-6px) translateY(1px);
            clip-path: polygon(0% 0%, 100% 28%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1.05);
          }
          50% {
            transform: translateY(-5px) translateX(-3px) scale(0.95);
          }
          75% {
            transform: translateY(-15px) translateX(2px) scale(1.02);
          }
        }
        
        @keyframes accentFlow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        .animate-smooth-wave {
          animation: smoothWave 12s ease-in-out infinite;
        }
        
        .animate-smooth-wave-reverse {
          animation: smoothWaveReverse 15s ease-in-out infinite;
        }
        
        .animate-gentle-flow {
          animation: gentleFlow 10s ease-in-out infinite;
        }
        
        .animate-gentle-flow-reverse {
          animation: gentleFlowReverse 13s ease-in-out infinite;
        }
        
        .animate-soft-float {
          animation: softFloat 8s ease-in-out infinite;
        }
        
        .animate-accent-flow {
          animation: accentFlow 8s linear infinite;
        }
        
        /* Curved Flow Animation */
        @keyframes curveFlow {
          0% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1000 0;
            stroke-dashoffset: 0;
          }
        }
        
        .animate-curve-flow {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: curveFlow 3s ease-in-out infinite;
        }
        
        /* Enhanced Animation Effects */
        @keyframes rollClockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes rollCounterClockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes moveRight {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px));
            opacity: 0;
          }
        }
        
        @keyframes moveLeft {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(-100vw - 100px));
            opacity: 0;
          }
        }
        
        @keyframes floatGeometric {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-5px) rotate(180deg);
          }
          75% {
            transform: translateY(-15px) rotate(270deg);
          }
        }
        
        @keyframes pulseDot {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .animate-roll-clockwise {
          animation: rollClockwise 8s linear infinite;
        }
        
        .animate-roll-counter-clockwise {
          animation: rollCounterClockwise 6s linear infinite;
        }
        
        .animate-move-right {
          animation: moveRight 12s linear infinite;
        }
        
        .animate-move-left {
          animation: moveLeft 10s linear infinite;
        }
        
        .animate-float-geometric {
          animation: floatGeometric 6s ease-in-out infinite;
        }
        
        .animate-pulse-dot {
          animation: pulseDot 3s ease-in-out infinite;
        }
        
        /* Bouncing Ball Animations */
        @keyframes bounceFromTop {
          0% {
            transform: translateY(-150px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(50px) translateX(20px);
          }
          40% {
            transform: translateY(20px) translateX(40px);
          }
          55% {
            transform: translateY(80px) translateX(60px);
          }
          70% {
            transform: translateY(40px) translateX(80px);
          }
          85% {
            transform: translateY(120px) translateX(100px);
          }
          100% {
            transform: translateY(100vh) translateX(120px);
            opacity: 0;
          }
        }
        
        @keyframes bounceFromBottom {
          0% {
            transform: translateY(150px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(-50px) translateX(-20px);
          }
          40% {
            transform: translateY(-20px) translateX(-40px);
          }
          55% {
            transform: translateY(-80px) translateX(-60px);
          }
          70% {
            transform: translateY(-40px) translateX(-80px);
          }
          85% {
            transform: translateY(-120px) translateX(-100px);
          }
          100% {
            transform: translateY(-100vh) translateX(-120px);
            opacity: 0;
          }
        }
        
        @keyframes bounceFromLeft {
          0% {
            transform: translateX(-150px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateX(50px) translateY(20px);
          }
          40% {
            transform: translateX(20px) translateY(40px);
          }
          55% {
            transform: translateX(80px) translateY(60px);
          }
          70% {
            transform: translateX(40px) translateY(80px);
          }
          85% {
            transform: translateX(120px) translateY(100px);
          }
          100% {
            transform: translateX(100vw) translateY(120px);
            opacity: 0;
          }
        }
        
        @keyframes bounceFromRight {
          0% {
            transform: translateX(150px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateX(-50px) translateY(-20px);
          }
          40% {
            transform: translateX(-20px) translateY(-40px);
          }
          55% {
            transform: translateX(-80px) translateY(-60px);
          }
          70% {
            transform: translateX(-40px) translateY(-80px);
          }
          85% {
            transform: translateX(-120px) translateY(-100px);
          }
          100% {
            transform: translateX(-100vw) translateY(-120px);
            opacity: 0;
          }
        }
        
        @keyframes randomFloat {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(20px, -10px) rotate(90deg);
          }
          50% {
            transform: translate(-10px, 20px) rotate(180deg);
          }
          75% {
            transform: translate(15px, 10px) rotate(270deg);
          }
        }
        
        .animate-bounce-from-top {
          animation: bounceFromTop 6s ease-in-out infinite;
        }
        
        .animate-bounce-from-bottom {
          animation: bounceFromBottom 8s ease-in-out infinite;
        }
        
        .animate-bounce-from-left {
          animation: bounceFromLeft 7s ease-in-out infinite;
        }
        
        .animate-bounce-from-right {
          animation: bounceFromRight 9s ease-in-out infinite;
        }
        
        .animate-random-float {
          animation: randomFloat 15s ease-in-out infinite;
        }
        
        /* Gentle Flow Animations (from AboutPage) */
        @keyframes gentleFlow {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(10px) translateY(-3px);
            clip-path: polygon(0% 55%, 25% 35%, 50% 65%, 75% 45%, 100% 55%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(-5px) translateY(2px);
            clip-path: polygon(0% 65%, 25% 45%, 50% 75%, 75% 55%, 100% 65%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(7px) translateY(-1px);
            clip-path: polygon(0% 58%, 25% 38%, 50% 68%, 75% 48%, 100% 58%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes gentleFlowReverse {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(-8px) translateY(3px);
            clip-path: polygon(0% 0%, 100% 35%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(4px) translateY(-2px);
            clip-path: polygon(0% 0%, 100% 45%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(-6px) translateY(1px);
            clip-path: polygon(0% 0%, 100% 38%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1.05);
          }
          50% {
            transform: translateY(-5px) translateX(-3px) scale(0.95);
          }
          75% {
            transform: translateY(-15px) translateX(2px) scale(1.02);
          }
        }
        
        .animate-gentle-flow {
          animation: gentleFlow 10s ease-in-out infinite;
        }
        
        .animate-gentle-flow-reverse {
          animation: gentleFlowReverse 13s ease-in-out infinite;
        }
        
        .animate-soft-float {
          animation: softFloat 8s ease-in-out infinite;
        }
        
      `}</style>
    </div>
  );
};

export default ServicesPage;

