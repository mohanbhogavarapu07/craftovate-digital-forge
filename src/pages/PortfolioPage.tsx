import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ShoppingCart, Package, Star, ExternalLink } from "lucide-react";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Branding", "Web Design", "Marketing", "Company Profile"];

  const projects = [
    {
      title: "TechStart Branding",
      category: "Branding",
      description: "Complete brand identity redesign for a tech startup",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
    },
    {
      title: "EcoStore E-commerce",
      category: "Web Design",
      description: "Modern e-commerce platform for sustainable products",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      isEcoStore: true
    },
    {
      title: "FinanceHub Profile",
      category: "Company Profile",
      description: "Professional company profile for financial services",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
      title: "FitLife Campaign",
      category: "Marketing",
      description: "Multi-channel marketing campaign for fitness brand",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
    },
    {
      title: "CloudTech Website",
      category: "Web Design",
      description: "SaaS platform website with custom illustrations",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    },
    {
      title: "GreenLeaf Identity",
      category: "Branding",
      description: "Organic brand identity with eco-friendly aesthetic",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    },
    {
      title: "MediaPro Collateral",
      category: "Marketing",
      description: "Complete marketing collateral suite for media agency",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop"
    },
    {
      title: "HealthCare Portal",
      category: "Web Design",
      description: "Patient portal with intuitive user experience",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      title: "RetailCo Profile",
      category: "Company Profile",
      description: "Annual report and company profile design",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
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
      <Dialog open={selectedProject?.isEcoStore} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-brand-blue" />
              EcoStore E-commerce Platform
            </DialogTitle>
            <DialogDescription className="text-lg">
              A modern, AI-powered e-commerce platform for sustainable products
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Project Description */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Project Overview</h4>
              <p className="text-muted-foreground leading-relaxed">
                EcoStore is a comprehensive e-commerce platform designed for sustainable and eco-friendly products. 
                Built with modern web technologies, it features AI-powered product recommendations, seamless user 
                authentication, and a complete shopping experience from browsing to checkout.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4 text-brand-blue" />
                    Key Features
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• AI-powered product recommendations</li>
                    <li>• User authentication & profile management</li>
                    <li>• Shopping cart & checkout system</li>
                    <li>• Product categories & filtering</li>
                    <li>• Order tracking & history</li>
                    <li>• Responsive design for all devices</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-brand-blue" />
                    Technologies Used
                  </h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• React with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Framer Motion for animations</li>
                    <li>• React Router for navigation</li>
                    <li>• Context API for state management</li>
                    <li>• Lucide React for icons</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive E-commerce Preview */}
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
              
              {/* E-commerce Website Screenshot */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&auto=format&q=80"
                  alt="EcoStore E-commerce Website"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Stats Card */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button 
                  onClick={() => {
                    // Open the e-commerce project in a new tab
                    // You can replace this URL with your actual e-commerce deployment URL
                    window.open('http://localhost:5173', '_blank');
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
