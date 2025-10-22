import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Craftovate completely transformed our brand identity. Their creative approach and attention to detail resulted in a stunning website that perfectly captures our vision. Our conversion rates have increased by 150%!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoLife",
      content: "Working with Craftovate was an absolute pleasure. They took the time to understand our values and created a brand that truly resonates with our audience. The marketing strategy they developed has been instrumental in our growth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, FinanceHub",
      content: "The team at Craftovate exceeded all expectations. Their innovative design solutions and technical expertise delivered a platform that our users love. Highly recommend them for any digital project!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from businesses we've helped succeed.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-3xl gradient-card border hover:shadow-xl transition-smooth h-full overflow-hidden">
                {/* Quote Icon with Gradient */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="absolute top-6 right-6"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-10 flex items-center justify-center`}>
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>
                </motion.div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                  "{testimonial.content}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-md opacity-50`} />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover relative z-10 border-2 border-white dark:border-gray-800"
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Decorative Gradient */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
