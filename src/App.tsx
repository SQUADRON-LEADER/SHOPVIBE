
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import LoadingAnimation from './components/LoadingAnimation';
import Homepage from './pages/Homepage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // Check if device is touch-based (mobile/tablet)
  useEffect(() => {
    const checkTouch = () => {
      const isTouchDevice = ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0);
      setCursorEnabled(!isTouchDevice);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className={`App ${cursorEnabled ? 'cursor-custom' : ''}`}>
          {cursorEnabled && <CustomCursor />}
          <LoadingAnimation isLoading={loading} />
          <Header />
          <main className={`min-h-screen transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;