import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");

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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
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
                  className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
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
    </div>
  );
};

export default PortfolioPage;
