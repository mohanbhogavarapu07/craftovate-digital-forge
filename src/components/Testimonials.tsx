import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "This company surpasses its competitors in service quality. Their products are of high quality, delivered promptly. I highly recommend this company.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoLife",
      content: "Working with Craftovate was an absolute pleasure. They took the time to understand our values and created a brand that truly resonates with our audience.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, FinanceHub",
      content: "The team at Craftovate exceeded all expectations. Their innovative design solutions and technical expertise delivered a platform that our users love.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "CTO, InnovateTech",
      content: "The mobile app Craftovate developed for us has been a game-changer. The user experience is seamless, and the performance is outstanding.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "Founder, GreenFuture",
      content: "Craftovate's digital marketing strategy helped us reach new heights. Their data-driven approach and creative campaigns increased our brand awareness by 200%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alex Kumar",
      role: "Founder, EduTech Solutions",
      content: "Their AI integration services revolutionized our platform. The automation features they implemented saved us countless hours and improved our efficiency by 400%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      role: "Marketing Manager, HealthTech",
      content: "Craftovate's UI/UX design transformed our application completely. The user feedback has been overwhelmingly positive, and our app store ratings have improved significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const cardWidth = 500; // testimonial card width

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset scroll when we've scrolled through all cards
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="pt-8 pb-12 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Client Feedback
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Don't just take our word for it - hear from businesses we've helped succeed.
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Testimonial Cards */}
        <motion.div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative w-[500px] h-[300px] md:w-[600px] md:h-[350px] flex-shrink-0"
              initial={{ opacity: 0, y: 100, rotateX: 15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0 
              } : { opacity: 0, y: 100, rotateX: 15 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + (index * 0.1), 
                ease: "easeOut" 
              }}
            >
              {/* Main Testimonial Card - Soft Pastel Yellow */}
              <div className="relative w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl shadow-2xl overflow-hidden">
                {/* Thick Black Rounded Frame */}
                <div className="absolute inset-2 border-4 border-black rounded-xl"></div>
                
                {/* Testimonial Text with Inline Quotes */}
                <div className="absolute inset-0 flex items-center justify-center px-12 pt-8 pb-12">
                  <p className="text-lg font-medium text-gray-800 text-center leading-relaxed font-['Inter',sans-serif]">
                    <span className="text-4xl font-bold text-black mr-2">"</span>
                    {testimonial.content}
                    <span className="text-4xl font-bold text-black ml-2">"</span>
                  </p>
                </div>
                
                {/* 5 Solid Black Stars */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
              </div>

              {/* Floating Polaroid Photo - Desktop: Top Right, Mobile: Top Center */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 md:transform md:rotate-3 transform rotate-2">
                <div className="relative">
                  {/* Polaroid Photo */}
                  <div className="w-24 h-28 bg-white rounded-lg shadow-lg p-2 border-2 border-gray-300">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  
                  {/* Realistic Black Paperclip */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black rounded-full opacity-80"></div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full opacity-60"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
