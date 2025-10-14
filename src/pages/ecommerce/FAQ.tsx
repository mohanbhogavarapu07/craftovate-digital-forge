import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout. You can create an account for faster checkout or checkout as a guest. We accept all major credit cards and PayPal.',
      category: 'ordering'
    },
    {
      id: '2',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through our encrypted payment gateway.',
      category: 'payment'
    },
    {
      id: '3',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US and 7-14 business days internationally. Express shipping (1-2 business days) and overnight shipping are available for select items. You can track your order in real-time.',
      category: 'shipping'
    },
    {
      id: '4',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Electronics have a 14-day return window. We provide free return shipping labels for eligible returns.',
      category: 'returns'
    },
    {
      id: '5',
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the "My Orders" section. Real-time tracking updates are available.',
      category: 'shipping'
    },
    {
      id: '6',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. Some items may be restricted in certain countries due to local regulations.',
      category: 'shipping'
    },
    {
      id: '7',
      question: 'How do I cancel my order?',
      answer: 'You can cancel your order within 1 hour of placing it if it hasn\'t been processed yet. After that, you\'ll need to contact customer service. Once shipped, you\'ll need to return the item following our return policy.',
      category: 'ordering'
    },
    {
      id: '8',
      question: 'What if I receive a damaged item?',
      answer: 'If you receive a damaged item, please contact us within 48 hours with photos of the damage. We\'ll arrange for a replacement or full refund at no cost to you. We take product quality very seriously.',
      category: 'returns'
    },
    {
      id: '9',
      question: 'How do I change my account information?',
      answer: 'You can update your account information by logging into your profile and editing your details. This includes your name, email, shipping address, and payment methods. Changes are saved immediately.',
      category: 'account'
    },
    {
      id: '10',
      question: 'Do you offer student discounts?',
      answer: 'Yes, we offer a 10% student discount for verified students. Simply sign up with your .edu email address and verify your student status. The discount applies to most items and can be combined with other promotions.',
      category: 'discounts'
    },
    {
      id: '11',
      question: 'How do I contact customer service?',
      answer: 'You can contact us via email at support@ecoshop.com, through our live chat feature, or by calling +1 (555) 123-4567. Our customer service team is available 24/7 to assist you with any questions or concerns.',
      category: 'support'
    },
    {
      id: '12',
      question: 'What is your privacy policy?',
      answer: 'We are committed to protecting your privacy. We only collect necessary information to process your orders and improve your shopping experience. We never sell your personal data to third parties. Read our full privacy policy for more details.',
      category: 'privacy'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length },
    { id: 'ordering', name: 'Ordering', count: faqData.filter(item => item.category === 'ordering').length },
    { id: 'payment', name: 'Payment', count: faqData.filter(item => item.category === 'payment').length },
    { id: 'shipping', name: 'Shipping', count: faqData.filter(item => item.category === 'shipping').length },
    { id: 'returns', name: 'Returns', count: faqData.filter(item => item.category === 'returns').length },
    { id: 'account', name: 'Account', count: faqData.filter(item => item.category === 'account').length },
    { id: 'support', name: 'Support', count: faqData.filter(item => item.category === 'support').length }
  ];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
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
            ❓ Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            How can we <span className="text-gradient">help you?</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about ordering, shipping, returns, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="card-elegant sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 space-y-4"
          >
            {filteredFAQs.length === 0 ? (
              <Card className="card-elegant">
                <CardContent className="p-8 text-center">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No questions found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="card-elegant">
                    <Collapsible
                      open={openItems.includes(item.id)}
                      onOpenChange={() => toggleItem(item.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-left pr-4">
                              {item.question}
                            </h3>
                            {openItems.includes(item.id) ? (
                              <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>

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
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline" className="btn-ghost-primary">
                  Live Chat
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

export default FAQ;
