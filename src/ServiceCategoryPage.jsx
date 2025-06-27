import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, ChevronDown, Heart, Star, Globe, Code, Palette, Zap, ShoppingCart, Layers, Monitor, Filter, Grid, List, ChevronLeft, ChevronRight, MapPin, Clock, Award, TrendingUp, Users, CheckCircle, Play, Eye, Bookmark, Share2, MessageCircle, Mail, Phone, X, ArrowRight, Flame, Crown, Shield, Sparkles, GitCompare as Compare, Download, Headphones, Smartphone, Lightbulb, Rocket, Target, BarChart3, Settings, ThumbsUp, MessageSquare, Calendar, DollarSign, Package, Briefcase } from 'lucide-react';
import './ServiceCategoryPage.css';

const ServiceCategoryPage = () => {
   const { serviceId } = useParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('best-selling');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [compareServices, setCompareServices] = useState(new Set());
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [savedServices, setSavedServices] = useState(new Set());
  const [showQuickPreview, setShowQuickPreview] = useState(false);
  const [previewService, setPreviewService] = useState(null);

  const platforms = [
    { name: 'WordPress', icon: <Globe className="w-6 h-6" />, color: 'wordpress', count: '45k+', trend: '+12%' },
    { name: 'Shopify', icon: <ShoppingCart className="w-6 h-6" />, color: 'shopify', count: '32k+', trend: '+18%' },
    { name: 'Custom', icon: <Code className="w-6 h-6" />, color: 'custom', count: '78k+', trend: '+25%' },
    { name: 'React', icon: <Zap className="w-6 h-6" />, color: 'react', count: '35k+', trend: '+30%' },
    { name: 'Mobile Apps', icon: <Smartphone className="w-6 h-6" />, color: 'mobile', count: '28k+', trend: '+22%' },
    { name: 'AI/ML', icon: <Lightbulb className="w-6 h-6" />, color: 'ai', count: '15k+', trend: '+45%' },
    { name: 'E-commerce', icon: <Package className="w-6 h-6" />, color: 'ecommerce', count: '42k+', trend: '+20%' },
    { name: 'Consulting', icon: <Briefcase className="w-6 h-6" />, color: 'consulting', count: '18k+', trend: '+35%' }
  ];

  const categories = [
    { name: 'Website Development', icon: <Globe className="w-4 h-4" />, count: 12500 },
    { name: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" />, count: 8900 },
    { name: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" />, count: 6700 },
    { name: 'UI/UX Design', icon: <Palette className="w-4 h-4" />, count: 9200 },
    { name: 'Full Stack', icon: <Layers className="w-4 h-4" />, count: 7800 },
    { name: 'Frontend', icon: <Monitor className="w-4 h-4" />, count: 5600 },
    { name: 'Backend', icon: <Code className="w-4 h-4" />, count: 4300 },
    { name: 'API Development', icon: <Settings className="w-4 h-4" />, count: 3200 },
    { name: 'AI/ML Services', icon: <Lightbulb className="w-4 h-4" />, count: 2100 },
    { name: 'Consulting', icon: <Briefcase className="w-4 h-4" />, count: 1800 }
  ];

  const services = [
    {
      id: 1,
      title: "I will build stunning website development with cutting-edge technology and modern design",
      developer: "Anarul Islam",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
      rating: 4.9,
      reviews: 256,
      price: 7743,
      originalPrice: 12000,
      level: "Fiverr's Choice",
      badge: "PREMIUM DEVELOPER",
      location: "Bangladesh",
      responseTime: "1 hour",
      completedOrders: 1200,
      languages: ["English", "Bengali"],
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      deliveryTime: "3 days",
      revisions: "Unlimited",
      featured: true,
      online: true,
      portfolio: 12,
      category: "Website Development",
      satisfaction: 99,
      repeatClients: 85,
      description: "Transform your vision into reality with cutting-edge web development",
      specialties: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
      achievements: ["Top 1% Developer", "500+ Happy Clients", "Award Winner"],
      quickTurnaround: true,
      premiumSupport: true
    },
    {
      id: 2,
      title: "I will create revolutionary MERN stack applications with AI integration and blockchain",
      developer: "Ibrahim Khan",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
      rating: 4.9,
      reviews: 190,
      price: 9110,
      originalPrice: 15000,
      level: "Level 2",
      badge: "TECH INNOVATOR",
      location: "Pakistan",
      responseTime: "2 hours",
      completedOrders: 890,
      languages: ["English", "Urdu"],
      skills: ["MERN Stack", "Python", "Django", "Blockchain"],
      deliveryTime: "5 days",
      revisions: "3 revisions",
      featured: false,
      online: true,
      portfolio: 16,
      category: "Full Stack",
      satisfaction: 96,
      repeatClients: 78,
      description: "Next-generation applications with cutting-edge technology",
      specialties: ["AI Integration", "Blockchain", "Microservices"],
      achievements: ["Blockchain Expert", "AI Specialist", "300+ Projects"],
      quickTurnaround: false,
      premiumSupport: true
    },
    {
      id: 3,
      title: "I will develop AI-powered software solutions with machine learning and advanced analytics",
      developer: "Saklain Sarower",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
      rating: 5.0,
      reviews: 106,
      price: 7288,
      originalPrice: 10000,
      level: "Level 1",
      badge: "AI SPECIALIST",
      location: "India",
      responseTime: "30 minutes",
      completedOrders: 650,
      languages: ["English", "Hindi"],
      skills: ["AI/ML", "React", "Python", "TensorFlow"],
      deliveryTime: "7 days",
      revisions: "2 revisions",
      featured: true,
      online: false,
      portfolio: 20,
      category: "AI Development",
      satisfaction: 98,
      repeatClients: 92,
      description: "Intelligent solutions powered by cutting-edge AI technology",
      specialties: ["Machine Learning", "Data Analytics", "Computer Vision"],
      achievements: ["AI Pioneer", "Research Published", "100+ ML Models"],
      quickTurnaround: true,
      premiumSupport: true
    },
    {
      id: 4,
      title: "I will build enterprise-grade full stack applications with scalable architecture",
      developer: "Tufael Ahmed",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
      rating: 4.9,
      reviews: 288,
      price: 7288,
      originalPrice: 9500,
      level: "Level 2",
      badge: "SPEED MASTER",
      location: "Bangladesh",
      responseTime: "1 hour",
      completedOrders: 1500,
      languages: ["English", "Bengali"],
      skills: ["Vue.js", "Laravel", "MySQL", "Docker"],
      deliveryTime: "4 days",
      revisions: "Unlimited",
      featured: false,
      online: true,
      portfolio: 14,
      category: "Website Development",
      satisfaction: 97,
      repeatClients: 88,
      description: "Enterprise solutions built for scale and performance",
      specialties: ["Scalable Architecture", "Cloud Deployment", "DevOps"],
      achievements: ["Performance Expert", "1000+ Deployments", "Zero Downtime"],
      quickTurnaround: true,
      premiumSupport: false
    },
    {
      id: 5,
      title: "I will create luxury e-commerce platforms with premium features and integrations",
      developer: "Sarah Johnson",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
      rating: 4.8,
      reviews: 342,
      price: 12500,
      originalPrice: 18000,
      level: "Top Rated",
      badge: "LUXURY SPECIALIST",
      location: "United States",
      responseTime: "15 minutes",
      completedOrders: 2100,
      languages: ["English", "Spanish"],
      skills: ["Shopify", "WooCommerce", "Stripe", "AWS"],
      deliveryTime: "7 days",
      revisions: "5 revisions",
      featured: true,
      online: true,
      portfolio: 25,
      category: "E-commerce",
      satisfaction: 99,
      repeatClients: 94,
      description: "Luxury e-commerce experiences that drive conversions",
      specialties: ["Luxury Brands", "Payment Systems", "Analytics"],
      achievements: ["E-commerce Expert", "$10M+ Revenue Generated", "Premium Partner"],
      quickTurnaround: false,
      premiumSupport: true
    },
    {
      id: 6,
      title: "I will design conversion-focused landing pages with psychological triggers",
      developer: "Alex Chen",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1",
      rating: 4.9,
      reviews: 156,
      price: 5500,
      originalPrice: 8000,
      level: "Level 1",
      badge: "CONVERSION EXPERT",
      location: "Canada",
      responseTime: "45 minutes",
      completedOrders: 780,
      languages: ["English", "French"],
      skills: ["HTML/CSS", "JavaScript", "Figma", "Analytics"],
      deliveryTime: "2 days",
      revisions: "3 revisions",
      featured: false,
      online: true,
      portfolio: 18,
      category: "Landing Pages",
      satisfaction: 95,
      repeatClients: 76,
      description: "High-converting landing pages that turn visitors into customers",
      specialties: ["A/B Testing", "CRO", "Psychology"],
      achievements: ["Conversion Specialist", "200%+ Avg Improvement", "Marketing Expert"],
      quickTurnaround: true,
      premiumSupport: false
    }
  ];

  const trendingServices = services.filter(service => service.featured || service.rating >= 4.9);
  const premiumServices = services.filter(service => service.level === "Top Rated" || service.level === "Fiverr's Choice");

  const toggleFavorite = (serviceId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(serviceId)) {
      newFavorites.delete(serviceId);
    } else {
      newFavorites.add(serviceId);
    }
    setFavorites(newFavorites);
  };

  const toggleCompare = (serviceId) => {
    const newCompare = new Set(compareServices);
    if (newCompare.has(serviceId)) {
      newCompare.delete(serviceId);
    } else if (newCompare.size < 3) {
      newCompare.add(serviceId);
    }
    setCompareServices(newCompare);
  };

  const toggleSaved = (serviceId) => {
    const newSaved = new Set(savedServices);
    if (newSaved.has(serviceId)) {
      newSaved.delete(serviceId);
    } else {
      newSaved.add(serviceId);
    }
    setSavedServices(newSaved);
  };

  const openQuickPreview = (service) => {
    setPreviewService(service);
    setShowQuickPreview(true);
    if (!recentlyViewed.find(s => s.id === service.id)) {
      setRecentlyViewed([service, ...recentlyViewed.slice(0, 4)]);
    }
  };

  const openContactModal = (service) => {
    setSelectedService(service);
    setShowContactModal(true);
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => service.category.includes(cat));
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'newest':
        return b.id - a.id;
      default:
        return b.completedOrders - a.completedOrders;
    }
  });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="service-category-container">
      {/* Professional Header */}
      <header className="professional-header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="logo">
              <Code className="logo-icon" />
              freelance
            </h1>
          </div>
          
          <div className="search-section">
            <div className="search-container">
              <Search className="search-icon" />
              <input 
                type="text" 
                placeholder="Find the perfect service for your project"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button"> Search</button>
            </div>
          </div>

          <div className="nav-section">
            <button className="nav-button">  Freelancehub</button>
            <button className="nav-button">Explore</button>
            <span className="nav-link">English</span>
            <span className="nav-link">Become a Seller</span>
            <button className="auth-button signin">Sign in</button>
            <button className="auth-button join">Join</button>
          </div>
        </div>

        {/* Categories Navigation */}
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span className="breadcrumb-home">Home</span>
          <ChevronRight className="breadcrumb-arrow" />
          <span>Programming & Tech</span>
          <ChevronRight className="breadcrumb-arrow" />
          <span className="breadcrumb-active">Website Development</span>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <div className="header-left">
            <h1 className="page-title">Website Development</h1>
            <p className="page-subtitle">
              Create, build, and develop your website with skilled website developers
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <TrendingUp className="stat-icon" />
                <span>190,000+ services available</span>
              </div>
              <div className="stat-item">
                <Users className="stat-icon" />
                <span>50,000+ active sellers</span>
              </div>
              <div className="stat-item">
                <Award className="stat-icon" />
                <span>4.9 average rating</span>
              </div>
            </div>
          </div>
          <div className="header-right">
            <button className="video-guide">
              <Play className="play-icon" />
              How it Works
            </button>
          </div>
        </div>

        {/* Platform Services */}
        <div className="platforms-section">
          <h2 className="section-title">Popular services</h2>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <div key={index} className={`platform-card ${platform.color}`}>
                <div className="platform-icon">
                  {platform.icon}
                </div>
                <div className="platform-info">
                  <h3 className="platform-name">{platform.name}</h3>
                  <span className="platform-count">{platform.count} services</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters Section */}
        <div className="filters-section">
          <div className="filters-header">
            <div className="filters-left">
              <button 
                className={`filter-toggle ${showFilters ? 'active' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="filter-icon" />
                All Filters
                <ChevronDown className={`chevron ${showFilters ? 'rotate' : ''}`} />
              </button>
              <div className="quick-filters">
                <button className="quick-filter">Service options</button>
                <button className="quick-filter">Seller details</button>
                <button className="quick-filter">Budget</button>
                <button className="quick-filter">Delivery time</button>
              </div>
            </div>
            <div className="filters-right">
              <label className="pro-services">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Pro services
              </label>
              <div className="view-controls">
                <button 
                  className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="view-icon" />
                </button>
                <button 
                  className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="view-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="advanced-filters">
              <div className="filter-sections">
                <div className="filter-section">
                  <h4 className="filter-title">Service Categories</h4>
                  <div className="category-filters">
                    {categories.map(category => (
                      <label key={category.name} className="category-filter">
                        <input 
                          type="checkbox" 
                          checked={selectedCategories.includes(category.name)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, category.name]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category.name));
                            }
                          }}
                        />
                        <span className="checkmark"></span>
                        <div className="category-info">
                          {category.icon}
                          <span className="category-name">{category.name}</span>
                          <span className="category-count">({category.count.toLocaleString()})</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="filter-section">
                  <h4 className="filter-title">Budget</h4>
                  <div className="price-filter">
                    <input 
                      type="range" 
                      min="0" 
                      max="50000" 
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="price-slider"
                    />
                    <div className="price-display">
                      <span>₹0</span>
                      <span className="price-current">₹{priceRange[1].toLocaleString()}</span>
                      <span>₹50,000+</span>
                    </div>
                  </div>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title">Seller Level</h4>
                  <div className="level-filters">
                    {["Fiverr's Choice", "Top Rated", "Level 2", "Level 1", "New Seller"].map(level => (
                      <button key={level} className="level-filter">
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h4 className="filter-title">Delivery Time</h4>
                  <div className="delivery-filters">
                    {['24 hours', '3 days', '7 days', 'Anytime'].map(time => (
                      <button key={time} className="delivery-filter">
                        <Clock className="delivery-icon" />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="results-info">
          <h3 className="results-title">
            {filteredServices.length.toLocaleString()} services available
          </h3>
          <div className="results-meta">
            <span className="results-showing">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredServices.length)} of {filteredServices.length}
            </span>
            <div className="sort-section">
              <span className="sort-label">Sort by:</span>
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="best-selling">Best Selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`services-grid ${viewMode}`}>
          {currentServices.map((service) => (
            <div key={service.id} className="service-card">
              {service.featured && <div className="featured-ribbon">Choice</div>}
              
              <div className="service-image">
                <img 
                  src={`https://images.pexels.com/photos/${1000000 + service.id}/pexels-photo-${1000000 + service.id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1`} 
                  alt={service.title}
                  className="service-thumbnail"
                />
                <div className="service-overlay">
                  <button 
                    className={`favorite-button ${favorites.has(service.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(service.id)}
                  >
                    <Heart className="heart-icon" />
                  </button>
                  <button 
                    className="preview-button"
                    onClick={() => openQuickPreview(service)}
                  >
                    <Eye className="eye-icon" />
                    Quick View
                  </button>
                </div>
              </div>
              
              <div className="service-content">
                <div className="seller-info">
                  <img src={service.avatar} alt={service.developer} className="seller-avatar" />
                  <div className="seller-details">
                    <h4 className="seller-name">{service.developer}</h4>
                    <div className="seller-level">
                      {service.level === "Fiverr's Choice" && <Crown className="level-icon" />}
                      {service.level === "Top Rated" && <Star className="level-icon" />}
                      <span className={`level-badge ${service.level.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`}>
                        {service.level}
                      </span>
                    </div>
                  </div>
                  {service.online && <div className="online-status"></div>}
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                
                <div className="service-rating">
                  <Star className="star-icon filled" />
                  <span className="rating-number">{service.rating}</span>
                  <span className="reviews-count">({service.reviews})</span>
                </div>

                <div className="service-footer">
                  <div className="service-meta">
                    <div className="delivery-time">
                      <Clock className="meta-icon" />
                      <span>{service.deliveryTime}</span>
                    </div>
                  </div>
                  <div className="service-price">
                    <span className="price-label">Starting at</span>
                    <span className="price-amount">₹{service.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-section">
          <div className="pagination-controls">
            <button 
              className="pagination-button prev"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ChevronLeft className="pagination-icon" />
              Previous
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button 
              className="pagination-button next"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
              <ChevronRight className="pagination-icon" />
            </button>
          </div>
        </div>
      </main>

      {/* Quick Preview Modal */}
      {showQuickPreview && previewService && (
        <div className="modal-overlay" onClick={() => setShowQuickPreview(false)}>
          <div className="quick-preview-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowQuickPreview(false)}>
              <X className="close-icon" />
            </button>
            
            <div className="preview-content">
              <div className="preview-header">
                <img 
                  src={`https://images.pexels.com/photos/${1000000 + previewService.id}/pexels-photo-${1000000 + previewService.id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1`} 
                  alt={previewService.title}
                  className="preview-image"
                />
              </div>
              
              <div className="preview-body">
                <div className="preview-seller">
                  <img src={previewService.avatar} alt={previewService.developer} className="preview-avatar" />
                  <div className="preview-seller-info">
                    <h4 className="preview-seller-name">{previewService.developer}</h4>
                    <span className="preview-seller-level">{previewService.level}</span>
                  </div>
                </div>

                <h3 className="preview-title">{previewService.title}</h3>
                <p className="preview-description">{previewService.description}</p>
                
                <div className="preview-stats">
                  <div className="preview-stat">
                    <Star className="stat-icon" />
                    <span>{previewService.rating} ({previewService.reviews} reviews)</span>
                  </div>
                  <div className="preview-stat">
                    <Clock className="stat-icon" />
                    <span>{previewService.deliveryTime} delivery</span>
                  </div>
                </div>

                <div className="preview-price">
                  <span className="preview-price-label">Starting at</span>
                  <span className="preview-price-amount">₹{previewService.price.toLocaleString()}</span>
                </div>

                <div className="preview-actions">
                  <button className="preview-button primary">Continue (₹{previewService.price.toLocaleString()})</button>
                  <button className="preview-button secondary">Contact Seller</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCategoryPage;