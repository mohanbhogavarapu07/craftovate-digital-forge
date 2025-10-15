import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      description: "Complete brand identity redesign for a tech startup"
    },
    {
      title: "EcoStore E-commerce",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Modern e-commerce platform for sustainable products"
    },
    {
      title: "FinanceHub Profile",
      category: "Company Profile",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      description: "Professional company profile for financial services"
    },
    {
      title: "FitLife Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      description: "Multi-channel marketing campaign for fitness brand"
    },
    {
      title: "CloudTech Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      description: "SaaS platform website with custom illustrations"
    },
    {
      title: "GreenLeaf Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      description: "Organic brand identity with eco-friendly aesthetic"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Some of my latest work and projects
          </p>
        </div>

        {/* Portfolio Grid with Shared Overlay */}
        <div className="relative mb-12">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Card-specific gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shared Overlay covering entire grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none rounded-2xl" />
          
          {/* View More Button positioned on overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <Link to="/portfolio">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 hover:shadow-xl hover:scale-105 group transition-all duration-300 px-6 py-3 text-lg font-semibold rounded-full shadow-lg"
              >
                View More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
