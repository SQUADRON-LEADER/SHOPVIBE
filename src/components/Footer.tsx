import React from 'react';
import { Link } from 'react-router-dom';
import ShopIcon from './icons/ShopIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ShopIcon name="shop" size={18} color="#FFFFFF" />
              </div>
              <span className="text-2xl font-bold text-white">ShopVibe</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover amazing products with vibrant experiences. Shop with confidence and enjoy lightning-fast delivery!
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/aayush_kr_gupta" aria-label="Twitter" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://github.com/SQUADRON-LEADER/" aria-label="GitHub" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300">
                <ShopIcon name="github" size={18} />
              </a>
              <a href="https://www.instagram.com/aayush_kr_gupta/" aria-label="Instagram" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="target" size={14} color="currentColor" className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="tag" size={14} color="currentColor" className="mr-2" /> Shop All
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="star" size={14} color="currentColor" className="mr-2" /> Featured
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="sparkles" size={14} color="currentColor" className="mr-2" /> New Arrivals
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="fire" size={14} color="currentColor" className="mr-2" /> Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="shield" size={14} color="currentColor" className="mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="refresh" size={14} color="currentColor" className="mr-2" /> Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="truck" size={14} color="currentColor" className="mr-2" /> Shipping Info
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="gift" size={14} color="currentColor" className="mr-2" /> Gift Cards
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ShopIcon name="mail" size={14} color="currentColor" className="mr-2" /> FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 flex items-center">
              <ShopIcon name="mail" size={18} color="#FFFFFF" className="mr-2" />
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="mb-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg transition-all duration-300 hover:animate-pulse"
                >
                  <span className="hidden sm:inline mr-2">Subscribe</span>
                  <ShopIcon name="mail" size={18} color="#FFFFFF" className="inline" />
                </button>
              </div>
            </form>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="consent" className="mr-2 h-4 w-4 rounded border-gray-700 bg-gray-800 focus:ring-2 focus:ring-primary" />
              <label htmlFor="consent" className="text-xs text-gray-400 cursor-pointer">
                Send me special offers and personalized recommendations
              </label>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} ShopVibe. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-white transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
