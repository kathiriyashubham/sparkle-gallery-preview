
import { useState } from 'react';
import ProductCard from './ProductCard';
import GalleryModal from './GalleryModal';

// Sample data structure - replace with your actual data
const sampleProducts = [
  {
    id: '1',
    name: 'Diamond Engagement Rings',
    previewImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    totalItems: 15,
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
    previewImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    totalItems: 12,
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
    previewImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    totalItems: 8,
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
    previewImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    totalItems: 6,
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
    previewImage: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=400&h=400&fit=crop',
    totalItems: 20,
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
    previewImage: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    totalItems: 10,
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
