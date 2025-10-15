import { Lightbulb, Rocket, TrendingUp, Users, Award, Target, Linkedin, Twitter, Github } from "lucide-react";
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

  const teamMembers = [
    {
      name: "Revanth Vasa",
      role: "Founder",
      image: "/placeholder.svg",
      bio: "Revanth leads our vision and strategy with extensive experience in digital innovation and business development.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Surya Bogavarapu",
      role: "Co-Founder & CEO",
      image: "/placeholder.svg",
      bio: "Surya drives our company's growth and oversees strategic initiatives to deliver exceptional digital solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Poorna",
      role: "Co-Founder & CTO",
      image: "/placeholder.svg",
      bio: "Poorna leads our technical vision and ensures we stay at the forefront of technology and innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Bhavya",
      role: "CTO & COO",
      image: "/placeholder.svg",
      bio: "Bhavya manages our technical operations and ensures smooth execution of all projects and initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
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

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              The minds behind Craftovate
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Image */}
                <div className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500 overflow-hidden mb-4 group-hover:border-cyan-500 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-500 hover:text-gray-800 transition-colors duration-300 p-2 rounded-full hover:bg-gray-50"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
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
