import React, { useState, useEffect } from 'react';
import ShopIcon from './icons/ShopIcon';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const loadingMessages = [
  "Curating the finest products for you",
  "Preparing your shopping experience",
  "Personalizing your recommendations",
  "Fetching the latest trends",
  "Loading exclusive deals",
  "Polishing the shop floor"
];

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isLoading) {
      // Reset progress
      setProgress(0);
      
      // Simulate loading progress
      interval = setInterval(() => {
        setProgress(prev => {
          const nextProgress = prev + (Math.random() * 5);
          
          if (nextProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return nextProgress;
        });
      }, 100);
    }
    
    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);
  
  useEffect(() => {
    if (isLoading) {
      const messageInterval = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
      
      return () => clearInterval(messageInterval);
    }
  }, [isLoading]);
  
  if (!isLoading) {
    return null;
  }
  
  return (
    <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-500 ${!isLoading && progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-40 h-40 relative mb-4">
        {/* Dynamic rotating icons */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="relative">
            <ShopIcon name="shop" size={64} color="#2563EB" className="animate-pulse" />
            
            <div className="absolute -top-3 -right-3">
              <div className="bg-yellow-400 rounded-full p-1 shadow-lg animate-bounce">
                <ShopIcon name="tag" size={16} color="#000" />
              </div>
            </div>
            
            <div className="absolute -bottom-3 -left-3">
              <div className="bg-green-400 rounded-full p-1 shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
                <ShopIcon name="star" size={16} color="#000" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress circle */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="6"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
              transform="rotate(-90 50 50)"
              className="transition-all duration-200"
            />
          </svg>
        </div>
      </div>
      
      <p className="mt-4 text-2xl font-bold text-gray-800 animate-pulse">
        {progress < 100 ? 'Loading...' : 'Ready!'}
      </p>
      
      <div className="mt-2 text-sm text-gray-500 h-5 overflow-hidden">
        <p className="animate-fadeIn key-animation">{loadingMessages[messageIndex]}</p>
      </div>
      
      <div className="w-72 h-2 bg-gray-100 rounded-full mt-6 overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-blue-600 mt-3 font-medium">{Math.floor(progress)}%</p>
    </div>
  );
};

export default LoadingAnimation;
