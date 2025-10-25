import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  ShoppingCart, 
  Package, 
  Star, 
  ExternalLink, 
  Leaf, 
  Utensils, 
  Users, 
  Award, 
  Clock, 
  TrendingUp, 
  Quote, 
  Mail, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Filter,
  Grid,
  List,
  ArrowRight,
  Calendar,
  Tag,
  Eye,
  Heart,
  Share2
} from "lucide-react";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState(null);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0
  });

  const categories = ["All", "Web Development", "UI/UX Design", "Mobile Apps", "E-commerce"];

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


  const projects = [
    {
      title: "EcoStore E-commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce platform for sustainable products with AI-powered recommendations and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      isEcoStore: true,
      rating: 4.9,
      completedDate: "2 weeks ago",
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      views: 1250,
      likes: 89,
      tags: ["E-commerce", "AI", "Sustainability", "React"]
    },
    {
      title: "HealthCare Portal System",
      category: "Web Development",
      description: "Comprehensive patient portal with intuitive user experience, appointment scheduling, and medical records management.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      isMedical: true,
      rating: 4.8,
      completedDate: "1 month ago",
      skills: ["React", "TypeScript", "Express", "PostgreSQL", "JWT"],
      views: 980,
      likes: 67,
      tags: ["Healthcare", "Portal", "Management", "Security"]
    },
    {
      title: "AGRO-MARKETING Platform",
      category: "UI/UX Design",
      description: "Comprehensive agricultural marketing platform with modern UI/UX design, analytics dashboard, and digital marketing tools.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      isAgriculture: true,
      rating: 4.9,
      completedDate: "3 weeks ago",
      skills: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
      views: 1450,
      likes: 112,
      tags: ["Agriculture", "Marketing", "Analytics", "UI/UX"]
    },
    {
      title: "FoodieHub Delivery App",
      category: "Mobile Apps",
      description: "Modern food delivery app with intuitive user interface, real-time tracking, and seamless ordering experience.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      isFoodDelivery: true,
      rating: 4.7,
      completedDate: "1 week ago",
      skills: ["React Native", "Figma", "Adobe XD", "Sketch", "Marvel"],
      views: 2100,
      likes: 156,
      tags: ["Food Delivery", "Mobile", "Real-time", "UI/UX"]
    },
    {
      title: "FinTech Dashboard",
      category: "Web Development",
      description: "Advanced financial dashboard with real-time analytics, transaction monitoring, and comprehensive reporting tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      isFinTech: true,
      rating: 4.8,
      completedDate: "2 weeks ago",
      skills: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      views: 1680,
      likes: 98,
      tags: ["FinTech", "Analytics", "Dashboard", "Real-time"]
    },
    {
      title: "E-Learning Platform",
      category: "Web Development",
      description: "Comprehensive e-learning platform with video streaming, progress tracking, and interactive course management.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      isElearning: true,
      rating: 4.6,
      completedDate: "3 weeks ago",
      skills: ["React", "Node.js", "MongoDB", "AWS", "WebRTC"],
      views: 1320,
      likes: 87,
      tags: ["E-Learning", "Video", "Education", "Platform"]
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Navigation and Projects */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our innovative solutions that drive business growth and digital transformation. 
              Explore our journey of excellence in the digital landscape.
            </p>
          </div>
        </div>

        {/* Navigation & Filters */}
        <div className="py-6 bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                    <button
                  key={category}
                  onClick={() => setFilter(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        filter === category 
                          ? "bg-blue-500 text-white shadow-lg" 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                >
                  {category}
                    </button>
                  ))}
                </div>

                {/* View Controls */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md transition-all duration-300 ${
                        viewMode === "grid" ? "bg-white shadow-sm text-blue-500" : "text-gray-500"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md transition-all duration-300 ${
                        viewMode === "list" ? "bg-white shadow-sm text-blue-500" : "text-gray-500"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {filteredProjects.length} projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-white"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Overlay Actions */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                            <Heart className="w-4 h-4 text-gray-700" />
                          </button>
                          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                            <Share2 className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>
                  </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      {project.category}
                    </Badge>
                      </div>

                      {/* View Project Button */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                          <Eye className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{project.rating}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {project.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {project.likes}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {project.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.skills.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.completedDate}
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          Learn More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-80 h-48 md:h-auto overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-gray-900">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">{project.rating}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {project.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {project.likes}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.completedDate}
                          </div>
                          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            View Project <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}
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
