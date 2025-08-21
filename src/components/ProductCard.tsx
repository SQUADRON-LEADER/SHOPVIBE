import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopIcon from './icons/ShopIcon';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [currentImage, setCurrentImage] = useState(product.image);
  const [isHovering, setIsHovering] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (product.images && product.images.length > 1) {
      setCurrentImage(product.images[1]);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImage(product.image);
  };

  return (
    <Link to={`/product/${product.id}`} className="group w-full">
      {/* Law of Proximity: Related elements grouped together */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
        <div 
          className="relative overflow-hidden" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={currentImage}
            alt={product.name}
            className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-500"
          />
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              <ShopIcon name="tag" size={16} color="white" className="inline mr-1" /> 
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
            {product.brand}
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Out of Stock</span>
            </div>
          )}
          
          {/* Quick action buttons */}
          {isHovering && (
            <div className="absolute right-3 top-12 flex flex-col gap-2 animate-fadeIn">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  alert('Added to wishlist!');
                }}
                className="bg-white/90 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Add to wishlist"
              >
                <ShopIcon name="heart" size={20} color="#DC2626" />
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  alert('Quick view coming soon!');
                }}
                className="bg-white/90 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Quick view"
              >
                <ShopIcon name="eye" size={20} color="#2563EB" />
              </button>
            </div>
          )}
          
          {/* Image dots navigation */}
          {isHovering && product.images && product.images.length > 2 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {product.images.slice(0, 3).map((img, index) => (
                <button 
                  key={index} 
                  className={`w-3 h-3 rounded-full ${currentImage === img ? 'bg-secondary' : 'bg-white/70'} transition-all duration-300`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImage(img);
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-2 flex justify-between items-center">
            <span className="text-xs text-primary font-semibold uppercase tracking-wide bg-blue-50 px-2 py-1 rounded-full">{product.category}</span>
            {product.inStock ? (
              <span className="text-xs text-green-600 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                In Stock
              </span>
            ) : (
              <span className="text-xs text-red-500 font-medium">Out of Stock</span>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
            {product.name}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full hover:bg-blue-50 hover:text-primary transition-colors cursor-pointer flex items-center"
              >
                <span className="mr-1 text-primary font-medium">#</span>
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <ShopIcon 
                  key={i} 
                  name="star" 
                  size={14} 
                  color={i < Math.floor(product.rating) ? "#FACC15" : "#E5E7EB"} 
                  className="mr-0.5"
                />
              ))}
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              <span className="ml-1 text-sm text-gray-400">({product.reviews})</span>
            </div>
          </div>
          
          {/* Available colors indication */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center mb-4">
              <span className="text-xs text-gray-500 mr-2">Colors:</span>
              <div className="flex gap-1">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'white' ? 'white' : 
                                      color.toLowerCase() === 'black' ? 'black' :
                                      color.toLowerCase() === 'rose gold' ? '#f9c7c7' :
                                      color.toLowerCase() === 'silver' ? '#c0c0c0' : color.toLowerCase()
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            
            {/* Fitts's Law: Large, accessible button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 min-h-[44px]
                ${product.inStock
                  ? 'bg-secondary text-black hover:bg-yellow-500 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              <ShopIcon name="cart" size={18} color="currentColor" />
              <span className="hidden sm:inline">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;