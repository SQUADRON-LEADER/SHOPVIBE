import React, { useState } from 'react';
import DiscountBadge from './DiscountBadge';

interface ProductImageGalleryProps {
  images: string[];
  name: string;
  originalPrice?: number;
  currentPrice: number;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ 
  images, 
  name,
  originalPrice,
  currentPrice
}) => {
  const [mainImage, setMainImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Thumbnails */}
      <div className="col-span-2 space-y-3">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-full rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === mainImage ? 'border-primary ring-2 ring-blue-300' : 'border-transparent hover:border-gray-300'
            }`}
            onClick={() => setMainImage(index)}
          >
            <img 
              src={image} 
              alt={`${name} - View ${index + 1}`} 
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="col-span-10 relative">
        <div 
          className={`relative overflow-hidden rounded-xl border border-gray-200 ${
            isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <img
            src={images[mainImage]}
            alt={name}
            className="w-full h-auto object-cover rounded-xl"
            style={{
              transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
              transformOrigin: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center center',
              transition: isZoomed ? 'none' : 'transform 0.3s ease'
            }}
          />
          <DiscountBadge originalPrice={originalPrice} currentPrice={currentPrice} />
          
          {/* Zoom instruction */}
          {!isZoomed && (
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              Click to zoom
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
