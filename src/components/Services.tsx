import { Palette, Code, FileText, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity Design",
      description: "Create a memorable brand identity with custom logos, color palettes, and visual guidelines that resonate with your audience.",
      gradient: "from-brand-blue to-brand-violet"
    },
    {
      icon: Code,
      title: "Website Design & Development",
      description: "Build stunning, responsive websites that combine beautiful design with powerful functionality and seamless user experience.",
      gradient: "from-brand-violet to-brand-purple"
    },
    {
      icon: FileText,
      title: "Company Profile & Marketing Collateral",
      description: "Design professional company profiles, brochures, and marketing materials that communicate your value proposition effectively.",
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      icon: Target,
      title: "Digital Strategy & Content Creation",
      description: "Develop comprehensive digital strategies and engaging content that attracts, converts, and retains your ideal customers.",
      gradient: "from-brand-blue to-brand-purple"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions to elevate your digital presence and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative p-8 rounded-3xl bg-card border hover:shadow-xl transition-smooth overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}></div>
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-md`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
