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
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        {/* Clean Luxury Layout - Split Section */}
        <div className="grid lg:grid-cols-2 gap-0 min-h-[80vh]">
          
          {/* LEFT SIDE - Full Image with Gradient Overlay */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Our Artisans at Work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE - Clean White Background with Typography */}
          <div className="bg-white flex items-center justify-center p-16">
            <div className="max-w-md">
              {/* Title */}
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-wider uppercase">
                Handcrafted with Love
              </h2>
              
              {/* Thin Underline Accent */}
              <div className="w-16 h-0.5 bg-orange-400 mb-12"></div>
              
              {/* Description Paragraphs */}
              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p className="text-lg font-light">
                  Like a master potter shaping clay, we mold digital experiences with patience, 
                  skill, and an unwavering commitment to excellence.
                </p>
                <p className="text-lg font-light">
                  Every project begins with understanding your vision, then we carefully craft 
                  each element by hand, ensuring no detail is overlooked.
                </p>
                <p className="text-lg font-light">
                  We believe in the power of human touch in digital creation, where technology 
                  serves as our tools, not our master.
                </p>
              </div>
              
              {/* Learn More Link */}
              <div className="mt-12">
                <a 
                  href="#about" 
                  className="text-gray-900 font-medium tracking-wider uppercase text-sm hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  Learn More
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
