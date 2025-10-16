import { Palette, Code, FileText, Target, Megaphone, BarChart, Sparkles, Globe, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServicesPage = () => {
  const [openDialogs, setOpenDialogs] = useState<{ [key: number]: boolean }>({});

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
      color: "from-brand-blue to-brand-violet",
      detailedDescription: "Our comprehensive branding service creates a cohesive visual identity that resonates with your target audience. We develop everything from your logo and color palette to complete brand guidelines that ensure consistency across all touchpoints.",
      process: [
        "Brand Discovery & Strategy",
        "Logo Design & Iteration",
        "Visual Identity Development",
        "Brand Guidelines Creation",
        "Implementation Support"
      ],
      deliverables: [
        "Primary & Secondary Logo Designs",
        "Complete Brand Guidelines Document",
        "Color Palette & Typography System",
        "Business Card & Letterhead Designs",
        "Social Media Brand Kit"
      ],
      timeline: "2-4 weeks",
      pricing: "Starting from $2,500"
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
      color: "from-brand-violet to-brand-purple",
      detailedDescription: "We create stunning, high-performance websites that not only look great but also drive conversions. Our development process ensures your site is fast, secure, and optimized for search engines.",
      process: [
        "Discovery & Planning",
        "Wireframing & Design",
        "Frontend Development",
        "Backend Integration",
        "Testing & Launch"
      ],
      deliverables: [
        "Responsive Website Design",
        "Content Management System",
        "SEO Optimization",
        "Performance Optimization",
        "3 Months Support"
      ],
      timeline: "4-8 weeks",
      pricing: "Starting from $5,000"
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
      color: "from-brand-purple to-brand-blue",
      detailedDescription: "Professional marketing materials that tell your company's story and showcase your services effectively. We create visually appealing collateral that builds trust and credibility with your clients.",
      process: [
        "Content Strategy & Planning",
        "Design Concept Development",
        "Content Integration",
        "Review & Refinement",
        "Print-Ready Production"
      ],
      deliverables: [
        "Company Profile Brochure",
        "Service Catalogs",
        "Presentation Templates",
        "Business Cards",
        "Marketing Flyers"
      ],
      timeline: "2-3 weeks",
      pricing: "Starting from $1,500"
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
      color: "from-brand-blue to-brand-purple",
      detailedDescription: "Strategic digital consulting to help you make informed decisions about your online presence. We analyze your current digital footprint and create a roadmap for sustainable growth.",
      process: [
        "Digital Audit & Analysis",
        "Competitor Research",
        "Strategy Development",
        "Implementation Planning",
        "Performance Monitoring"
      ],
      deliverables: [
        "Digital Strategy Report",
        "Competitor Analysis",
        "Growth Roadmap",
        "Implementation Guide",
        "Monthly Consultations"
      ],
      timeline: "2-3 weeks",
      pricing: "Starting from $3,000"
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
      color: "from-brand-violet to-brand-blue",
      detailedDescription: "Comprehensive social media management that builds your brand presence and engages your audience across all major platforms. We create content that resonates and drives meaningful engagement.",
      process: [
        "Platform Analysis & Strategy",
        "Content Calendar Creation",
        "Content Production",
        "Community Management",
        "Performance Analysis"
      ],
      deliverables: [
        "Social Media Strategy",
        "Monthly Content Calendar",
        "Visual Content Creation",
        "Community Management",
        "Performance Reports"
      ],
      timeline: "Ongoing",
      pricing: "Starting from $2,000/month"
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
      color: "from-brand-blue to-brand-violet",
      detailedDescription: "User-centered design that creates intuitive and engaging experiences. We focus on understanding your users' needs and creating interfaces that are both beautiful and functional.",
      process: [
        "User Research & Analysis",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      deliverables: [
        "User Research Report",
        "Wireframes & Prototypes",
        "High-Fidelity Designs",
        "Design System",
        "Usability Testing Report"
      ],
      timeline: "3-6 weeks",
      pricing: "Starting from $4,000"
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
      color: "from-brand-purple to-brand-violet",
      detailedDescription: "Data-driven SEO and analytics services that improve your search visibility and provide actionable insights. We help you understand your audience and optimize your digital presence for better results.",
      process: [
        "SEO Audit & Analysis",
        "Keyword Research",
        "Technical Optimization",
        "Content Strategy",
        "Performance Monitoring"
      ],
      deliverables: [
        "SEO Audit Report",
        "Keyword Strategy",
        "Technical Optimization",
        "Monthly Performance Reports",
        "Analytics Dashboard Setup"
      ],
      timeline: "Ongoing",
      pricing: "Starting from $1,500/month",
      comingSoon: true
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
      color: "from-brand-violet to-brand-purple",
      detailedDescription: "High-quality content creation that tells your brand story and engages your audience. From blog posts to video content, we create compelling materials that drive engagement and conversions.",
      process: [
        "Content Strategy Development",
        "Content Planning & Research",
        "Content Creation",
        "Review & Refinement",
        "Publishing & Promotion"
      ],
      deliverables: [
        "Content Strategy Document",
        "Blog Posts & Articles",
        "Video Content",
        "Photography",
        "Social Media Content"
      ],
      timeline: "Ongoing",
      pricing: "Starting from $1,200/month",
      comingSoon: true
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
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
                    {service.comingSoon ? (
                      <Button 
                        variant="outline" 
                        disabled
                        className="w-full opacity-50 cursor-not-allowed"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Coming Soon
                      </Button>
                    ) : (
                      <Dialog 
                        open={openDialogs[index] || false} 
                        onOpenChange={(open) => setOpenDialogs(prev => ({ ...prev, [index]: open }))}
                      >
                        <DialogTrigger asChild>
                          <Button 
                            size="lg"
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-medium cursor-pointer"
                            onClick={() => console.log('Learn More clicked for:', service.title)}
                          >
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <div className="flex items-center gap-4 mb-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                                <service.icon className="w-8 h-8" />
                              </div>
                              <div>
                                <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                                <DialogDescription className="text-base mt-2">
                                  {service.description}
                                </DialogDescription>
                              </div>
                            </div>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-3">Service Overview</h3>
                              <p className="text-muted-foreground">{service.detailedDescription}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="text-lg font-semibold mb-3">Our Process</h3>
                                <ul className="space-y-2">
                                  {service.process.map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="w-4 h-4 text-brand-blue mt-1 flex-shrink-0" />
                                      <span className="text-sm">{step}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold mb-3">What You'll Get</h3>
                                <ul className="space-y-2">
                                  {service.deliverables.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="w-4 h-4 text-brand-blue mt-1 flex-shrink-0" />
                                      <span className="text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                              <div>
                                <h4 className="font-semibold text-sm text-muted-foreground mb-1">Timeline</h4>
                                <p className="text-lg font-medium">{service.timeline}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm text-muted-foreground mb-1">Investment</h4>
                                <p className="text-lg font-medium">{service.pricing}</p>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              <Link to="/contact" className="flex-1">
                                <Button className="w-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple text-white">
                                  Get Started
                                </Button>
                              </Link>
                              <Link to="/contact">
                                <Button variant="outline" className="px-6">
                                  Contact Us
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
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