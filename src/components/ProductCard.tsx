
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Images } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    previewImage: string;
    totalItems: number;
  };
  onViewAll: (productId: string) => void;
}

const ProductCard = ({ product, onViewAll }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="group overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 ring-1 ring-slate-200 hover:ring-2 hover:ring-amber-200">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative">
        {!imageError ? (
          <img
            src={product.previewImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
            <Images className="w-16 h-16 text-amber-300" />
          </div>
        )}
        
        {/* Overlay with item count */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-slate-700 font-medium">
            {product.totalItems} items
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-slate-900 mb-1 line-clamp-1">
            {product.name}
          </h3>
        </div>

        <Button 
          onClick={() => onViewAll(product.id)}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-2.5 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Images className="w-4 h-4 mr-2" />
          View All Images
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
