import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart SaaS Platform",
      category: "Branding & Web Development",
      description: "Complete brand identity and web platform for a B2B SaaS startup",
      color: "from-brand-blue to-brand-violet"
    },
    {
      title: "EcoLife Brand Identity",
      category: "Branding & Marketing",
      description: "Sustainable brand design and marketing strategy for eco-friendly products",
      color: "from-brand-violet to-brand-purple"
    },
    {
      title: "FinanceHub Dashboard",
      category: "UI/UX Design & Development",
      description: "Modern dashboard interface for fintech platform with advanced analytics",
      color: "from-brand-purple to-brand-blue"
    },
    {
      title: "Creative Agency Website",
      category: "Web Design & Content",
      description: "Portfolio website with interactive animations and engaging content",
      color: "from-brand-blue to-brand-purple"
    },
    {
      title: "FoodTech Mobile App",
      category: "Mobile App Design",
      description: "User-friendly mobile app design for food delivery service",
      color: "from-brand-violet to-brand-blue"
    },
    {
      title: "Corporate Rebrand",
      category: "Brand Strategy",
      description: "Complete brand refresh for established corporate client",
      color: "from-brand-purple to-brand-violet"
    }
  ];

  return (
    <section id="portfolio" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-card border hover:shadow-xl transition-smooth animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-smooth`}></div>
              
              {/* Content overlay */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
