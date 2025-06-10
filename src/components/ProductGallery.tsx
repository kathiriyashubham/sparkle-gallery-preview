import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import GalleryModal from './GalleryModal';

interface Product {
  id: string;
  name: string;
  previewImage: string;
  totalItems: number;
  images: string[];
  videos: string[];
}

const ProductGallery = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

  const handleViewAll = (productId: string) => {
    setSelectedProduct(productId);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const currentProduct = selectedProduct 
    ? products.find(p => p.id === selectedProduct)
    : null;

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
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
