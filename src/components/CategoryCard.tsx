import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/products?category=${category.name}`}
      className="group block"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
        <div className="relative overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-all duration-300`}></div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {category.productCount} items
          </div>
        </div>
        
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-all duration-300">
            {category.name}
          </h3>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            Discover amazing products
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;