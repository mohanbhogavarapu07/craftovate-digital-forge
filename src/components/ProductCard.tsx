import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  className?: string;
}

const ProductCard = ({ product, onAddToCart, className = '' }: ProductCardProps) => {
  return (
    <Card className={`group overflow-hidden hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
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
            {onAddToCart && (
              <Button
                onClick={() => onAddToCart(product.id)}
                disabled={product.stock === 0}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
