import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RotateCcw, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Package, 
  CreditCard, 
  Truck,
  Shield,
  FileText,
  Calendar,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Returns = () => {
  const [returnForm, setReturnForm] = useState({
    orderNumber: '',
    reason: '',
    description: '',
    condition: ''
  });

  const returnReasons = [
    'Changed my mind',
    'Item not as described',
    'Defective item',
    'Wrong size',
    'Damaged in shipping',
    'Not satisfied with quality',
    'Other'
  ];

  const returnPolicy = {
    timeframe: '30 days',
    condition: 'Items must be in original condition with tags attached',
    refundMethod: 'Original payment method',
    processingTime: '3-5 business days after receiving returned item',
    freeReturns: 'Yes, on orders over $50'
  };

  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Start your return process online or contact customer service',
      icon: FileText,
      time: 'Immediate'
    },
    {
      step: 2,
      title: 'Package Item',
      description: 'Pack the item securely in original packaging if possible',
      icon: Package,
      time: 'Same day'
    },
    {
      step: 3,
      title: 'Ship Return',
      description: 'Use provided return label or arrange shipping',
      icon: Truck,
      time: '1-2 days'
    },
    {
      step: 4,
      title: 'Processing',
      description: 'We inspect and process your returned item',
      icon: CheckCircle,
      time: '3-5 days'
    },
    {
      step: 5,
      title: 'Refund Issued',
      description: 'Refund is processed to your original payment method',
      icon: CreditCard,
      time: '1-2 days'
    }
  ];

  const returnCategories = [
    {
      category: 'Electronics',
      timeframe: '14 days',
      condition: 'Must be in original packaging with all accessories',
      restrictions: 'No returns on opened software or digital items',
      icon: Package
    },
    {
      category: 'Clothing & Accessories',
      timeframe: '30 days',
      condition: 'Must have original tags and be unworn',
      restrictions: 'No returns on intimate items or personalized items',
      icon: RotateCcw
    },
    {
      category: 'Home & Garden',
      timeframe: '30 days',
      condition: 'Must be in original condition and packaging',
      restrictions: 'No returns on custom or personalized items',
      icon: Shield
    },
    {
      category: 'Books & Media',
      timeframe: '14 days',
      condition: 'Must be unopened and in original packaging',
      restrictions: 'No returns on opened books, CDs, or DVDs',
      icon: FileText
    }
  ];

  const faqItems = [
    {
      question: 'How long do I have to return an item?',
      answer: 'Most items can be returned within 30 days of delivery. Electronics have a 14-day return window. The return period starts from the delivery date.'
    },
    {
      question: 'What items cannot be returned?',
      answer: 'We cannot accept returns on personalized items, intimate items, perishable goods, digital products, or items damaged by misuse. Custom orders are also non-returnable.'
    },
    {
      question: 'How do I start a return?',
      answer: 'You can start a return by logging into your account and visiting the "My Orders" section, or by contacting our customer service team with your order number.'
    },
    {
      question: 'Who pays for return shipping?',
      answer: 'We provide free return shipping for orders over $50. For smaller orders, return shipping costs are deducted from your refund. Defective items always have free return shipping.'
    },
    {
      question: 'How long does it take to process a refund?',
      answer: 'Once we receive your returned item, it takes 3-5 business days to process. Refunds are then issued to your original payment method within 1-2 business days.'
    },
    {
      question: 'Can I exchange an item instead of returning it?',
      answer: 'Yes, we offer exchanges for items in different sizes or colors. Contact customer service to arrange an exchange, or return the item and place a new order.'
    },
    {
      question: 'What if my item arrives damaged?',
      answer: 'If your item arrives damaged, please contact us within 48 hours with photos. We\'ll arrange for a replacement or full refund at no cost to you.'
    },
    {
      question: 'Can I return items purchased with a gift card?',
      answer: 'Yes, items purchased with gift cards can be returned. The refund will be issued as store credit or a new gift card.'
    }
  ];

  const handleReturnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle return form submission
    console.log('Return form submitted:', returnForm);
  };

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
            🔄 Returns & Exchanges
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Easy <span className="text-gradient">Returns</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make returns simple and hassle-free. Find everything you need to know about our return policy.
          </p>
        </motion.div>

        {/* Return Policy Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Return Policy Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Timeframe</h3>
                  <p className="text-sm text-muted-foreground">{returnPolicy.timeframe}</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Condition</h3>
                  <p className="text-sm text-muted-foreground">Original condition</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-3">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Refund Method</h3>
                  <p className="text-sm text-muted-foreground">Original payment</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 mb-3">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Processing</h3>
                  <p className="text-sm text-muted-foreground">{returnPolicy.processingTime}</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 mb-3">
                    <Truck className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Free Returns</h3>
                  <p className="text-sm text-muted-foreground">Orders over $50</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="process" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="process">Return Process</TabsTrigger>
            <TabsTrigger value="categories">By Category</TabsTrigger>
            <TabsTrigger value="initiate">Start Return</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Return Process Tab */}
          <TabsContent value="process" className="space-y-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>How to Return an Item</CardTitle>
                <p className="text-muted-foreground">
                  Follow these simple steps to return your item
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {returnSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                          <Badge variant="outline">{step.time}</Badge>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* By Category Tab */}
          <TabsContent value="categories" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {returnCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-elegant h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <category.icon className="h-5 w-5" />
                        <span>{category.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Return Timeframe</h4>
                        <p className="text-sm text-muted-foreground">{category.timeframe}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Condition Required</h4>
                        <p className="text-sm text-muted-foreground">{category.condition}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Restrictions</h4>
                        <p className="text-sm text-muted-foreground">{category.restrictions}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Start Return Tab */}
          <TabsContent value="initiate" className="space-y-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Start Your Return</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below to initiate your return process
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReturnSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orderNumber">Order Number *</Label>
                      <Input
                        id="orderNumber"
                        value={returnForm.orderNumber}
                        onChange={(e) => setReturnForm(prev => ({ ...prev, orderNumber: e.target.value }))}
                        placeholder="Enter your order number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reason">Return Reason *</Label>
                      <Select
                        value={returnForm.reason}
                        onValueChange={(value) => setReturnForm(prev => ({ ...prev, reason: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          {returnReasons.map((reason) => (
                            <SelectItem key={reason} value={reason}>
                              {reason}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="condition">Item Condition *</Label>
                    <Select
                      value={returnForm.condition}
                      onValueChange={(value) => setReturnForm(prev => ({ ...prev, condition: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select item condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New - Unused with tags</SelectItem>
                        <SelectItem value="like-new">Like New - Minimal wear</SelectItem>
                        <SelectItem value="good">Good - Some wear but functional</SelectItem>
                        <SelectItem value="damaged">Damaged - Defective or broken</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea
                      id="description"
                      value={returnForm.description}
                      onChange={(e) => setReturnForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Please provide any additional details about your return..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full btn-hero">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Start Return Process
                  </Button>
                </form>
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
                Need help with your return?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our customer service team is here to help with any return questions or issues.
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

export default Returns;
