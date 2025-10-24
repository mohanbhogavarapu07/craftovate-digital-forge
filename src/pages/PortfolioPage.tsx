import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ShoppingCart, Package, Star, ExternalLink, Leaf, Utensils, Users, Award, Clock, TrendingUp, Quote, Mail, Phone, MessageCircle, ChevronRight, Play, Pause } from "lucide-react";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const videoSectionRef = useRef(null);

  const categories = ["All", "Web Development", "UI/UX Design"];

  // Animate counters on component mount
  useEffect(() => {
    const animateCounters = () => {
      const targetCounters = { projects: 150, clients: 89, years: 5, awards: 12 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          projects: Math.floor(targetCounters.projects * easeOutQuart),
          clients: Math.floor(targetCounters.clients * easeOutQuart),
          years: Math.floor(targetCounters.years * easeOutQuart),
          awards: Math.floor(targetCounters.awards * easeOutQuart)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for cursor animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Video controls
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "EcoStore E-commerce",
      category: "Web Development",
      description: "Modern e-commerce platform for sustainable products",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      isEcoStore: true,
      rating: 4.9,
      completedDate: "2 weeks ago",
      skills: ["React", "TypeScript", "Node.js", "MongoDB"]
    },
    {
      title: "HealthCare Portal",
      category: "Web Development",
      description: "Patient portal with intuitive user experience",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      isMedical: true,
      rating: 4.8,
      completedDate: "1 month ago",
      skills: ["React", "TypeScript", "Express", "PostgreSQL"]
    },
    {
      title: "AGRO-MARKETING Platform",
      category: "UI/UX Design",
      description: "Comprehensive agricultural marketing platform with modern UI/UX design",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      isAgriculture: true,
      rating: 4.9,
      completedDate: "3 weeks ago",
      skills: ["Figma", "Adobe XD", "Sketch", "Principle"]
    },
    {
      title: "FoodieHub Delivery",
      category: "UI/UX Design",
      description: "Modern food delivery app with intuitive user interface and seamless ordering experience",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      isFoodDelivery: true,
      rating: 4.7,
      completedDate: "1 week ago",
      skills: ["Figma", "Adobe XD", "Sketch", "Marvel"]
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
       {/* Hero Section */}
       <section className="pt-24 pb-0 sm:pt-28 sm:pb-0 lg:pt-32 lg:pb-0 bg-gradient-to-b from-purple-50/30 to-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto text-center">
             
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
               Our{" "}
               <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                 Portfolio
               </span>
             </h1>
             <p className="text-lg sm:text-xl text-gray-600 mb-0 max-w-2xl mx-auto">
               Explore our recent work and see how we've helped businesses transform their digital presence.
             </p>
           </div>
         </div>
       </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{counters.projects}+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-r from-brand-violet to-brand-purple rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{counters.clients}+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{counters.years}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{counters.awards}+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse Our Work</h2>
              <p className="text-muted-foreground">Filter by category to explore our diverse portfolio</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category 
                      ? "bg-gradient-to-r from-brand-blue to-brand-violet text-white shadow-lg transform scale-105" 
                      : "hover:bg-gray-50 hover:border-brand-blue/50 hover:text-brand-blue"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up cursor-pointer border-0 bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Project
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-gradient-to-r from-brand-blue to-brand-violet text-white px-3 py-1">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {project.rating}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {project.completedDate}
                      </div>
                      <Button variant="ghost" size="sm" className="text-brand-blue hover:text-brand-violet">
                        View Details <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-brand-blue/5 via-brand-violet/5 to-brand-purple/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss how we can help transform your ideas into stunning digital experiences. 
                  Our team is ready to bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-brand-blue to-brand-violet text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300">
                    <Mail className="h-5 w-5 mr-2" />
                    Start a Project
                  </Button>
                  <Button variant="outline" className="px-8 py-3 text-lg font-semibold border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300">
                    <Phone className="h-5 w-5 mr-2" />
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        ref={videoSectionRef}
        className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
        onMouseEnter={() => setIsVideoHovered(true)}
        onMouseLeave={() => setIsVideoHovered(false)}
      >
        {/* Animated Cursor */}
        <div
          ref={cursorRef}
          className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full opacity-0 transition-all duration-300 mix-blend-difference"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            opacity: isVideoHovered ? 1 : 0,
            transform: isVideoHovered ? 'scale(1.5)' : 'scale(1)',
          }}
        />

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Crafted with{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                  Purpose
                </span>
                ,<br />
                Designed with{" "}
                <span className="bg-gradient-to-r from-brand-purple via-brand-violet to-brand-blue bg-clip-text text-transparent">
                  Passion
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Watch how Craftovate turns creativity into craft. Experience our journey of innovation, 
                design excellence, and digital transformation.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative group">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  poster="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=675&fit=crop&auto=format&q=80"
                  muted
                  loop
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-all duration-500" />

                {/* Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    onClick={toggleVideo}
                    className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-gray-900 hover:scale-110 transition-all duration-300 shadow-2xl group-hover:opacity-100 opacity-90"
                  >
                    {isVideoPlaying ? (
                      <Pause className="h-8 w-8 ml-1" />
                    ) : (
                      <Play className="h-8 w-8 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-sm font-medium">Craftovate Showcase</div>
                      <div className="text-xs text-gray-300">2:30 duration</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20"
                        onClick={toggleVideo}
                      >
                        {isVideoPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-brand-blue rounded-full animate-ping" />
                <div className="absolute top-6 right-6 w-1 h-1 bg-brand-violet rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-brand-purple rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-brand-violet to-brand-purple rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.8s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                Ready to see your vision come to life?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-violet text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300">
                  <Play className="h-5 w-5 mr-2" />
                  Start Your Project
                </Button>
                <Button variant="outline" className="px-8 py-3 text-lg font-semibold border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Discuss Ideas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              {selectedProject?.isEcoStore ? (
                <>
              <ShoppingCart className="h-6 w-6 text-brand-blue" />
              EcoStore E-commerce Platform
                </>
              ) : selectedProject?.isMedical ? (
                <>
                  <Package className="h-6 w-6 text-brand-blue" />
                  HealthCare Portal
                </>
              ) : selectedProject?.isAgriculture ? (
                <>
                  <Leaf className="h-6 w-6 text-brand-blue" />
                  AGRO-MARKETING Platform
                </>
              ) : selectedProject?.isFoodDelivery ? (
                <>
                  <Utensils className="h-6 w-6 text-brand-blue" />
                  FoodieHub Delivery
                </>
              ) : null}
            </DialogTitle>
            <DialogDescription className="text-lg">
              {selectedProject?.isEcoStore 
                ? "A modern, AI-powered e-commerce platform for sustainable products"
                : selectedProject?.isMedical
                ? "A comprehensive patient portal with intuitive user experience"
                : selectedProject?.isAgriculture
                ? "A comprehensive agricultural marketing platform with modern UI/UX design"
                : selectedProject?.isFoodDelivery
                ? "A modern food delivery app with intuitive user interface and seamless ordering experience"
                : ""
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Project Description */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Project Overview</h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject?.isEcoStore 
                  ? "EcoStore is a comprehensive e-commerce platform designed for sustainable and eco-friendly products. Built with modern web technologies, it features AI-powered product recommendations, seamless user authentication, and a complete shopping experience from browsing to checkout."
                  : selectedProject?.isMedical
                  ? "HealthCare Portal is a comprehensive patient management system designed to streamline healthcare services. Built with modern web technologies, it features patient registration, appointment scheduling, medical records management, and a complete healthcare experience from consultation to follow-up."
                  : selectedProject?.isAgriculture
                  ? "AGRO-MARKETING Platform is a comprehensive agricultural marketing solution designed to help farmers and agricultural businesses promote their products and services. Built with modern UI/UX principles, it features product showcasing, market analytics, customer engagement tools, and digital marketing capabilities to maximize agricultural business growth and market reach."
                  : selectedProject?.isFoodDelivery
                  ? "FoodieHub Delivery is a comprehensive food delivery platform designed to connect customers with their favorite restaurants. Built with modern UI/UX principles, it features intuitive ordering flow, real-time tracking, payment integration, and personalized recommendations to create a seamless food delivery experience for both customers and restaurant partners."
                  : ""
                }
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4 text-brand-blue" />
                    Key Features
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {selectedProject?.isEcoStore ? (
                      <>
                    <li>• AI-powered product recommendations</li>
                    <li>• User authentication & profile management</li>
                    <li>• Shopping cart & checkout system</li>
                    <li>• Product categories & filtering</li>
                    <li>• Order tracking & history</li>
                    <li>• Responsive design for all devices</li>
                      </>
                    ) : selectedProject?.isMedical ? (
                      <>
                        <li>• Patient registration & profile management</li>
                        <li>• Appointment scheduling system</li>
                        <li>• Medical records & history tracking</li>
                        <li>• Doctor & department management</li>
                        <li>• Prescription & treatment plans</li>
                        <li>• Secure patient data management</li>
                      </>
                    ) : selectedProject?.isAgriculture ? (
                      <>
                        <li>• Product showcase & catalog management</li>
                        <li>• Market analytics & insights dashboard</li>
                        <li>• Customer engagement & communication tools</li>
                        <li>• Digital marketing campaign management</li>
                        <li>• Social media integration & sharing</li>
                        <li>• Mobile-responsive design for field marketing</li>
                      </>
                    ) : selectedProject?.isFoodDelivery ? (
                      <>
                        <li>• Intuitive restaurant browsing & menu display</li>
                        <li>• Real-time order tracking & delivery updates</li>
                        <li>• Secure payment integration & checkout flow</li>
                        <li>• Personalized recommendations & favorites</li>
                        <li>• Restaurant partner management dashboard</li>
                        <li>• Mobile-first responsive design</li>
                      </>
                    ) : null}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-brand-blue" />
                    Technologies Used
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {selectedProject?.isEcoStore || selectedProject?.isMedical ? (
                      <>
                    <li>• React with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Framer Motion for animations</li>
                    <li>• React Router for navigation</li>
                    <li>• Context API for state management</li>
                    <li>• Lucide React for icons</li>
                      </>
                    ) : selectedProject?.isAgriculture ? (
                      <>
                        <li>• Figma for UI/UX design</li>
                        <li>• Adobe Creative Suite</li>
                        <li>• Sketch for prototyping</li>
                        <li>• Principle for animations</li>
                        <li>• InVision for collaboration</li>
                        <li>• Zeplin for handoff</li>
                      </>
                    ) : selectedProject?.isFoodDelivery ? (
                      <>
                        <li>• Figma for UI/UX design</li>
                        <li>• Adobe XD for prototyping</li>
                        <li>• Sketch for wireframing</li>
                        <li>• Principle for micro-interactions</li>
                        <li>• Marvel for user testing</li>
                        <li>• Abstract for version control</li>
                      </>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gradient-to-r from-brand-blue/5 to-brand-violet/5 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-violet rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground italic mb-2">
                    "Craftovate delivered beyond our expectations. Their attention to detail and modern approach 
                    helped us achieve a 300% increase in user engagement within the first month."
                  </p>
                  <div className="text-sm font-semibold text-gray-900">
                    Sarah Johnson, CEO
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {selectedProject?.isEcoStore ? "EcoStore" : selectedProject?.isMedical ? "HealthCare Portal" : selectedProject?.isAgriculture ? "AGRO-MARKETING" : "FoodieHub"}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Preview */}
            <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white shadow-lg">
              {/* Browser Header */}
              <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 text-center">
                    localhost:5173
                  </div>
                </div>
                <div className="w-4 h-4"></div>
              </div>
              
              {/* Website Screenshot */}
              <div className="relative">
                <img
                  src={selectedProject?.isEcoStore 
                    ? "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&auto=format&q=80"
                    : selectedProject?.isMedical
                    ? "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&auto=format&q=80"
                    : selectedProject?.isAgriculture
                    ? "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop&auto=format&q=80"
                    : selectedProject?.isFoodDelivery
                    ? "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop&auto=format&q=80"
                    : ""
                  }
                  alt={selectedProject?.title}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Stats Card */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-xl font-bold text-green-600">
                    {selectedProject?.isEcoStore ? "50K+" : selectedProject?.isMedical ? "10K+" : selectedProject?.isAgriculture ? "500+" : selectedProject?.isFoodDelivery ? "25K+" : ""}
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedProject?.isEcoStore ? "Happy Customers" : selectedProject?.isMedical ? "Patients Served" : selectedProject?.isAgriculture ? "Marketing Campaigns" : selectedProject?.isFoodDelivery ? "Orders Delivered" : ""}
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button 
                  onClick={() => {
                    // Open the project in a new tab based on project type
                    if (selectedProject?.isEcoStore) {
                      window.open('https://ecommerce-gjcf.vercel.app/', '_blank');
                    } else if (selectedProject?.isMedical) {
                      window.open('https://hospitalmanagement-m4gk.vercel.app/', '_blank');
                    } else if (selectedProject?.isAgriculture) {
                      window.open('https://www.figma.com/proto/rWudI06OmncVl2bDLu5rkk/AGRO-MARKETING?node-id=224-1420', '_blank');
                    } else if (selectedProject?.isFoodDelivery) {
                      window.open('https://www.figma.com/proto/QcTz7tLO8otcBjIh0F7x4u/Food-Delivery-Application?node-id=141-6029', '_blank');
                    }
                  }}
                  className="bg-white text-black hover:bg-gray-100 px-6 py-3 text-lg font-semibold"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Complete Website
                </Button>
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-brand-blue">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-brand-violet">2.5x</div>
                <div className="text-sm text-muted-foreground">Performance Boost</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-brand-purple">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioPage;