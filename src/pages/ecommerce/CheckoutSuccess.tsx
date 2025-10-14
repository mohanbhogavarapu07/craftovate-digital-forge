import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Home, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CheckoutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderId = location.state?.orderId;
  const orderTotal = location.state?.orderTotal;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartItemCount={0} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Order Placed Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                Thank you for your purchase. Your order has been confirmed.
              </p>
              {orderId && (
                <p className="text-sm text-gray-500">
                  Order ID: <span className="font-mono font-medium">{orderId}</span>
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Total:</span>
                      <span className="font-semibold">
                        {orderTotal ? `$${orderTotal.toFixed(2)}` : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-medium">Confirmed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Delivery:</span>
                      <span className="text-gray-900">3-5 business days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 space-y-4"
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• You'll receive an email confirmation shortly</li>
                  <li>• We'll send you tracking information once your order ships</li>
                  <li>• You can track your order status in your account</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/products')}
                  className="btn-hero"
                >
                  Continue Shopping
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
