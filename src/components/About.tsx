import { Lightbulb, Rocket, TrendingUp, Brain } from "lucide-react";

const About = () => {
  const featureCards = [
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
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Harnessing artificial intelligence to create smart, data-driven solutions for modern challenges."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FBFF] to-white"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #3B82F6 1px, transparent 1px),
            linear-gradient(-45deg, #3B82F6 1px, transparent 1px),
            linear-gradient(90deg, #3B82F6 1px, transparent 1px),
            linear-gradient(0deg, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px'
        }}></div>
      </div>
      
      {/* Soft Wave Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3B82F6"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#06B6D4"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            About Us
          </h2>
        </div>

        {/* Main Content Row - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                We blend creativity and technology to craft unique digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to help businesses transform their vision into powerful online presences.
              </p>
              <p className="text-lg leading-relaxed">
                We focus on strategies that drive measurable results and business growth.
              </p>
              <p className="text-lg leading-relaxed">
                Leveraging cutting-edge technology and design trends to keep you ahead.
              </p>
            </div>
          </div>

          {/* Right Column - Large Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Our Team at Work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>


        {/* Feature Cards Section */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <div
                key={card.title}
                className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-white/50 hover:border-blue-200/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with Enhanced Gradient */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  <card.icon className="w-8 h-8 text-white" />
                  {/* Icon Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
