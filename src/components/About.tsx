import { Lightbulb, Rocket, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "We bring fresh, innovative ideas to every project, ensuring your brand stands out."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and design trends to keep you ahead."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We focus on strategies that drive measurable results and business growth."
    }
  ];

  return (
    <section id="about" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About Craftovate
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We blend creativity and technology to craft unique digital experiences. 
            Our mission is to help businesses transform their vision into powerful 
            online presences that captivate audiences and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group p-8 rounded-3xl gradient-card border hover:shadow-lg transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-glow">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
