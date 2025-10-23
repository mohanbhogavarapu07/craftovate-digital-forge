import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Quote, Users, Award, Zap, Shield, Clock, DollarSign, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: { monthly: "$2,999", yearly: "$2,499" },
      period: "one-time",
      description: "Perfect for startups and small businesses looking to establish their digital presence",
      features: [
        "Logo Design & Brand Guidelines",
        "5-Page Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Social Media Graphics (5)",
        "2 Rounds of Revisions",
        "1 Month Support"
      ],
      highlighted: false,
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: { monthly: "$6,999", yearly: "$5,999" },
      period: "one-time",
      description: "Comprehensive solution for growing businesses ready to scale their brand",
      features: [
        "Complete Brand Identity Package",
        "10-Page Custom Website",
        "Advanced SEO Optimization",
        "Company Profile Design",
        "Social Media Strategy",
        "Email Marketing Templates",
        "Content Management System",
        "3 Months Support",
        "Unlimited Revisions"
      ],
      highlighted: true,
      badge: "Most Popular",
      icon: Star,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      period: "project-based",
      description: "Tailored solutions for established companies with complex requirements",
      features: [
        "Everything in Professional",
        "Custom Website Development",
        "E-commerce Integration",
        "Marketing Campaign Strategy",
        "Video Production",
        "Ongoing Brand Consultation",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom Analytics Dashboard",
        "Quarterly Strategy Reviews"
      ],
      highlighted: false,
      icon: Award,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const addons = [
    { name: "Additional Website Pages", price: "$299/page", icon: "📄" },
    { name: "Logo Animation", price: "$499", icon: "🎬" },
    { name: "Social Media Management", price: "$999/month", icon: "📱" },
    { name: "Content Writing", price: "$149/page", icon: "✍️" },
    { name: "Photography Services", price: "$799/day", icon: "📸" },
    { name: "Video Production", price: "$2,499/video", icon: "🎥" }
  ];

  const faqs = [
    {
      category: "General",
      icon: MessageCircle,
      questions: [
        {
          q: "What's included in the support period?",
          a: "Support includes bug fixes, minor content updates, and technical assistance. Major redesigns or new features are quoted separately."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! We offer flexible payment plans with 50% upfront and 50% upon project completion. Enterprise clients can arrange custom payment terms."
        }
      ]
    },
    {
      category: "Timeline & Process",
      icon: Clock,
      questions: [
        {
          q: "How long does a typical project take?",
          a: "Starter projects typically take 2-3 weeks, Professional packages 4-6 weeks, and Enterprise solutions are scoped individually based on requirements."
        },
        {
          q: "Can you work with tight deadlines?",
          a: "Yes! We offer rush services for projects with urgent timelines. Contact us to discuss your deadline and we'll let you know if we can accommodate it."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      icon: DollarSign,
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers, credit cards (Visa, Mastercard, AmEx), PayPal, and for enterprise clients, we can accommodate purchase orders and net payment terms."
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our work, we'll refund your payment or make revisions until you're happy."
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Craftovate transformed our brand identity and delivered a website that exceeded our expectations. The team's attention to detail is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content: "Professional service from start to finish. They understood our vision and brought it to life beautifully. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The Enterprise package was perfect for our needs. The ongoing support and strategic guidance have been invaluable for our growth.",
      rating: 5
    }
  ];

  const clientLogos = [
    "TechStart", "InnovateLab", "GrowthCo", "DigitalFirst", "CreativeHub", "NextGen"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
        {/* Background Animations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-blue-100/20 to-indigo-100/15 animate-gentle-flow" style={{
            clipPath: 'polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%)'
          }}></div>
          
          <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-tl from-purple-100/15 to-pink-100/10 animate-gentle-flow-reverse" style={{
            clipPath: 'polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%)',
            animationDelay: '3s'
          }}></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-indigo-200/8 rounded-full blur-xl animate-soft-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-tl from-purple-200/8 to-pink-200/6 rounded-full blur-xl animate-soft-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
                <DollarSign className="w-4 h-4 mr-2" />
                Transparent Pricing
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                Transparent Pricing for{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Every Project
              </span>
            </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Choose a plan that fits your goals. Simple, flexible, and built to help you grow.
              </p>

              {/* Pricing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                  One-time
                </span>
                <Switch
                  checked={isYearly}
                  onCheckedChange={setIsYearly}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-500"
                />
                <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                  Yearly Discount
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 shadow-lg">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`relative h-full transition-all duration-500 hover:shadow-2xl ${
                    plan.highlighted 
                      ? 'border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50/30 shadow-xl hover:-translate-y-2' 
                      : 'border-gray-100 hover:border-blue-200 hover:-translate-y-1'
                  }`}>
                    <CardHeader className="text-center pb-8 pt-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                      
                    <div className="mb-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {plan.price[isYearly ? 'yearly' : 'monthly']}
                      </span>
                      {plan.period && (
                          <span className="text-gray-500 ml-2 text-sm">/ {plan.period}</span>
                      )}
                    </div>
                      
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {plan.description}
                      </CardDescription>
                  </CardHeader>
                    
                    <CardContent className="pb-8">
                      <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-600 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                      
                    <Button
                        className={`w-full h-12 font-semibold text-lg transition-all duration-300 ${
                        plan.highlighted
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                        {plan.price[isYearly ? 'yearly' : 'monthly'] === "Custom" ? (
                          <div className="flex items-center gap-2">
                            Contact Sales
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        ) : (
                          "Get Started"
                        )}
                    </Button>
                  </CardContent>
                    
                    {/* Glowing effect for highlighted card */}
                    {plan.highlighted && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    )}
                </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Need something custom?
                  </h3>
                  
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Let's craft a plan that fits your unique needs and budget. Our team is ready to create a tailored solution just for you.
                  </p>
                  
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2">
                      Request Custom Quote
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Enhance your project with these popular add-on services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-100 hover:border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{addon.icon}</span>
                          <span className="font-semibold text-gray-900">{addon.name}</span>
                        </div>
                        <span className="text-blue-600 font-bold">{addon.price}</span>
                      </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
                <Users className="w-4 h-4 mr-2" />
                Client Testimonials
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted by Leading Companies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="text-gray-600 font-semibold">{logo}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
                <MessageCircle className="w-4 h-4 mr-2" />
                Common Questions
              </Badge>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Pricing FAQ
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Find answers to common questions about our pricing and services
              </p>
            </motion.div>

            <div className="space-y-8">
              {faqs.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.category}</h3>
                  </div>
                  
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${sectionIndex}-${index}`} className="border-b border-gray-100 last:border-b-0">
                          <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-blue-50/50 transition-colors text-left">
                            <span className="font-semibold text-gray-900">{faq.q}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
              </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gentleFlow {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 60%, 25% 40%, 50% 70%, 75% 50%, 100% 60%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(10px) translateY(-3px);
            clip-path: polygon(0% 55%, 25% 35%, 50% 65%, 75% 45%, 100% 55%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(-5px) translateY(2px);
            clip-path: polygon(0% 65%, 25% 45%, 50% 75%, 75% 55%, 100% 65%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(7px) translateY(-1px);
            clip-path: polygon(0% 58%, 25% 38%, 50% 68%, 75% 48%, 100% 58%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes gentleFlowReverse {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
            clip-path: polygon(0% 0%, 100% 40%, 100% 100%, 0% 100%);
          }
          25% {
            transform: translateX(-8px) translateY(3px);
            clip-path: polygon(0% 0%, 100% 35%, 100% 100%, 0% 100%);
          }
          50% {
            transform: translateX(4px) translateY(-2px);
            clip-path: polygon(0% 0%, 100% 45%, 100% 100%, 0% 100%);
          }
          75% {
            transform: translateX(-6px) translateY(1px);
            clip-path: polygon(0% 0%, 100% 38%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-10px) translateX(5px) scale(1.05);
          }
          50% {
            transform: translateY(-5px) translateX(-3px) scale(0.95);
          }
          75% {
            transform: translateY(-15px) translateX(2px) scale(1.02);
          }
        }
        
        .animate-gentle-flow {
          animation: gentleFlow 10s ease-in-out infinite;
        }
        
        .animate-gentle-flow-reverse {
          animation: gentleFlowReverse 13s ease-in-out infinite;
        }
        
        .animate-soft-float {
          animation: softFloat 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PricingPage;
