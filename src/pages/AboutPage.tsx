import { Lightbulb, Rocket, TrendingUp, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Creativity First",
      description: "We believe in pushing creative boundaries to deliver unique and memorable digital experiences."
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Leveraging cutting-edge technology and design trends to keep your brand ahead of the curve."
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Every project is designed with your business growth and success in mind."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work closely with our clients, treating every project as a collaborative journey."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Committed to delivering exceptional quality in every aspect of our work."
    },
    {
      icon: Target,
      title: "Results Oriented",
      description: "We measure success by the tangible results and impact we create for your business."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Craftovate
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are a creative digital studio passionate about helping businesses craft their digital identity and elevate their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2020, Craftovate emerged from a simple belief: every business deserves a digital presence that truly represents their vision and values.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small team of designers and developers has grown into a full-service digital studio, helping startups and established businesses alike create memorable brand experiences.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have worked with over 100+ clients across various industries, delivering projects that not only look great but drive real business results.
                </p>
              </div>
              <div className="animate-fade-in-up">
                <div className="bg-gradient-to-br from-brand-blue/20 via-brand-violet/20 to-brand-purple/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                        10+
                      </div>
                      <div className="text-muted-foreground">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-brand-violet to-brand-purple bg-clip-text text-transparent">
                        50+
                      </div>
                      <div className="text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                        5+
                      </div>
                      <div className="text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 group-hover:from-brand-blue/20 group-hover:to-brand-violet/20 transition-all">
                      <value.icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower businesses with exceptional digital solutions that combine creativity, innovation, and strategic thinking. We're committed to being more than just a service provider—we're your partner in digital success, dedicated to crafting experiences that resonate with your audience and drive measurable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
