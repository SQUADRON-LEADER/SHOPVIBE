import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ShopIcon from '../components/icons/ShopIcon';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products, categories } from '../data/mockData';

const Homepage: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  const trendingCarouselRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });
  
  useEffect(() => {
    const handleCarouselNav = () => {
      const carousel = trendingCarouselRef.current;
      const prevBtn = document.getElementById('prev-trending');
      const nextBtn = document.getElementById('next-trending');
      
      if (carousel && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          carousel.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
          carousel.scrollBy({ left: 300, behavior: 'smooth' });
        });
      }
    };
    
    handleCarouselNav();
    
    // Set up countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { hours: prev.hours, minutes: newMinutes, seconds: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { hours: newHours, minutes: 59, seconds: 59 };
        
        // Reset countdown when it reaches zero
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
            Welcome to <span className="text-secondary">ShopVibe</span> <ShopIcon name="sparkles" size={36} color="#FACC15" className="inline ml-2" />
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto relative z-10">
            Discover amazing products with vibrant experiences. Shop with confidence and enjoy lightning-fast delivery! 
          </p>
          {/* Fitts's Law: Large, prominent CTA button */}
          <Link
            to="/products"
            className="inline-flex items-center space-x-3 bg-secondary text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-3xl min-h-[64px] relative z-10"
          >
            <span className="flex items-center">
              <ShopIcon name="shop" size={22} color="#111827" className="mr-2" /> Shop Now
            </span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Carousel */}
      <section className="py-16 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4 flex items-center">
                <ShopIcon name="fire" size={36} color="#DC2626" className="mr-4" /> Trending Now
              </h2>
              <p className="text-xl text-gray-600">
                Hot items everyone's talking about
              </p>
            </div>
            <div className="hidden md:flex space-x-2">
              <button className="p-3 rounded-full border border-gray-300 hover:bg-blue-50 transition-colors" id="prev-trending">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button className="p-3 rounded-full border border-gray-300 hover:bg-blue-50 transition-colors" id="next-trending">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div 
              ref={trendingCarouselRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.slice(4, 10).map((product) => (
                <div className="min-w-[280px] sm:min-w-[300px] flex-shrink-0 snap-start" key={`trending-${product.id}`}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Hick's Law: Simplified grouping */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 flex items-center justify-center">
              <ShopIcon name="target" size={36} color="#2563EB" className="mr-4" /> Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for in our carefully curated categories 
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 flex items-center">
                <ShopIcon name="star" size={36} color="#2563EB" className="mr-4" /> Featured Products
              </h2>
              <p className="text-xl text-gray-600">
                Discover our most popular and trending items
              </p>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center space-x-2 text-primary hover:text-blue-700 font-bold transition-colors bg-blue-50 px-4 py-2 rounded-full"
            >
              <span>View All Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
            {featuredProducts.map((product) => (
              <div className="flex" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="sm:hidden text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-secondary text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Limited-Time Sale Banner */}
      <section className="py-8 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-white p-3 rounded-full mr-4">
                <ShopIcon name="tag" size={30} color="#DC2626" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black">SUMMER FLASH SALE</h3>
                <p className="text-black/80 font-medium">Up to 70% off on selected items!</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex space-x-3">
                <div className="flex flex-col items-center">
                  <span className="bg-black text-white text-xl font-bold w-14 h-14 rounded-lg flex items-center justify-center">{countdown.hours.toString().padStart(2, '0')}</span>
                  <span className="text-sm mt-1 font-medium text-black/70">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-black text-white text-xl font-bold w-14 h-14 rounded-lg flex items-center justify-center">{countdown.minutes.toString().padStart(2, '0')}</span>
                  <span className="text-sm mt-1 font-medium text-black/70">Mins</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-black text-white text-xl font-bold w-14 h-14 rounded-lg flex items-center justify-center">{countdown.seconds.toString().padStart(2, '0')}</span>
                  <span className="text-sm mt-1 font-medium text-black/70">Secs</span>
                </div>
              </div>
              
              <Link to="/products" className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all duration-300 flex items-center">
                <ShopIcon name="fire" size={20} color="white" className="mr-2" /> Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 flex items-center justify-center">
              <ShopIcon name="rocket" size={36} color="#2563EB" className="mr-4" /> Why Choose ShopVibe?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShopIcon name="truck" size={28} color="#FFFFFF" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $50. Get your products delivered in 2-3 days!</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShopIcon name="shield" size={28} color="#FFFFFF" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Shopping</h3>
              <p className="text-gray-600">Your data is protected with bank-level security. Shop with complete confidence.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShopIcon name="refresh" size={28} color="#FFFFFF" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Returns</h3>
              <p className="text-gray-600">Not satisfied? Return any item within 30 days for a full refund. No questions asked!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 flex items-center justify-center">
              <ShopIcon name="star" size={36} color="#FACC15" className="mr-4" /> What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what some of our satisfied customers have to say about their shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-5 left-8">
                <div className="bg-primary text-white p-3 rounded-full shadow-lg">
                  <ShopIcon name="heart" size={20} color="white" />
                </div>
              </div>
              <div className="flex items-center mb-4 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <ShopIcon key={star} name="star" size={18} color="#FACC15" className="mr-1" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I've been shopping with ShopVibe for over a year now, and I'm consistently impressed by their quality products and fast delivery. The customer service is exceptional!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Loyal Customer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-5 left-8">
                <div className="bg-primary text-white p-3 rounded-full shadow-lg">
                  <ShopIcon name="heart" size={20} color="white" />
                </div>
              </div>
              <div className="flex items-center mb-4 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <ShopIcon key={star} name="star" size={18} color="#FACC15" className="mr-1" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The return process was so easy and hassle-free. I received my refund quickly, and the customer service rep was incredibly helpful and understanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Tech Enthusiast</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-5 left-8">
                <div className="bg-primary text-white p-3 rounded-full shadow-lg">
                  <ShopIcon name="heart" size={20} color="white" />
                </div>
              </div>
              <div className="flex items-center mb-4 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <ShopIcon key={star} name="star" size={18} color="#FACC15" className="mr-1" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I love the selection of unique products that I can't find anywhere else. The website is so easy to navigate, and checkout is a breeze. Will definitely be a repeat customer!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Aisha Patel</h4>
                  <p className="text-sm text-gray-500">Fashion Blogger</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center text-primary hover:text-blue-700 font-bold transition-colors">
              <span>Start Shopping & Experience the Difference</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 flex items-center justify-center">
            <ShopIcon name="celebration" size={36} color="#FFFFFF" className="mr-4" /> Ready to Enhance Your Experience?
          </h2>
          <p className="text-xl text-white/90 mb-10 relative z-10">
            Explore our extensive catalog and discover products that will transform your everyday life! <ShopIcon name="sparkles" size={20} color="#FACC15" className="inline" />
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link to="/products" className="bg-secondary text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 text-lg flex items-center justify-center animate-bounce">
              <ShopIcon name="tag" size={20} color="#111827" className="mr-2" />
              Browse All Products
            </Link>
            <Link to="/products" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-lg flex items-center justify-center hover:animate-wiggle">
              <ShopIcon name="star" size={20} color="#2563EB" className="mr-2" />
              View Featured Items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;