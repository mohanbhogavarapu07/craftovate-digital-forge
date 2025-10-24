import { Check, ArrowRight, ChevronDown, Sprout, Rocket, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const plans = [
    {
      name: "Starter",
      price: "$12",
      period: "month",
      description: "Perfect for freelancers and small websites.",
      features: [
        "1 Website",
        "5 GB SSD Storage",
        "Free SSL Certificate",
        "Standard Support",
        "99.9% Uptime Guarantee",
        "Basic Analytics",
        "Email Support",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Social Media Integration"
      ],
      highlighted: false,
      buttonText: "Start with Starter",
      gradient: "from-orange-100 via-pink-50 to-pink-100",
      accentColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      name: "Professional",
      price: "$29",
      period: "month",
      description: "Best for growing businesses & SaaS platforms.",
      features: [
        "Up to 10 Websites",
        "50 GB SSD Storage",
        "Daily Backup",
        "Priority Email Support",
        "Free SSL Certificate",
        "Advanced Analytics",
        "Priority Support",
        "Team Collaboration",
        "API Access",
        "Custom Integrations",
        "Advanced SEO Tools",
        "Performance Monitoring",
        "A/B Testing",
        "Custom Domains"
      ],
      highlighted: true,
      badge: "Popular",
      buttonText: "Choose Professional",
      gradient: "from-sky-100 via-blue-50 to-purple-100",
      accentColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Enterprise",
      price: "$0",
      period: "Custom",
      description: "For large businesses or custom infrastructure needs.",
      features: [
        "Unlimited Websites",
        "Unlimited Storage",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Custom Server Configuration",
        "White-label Solutions",
        "Custom Development",
        "SLA Guarantee",
        "On-premise Deployment",
        "Dedicated Infrastructure",
        "Custom Security Policies",
        "Advanced Compliance",
        "Multi-region Deployment",
        "Dedicated Support Team"
      ],
      highlighted: false,
      buttonText: "Start with Enterprise",
      gradient: "from-cyan-100 via-blue-50 to-teal-100",
      accentColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  const metrics = [
    { value: "90%", label: "Client satisfaction" },
    { value: "180+", label: "Project Successfully Done" },
    { value: "10K+", label: "Overall Revenue Raised" }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-0 sm:pt-28 sm:pb-0 lg:pt-32 lg:pb-0 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Affordable Plans. Powerful Features.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-0 max-w-2xl mx-auto">
              Access all the tools you need to grow, with pricing that makes sense for your stage.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, index) => {
                const scrollToMore = () => {
                  const container = document.getElementById(`features-${index}`);
                  if (container) {
                    container.scrollTo({
                      top: 120,
                      behavior: 'smooth'
                    });
                  }
                };
                
                return (
                  <Card
                  key={index}
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[520px] ${
                      plan.highlighted 
                        ? "border-blue-500 border-2 shadow-lg" 
                        : "border-gray-200"
                    }`}
                  >
                    {/* Popular Badge */}
                  {plan.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                    {/* Top Section with Gradient Background */}
                    <div className={`bg-gradient-to-br ${plan.gradient} p-6 pb-4 h-[240px] flex flex-col relative overflow-hidden`}>
                      {/* Background Pattern Overlay */}
                      {index === 0 && (
                        <div className="absolute inset-0 opacity-10">
                          <div className="w-full h-full" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
                            backgroundSize: '20px 20px'
                          }}></div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="absolute inset-0 opacity-20">
                          <div className="w-full h-full" style={{
                            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                            backgroundSize: '15px 15px'
                          }}></div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="absolute inset-0 opacity-15">
                          <div className="w-full h-full" style={{
                            backgroundImage: `
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px),
                              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: '20px 20px'
                          }}></div>
                        </div>
                      )}
                      <div className="flex-1 relative z-10">
                        <div className="mb-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 ${
                    plan.highlighted 
                                ? "border-blue-600 bg-blue-50" 
                                : "border-gray-400 bg-gray-50"
                            }`}>
                              {index === 0 && <Sprout className={`w-5 h-5 ${
                                plan.highlighted ? "text-blue-600" : "text-gray-500"
                              }`} strokeWidth={2} />}
                              {index === 1 && <Rocket className={`w-5 h-5 ${
                                plan.highlighted ? "text-blue-600" : "text-gray-500"
                              }`} strokeWidth={2} />}
                              {index === 2 && <Building className={`w-5 h-5 ${
                                plan.highlighted ? "text-blue-600" : "text-gray-500"
                              }`} strokeWidth={2} />}
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                              {index === 0 && "Starter"}
                              {index === 1 && "Professional"}
                              {index === 2 && "Enterprise"}
                            </span>
                          </div>
                          <div>
                            <span className={`text-4xl font-bold ${
                              plan.highlighted 
                                ? "text-blue-600" 
                                : "text-gray-900"
                            }`}>{plan.price}</span>
                            <span className="text-gray-600 ml-1">/{plan.period}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                      </div>
                      
                      <div className="mt-auto relative z-10">
                        <Button
                          className={`w-full py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                            plan.highlighted
                              ? `${plan.buttonColor} text-white`
                              : "bg-white text-gray-900 border-2 border-gray-400 hover:bg-gray-50 shadow-lg"
                          }`}
                        >
                          {plan.buttonText}
                        </Button>
                        
                        {/* Divider */}
                        <div className="border-t border-gray-300 mt-4"></div>
                      </div>
                    </div>

                    {/* Bottom Section with Scrollable Features */}
                    <div className="px-6 pb-2 pt-2 h-[280px] flex flex-col">
                      <h4 className="font-semibold text-gray-900 mb-0">Key features:</h4>
                      
                      {/* Scrollable Features Container */}
                      <div 
                        id={`features-${index}`}
                        className="flex-1 overflow-y-auto scrollbar-hide"
                      >
                        <ul className="space-y-3 pr-2">
                      {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <Check className={`w-4 h-4 shrink-0 ${plan.accentColor}`} />
                              <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                      </div>
                      
                      {/* Scroll Down Button */}
                      {plan.features.length > 5 && (
                    <Button
                          variant="ghost"
                          size="sm"
                          onClick={scrollToMore}
                          className="w-full text-gray-500 py-1 px-0 mt-4 flex justify-center hover:bg-transparent hover:text-gray-700"
                        >
                          <ChevronDown className="w-4 h-4" />
                    </Button>
                    )}
                    </div>
                </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Metrics */}
      <section className="pt-4 pb-4 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-float"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '3s'
                  }}
                >
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-base sm:text-lg text-gray-600">{metric.label}</div>
                      </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Call-to-Action Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#7726B6]/20 via-[#7726B6]/15 to-[#22023C]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side content */}
            <div className="space-y-6">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Work Showcase
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Ready to Take Your Business to the Next Level with Powerful IT Solutions?
                    <ArrowRight className="inline-block w-6 h-6 ml-2 text-[#7726B6]" />
              </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                    With years of hands-on experience in SaaS development, cloud architecture, and enterprise IT services, 
                    we empower businesses to adapt to changing technologies, scale operations seamlessly, and thrive 
                    in an increasingly competitive digital world.
                  </p>
                      </div>
                <Link to="/contact">
                  <Button className="bg-white text-[#22023C] hover:bg-gray-50 border border-gray-200 shadow-sm px-8 py-3 text-base font-medium transition-all duration-200">
                    Get a Free Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Right side - empty space for visual balance */}
              <div className="hidden lg:block">
                {/* This creates the empty space on the right as shown in the first image */}
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
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

export default PricingPage;
