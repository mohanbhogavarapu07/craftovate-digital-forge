import { Palette, Code, Target, Megaphone, BarChart, Sparkles, Smartphone, Globe, ArrowRight, CheckCircle, Star, Zap, Shield, Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ServicesPage = () => {
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
    }
  ];

  const stats = [
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: TrendingUp, label: "Growth Rate", value: "300%" },
    { icon: Shield, label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - Dark with Light Animations */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Dark Background with Enhanced Animations */}
        <div className="absolute inset-0">
          {/* Dark gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
          
          {/* Rolling Settings Icons */}
          <div className="absolute top-1/4 left-10 w-16 h-16 text-blue-400/30 animate-roll-clockwise">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.95C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
            </svg>
          </div>
          
          <div className="absolute top-1/3 right-10 w-12 h-12 text-cyan-400/25 animate-roll-counter-clockwise">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.95C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
            </svg>
          </div>
          
          <div className="absolute bottom-1/4 left-1/4 w-14 h-14 text-purple-400/30 animate-roll-clockwise" style={{ animationDelay: '1s' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.95C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.95L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
            </svg>
          </div>
          
          {/* Moving Elements - Left to Right */}
          <div className="absolute top-1/2 left-0 w-8 h-8 bg-gradient-to-r from-blue-400/40 to-cyan-400/30 rounded-full animate-move-right"></div>
          <div className="absolute top-2/3 left-0 w-6 h-6 bg-gradient-to-r from-purple-400/35 to-pink-400/25 rounded-full animate-move-right" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-0 w-10 h-10 bg-gradient-to-r from-indigo-400/30 to-blue-400/20 rounded-full animate-move-right" style={{ animationDelay: '4s' }}></div>
          
          {/* Moving Elements - Right to Left */}
          <div className="absolute top-1/3 right-0 w-6 h-6 bg-gradient-to-l from-cyan-400/35 to-blue-400/25 rounded-full animate-move-left"></div>
          <div className="absolute bottom-1/2 right-0 w-8 h-8 bg-gradient-to-l from-pink-400/30 to-purple-400/20 rounded-full animate-move-left" style={{ animationDelay: '3s' }}></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400/40 rotate-45 animate-float-geometric"></div>
          <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-400/30 rounded-full animate-float-geometric" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-cyan-400/35 transform rotate-12 animate-float-geometric" style={{ animationDelay: '3s' }}></div>
          
          {/* Pulsing Light Dots */}
          <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-white/60 rounded-full animate-pulse-dot"></div>
          <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-blue-400/50 rounded-full animate-pulse-dot" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/6 left-2/3 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse-dot" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse-dot" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Light flowing lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-accent-flow"></div>
          <div className="absolute bottom-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-accent-flow" style={{ animationDelay: '2s' }}></div>
          
          {/* Light dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>

        {/* Light grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              Trusted by 500+ Companies
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Digital</span>
              <br />
              <span className="bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              We craft exceptional digital experiences that drive business growth and create lasting impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Corporate Layout */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 relative bg-white overflow-hidden">
        {/* Code-inspired background */}
        <div className="absolute inset-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20"></div>
          
          {/* Floating code elements */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 left-32 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-indigo-400/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Code syntax patterns */}
          <div className="absolute top-16 right-20 text-xs font-mono text-gray-300/40 transform -rotate-12">
            <div className="space-y-1">
              <div className="text-blue-400/30">&lt;div&gt;</div>
              <div className="text-gray-400/30 ml-4">className="services"</div>
              <div className="text-blue-400/30">&lt;/div&gt;</div>
            </div>
          </div>
          
          <div className="absolute bottom-20 left-20 text-xs font-mono text-gray-300/40 transform rotate-6">
            <div className="space-y-1">
              <div className="text-purple-400/30">const services = [</div>
              <div className="text-gray-400/30 ml-4">'design',</div>
              <div className="text-gray-400/30 ml-4">'development'</div>
              <div className="text-purple-400/30">];</div>
            </div>
          </div>
          
          {/* Flowing data lines */}
          <div className="absolute top-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent animate-code-flow"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent animate-code-flow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-28 h-px bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent animate-code-flow" style={{ animationDelay: '4s' }}></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400/30 rounded-full animate-data-pulse"></div>
          <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400/25 rounded-full animate-data-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Abstract geometric shapes */}
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-blue-200/20 rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-purple-200/20 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-sm transform rotate-12"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(0deg, #000 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive digital solutions designed to accelerate your business growth and enhance your market presence.
            </p>
          </div>

          {/* Services Grid - Modern Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
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
              ))}
          </div>
        </div>
      </section>

      {/* Process Section - How We Work */}
      <section className="py-24 relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
        {/* Smooth Background Elements */}
        <div className="absolute inset-0">
          {/* Flowing wave background */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-blue-100/20 to-indigo-100/15 animate-gentle-flow" style={{
            clipPath: 'polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%)'
          }}></div>
          
          <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-tl from-purple-100/15 to-pink-100/10 animate-gentle-flow-reverse" style={{
            clipPath: 'polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%)',
            animationDelay: '3s'
          }}></div>
          
          {/* Floating soft elements */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/10 to-indigo-200/8 rounded-full blur-xl animate-soft-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-to-tl from-purple-200/8 to-pink-200/6 rounded-full blur-xl animate-soft-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                How We Work
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Our proven methodology ensures exceptional results through a structured, collaborative approach that guides you from concept to completion.
              </p>
            </div>

            {/* Curved Process Flow */}
            <div className="relative">
              {/* Curved connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 hidden lg:block">
                <svg className="w-full h-full" viewBox="0 0 1200 4" preserveAspectRatio="none">
                  <path 
                    d="M0,2 Q300,20 600,2 T1200,2" 
                    stroke="url(#gradient)" 
                    strokeWidth="2" 
                    fill="none"
                    className="animate-curve-flow"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "We dive deep into your business goals, target audience, and market landscape to understand your unique challenges and opportunities.",
                    icon: "🔍",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "bg-blue-50",
                    borderColor: "border-blue-200"
                  },
                  {
                    step: "02", 
                    title: "Strategy",
                    description: "Based on our findings, we develop a comprehensive digital strategy tailored to your specific needs and business objectives.",
                    icon: "📋",
                    color: "from-indigo-500 to-indigo-600",
                    bgColor: "bg-indigo-50",
                    borderColor: "border-indigo-200"
                  },
                  {
                    step: "03",
                    title: "Design",
                    description: "Our creative team crafts stunning visual experiences that resonate with your audience and authentically reflect your brand.",
                    icon: "🎨",
                    color: "from-purple-500 to-purple-600",
                    bgColor: "bg-purple-50",
                    borderColor: "border-purple-200"
                  },
                  {
                    step: "04",
                    title: "Launch",
                    description: "We bring your vision to life with meticulous development, testing, and deployment of your digital solution.",
                    icon: "🚀",
                    color: "from-cyan-500 to-cyan-600",
                    bgColor: "bg-cyan-50",
                    borderColor: "border-cyan-200"
                  }
                ].map((process, index) => (
                  <div key={index} className="relative group">
                    {/* Step Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group-hover:border-gray-200">
                      {/* Step Number Badge */}
                      <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {process.step}
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${process.bgColor} ${process.borderColor} border-2 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        {process.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                          {process.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {process.description}
                        </p>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Connecting Arrow (Mobile) */}
                    {index < 3 && (
                      <div className="lg:hidden flex justify-center mt-6 mb-6">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Client Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
                Hear from our satisfied clients who have transformed their digital presence with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Craftovate transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
                  author: "Sarah Johnson",
                  role: "CEO, TechCorp",
                  rating: 5
                },
                {
                  quote: "The team's expertise in UI/UX design helped us increase user engagement by 300%. Outstanding work!",
                  author: "Michael Chen",
                  role: "Product Manager, InnovateLab",
                  rating: 5
                },
                {
                  quote: "Professional, reliable, and results-driven. They delivered our project on time and within budget.",
                  author: "Emily Rodriguez",
                  role: "Marketing Director, GrowthCo",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-8 bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Corporate */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
      `}</style>
    </div>
  );
};

export default ServicesPage;
