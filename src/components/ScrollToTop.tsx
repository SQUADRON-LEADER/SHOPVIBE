import React, { useState, useEffect } from 'react';
import ShopIcon from './icons/ShopIcon';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 animate-slide-in flex items-center justify-center group"
          aria-label="Scroll to top"
          style={{ 
            boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)',
            animation: 'pulse 2s infinite' 
          }}
        >
          <span className="absolute w-full h-full bg-blue-500 rounded-full animate-ping opacity-30"></span>
          <ShopIcon name="chevron-up" size={24} color="#FFFFFF" className="relative group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
