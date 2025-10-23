import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ShoppingCart, Package, Star, ExternalLink, Leaf, Utensils } from "lucide-react";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web Development", "UI/UX Design"];

  const projects = [
    {
      title: "EcoStore E-commerce",
      category: "Web Development",
      description: "Modern e-commerce platform for sustainable products",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      isEcoStore: true
    },
    {
      title: "HealthCare Portal",
      category: "Web Development",
      description: "Patient portal with intuitive user experience",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      isMedical: true
    },
    {
      title: "AGRO-MARKETING Platform",
      category: "UI/UX Design",
      description: "Comprehensive agricultural marketing platform with modern UI/UX design",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      isAgriculture: true
    },
    {
      title: "FoodieHub Delivery",
      category: "UI/UX Design",
      description: "Modern food delivery app with intuitive user interface and seamless ordering experience",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      isFoodDelivery: true
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our recent work and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={filter === category ? "bg-gradient-to-r from-brand-blue to-brand-violet text-white" : ""}
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
                  className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-gradient-to-r from-brand-blue to-brand-violet text-white">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
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

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioPage;
