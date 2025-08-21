import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ShopIcon from './icons/ShopIcon';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Jakob's Law: Logo positioned top-left */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-blue-700 transition-all duration-300 cursor-pointer hover:scale-105 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-500">
              <ShopIcon name="shop" size={18} color="#FFFFFF" className="group-hover:animate-bounce" />
              <div className="absolute w-full h-full rounded-lg opacity-0 group-hover:opacity-100 bg-blue-600 blur-xl transition-opacity duration-500"></div>
            </div>
            <span className="hidden sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-extrabold">ShopVibe</span>
          </Link>

          {/* Search Bar - Jakob's Law: Search positioned in center */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ShopIcon name="search" size={18} color="#9CA3AF" className="group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-14 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-md text-base bg-gray-50 group-hover:bg-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full cursor-pointer group-hover:shadow-md"
                >
                  <ShopIcon name="target" size={18} color="currentColor" />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary text-lg font-medium transition-all duration-300 py-2 px-3 hover:bg-blue-50 rounded-lg cursor-pointer flex items-center group">
              <ShopIcon name="shop" size={18} color="currentColor" className="mr-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:bg-primary after:transition-all">Home</span>
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-primary text-lg font-medium transition-all duration-300 py-2 px-3 hover:bg-blue-50 rounded-lg cursor-pointer flex items-center group">
              <ShopIcon name="tag" size={18} color="currentColor" className="mr-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:bg-primary after:transition-all">Products</span>
            </Link>
          </nav>

          {/* Cart - Jakob's Law: Cart positioned top-right */}
          <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary transition-all duration-300 group cursor-pointer">
            <div className="p-2 hover:bg-blue-50 rounded-full group-hover:bg-blue-100 group-hover:shadow-inner transform group-hover:scale-110 transition-all duration-300">
              <ShopIcon name="cart" size={26} color="currentColor" className="transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center group-hover:scale-125 transition-all shadow-md border border-white">
                {getTotalItems()}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-all duration-300 hover:bg-blue-50 rounded-full cursor-pointer relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {isMobileMenuOpen ? <X size={26} className="text-blue-600" /> : <Menu size={26} className="group-hover:text-blue-600 transition-colors" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 animate-fadeIn">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ShopIcon name="search" size={18} color="#9CA3AF" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-14 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 shadow-sm bg-gray-50 focus:bg-white text-base"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full cursor-pointer"
                >
                  <ShopIcon name="search" size={18} color="white" />
                </button>
              </div>
            </form>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-800 hover:text-primary text-lg font-medium py-3 px-4 transition-all duration-300 hover:bg-blue-50 rounded-lg cursor-pointer flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShopIcon name="shop" size={18} color="#2563EB" className="mr-2" /> Home
              </Link>
              <Link
                to="/products"
                className="text-gray-800 hover:text-primary text-lg font-medium py-3 px-4 transition-all duration-300 hover:bg-blue-50 rounded-lg cursor-pointer flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShopIcon name="tag" size={18} color="#2563EB" className="mr-2" /> Products
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;