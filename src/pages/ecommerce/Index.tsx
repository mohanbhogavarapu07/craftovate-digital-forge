import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  featured: boolean;
}

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Mock featured products data
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Wireless Headphones Pro',
        description: 'Premium noise-canceling headphones with 30-hour battery life',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&auto=format&q=80',
        category: 'electronics',
        stock: 15,
        featured: true,
      },
      {
        id: '2',
        name: 'Eco-Friendly Water Bottle',
        description: 'Sustainable stainless steel bottle with temperature control',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop&auto=format&q=80',
        category: 'lifestyle',
        stock: 32,
        featured: true,
      },
      {
        id: '3',
        name: 'Smart Fitness Watch',
        description: 'Advanced health tracking with GPS and heart rate monitor',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&auto=format&q=80',
        category: 'electronics',
        stock: 8,
        featured: true,
      },
      {
        id: '4',
        name: 'Camping Backpack',
        description: 'Durable hiking backpack for outdoor adventures',
        price: 179.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&auto=format&q=80',
        category: 'sports',
        stock: 20,
        featured: true,
      },
    ];
    setFeaturedProducts(mockProducts);
  }, []);


  const handleAddToCart = (productId: string) => {
    setCartItemCount(prev => prev + 1);
    console.log("Added to cart:", productId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">EcoStore</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Cart ({cartItemCount})</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 AI-Powered Shopping Experience
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Discover Amazing
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">Products</span>
                  Effortlessly
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Shop smarter with our AI-powered recommendations, curated collections, 
                  and sustainable products that match your lifestyle.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="hover:scale-105 transition-transform">
                  <Link to="/products">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
                      Shop Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                  alt="Shopping Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              ⭐ Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trending <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of the most popular products loved by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">${product.price}</span>
                      <Button
                        onClick={() => handleAddToCart(product.id)}
                        disabled={product.stock === 0}
                        className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">EcoStore</h3>
            <p className="text-gray-400 mb-6">
              Discover amazing products with our AI-powered e-commerce platform. 
              Quality, sustainability, and innovation in every purchase.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 EcoStore. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;