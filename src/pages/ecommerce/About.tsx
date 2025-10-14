import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Shield, Heart, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Recommendations',
      description: 'Our advanced AI learns your preferences to suggest products you\'ll love, making shopping effortless and personalized.'
    },
    {
      icon: Globe,
      title: 'Sustainable Shopping',
      description: 'We partner with eco-friendly brands and offer carbon-neutral shipping to help you make environmentally conscious choices.'
    },
    {
      icon: Shield,
      title: 'Secure & Trusted',
      description: 'Your data and payments are protected with bank-level security. Shop with confidence knowing your information is safe.'
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'We\'re committed to providing exceptional customer service with 24/7 support and hassle-free returns.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '200K+', label: 'Products Sold' },
    { number: '99%', label: 'Customer Satisfaction' },
    { number: '4.9', label: 'Average Rating' }
  ];

  const values = [
    'Quality products from trusted brands',
    'Sustainable and eco-friendly options',
    'Transparent pricing with no hidden fees',
    'Fast and reliable shipping worldwide',
    '24/7 customer support',
    'Easy returns and exchanges'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6">
              🚀 About EcoShop
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Revolutionizing
              <span className="text-gradient block">E-Commerce</span>
              with AI & Sustainability
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're on a mission to make online shopping smarter, more sustainable, and more enjoyable. 
              Our AI-powered platform helps you discover products that truly match your needs while 
              supporting a more sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="btn-hero">
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-ghost-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              ✨ Our Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">EcoShop</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with a commitment to sustainability 
              to deliver an unparalleled shopping experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-elegant hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                💎 Our Values
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Committed to <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in creating value for our customers, partners, and the planet. 
                Every decision we make is guided by our core values and commitment to sustainability.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elegant max-w-xs"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Award Winning</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Recognized as the best sustainable e-commerce platform 2024
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the <span className="text-gradient">Future</span> of Shopping?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of satisfied customers who have discovered the joy of 
              AI-powered, sustainable shopping with EcoShop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="btn-hero">
                  Start Shopping Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button size="lg" variant="outline" className="btn-ghost-primary">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
