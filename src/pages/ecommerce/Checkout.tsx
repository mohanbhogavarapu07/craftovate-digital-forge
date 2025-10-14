import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CreditCard, MapPin, User, Mail, Phone } from 'lucide-react';
import { orderAPI, cartAPI } from '@/lib/api';
import { CartItem } from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'card'
  });

  useEffect(() => {
    // Load cart items
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const response = await cartAPI.get();
      setCartItems(response.data);
    } catch (error) {
      console.error('Error loading cart items:', error);
      // Fallback to mock cart data if API fails
      const mockCartItems: CartItem[] = [
        {
          id: '1',
          productId: '1',
          product: {
            id: '1',
            name: 'Wireless Headphones',
            description: 'High-quality wireless headphones with noise cancellation',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            category: 'Electronics',
            stock: 50,
            featured: true
          },
          quantity: 2
        },
        {
          id: '2',
          productId: '2',
          product: {
            id: '2',
            name: 'Smart Watch',
            description: 'Advanced smartwatch with health monitoring features',
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
            category: 'Electronics',
            stock: 25,
            featured: true
          },
          quantity: 1
        }
      ];
      setCartItems(mockCartItems);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create order data
      const orderData = {
        items: cartItems,
        total: total,
        status: 'pending' as const,
        customerInfo: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`
        }
      };

      // Try to create order via API
      try {
        const response = await orderAPI.create(orderData);
        
        if (response.data) {
          // Clear cart
          try {
            await cartAPI.clear();
          } catch (clearError) {
            console.warn('Could not clear cart via API:', clearError);
          }
          
          // Navigate to success page
          navigate('/checkout/success', { 
            state: { 
              orderId: response.data.id,
              orderTotal: total 
            } 
          });
          return;
        }
      } catch (apiError) {
        console.warn('API not available, using mock order creation:', apiError);
      }

      // Fallback: Create mock order if API fails
      const mockOrderId = `ORD-${Date.now()}`;
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to success page with mock order
      navigate('/checkout/success', { 
        state: { 
          orderId: mockOrderId,
          orderTotal: total 
        } 
      });
      
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar cartItemCount={0} />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                <p className="text-gray-600 mb-6">Add some items to your cart before checking out.</p>
                <Button onClick={() => navigate('/products')} className="btn-hero">
                  Continue Shopping
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={cartItems.length} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Button
                variant="ghost"
                onClick={() => navigate('/cart')}
                className="mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Cart
              </Button>
              <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
              <p className="text-gray-600 mt-2">Complete your order</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Customer Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitOrder} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Shipping Address */}
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-4">
                          <MapPin className="h-5 w-5" />
                          Shipping Address
                        </CardTitle>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="address">Street Address *</Label>
                            <Textarea
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                              rows={3}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="city">City *</Label>
                              <Input
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="state">State *</Label>
                              <Input
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="zipCode">ZIP Code *</Label>
                              <Input
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                required
                                className="mt-1"
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="country">Country *</Label>
                            <Input
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Payment Method */}
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-4">
                          <CreditCard className="h-5 w-5" />
                          Payment Method
                        </CardTitle>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="card"
                              name="paymentMethod"
                              value="card"
                              checked={formData.paymentMethod === 'card'}
                              onChange={handleInputChange}
                              className="h-4 w-4"
                            />
                            <Label htmlFor="card">Credit/Debit Card</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="paypal"
                              name="paymentMethod"
                              value="paypal"
                              checked={formData.paymentMethod === 'paypal'}
                              onChange={handleInputChange}
                              className="h-4 w-4"
                            />
                            <Label htmlFor="paypal">PayPal</Label>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full btn-hero"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Processing Order...' : 'Place Order'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Cart Items */}
                      <div className="space-y-3">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-3">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {item.product.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      {/* Totals */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Shipping</span>
                          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Tax</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
