import { Palette, Code, FileText, Target, Megaphone, BarChart, Sparkles, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity Design",
      description: "Create a memorable brand identity that stands out in the market.",
      features: [
        "Logo Design & Brand Guidelines",
        "Visual Identity Systems",
        "Brand Strategy & Positioning",
        "Print & Digital Brand Assets"
      ],
      color: "from-brand-blue to-brand-violet"
    },
    {
      icon: Code,
      title: "Website Design & Development",
      description: "Beautiful, responsive websites that convert visitors into customers.",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "E-commerce Solutions",
        "CMS Integration"
      ],
      color: "from-brand-violet to-brand-purple"
    },
    {
      icon: FileText,
      title: "Company Profile & Marketing Collateral",
      description: "Professional materials that communicate your brand story effectively.",
      features: [
        "Company Profile Design",
        "Brochures & Catalogs",
        "Presentation Decks",
        "Marketing Materials"
      ],
      color: "from-brand-purple to-brand-blue"
    },
    {
      icon: Target,
      title: "Digital Strategy & Consulting",
      description: "Strategic guidance to maximize your digital presence and ROI.",
      features: [
        "Digital Marketing Strategy",
        "Competitor Analysis",
        "Growth Roadmapping",
        "Performance Optimization"
      ],
      color: "from-brand-blue to-brand-purple"
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand on social platforms.",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Community Management",
        "Paid Advertising Campaigns"
      ],
      color: "from-brand-violet to-brand-blue"
    },
    {
      icon: BarChart,
      title: "SEO & Analytics",
      description: "Improve visibility and track performance with data-driven insights.",
      features: [
        "Search Engine Optimization",
        "Google Analytics Setup",
        "Performance Tracking",
        "Monthly Reports & Insights"
      ],
      color: "from-brand-purple to-brand-violet"
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Intuitive and engaging user experiences that delight users.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Interface Design",
        "Usability Optimization"
      ],
      color: "from-brand-blue to-brand-violet"
    },
    {
      icon: Globe,
      title: "Content Creation",
      description: "Compelling content that tells your story and engages your audience.",
      features: [
        "Copywriting & Editing",
        "Blog Content",
        "Video Production",
        "Photography Services"
      ],
      color: "from-brand-violet to-brand-purple"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive digital solutions to elevate your brand and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <CardHeader>
                    <div className={`mb-4 inline-block p-4 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-brand-blue mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-violet group-hover:text-white group-hover:border-transparent transition-all">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/10 via-brand-violet/10 to-brand-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help elevate your brand and achieve your business goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple text-white hover:shadow-elegant">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
