import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TeamPage = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & Creative Director",
      bio: "15+ years of experience in branding and design. Led creative teams at top agencies before founding Craftovate.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", email: "alex@craftovate.com" }
    },
    {
      name: "Sarah Mitchell",
      role: "Lead UX Designer",
      bio: "Passionate about creating intuitive user experiences. Former design lead at major tech companies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", email: "sarah@craftovate.com" }
    },
    {
      name: "David Chen",
      role: "Senior Developer",
      bio: "Full-stack developer specializing in modern web technologies. Builds scalable and performant applications.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", email: "david@craftovate.com" }
    },
    {
      name: "Emma Rodriguez",
      role: "Brand Strategist",
      bio: "Expert in brand positioning and marketing strategy. Helped 50+ companies define their brand voice.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", email: "emma@craftovate.com" }
    },
    {
      name: "Michael Park",
      role: "Digital Marketing Manager",
      bio: "Data-driven marketer with expertise in SEO, content marketing, and paid advertising campaigns.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", email: "michael@craftovate.com" }
    },
    {
      name: "Lisa Anderson",
      role: "Project Manager",
      bio: "Ensures smooth project delivery and client satisfaction. 10+ years in agency project management.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      social: { linkedin: "#", twitter: "#", email: "lisa@craftovate.com" }
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A passionate team of designers, developers, and strategists dedicated to bringing your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <div className="flex gap-4">
                        <a
                          href={member.social.linkedin}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                        >
                          <Twitter className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                        >
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-brand-blue font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/10 via-brand-violet/10 to-brand-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
            </p>
            <a href="/careers" className="inline-block">
              <button className="px-8 py-3 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple text-white rounded-lg hover:shadow-elegant transition-all">
                View Open Positions
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
