import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from './ProductCard';
import ShopIcon from './icons/ShopIcon';

interface ProductRecommendationsProps {
  currentProductId: string;
  category: string;
  products: Product[];
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ 
  currentProductId, 
  category, 
  products 
}) => {
  // Filter products: same category but not current product, limit to 4
  const recommendations = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 4);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <ShopIcon name="sparkles" size={28} color="#FACC15" className="mr-3" />
              You Might Also Like
            </h2>
            <p className="text-gray-600">Based on your current selection</p>
          </div>
          <Link to="/products" className="hidden sm:flex items-center text-primary hover:text-blue-700 font-semibold">
            View All <ShopIcon name="target" size={16} color="currentColor" className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map(product => (
            <div className="flex" key={`rec-${product.id}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-secondary text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
          >
            <span>View All Products</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;
