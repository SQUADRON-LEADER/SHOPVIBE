import { Product, Category, Review } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    productCount: 45,
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: '2',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    productCount: 38,
    color: 'from-rose-500 to-orange-500'
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    productCount: 29,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    productCount: 32,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '5',
    name: 'Beauty',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    productCount: 24,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: '6',
    name: 'Books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
    productCount: 18,
    color: 'from-amber-500 to-yellow-500'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones Pro',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=500&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=500&h=400&fit=crop&auto=format'
    ],
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Perfect for music lovers and professionals.',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Bluetooth 5.0', 'Premium Sound Quality', 'Quick Charge', 'Voice Assistant'],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    brand: 'AudioTech',
    colors: ['Black', 'White', 'Silver'],
    tags: ['wireless', 'bluetooth', 'noise-cancelling', 'premium']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch Ultra',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=500&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=500&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=500&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=500&h=400&fit=crop&auto=format'
    ],
    category: 'Electronics',
    description: 'Advanced smartwatch with comprehensive health tracking, GPS, and 7-day battery life. Monitor your fitness goals with precision.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant', 'Sleep Tracking', 'Workout Modes'],
    inStock: true,
    rating: 4.6,
    reviews: 156,
    brand: 'FitTech',
    colors: ['Black', 'Rose Gold', 'Silver'],
    tags: ['smartwatch', 'fitness', 'health', 'gps']
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt Collection',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&h=400&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=500&h=400&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&h=400&fit=crop&auto=format'
    ],
    category: 'Fashion',
    description: 'Comfortable and stylish 100% organic cotton t-shirt perfect for everyday wear. Sustainable fashion at its finest.',
    features: ['100% Organic Cotton', 'Machine Washable', 'Comfortable Fit', 'Sustainable', 'Pre-shrunk', 'Colorfast'],
    inStock: true,
    rating: 4.4,
    reviews: 89,
    brand: 'EcoWear',
    colors: ['White', 'Black', 'Navy', 'Gray', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    tags: ['cotton', 'organic', 'sustainable', 'casual']
  },
  {
    id: '4',
    name: 'Modern LED Table Lamp',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Home & Garden',
    description: 'Elegant LED table lamp with adjustable brightness, touch controls, and modern minimalist design. Perfect for any room.',
    features: ['LED Lighting', 'Touch Controls', 'Adjustable Brightness', 'Modern Design', 'Energy Efficient', 'USB Charging Port'],
    inStock: true,
    rating: 4.7,
    reviews: 67,
    brand: 'LightCraft',
    colors: ['White', 'Black', 'Gold'],
    tags: ['led', 'modern', 'adjustable', 'touch-control']
  },
  {
    id: '5',
    name: 'Professional Yoga Mat Premium',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Sports',
    description: 'Professional-grade yoga mat with superior grip, extra cushioning, and eco-friendly materials. Perfect for all yoga practices.',
    features: ['Non-Slip Surface', 'Extra Cushioning', 'Eco-Friendly', 'Easy to Clean', 'Alignment Lines', 'Carrying Strap'],
    inStock: true,
    rating: 4.9,
    reviews: 145,
    brand: 'ZenFlow',
    colors: ['Blue', 'Teal', 'Yellow', 'Black'],
    tags: ['yoga', 'eco-friendly', 'non-slip', 'professional']
  },
  {
    id: '6',
    name: 'Wireless Phone Charger Stand',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/4482901/pexels-photo-4482901.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Electronics',
    description: 'Fast wireless charging stand compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection.',
    features: ['Fast Charging', 'Qi Compatible', 'LED Indicator', 'Overcharge Protection', 'Adjustable Angle', 'Case Friendly'],
    inStock: false,
    rating: 4.3,
    reviews: 92,
    brand: 'ChargeTech',
    colors: ['Black', 'White'],
    tags: ['wireless', 'charging', 'qi', 'fast-charge']
  },
  {
    id: '7',
    name: 'Gaming Mechanical Keyboard RGB',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Electronics',
    description: 'Professional gaming keyboard with mechanical switches, customizable RGB lighting, and programmable keys for the ultimate gaming experience.',
    features: ['Mechanical Switches', 'RGB Lighting', 'Programmable Keys', 'Anti-Ghosting', 'USB Passthrough', 'Media Controls'],
    inStock: true,
    rating: 4.7,
    reviews: 203,
    brand: 'GameForce',
    colors: ['Black', 'White'],
    tags: ['gaming', 'mechanical', 'rgb', 'programmable']
  },
  {
    id: '8',
    name: 'Luxury Skincare Set',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Beauty',
    description: 'Complete luxury skincare routine with cleanser, serum, moisturizer, and eye cream. Natural ingredients for radiant skin.',
    features: ['Natural Ingredients', 'Anti-Aging', 'Hydrating Formula', 'Dermatologist Tested', 'Cruelty-Free', 'Complete Routine'],
    inStock: true,
    rating: 4.8,
    reviews: 178,
    brand: 'GlowLux',
    tags: ['skincare', 'luxury', 'natural', 'anti-aging']
  },
  {
    id: '9',
    name: 'Bestseller Novel Collection',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Books',
    description: 'Collection of three bestselling novels from award-winning authors. Perfect for book lovers and gift giving.',
    features: ['Bestselling Authors', 'Award Winners', 'Hardcover Edition', 'Gift Box Included', 'Bookmark Set', 'Limited Edition'],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    brand: 'Literary Classics',
    tags: ['books', 'bestseller', 'collection', 'hardcover']
  },
  {
    id: '10',
    name: 'Wireless Earbuds Pro Max',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Electronics',
    description: 'Premium wireless earbuds with spatial audio, adaptive noise cancellation, and 24-hour battery life with charging case.',
    features: ['Spatial Audio', 'Adaptive Noise Cancellation', '24-hour Battery', 'Wireless Charging Case', 'Water Resistant', 'Touch Controls'],
    inStock: true,
    rating: 4.9,
    reviews: 312,
    brand: 'AudioTech',
    colors: ['White', 'Black', 'Rose Gold'],
    tags: ['wireless', 'earbuds', 'premium', 'noise-cancelling']
  },
  {
    id: '11',
    name: 'Designer Handbag Collection',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/1152079/pexels-photo-1152079.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Fashion',
    description: 'Elegant designer handbag crafted from premium leather with gold hardware. Perfect for both casual and formal occasions.',
    features: ['Premium Leather', 'Gold Hardware', 'Multiple Compartments', 'Adjustable Strap', 'Dust Bag Included', 'Lifetime Warranty'],
    inStock: true,
    rating: 4.7,
    reviews: 124,
    brand: 'LuxeFashion',
    colors: ['Black', 'Brown', 'Burgundy', 'Navy'],
    tags: ['handbag', 'designer', 'leather', 'luxury']
  },
  {
    id: '12',
    name: 'Smart Home Security Camera',
    price: 79.99,
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
    ],
    category: 'Electronics',
    description: '1080p HD security camera with night vision, motion detection, and smartphone app control. Keep your home secure 24/7.',
    features: ['1080p HD Video', 'Night Vision', 'Motion Detection', 'Smartphone App', 'Cloud Storage', 'Two-Way Audio'],
    inStock: true,
    rating: 4.5,
    reviews: 167,
    brand: 'SecureHome',
    colors: ['White', 'Black'],
    tags: ['security', 'camera', 'smart-home', 'hd']
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Amazing sound quality! The noise cancellation is incredible and the battery life is exactly as advertised. Highly recommend!',
    date: '2024-01-15',
    helpful: 23
  },
  {
    id: '2',
    productId: '1',
    userName: 'Mike Chen',
    userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4,
    comment: 'Great headphones overall. The build quality is solid and they are very comfortable for long listening sessions.',
    date: '2024-01-10',
    helpful: 15
  },
  {
    id: '3',
    productId: '2',
    userName: 'Emily Davis',
    userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Perfect fitness companion! Tracks everything I need and the battery really does last a week. Love the design too.',
    date: '2024-01-12',
    helpful: 18
  },
  {
    id: '4',
    productId: '3',
    userName: 'Alex Rodriguez',
    userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 4,
    comment: 'Very comfortable t-shirt. The organic cotton feels great and the fit is perfect. Will definitely buy more colors.',
    date: '2024-01-08',
    helpful: 12
  },
  {
    id: '5',
    productId: '5',
    userName: 'Lisa Thompson',
    userAvatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Best yoga mat I\'ve ever owned! The grip is fantastic even during hot yoga sessions. Worth every penny.',
    date: '2024-01-05',
    helpful: 27
  }
];