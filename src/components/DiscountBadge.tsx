import React from 'react';
import ShopIcon from './icons/ShopIcon';

interface DiscountBadgeProps {
  originalPrice?: number;
  currentPrice: number;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ originalPrice, currentPrice }) => {
  if (!originalPrice || originalPrice <= currentPrice) return null;
  
  const discountPercentage = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  
  return (
    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center transform -rotate-2">
      <ShopIcon name="tag" size={18} color="white" className="mr-1" />
      <span className="font-bold">{discountPercentage}% OFF</span>
    </div>
  );
};

export default DiscountBadge;
