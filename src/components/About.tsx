import { Lightbulb, Rocket, TrendingUp, Brain, HandHeart, Palette, Hammer } from "lucide-react";

const About = () => {
  const featureCards = [
    {
      icon: HandHeart,
      title: "Handcrafted Care",
      description: "Every project is crafted with the same attention to detail as a master artisan's work."
    },
    {
      icon: Palette,
      title: "Artistic Vision",
      description: "We blend traditional craftsmanship with modern digital techniques to create unique experiences."
    },
    {
      icon: TrendingUp,
      title: "Organic Growth",
      description: "We nurture your brand's growth naturally, like tending to a carefully cultivated garden."
    },
    {
      icon: Hammer,
      title: "Master Craftsmanship",
      description: "Years of experience and passion for perfection in every line of code and pixel we create."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"></div>
      
      {/* Handcrafted texture overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-10-9c4.9 0 9 4.1 9 9s-4.1 9-9 9-9-4.1-9-9 4.1-9 9-9z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Blue wave pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#06b6d4"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Handcrafted decorative elements */}
        <div className="absolute -top-16 -left-16 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
            <path d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute -top-8 -right-8 w-24 h-24 opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="8,4"/>
          </svg>
        </div>

        {/* Centered Heading with handcrafted styling */}
        <div className="text-center mb-20 animate-fade-in relative">
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900 relative">
              <span className="block">Our Craft</span>
              <span className="block text-cyan-600">Our Story</span>
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto leading-relaxed">
            Where traditional craftsmanship meets modern digital artistry
          </p>
        </div>

        {/* Main Content Row - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up relative">
            <div className="absolute -left-4 top-0 w-2 h-16 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 pl-6">
              Handcrafted with Love
            </h3>
            <div className="space-y-6 text-blue-800 pl-6">
              <p className="text-lg leading-relaxed font-light">
                Like a master potter shaping clay, we mold digital experiences with patience, 
                skill, and an unwavering commitment to excellence.
              </p>
              <p className="text-lg leading-relaxed font-light">
                Every project begins with understanding your vision, then we carefully craft 
                each element by hand, ensuring no detail is overlooked.
              </p>
              <p className="text-lg leading-relaxed font-light">
                We believe in the power of human touch in digital creation, where technology 
                serves as our tools, not our master.
              </p>
            </div>
          </div>

          {/* Right Column - Large Image with handcrafted frame */}
          <div className="animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Handcrafted frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl transform rotate-2"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl transform -rotate-1"></div>
              
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Our Artisans at Work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Feature Cards Section with handcrafted styling */}
        <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <div
                key={card.title}
                className="group relative p-8 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-2 border-blue-200/50 hover:border-blue-300/70 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Handcrafted texture overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
                
                {/* Icon with handcrafted styling */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  <card.icon className="w-8 h-8 text-white" />
                  {/* Handcrafted glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
                
                {/* Handcrafted underline */}
                <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
