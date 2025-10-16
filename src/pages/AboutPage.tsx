import { Lightbulb, Rocket, TrendingUp, Users, Award, Target, Linkedin, Twitter, Github, Heart, CheckCircle, Zap, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import revanthImage from "@/assets/revanth.jpg";
import suryaImage from "@/assets/surya.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We pour our heart into every project, creating digital experiences that truly resonate with your audience and reflect your brand's essence.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: CheckCircle,
      title: "Trust & Reliability",
      description: "Building lasting partnerships through consistent delivery, transparent communication, and unwavering commitment to your success.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Zap,
      title: "Innovation Excellence",
      description: "Staying ahead of the curve with cutting-edge technology and creative solutions that set your brand apart in the digital landscape.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const teamMembers = [
    {
      name: "Revanth Vasa",
      role: "Founder",
      image: revanthImage,
      bio: "Revanth leads our vision and strategy with extensive experience in digital innovation and business development.",
      social: {
        linkedin: "https://linkedin.com/in/revanth-vasa",
        github: "https://github.com/revanth-vasa"
      }
    },
    {
      name: "Surya Bogavarapu",
      role: "Co-Founder & CEO",
      image: suryaImage,
      bio: "Surya drives our company's growth and oversees strategic initiatives to deliver exceptional digital solutions.",
      social: {
        linkedin: "https://linkedin.com/in/surya-bogavarapu",
        github: "https://github.com/surya-bogavarapu"
      }
    },
    {
      name: "Poorna",
      role: "Co-Founder & CTO",
      image: "/placeholder.svg",
      bio: "Poorna leads our technical vision and ensures we stay at the forefront of technology and innovation.",
      social: {
        linkedin: "https://linkedin.com/in/poorna",
        github: "https://github.com/poorna"
      }
    },
    {
      name: "Bhavya",
      role: "CTO & COO",
      image: "/placeholder.svg",
      bio: "Bhavya manages our technical operations and ensures smooth execution of all projects and initiatives.",
      social: {
        linkedin: "https://linkedin.com/in/bhavya",
        github: "https://github.com/bhavya"
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Modern Header */}
      <section className="relative py-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Flowing wave shapes */}
          <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 animate-gentle-flow" style={{
            clipPath: 'polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%)'
          }}></div>
          
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-tl from-purple-100/25 to-pink-100/15 animate-gentle-flow-reverse" style={{
            clipPath: 'polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%)',
            animationDelay: '3s'
          }}></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/15 rounded-full blur-xl animate-soft-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-tl from-purple-200/15 to-pink-200/10 rounded-full blur-xl animate-soft-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Crafting Digital Excellence Since 2020
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Craftovate
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
              We are a creative digital studio passionate about helping businesses craft their digital identity and elevate their online presence through innovative design and strategic thinking.
            </p>

          </div>
        </div>
      </section>

      {/* Our Story Section - Two Column Layout */}
      <section className="py-24 relative bg-white overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-100/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    Our Story
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
                </div>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2020, <span className="font-semibold text-gray-900">Craft</span> emerged from a simple belief: every business deserves a digital presence that truly represents their vision and values.
                  </p>
                  <p>
                    What started as a small team of passionate designers and developers has grown into a full-service digital studio, helping startups and established businesses alike create memorable brand experiences that drive real results.
                  </p>
                  <p>
                    Today, we're proud to have worked with <span className="font-semibold text-blue-600">500+ clients</span> across various industries, delivering projects that not only look great but create lasting impact and measurable growth.
                  </p>
                </div>

                {/* Key Achievements List */}
                <div className="space-y-4">
                  {[
                    "Award-winning design team",
                    "Industry-leading client satisfaction",
                    "Cutting-edge technology expertise",
                    "Proven track record of success"
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image with Achievement Boxes */}
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/src/assets/hero-image.jpg)' }}>
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Achievement Boxes */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">200+</div>
                      <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                    </div>
                  </div>
                      </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                    </div>
                  </div>
                      </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">5+</div>
                      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section - Modern Interactive Cards */}
      <section className="py-24 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-blue-50/30 to-indigo-50/20 animate-gentle-flow" style={{
            clipPath: 'polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%)'
          }}></div>
          
          <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-tl from-purple-50/20 to-pink-50/15 animate-gentle-flow-reverse" style={{
            clipPath: 'polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%)',
            animationDelay: '3s'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Meet the Visionaries
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                The creative minds and technical experts behind Craftovate's success, dedicated to bringing your digital vision to life.
              </p>
            </div>

            {/* Modern Team Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: 'center center'
                    }}
                  >
                    {/* Base Gradient Overlay - Always visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Hover Overlay - Darker for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Name and Role - Always at bottom, moves to top on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:top-6 group-hover:bottom-auto transition-all duration-500 ease-in-out">
                    <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                      {member.name}
                    </h3>
                    <p className="text-gray-200 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Hover Content Container - Centered */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Description - Appears after name/role moves to top */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 mb-6 max-w-xs">
                      <p className="text-white text-sm leading-relaxed font-light text-center">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social Icons - Appear after description */}
                    <div className="flex justify-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-400">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={member.social.github}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Subtle border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 relative bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-blue-50/40 to-indigo-50/30 animate-gentle-flow" style={{
            clipPath: 'polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%)'
          }}></div>
          
          <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-tl from-purple-50/30 to-pink-50/20 animate-gentle-flow-reverse" style={{
            clipPath: 'polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%)',
            animationDelay: '3s'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium mb-8">
                <Heart className="w-4 h-4" />
                What Drives Us
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                The core principles that guide everything we do, from project conception to final delivery and beyond.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Value Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 group-hover:border-gray-200 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Floating Animation */}
                    <div className="absolute inset-0 rounded-3xl animate-float-gentle"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
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
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
              <Target className="w-4 h-4" />
              Our Commitment
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Mission
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              To empower businesses with exceptional digital solutions that combine creativity, innovation, and strategic thinking. We're committed to being more than just a service provider—we're your partner in digital success, dedicated to crafting experiences that resonate with your audience and drive measurable growth.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
                View Our Work
              </button>
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
        
        .animate-float-gentle {
          animation: float 8s ease-in-out infinite;
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
        
        /* Professional Smooth Animation Effects */
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
        
        /* Modern Team Card Animations */
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Enhanced hover effects for team cards */
        .group:hover .group-hover\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\:translate-y-0 {
          transform: translateY(0);
        }
        
        /* Smooth overlay transitions */
        .group:hover .group-hover\:opacity-100 {
          opacity: 1;
        }
        
        /* Backdrop blur effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
        
        /* Modern card hover effects */
        .group:hover {
          transform: translateY(-4px);
        }
        
        /* Smooth sequential animations */
        .group:hover .group-hover\:-translate-y-16 {
          transform: translateY(-4rem);
        }
        
        /* Icon hover effects */
        .group a:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }
        
        /* Enhanced shadow on hover */
        .group:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
