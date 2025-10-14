import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Calendar, 
  Package, 
  CreditCard, 
  Settings, 
  LogOut, 
  Edit3,
  MapPin,
  Phone,
  Eye,
  EyeOff,
  CheckCircle,
  Clock,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface UserProfile {
  id: number;
  email: string;
  role: 'customer' | 'admin';
  created_at: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}

interface Order {
  id: string;
  order_number: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  created_at: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
}

const Profile = () => {
  const { user, isAuthenticated, logout, updateUser } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Load mock orders data
  useEffect(() => {
    const mockOrders: Order[] = [
      {
        id: '1',
        order_number: 'ECO-2024-001',
        status: 'delivered',
        total: 299.99,
        created_at: '2024-01-20T14:30:00Z',
        items: [
          {
            id: '1',
            name: 'Wireless Headphones Pro',
            quantity: 1,
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop'
          }
        ]
      },
      {
        id: '2',
        order_number: 'ECO-2024-002',
        status: 'shipped',
        total: 89.98,
        created_at: '2024-01-25T09:15:00Z',
        items: [
          {
            id: '2',
            name: 'Eco-Friendly Water Bottle',
            quantity: 2,
            price: 44.99,
            image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=100&h=100&fit=crop'
          }
        ]
      },
      {
        id: '3',
        order_number: 'ECO-2024-003',
        status: 'processing',
        total: 199.99,
        created_at: '2024-01-28T16:45:00Z',
        items: [
          {
            id: '3',
            name: 'Smart Fitness Watch',
            quantity: 1,
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop'
          }
        ]
      }
    ];

    setOrders(mockOrders);
    setIsLoading(false);
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      case 'shipped':
        return <Truck className="h-4 w-4" />;
      case 'processing':
        return <Clock className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated! ✅",
      description: "Your profile information has been saved successfully.",
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully! 👋",
      description: "You have been logged out of your account.",
    });
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in</h2>
          <p className="text-muted-foreground mb-6">You need to be logged in to view your profile.</p>
          <Button onClick={() => navigate('/login')}>Go to Login</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="card-elegant">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={`https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=random`} />
                  <AvatarFallback>
                    {user.first_name?.[0]}{user.last_name?.[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">
                    {user.first_name} {user.last_name}
                  </h1>
                  <p className="text-muted-foreground mb-4">{user.email}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Member since {new Date(user.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="h-4 w-4" />
                      <span>{orders.length} orders</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(!isEditing)}
                    className="btn-ghost-primary"
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Profile Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                    <p className="text-lg">{user.first_name} {user.last_name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                    <p className="text-lg">{user.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
                    <p className="text-lg">{user.phone || 'Not provided'}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="h-5 w-5" />
                    <span>Order Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{orders.length}</div>
                      <div className="text-sm text-muted-foreground">Total Orders</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <div className="text-2xl font-bold text-accent">
                        ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Spent</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h3 className="font-semibold">Order #{order.order_number}</h3>
                            <Badge className={getStatusColor(order.status)}>
                              {getStatusIcon(order.status)}
                              <span className="ml-1 capitalize">{order.status}</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Placed on {new Date(order.created_at).toLocaleDateString()}
                          </p>
                          <p className="text-lg font-semibold mt-1">${order.total.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-2">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Qty: {item.quantity} × ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Shipping Addresses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-2">Default Address</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>{user.first_name} {user.last_name}</p>
                          <p>{user.address}</p>
                          <p>{user.city}, {user.state} {user.zip_code}</p>
                          <p>{user.phone}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      disabled
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Email cannot be changed. Contact support if needed.
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter new password"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="btn-hero">
                      <Settings className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
