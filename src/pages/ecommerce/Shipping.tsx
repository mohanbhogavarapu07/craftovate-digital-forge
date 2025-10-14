import { motion } from 'framer-motion';
import { 
  Truck, 
  Clock, 
  MapPin, 
  Package, 
  Shield, 
  CheckCircle, 
  Globe, 
  AlertCircle,
  Star,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Shipping = () => {
  const shippingMethods = [
    {
      name: 'Standard Shipping',
      price: 'Free',
      duration: '3-5 business days',
      description: 'Our most popular shipping option with reliable delivery',
      icon: Package,
      features: ['Free on orders over $50', 'Tracking included', 'Signature confirmation available']
    },
    {
      name: 'Express Shipping',
      price: '$9.99',
      duration: '1-2 business days',
      description: 'Fast delivery for urgent orders',
      icon: Zap,
      features: ['Priority handling', 'Real-time tracking', 'Delivery confirmation']
    },
    {
      name: 'Overnight Shipping',
      price: '$19.99',
      duration: 'Next business day',
      description: 'Get your order the next business day',
      icon: Clock,
      features: ['Guaranteed next-day delivery', 'Priority processing', 'Full insurance coverage']
    }
  ];

  const shippingZones = [
    {
      zone: 'Domestic (US)',
      countries: ['United States'],
      methods: ['Standard (3-5 days)', 'Express (1-2 days)', 'Overnight (Next day)'],
      restrictions: 'No restrictions'
    },
    {
      zone: 'North America',
      countries: ['Canada', 'Mexico'],
      methods: ['Standard (5-7 days)', 'Express (2-3 days)'],
      restrictions: 'Some electronics may be restricted'
    },
    {
      zone: 'Europe',
      countries: ['United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands'],
      methods: ['Standard (7-10 days)', 'Express (3-5 days)'],
      restrictions: 'Subject to local regulations'
    },
    {
      zone: 'Asia Pacific',
      countries: ['Australia', 'Japan', 'South Korea', 'Singapore', 'New Zealand'],
      methods: ['Standard (10-14 days)', 'Express (5-7 days)'],
      restrictions: 'Customs clearance required'
    }
  ];

  const trackingSteps = [
    {
      step: 1,
      title: 'Order Placed',
      description: 'Your order has been received and is being processed',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Processing',
      description: 'We\'re preparing your items for shipment',
      icon: Package
    },
    {
      step: 3,
      title: 'Shipped',
      description: 'Your order is on its way with tracking information',
      icon: Truck
    },
    {
      step: 4,
      title: 'Out for Delivery',
      description: 'Your package is with the delivery driver',
      icon: Clock
    },
    {
      step: 5,
      title: 'Delivered',
      description: 'Your order has been successfully delivered',
      icon: CheckCircle
    }
  ];

  const faqItems = [
    {
      question: 'How much does shipping cost?',
      answer: 'Standard shipping is free on orders over $50. Express shipping costs $9.99 and overnight shipping costs $19.99. International shipping rates vary by destination.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US, 5-7 days to Canada and Mexico, and 7-14 days internationally. Express and overnight options are available for faster delivery.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the "My Orders" section.'
    },
    {
      question: 'What if my package is damaged?',
      answer: 'If your package arrives damaged, please contact us within 48 hours with photos. We\'ll arrange for a replacement or full refund at no cost to you.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. Some items may be restricted in certain countries.'
    },
    {
      question: 'Can I change my shipping address?',
      answer: 'You can change your shipping address if your order hasn\'t been processed yet. Contact customer service immediately if you need to update your address.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            🚚 Shipping Information
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Fast & Reliable <span className="text-gradient">Shipping</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your orders delivered quickly and safely with our comprehensive shipping options
          </p>
        </motion.div>

        <Tabs defaultValue="methods" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="methods">Shipping Methods</TabsTrigger>
            <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Shipping Methods Tab */}
          <TabsContent value="methods" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {shippingMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-elegant h-full">
                    <CardHeader className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{method.name}</CardTitle>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {method.price}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          {method.duration}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-center">
                        {method.description}
                      </p>
                      <ul className="space-y-2">
                        {method.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Shipping Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Shipping Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 mb-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Secure Packaging</h3>
                      <p className="text-sm text-muted-foreground">
                        All items are carefully packaged to prevent damage during transit
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-3">
                        <Package className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Real-time Tracking</h3>
                      <p className="text-sm text-muted-foreground">
                        Track your package from warehouse to your doorstep
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-3">
                        <Star className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Insurance Included</h3>
                      <p className="text-sm text-muted-foreground">
                        All shipments are fully insured against loss or damage
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Order Tracking Tab */}
          <TabsContent value="tracking" className="space-y-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Track Your Order</CardTitle>
                <p className="text-muted-foreground">
                  Enter your tracking number to see the current status of your shipment
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Order Tracking Steps</h3>
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                    {trackingSteps.map((step, index) => (
                      <div key={step.step} className="relative flex items-start space-x-4 pb-8">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* International Shipping Tab */}
          <TabsContent value="international" className="space-y-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>International Shipping Zones</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {shippingZones.map((zone, index) => (
                    <motion.div
                      key={zone.zone}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg">{zone.zone}</h3>
                        <Badge variant="outline">{zone.countries.length} countries</Badge>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium mb-2">Countries</h4>
                          <p className="text-muted-foreground">{zone.countries.join(', ')}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Available Methods</h4>
                          <ul className="text-muted-foreground space-y-1">
                            {zone.methods.map((method, idx) => (
                              <li key={idx}>• {method}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Restrictions</h4>
                          <p className="text-muted-foreground">{zone.restrictions}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-8">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Card className="card-elegant bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need help with shipping?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our shipping experts are here to help with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Shipping;
