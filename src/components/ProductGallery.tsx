
import { useState } from 'react';
import ProductCard from './ProductCard';
import GalleryModal from './GalleryModal';

// Sample data structure - replace with your actual data
const sampleProducts = [
  {
    id: '1',
    name: 'Diamond Engagement Rings',
    category: 'Rings',
    previewImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    totalItems: 15,
    price: 'From $2,500',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    videos: []
  },
  {
    id: '2',
    name: 'Gold Necklaces',
    category: 'Necklaces',
    previewImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    totalItems: 12,
    price: 'From $800',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop',
    ],
    videos: []
  },
  {
    id: '3',
    name: 'Pearl Earrings',
    category: 'Earrings',
    previewImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    totalItems: 8,
    price: 'From $350',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
    ],
    videos: []
  },
  {
    id: '4',
    name: 'Tennis Bracelets',
    category: 'Bracelets',
    previewImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    totalItems: 6,
    price: 'From $1,200',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    videos: []
  },
  {
    id: '5',
    name: 'Wedding Bands',
    category: 'Rings',
    previewImage: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=400&h=400&fit=crop',
    totalItems: 20,
    price: 'From $600',
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop',
    ],
    videos: []
  },
  {
    id: '6',
    name: 'Statement Necklaces',
    category: 'Necklaces',
    previewImage: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    totalItems: 10,
    price: 'From $1,500',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=800&fit=crop',
    ],
    videos: []
  }
];

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleViewAll = (productId: string) => {
    setSelectedProduct(productId);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const currentProduct = selectedProduct 
    ? sampleProducts.find(p => p.id === selectedProduct)
    : null;

  return (
    <>
      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full font-medium transition-all duration-200 bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-700 border border-slate-200 hover:border-amber-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewAll={handleViewAll}
          />
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedProduct && currentProduct && (
        <GalleryModal
          product={currentProduct}
          isOpen={!!selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProductGallery;
