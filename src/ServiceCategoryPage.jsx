import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import './ServiceCategoryPage.css';
import { 
  Home, 
  ChevronRight, 
  Play, 
  Heart, 
  ChevronDown, 
  ChevronLeft,
  Star,
  Filter,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Award,
  TrendingUp,
  Eye,
  MessageCircle,
  Search,
  X,
  Check,
  ThumbsUp,
  MoreHorizontal,
  Bookmark,
  Share2,
  Users,
  Globe,
  Calendar,
  ChevronUp,
  MapPin,
  Verified,
  Crown,
  Flame,
  Target,
  RefreshCw,
  SlidersHorizontal,
  ArrowUpDown,
  Grid3X3,
  List,
  Maximize2,
  Info,
  ExternalLink
} from 'lucide-react';

const ServiceCategoryPage = () => {
  const { category } = useParams();
  const [favorites, setFavorites] = useState(new Set());
  const [bookmarks, setBookmarks] = useState(new Set());
  const [activeFilters, setActiveFilters] = useState({
    serviceOptions: '',
    sellerDetails: '',
    budget: '',
    deliveryTime: '',
    proServices: false,
    verifiedSellers: false,
    categories: []
  });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('best-selling');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [savedSearches, setSavedSearches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');

  const searchInputRef = useRef(null);
     const categories = [
    { id: 'all', name: 'All Categories', count: '190,000+' },
    { id: 'website-development', name: 'Website Development', count: '45,000+' },
    { id: 'ecommerce', name: 'E-Commerce Development', count: '12,000+' },
    { id: 'cms', name: 'CMS Development', count: '8,500+' },
    { id: 'landing-pages', name: 'Landing Pages', count: '15,000+' },
    { id: 'web-apps', name: 'Web Applications', count: '22,000+' },
    { id: 'maintenance', name: 'Website Maintenance', count: '6,800+' }
  ];
   
  const platforms = [
    { name: 'WordPress', icon: '🌐', color: 'bg-gradient-to-br from-blue-500 to-blue-600', glow: 'shadow-blue-500/25', count: '45K+' },
    { name: 'Shopify', icon: '🛍️', color: 'bg-gradient-to-br from-green-500 to-emerald-600', glow: 'shadow-green-500/25', count: '28K+' },
    { name: 'Custom Websites', icon: '💻', color: 'bg-gradient-to-br from-purple-500 to-violet-600', glow: 'shadow-purple-500/25', count: '67K+' },
    { name: 'Wix', icon: '🎨', color: 'bg-gradient-to-br from-orange-500 to-red-500', glow: 'shadow-orange-500/25', count: '15K+' },
    { name: 'Webflow', icon: '🌊', color: 'bg-gradient-to-br from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/25', count: '12K+' },
    { name: 'Squarespace', icon: '⬛', color: 'bg-gradient-to-br from-gray-700 to-gray-900', glow: 'shadow-gray-500/25', count: '8K+' },
    { name: 'WooCommerce', icon: '🛒', color: 'bg-gradient-to-br from-purple-600 to-pink-600', glow: 'shadow-purple-500/25', count: '18K+' },
    { name: 'React', icon: '⚛️', color: 'bg-gradient-to-br from-blue-400 to-cyan-500', glow: 'shadow-blue-400/25', count: '25K+' }
  ];
    const filterOptions = {
    serviceOptions: [
      { id: 'include-source-code', label: 'Include source code', count: 15420 },
      { id: 'responsive-design', label: 'Responsive design', count: 89650 },
      { id: 'seo-optimized', label: 'SEO optimized', count: 45230 },
      { id: 'ai-integration', label: 'AI integration', count: 12890 },
      { id: 'cms-included', label: 'CMS included', count: 34560 },
      { id: 'ecommerce-ready', label: 'E-commerce ready', count: 23450 }
    ],
    sellerDetails: [
      { id: 'top-rated-seller', label: 'Top Rated Seller', count: 5680 },
      { id: 'verified-seller', label: 'Verified Seller', count: 12340 },
      { id: 'pro-seller', label: 'Pro Seller', count: 3450 },
      { id: 'online-now', label: 'Online now', count: 890 },
      { id: 'speaks-english', label: 'Speaks English', count: 78900 },
      { id: 'local-seller', label: 'Local seller', count: 2340 }
    ],
    budget: [
      { id: 'under-50', label: 'Under $50', count: 45600 },
      { id: '50-100', label: '$50 - $100', count: 67800 },
      { id: '100-250', label: '$100 - $250', count: 34500 },
      { id: '250-500', label: '$250 - $500', count: 12300 },
      { id: 'over-500', label: '$500+', count: 8900 }
    ],
    deliveryTime: [
      { id: '24-hours', label: '24 Hours', count: 12340 },
      { id: '3-days', label: 'Up to 3 days', count: 45670 },
      { id: '7-days', label: 'Up to 7 days', count: 78900 },
      { id: '30-days', label: 'Up to 30 days', count: 23450 },
      { id: 'anytime', label: 'Anytime', count: 190000 }
    ]
  };

  const sortOptions = [
    { id: 'best-selling', label: 'Best Selling', icon: TrendingUp },
    { id: 'recommended', label: 'Recommended', icon: Sparkles },
    { id: 'newest', label: 'Newest Arrivals', icon: Clock },
    { id: 'price-low', label: 'Price: Low to High', icon: ArrowUpDown },
    { id: 'price-high', label: 'Price: High to Low', icon: ArrowUpDown },
    { id: 'rating', label: 'Highest Rated', icon: Star },
    { id: 'delivery-fast', label: 'Fastest Delivery', icon: Zap }
  ];

  const services = [
    {
      id: 1,
      title: 'I will build and rebuild your website with modern AI-powered design and optimization',
      seller: {
        username: 'webdev_pro',
        name: 'Alex Rodriguez',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Level 2',
        isOnline: true,
        country: 'United States',
        responseTime: '1 hour',
        badges: ['verified', 'pro']
      },
      rating: 4.9,
      reviews: 1250,
      price: 45,
      originalPrice: 65,
      image: 'https://images.pexels.com/photos/326504/pexels-photo-326504.jpeg?auto=compress&cs=tinysrgb&w=600',
      gallery: [
        'https://images.pexels.com/photos/326504/pexels-photo-326504.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      tags: ['WordPress', 'AI Design', 'SEO', 'Responsive'],
      badge: 'Bestseller',
      badgeColor: 'bg-gradient-to-r from-orange-400 to-red-500',
      deliveryTime: '2 days',
      completedOrders: '500+',
      description: 'Transform your online presence with cutting-edge AI-powered web design. I specialize in creating stunning, responsive websites that convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimization', 'AI Integration', 'Source Code', 'Free Revisions'],
      category: 'website-development',
      promoted: true,
      featured: true
    },
    {
      id: 2,
      title: 'I will create a professional business website with AI optimization and analytics',
      seller: {
        username: 'design_master',
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Top Rated',
        isOnline: true,
        country: 'Canada',
        responseTime: '30 min',
        badges: ['verified', 'top-rated']
      },
      rating: 4.8,
      reviews: 890,
      price: 75,
      originalPrice: 95,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      gallery: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      tags: ['Custom', 'Business', 'Mobile', 'Analytics'],
      badge: 'Pro',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      deliveryTime: '3 days',
      completedOrders: '300+',
      description: 'Professional business websites that drive results. Custom designs with built-in analytics and conversion optimization.',
      features: ['Custom Design', 'Mobile Optimized', 'Analytics Dashboard', 'CMS Integration', '30-day Support'],
      category: 'website-development',
      promoted: false,
      featured: true
    },
    {
      id: 3,
      title: 'I will develop a full stack website with AI integration and advanced database solutions',
      seller: {
        username: 'fullstack_dev',
        name: 'Mike Chen',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Level 2',
        isOnline: false,
        country: 'Singapore',
        responseTime: '2 hours',
        badges: ['verified']
      },
      rating: 5.0,
      reviews: 567,
      price: 120,
      originalPrice: 150,
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600',
      gallery: [
        'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      tags: ['React', 'Node.js', 'AI', 'Database'],
      badge: 'Choice',
      badgeColor: 'bg-gradient-to-r from-green-400 to-emerald-500',
      deliveryTime: '5 days',
      completedOrders: '200+',
      description: 'Full-stack development with modern technologies. AI-powered features and scalable database architecture.',
      features: ['Full Stack', 'AI Integration', 'Database Design', 'API Development', 'Deployment'],
      category: 'web-apps',
      promoted: true,
      featured: false
    },
    {
      id: 4,
      title: 'I will design a clean and responsive WordPress website with AI features and SEO',
      seller: {
        username: 'wp_expert',
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Level 1',
        isOnline: true,
        country: 'United Kingdom',
        responseTime: '15 min',
        badges: ['verified']
      },
      rating: 4.7,
      reviews: 2100,
      price: 35,
      originalPrice: 50,
      image: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=600',
      gallery: [
        'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      tags: ['WordPress', 'Clean', 'Fast', 'SEO'],
      badge: 'New',
      badgeColor: 'bg-gradient-to-r from-blue-400 to-cyan-500',
      deliveryTime: '1 day',
      completedOrders: '1000+',
      description: 'Clean, fast WordPress websites with modern design and SEO optimization. Perfect for businesses and blogs.',
      features: ['WordPress', 'Clean Design', 'SEO Ready', 'Fast Loading', 'Mobile Friendly'],
      category: 'cms',
      promoted: false,
      featured: false
    },
    {
      id: 5,
      title: 'I will create an e-commerce website with AI-powered recommendations and payment integration',
      seller: {
        username: 'ecom_specialist',
        name: 'David Kumar',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Top Rated',
        isOnline: true,
        country: 'India',
        responseTime: '1 hour',
        badges: ['verified', 'top-rated', 'pro']
      },
      rating: 4.9,
      reviews: 445,
      price: 150,
      originalPrice: 200,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      gallery: [
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/326504/pexels-photo-326504.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      tags: ['E-commerce', 'AI', 'Secure', 'Payments'],
      badge: 'Premium',
      badgeColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      deliveryTime: '7 days',
      completedOrders: '150+',
      description: 'Complete e-commerce solutions with AI recommendations, secure payments, and inventory management.',
      features: ['E-commerce', 'AI Recommendations', 'Payment Gateway', 'Inventory Management', 'Admin Panel'],
      category: 'ecommerce',
      promoted: true,
      featured: true
    },
    {
      id: 6,
      title: 'I will build a modern portfolio website with interactive AI elements and animations',
      seller: {
        username: 'portfolio_pro',
        name: 'Lisa Anderson',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Level 2',
        isOnline: true,
        country: 'Australia',
        responseTime: '45 min',
        badges: ['verified']
      },
      rating: 4.8,
      reviews: 678,
      price: 65,
      originalPrice: 85,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      gallery: [
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/326504/pexels-photo-326504.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      tags: ['Portfolio', 'Modern', 'Interactive', 'Animations'],
      badge: 'Rising',
      badgeColor: 'bg-gradient-to-r from-pink-400 to-purple-500',
      deliveryTime: '3 days',
      completedOrders: '250+',
      description: 'Stunning portfolio websites with interactive elements and smooth animations to showcase your work.',
      features: ['Interactive Design', 'Smooth Animations', 'Portfolio Showcase', 'Contact Forms', 'SEO Optimized'],
      category: 'website-development',
      promoted: false,
      featured: false
    }
  ];

  const toggleFavorite = (serviceId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(serviceId)) {
      newFavorites.delete(serviceId);
    } else {
      newFavorites.add(serviceId);
    }
    setFavorites(newFavorites);
  };

  const toggleBookmark = (serviceId) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(serviceId)) {
      newBookmarks.delete(serviceId);
    } else {
      newBookmarks.add(serviceId);
    }
    setBookmarks(newBookmarks);
  };

  const updateFilter = (filterType, value) => {
    if (filterType === 'proServices' || filterType === 'verifiedSellers') {
      setActiveFilters(prev => ({
        ...prev,
        [filterType]: !prev[filterType]
      }));
    } else if (filterType === 'categories') {
      setActiveFilters(prev => ({
        ...prev,
        categories: prev.categories.includes(value) 
          ? prev.categories.filter(cat => cat !== value)
          : [...prev.categories, value]
      }));
    } else {
      setActiveFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
  };

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownId]: !prev[dropdownId]
    }));
  };

  const loadMoreServices = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentPage(prev => prev + 1);
    }, 1500);
  };

  const openServicePreview = (service) => {
    setSelectedService(service);
    setShowPreview(true);
    // Add to recently viewed
    setRecentlyViewed(prev => {
      const filtered = prev.filter(item => item.id !== service.id);
      return [service, ...filtered].slice(0, 5);
    });
  };

  const saveSearch = () => {
    const searchParams = {
      query: searchQuery,
      filters: activeFilters,
      sortBy,
      timestamp: new Date().toISOString()
    };
    setSavedSearches(prev => [searchParams, ...prev.slice(0, 4)]);
  };

  const filteredServices = services.filter(service => {
    if (activeTab !== 'all' && service.category !== activeTab) return false;
    if (searchQuery && !service.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (activeFilters.verifiedSellers && !service.seller.badges.includes('verified')) return false;
    if (activeFilters.proServices && !service.seller.badges.includes('pro')) return false;
    return true;
  });

  const ServiceCard = ({ service }) => (
    <div 
      className={`service-card ${hoveredCard === service.id ? 'hovered' : ''} ${viewMode === 'list' ? 'list-view' : ''}`}
      onMouseEnter={() => setHoveredCard(service.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => openServicePreview(service)}
    >
      <div className="service-image-container">
        <img 
          src={service.image} 
          alt={service.title}
          className="service-image"
        />
        
        {/* Badge */}
        <div className={`service-badge ${service.badgeColor}`}>
          <Sparkles className="w-3 h-3 mr-1" />
          {service.badge}
        </div>
        
        {/* Action Buttons */}
        <div className="service-actions">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(service.id);
            }}
            className={`action-button favorite-button ${favorites.has(service.id) ? 'active' : 'inactive'}`}
          >
            <Heart className={`w-4 h-4 ${favorites.has(service.id) ? 'fill-current' : ''}`} />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(service.id);
            }}
            className={`action-button bookmark-button ${bookmarks.has(service.id) ? 'active' : 'inactive'}`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarks.has(service.id) ? 'fill-current' : ''}`} />
          </button>
          
          <button className="action-button share-button">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        
        {/* Play Button */}
        <button className="play-button">
          <Play className="w-4 h-4 fill-current" />
        </button>

        {/* Quick Stats Overlay */}
        {hoveredCard === service.id && (
          <div className="quick-stats-overlay">
            <div className="stat-item">
              <Eye className="w-3 h-3" />
              <span>{Math.floor(Math.random() * 500) + 100}</span>
            </div>
            <div className="stat-item">
              <MessageCircle className="w-3 h-3" />
              <span>{Math.floor(Math.random() * 50) + 10}</span>
            </div>
            <div className="stat-item">
              <Users className="w-3 h-3" />
              <span>{service.completedOrders}</span>
            </div>
          </div>
        )}

        {/* Gallery Indicators */}
        {service.gallery && service.gallery.length > 1 && (
          <div className="gallery-indicators">
            {service.gallery.map((_, index) => (
              <div key={index} className={`indicator ${index === 0 ? 'active' : ''}`}></div>
            ))}
          </div>
        )}
      </div>
      
      <div className="service-content">
        <div className="seller-info">
          <div className="seller-avatar-container">
            <img 
              src={service.seller.avatar} 
              alt={service.seller.name}
              className="seller-avatar"
            />
            {service.seller.isOnline && <div className="online-indicator"></div>}
          </div>
          <div className="seller-details">
            <div className="seller-name-row">
              <h4 className="seller-name">{service.seller.username}</h4>
              <div className="seller-badges">
                {service.seller.badges.includes('verified') && (
                  <Verified className="w-3 h-3 text-blue-500" />
                )}
                {service.seller.badges.includes('pro') && (
                  <Crown className="w-3 h-3 text-yellow-500" />
                )}
                {service.seller.badges.includes('top-rated') && (
                  <Award className="w-3 h-3 text-purple-500" />
                )}
              </div>
              <span className="seller-level">{service.seller.level}</span>
            </div>
            <div className="seller-rating">
              <Star className="rating-star" />
              <span className="rating-score">{service.rating}</span>
              <span className="rating-count">({service.reviews})</span>
            </div>
            <div className="seller-location">
              <MapPin className="w-3 h-3" />
              <span>{service.seller.country}</span>
            </div>
          </div>
        </div>
        
        <h3 className="service-title">
          {service.title}
        </h3>
        
        <div className="service-tags">
          {service.tags.map((tag, index) => (
            <span key={index} className="service-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="service-meta">
          <div className="meta-item">
            <Clock className="w-3 h-3" />
            <span>{service.deliveryTime}</span>
          </div>
          <div className="meta-item">
            <Award className="w-3 h-3" />
            <span>{service.completedOrders}</span>
          </div>
          <div className="meta-item">
            <Zap className="w-3 h-3" />
            <span>{service.seller.responseTime}</span>
          </div>
        </div>

        <div className="service-features">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="feature-item">
              <Check className="w-3 h-3" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="service-pricing">
          <div className="pricing-left">
            <span className="pricing-label">Starting at</span>
            {service.originalPrice && (
              <span className="original-price">${service.originalPrice}</span>
            )}
          </div>
          <span className="pricing-amount">${service.price}</span>
        </div>
      </div>
    </div>
  );

  const FilterDropdown = ({ title, options, filterKey, icon: Icon }) => (
    <div className="filter-dropdown">
      <button 
        className="filter-button"
        onClick={() => toggleDropdown(filterKey)}
      >
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {title}
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openDropdowns[filterKey] ? 'rotate-180' : ''}`} />
        <div className="filter-glow"></div>
      </button>
      
      {openDropdowns[filterKey] && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <h4>{title}</h4>
            <button onClick={() => toggleDropdown(filterKey)}>
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="dropdown-content">
            {options.map((option) => (
              <label key={option.id} className="dropdown-option">
                <input
                  type="checkbox"
                  checked={activeFilters[filterKey] === option.id || activeFilters.categories?.includes(option.id)}
                  onChange={() => updateFilter(filterKey, option.id)}
                />
                <span className="option-label">{option.label}</span>
                <span className="option-count">({option.count.toLocaleString()})</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const ServicePreviewModal = () => {
    if (!showPreview || !selectedService) return null;

    return (
      <div className="modal-overlay" onClick={() => setShowPreview(false)}>
        <div className="service-preview-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Service Preview</h2>
            <button onClick={() => setShowPreview(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="modal-content">
            <div className="preview-left">
              <img src={selectedService.image} alt={selectedService.title} />
              <div className="preview-gallery">
                {selectedService.gallery?.map((img, index) => (
                  <img key={index} src={img} alt={`Gallery ${index + 1}`} />
                ))}
              </div>
            </div>
            
            <div className="preview-right">
              <h3>{selectedService.title}</h3>
              <div className="preview-seller">
                <img src={selectedService.seller.avatar} alt={selectedService.seller.name} />
                <div>
                  <h4>{selectedService.seller.username}</h4>
                  <div className="seller-rating">
                    <Star className="rating-star" />
                    <span>{selectedService.rating}</span>
                    <span>({selectedService.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <p className="preview-description">{selectedService.description}</p>
              
              <div className="preview-features">
                <h4>What you get:</h4>
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <Check className="w-4 h-4" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="preview-pricing">
                <div className="price-info">
                  <span className="price">${selectedService.price}</span>
                  {selectedService.originalPrice && (
                    <span className="original-price">${selectedService.originalPrice}</span>
                  )}
                </div>
                <button className="contact-seller-btn">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="service-category-page">
      {/* Enhanced Navigation */}
      <div className="navigation-bar">
        <div className="container">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <Home className="w-4 h-4 mr-2" />
              <span>Home</span>
            </div>
            <ChevronRight className="breadcrumb-separator w-4 h-4" />
            <div className="breadcrumb-item">
              <span>Programming & Tech</span>
            </div>
            <ChevronRight className="breadcrumb-separator w-4 h-4" />
            <div className="breadcrumb-item active">
              <span>Website Development</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Enhanced Header */}
        <div className="page-header">
          <div className="header-content">
            <div className="header-left">
              <div className="header-badge">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span>Most Popular Category</span>
              </div>
              <h1 className="header-title">
                Website Development
                <span className="title-accent">
                  <Sparkles className="w-8 h-8 ml-3" />
                </span>
              </h1>
              <p className="header-subtitle">
                Create, build, and develop your website with skilled developers using cutting-edge AI technology
              </p>
              <div className="header-stats">
                <div className="stat">
                  <Shield className="w-4 h-4" />
                  <span>190,000+ verified services</span>
                </div>
                <div className="stat">
                  <Award className="w-4 h-4" />
                  <span>50,000+ satisfied clients</span>
                </div>
                <div className="stat">
                  <Globe className="w-4 h-4" />
                  <span>Available worldwide</span>
                </div>
              </div>
            </div>
            <div className="header-right">
              <button className="how-fiverr-works-btn">
                <Play className="w-5 h-5" />
                <span>How Fiverr Works</span>
                <div className="btn-glow"></div>
              </button>
              <button className="save-search-btn" onClick={saveSearch}>
                <Bookmark className="w-4 h-4 mr-2" />
                <span>Save Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="search-section">
          <div className="search-container">
            <div className="search-input-container">
              <Search className="search-icon w-5 h-5" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for website development services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="clear-search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button className="search-button">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
          
          {/* Saved Searches */}
          {savedSearches.length > 0 && (
            <div className="saved-searches">
              <h4>Recent Searches:</h4>
              <div className="saved-search-items">
                {savedSearches.map((search, index) => (
                  <button key={index} className="saved-search-item">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{search.query || 'Advanced Search'}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          <div className="tabs-container">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Platform Selection */}
        <div className="platform-section">
          <div className="platform-header">
            <h3 className="platform-title">
              <Zap className="w-5 h-5 mr-2" />
              Popular platforms
            </h3>
            <div className="platform-navigation">
              <button className="nav-button">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="nav-button">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="platform-grid">
            {platforms.map((platform, index) => (
              <div key={index} className={`platform-card ${platform.glow}`}>
                <div className={`platform-icon ${platform.color}`}>
                  <span className="platform-emoji">{platform.icon}</span>
                  <div className="icon-glow"></div>
                </div>
                <div className="platform-info">
                  <span className="platform-name">{platform.name}</span>
                  <span className="platform-count">{platform.count} services</span>
                </div>
                <div className="platform-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="filter-section">
          <div className="filter-container">
            <div className="filter-buttons">
              <FilterDropdown 
                title="Service options" 
                options={filterOptions.serviceOptions} 
                filterKey="serviceOptions"
                icon={SlidersHorizontal}
              />
              
              <FilterDropdown 
                title="Seller details" 
                options={filterOptions.sellerDetails} 
                filterKey="sellerDetails"
                icon={Users}
              />
              
              <FilterDropdown 
                title="Budget" 
                options={filterOptions.budget} 
                filterKey="budget"
                icon={Target}
              />
              
              <FilterDropdown 
                title="Delivery time" 
                options={filterOptions.deliveryTime} 
                filterKey="deliveryTime"
                icon={Clock}
              />
            </div>
            
            <div className="filter-toggles">
              <div className="pro-services-toggle">
                <div 
                  className={`toggle-switch ${activeFilters.proServices ? 'active' : 'inactive'}`}
                  onClick={() => updateFilter('proServices')}
                >
                  <div className={`toggle-knob ${activeFilters.proServices ? 'active' : ''}`}>
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div className="toggle-glow"></div>
                </div>
                <span className="toggle-label">
                  <Shield className="w-4 h-4 mr-1" />
                  Pro services
                </span>
              </div>
              
              <div className="verified-toggle">
                <div 
                  className={`toggle-switch ${activeFilters.verifiedSellers ? 'active' : 'inactive'}`}
                  onClick={() => updateFilter('verifiedSellers')}
                >
                  <div className={`toggle-knob ${activeFilters.verifiedSellers ? 'active' : ''}`}>
                    <Verified className="w-3 h-3" />
                  </div>
                  <div className="toggle-glow"></div>
                </div>
                <span className="toggle-label">
                  <Verified className="w-4 h-4 mr-1" />
                  Verified sellers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Results Header */}
        <div className="results-header">
          <div className="results-left">
            <p className="results-count">{filteredServices.length.toLocaleString()}+ results</p>
            <div className="results-badges">
              <span className="result-badge">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered
              </span>
              <span className="result-badge">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </span>
              <span className="result-badge">
                <Flame className="w-3 h-3 mr-1" />
                Trending
              </span>
            </div>
          </div>
          <div className="results-right">
            <div className="view-mode-toggle">
              <button 
                className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button 
                className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <div className="sort-section">
              <span className="sort-label">Sort by:</span>
              <div className="sort-dropdown">
                <button 
                  className="sort-button"
                  onClick={() => toggleDropdown('sort')}
                >
                  {sortOptions.find(opt => opt.id === sortBy)?.label || 'Best selling'}
                  <ChevronDown className="w-4 h-4 ml-2" />
                  <div className="sort-glow"></div>
                </button>
                
                {openDropdowns['sort'] && (
                  <div className="dropdown-menu sort-menu">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        className={`sort-option ${sortBy === option.id ? 'active' : ''}`}
                        onClick={() => {
                          setSortBy(option.id);
                          toggleDropdown('sort');
                        }}
                      >
                        <option.icon className="w-4 h-4 mr-2" />
                        <span>{option.label}</span>
                        {sortBy === option.id && <Check className="w-4 h-4 ml-auto" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <div className="recently-viewed-section">
            <h3 className="section-title">
              <Clock className="w-5 h-5 mr-2" />
              Recently Viewed
            </h3>
            <div className="recently-viewed-grid">
              {recentlyViewed.map((service) => (
                <div key={service.id} className="recently-viewed-item">
                  <img src={service.image} alt={service.title} />
                  <div className="item-info">
                    <h4>{service.title}</h4>
                    <span>${service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Service Grid */}
        <div className={`service-grid ${viewMode}`}>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Enhanced Load More */}
        <div className="load-more-section">
          <button 
            className={`load-more-button ${isLoading ? 'loading' : ''}`}
            onClick={loadMoreServices}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                <span>Loading amazing services...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                <span>Load More Services</span>
                <div className="btn-glow"></div>
              </>
            )}
          </button>
          
          <div className="pagination-info">
            <span>Showing {filteredServices.length} of 190,000+ services</span>
            <span>Page {currentPage} of {Math.ceil(190000 / 20)}</span>
          </div>
        </div>

        {/* Related Categories */}
        <div className="related-categories-section">
          <h3 className="section-title">
            <Target className="w-5 h-5 mr-2" />
            Related Categories
          </h3>
          <div className="related-categories-grid">
            {['Mobile App Development', 'E-commerce Development', 'WordPress', 'Shopify', 'Landing Pages', 'Web Applications'].map((category, index) => (
              <button key={index} className="related-category-item">
                <span>{category}</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Preview Modal */}
      <ServicePreviewModal />
    </div>
  );
};

export default ServiceCategoryPage;
