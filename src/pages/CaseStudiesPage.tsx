import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "TechVision: 300% Growth in 6 Months",
      client: "TechVision SaaS",
      industry: "Technology",
      challenge: "A B2B SaaS startup needed to establish brand credibility and generate qualified leads in a competitive market.",
      solution: "We developed a comprehensive brand identity, built a conversion-optimized website, and implemented a targeted content marketing strategy.",
      results: [
        { metric: "300%", label: "Lead Generation Increase" },
        { metric: "85%", label: "Website Conversion Rate" },
        { metric: "5x", label: "Social Media Engagement" }
      ],
      testimonial: "Craftovate transformed our digital presence. The results exceeded all our expectations.",
      author: "Sarah Chen, CEO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "GreenLife: Sustainable Brand Transformation",
      client: "GreenLife Organics",
      industry: "E-commerce",
      challenge: "An organic food retailer wanted to differentiate themselves and communicate their sustainability commitment.",
      solution: "Created an eco-friendly brand identity, designed a seamless e-commerce platform, and developed storytelling content.",
      results: [
        { metric: "250%", label: "Online Sales Growth" },
        { metric: "92%", label: "Customer Satisfaction" },
        { metric: "4.8", label: "Average Order Value Increase" }
      ],
      testimonial: "The team captured our values perfectly and helped us connect with our ideal customers.",
      author: "Michael Torres, Founder",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    },
    {
      title: "FinanceHub: Digital First Banking",
      client: "FinanceHub",
      industry: "Financial Services",
      challenge: "A fintech company needed to build trust while appealing to younger, tech-savvy customers.",
      solution: "Developed a modern yet trustworthy brand identity, created an intuitive web platform, and implemented educational content strategy.",
      results: [
        { metric: "150k+", label: "New User Signups" },
        { metric: "40%", label: "Reduced Support Tickets" },
        { metric: "4.9/5", label: "App Store Rating" }
      ],
      testimonial: "Craftovate understood both the technical and emotional aspects of our brand. Exceptional work.",
      author: "Jennifer Liu, CMO",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Case{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real results from real clients. See how we've helped businesses achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-violet/20" />
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="flex gap-2 mb-4">
                        <Badge className="bg-gradient-to-r from-brand-blue to-brand-violet text-white">
                          {study.industry}
                        </Badge>
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-brand-blue mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Challenge
                          </h3>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-brand-violet mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Solution
                          </h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-brand-purple mb-4 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Results
                          </h3>
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="text-center p-4 rounded-lg bg-muted/30">
                                <div className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                                  {result.metric}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {result.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-l-4 border-brand-blue pl-4 py-2 bg-muted/30 rounded-r">
                          <p className="italic text-muted-foreground mb-2">"{study.testimonial}"</p>
                          <p className="text-sm font-semibold">— {study.author}</p>
                        </div>

                        <Button className="bg-gradient-to-r from-brand-blue to-brand-violet text-white hover:shadow-elegant group">
                          View Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
