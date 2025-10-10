import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, Heart, Users, Zap, Trophy } from "lucide-react";

const CareersPage = () => {
  const openings = [
    {
      title: "Senior UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced designer to lead product design initiatives and mentor junior team members.",
      requirements: ["5+ years UX/UI design experience", "Expert in Figma", "Portfolio showcasing complex projects", "Strong communication skills"]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications using modern technologies.",
      requirements: ["3+ years full-stack development", "React, Node.js expertise", "Database design experience", "Agile methodology"]
    },
    {
      title: "Brand Strategist",
      department: "Strategy",
      location: "Remote",
      type: "Full-time",
      description: "Help clients define and position their brands in competitive markets.",
      requirements: ["4+ years brand strategy", "Strong analytical skills", "Excellent presentation abilities", "Client-facing experience"]
    },
    {
      title: "Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      description: "Create engaging content for our blog, client projects, and marketing materials.",
      requirements: ["2+ years content writing", "SEO knowledge", "Portfolio of published work", "AP style proficiency"]
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Oversee client projects from inception to delivery, ensuring quality and timely execution.",
      requirements: ["3+ years project management", "Agency experience preferred", "Excellent organizational skills", "Client relationship management"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Users,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours"
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Continuous learning and professional development"
    },
    {
      icon: Trophy,
      title: "Competitive Pay",
      description: "Market-leading salaries and performance bonuses"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Join{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Craftovate
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a team that's shaping the future of digital creativity. We're always looking for talented individuals who are passionate about what they do.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="mb-4 inline-block p-4 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-violet/10">
                      <benefit.icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <Card
                  key={index}
                  className="hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-gradient-to-r from-brand-blue to-brand-violet text-white">
                            {job.department}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-brand-blue to-brand-violet text-white hover:shadow-elegant">
                        Apply Now
                      </Button>
                    </div>
                    <CardDescription className="text-base">{job.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brand-blue" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-brand-blue mt-1">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always interested in hearing from talented people. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple text-white hover:shadow-elegant">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
