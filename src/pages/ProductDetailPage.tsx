import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Check } from 'lucide-react';
import ShopIcon from '../components/icons/ShopIcon';
import { products, reviews } from '../data/mockData';
import { useCart } from '../context/CartContext';
import ReviewSection from '../components/ReviewSection';
import ProductRecommendations from '../components/ProductRecommendations';
import ProductImageGallery from '../components/ProductImageGallery';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  const product = products.find(p => p.id === id);
  const productReviews = reviews.filter(r => r.productId === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={18} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedColor, selectedSize);
    }
  };

  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Products</span>
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <ProductImageGallery 
              images={productImages} 
              name={product.name} 
              originalPrice={product.originalPrice} 
              currentPrice={product.price}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-primary font-bold uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mt-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mt-2 font-medium">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-700">{product.rating}</span>
              <span className="text-gray-400">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  <ShopIcon name="tag" size={16} color="#DC2626" className="inline mr-1" /> SALE
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Color Selection */}
            {product.colors && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border-2 font-medium transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-lg">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-bold text-lg ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Law of Proximity: Related controls grouped together */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
              {/* Quantity */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 hover:border-primary transition-all duration-200 font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="text-xl font-bold w-16 text-center bg-gray-100 py-2 rounded-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 hover:border-primary transition-all duration-200 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons - Fitts's Law: Large, accessible buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`
                    w-full flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl font-bold text-xl transition-all duration-300 min-h-[64px] shadow-lg
                    ${product.inStock
                      ? 'bg-secondary text-black hover:bg-yellow-500 hover:scale-105 active:scale-95 hover:shadow-2xl'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  <ShoppingCart size={28} />
                  <span>Add to Cart</span>
                </button>

                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors min-h-[48px]">
                    <Heart size={22} />
                    <span className="font-semibold">Wishlist</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors min-h-[48px]">
                    <Share2 size={22} />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Features Icons */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <Truck className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <p className="text-sm font-bold text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders over $50</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <Shield className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <p className="text-sm font-bold text-gray-900">Secure Payment</p>
                <p className="text-xs text-gray-600">100% protected</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <RotateCcw className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                <p className="text-sm font-bold text-gray-900">30-Day Returns</p>
                <p className="text-xs text-gray-600">Easy returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <ReviewSection
            productId={product.id}
            reviews={productReviews}
            averageRating={product.rating}
            totalReviews={product.reviews}
          />
        </div>
      </div>

      {/* Product Recommendations */}
      <ProductRecommendations 
        currentProductId={product.id} 
        category={product.category}
        products={products}
      />
    </div>
  );
};

export default ProductDetailPage;