import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Globe, Bell, User, ChevronDown, Menu, X, Filter, 
  Grid, List, Star, Clock, Heart, Eye, Share2, MoreHorizontal,
  Users, Award, ArrowRight, Palette, Image, FileText, Zap, 
  Layers, Brush, Camera, Sparkles, MapPin
} from 'lucide-react';
import './graphics.css';


  const ServiceCard = ({ service, viewMode, favorites, toggleFavorite, getLevelColor }) => {
  const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/services/${service.id}`);
};


  return (
    <div className={`service-card ${viewMode === 'list' ? 'list-view' : ''}`}>
      {service.isFeatured && (
        <div className="featured-badge">FEATURED</div>
      )}

  
      <div className="card-image" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
        <img src={service.image} alt={service.title} />
        
        <div className="card-overlay">
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevents triggering navigation
              toggleFavorite(service.id);
            }}
            className={`favorite-btn ${favorites.has(service.id) ? 'favorited' : ''}`}
          >
            <Heart className="heart-icon" />
          </button>
          
          <div className="card-actions">
            <button className="action-btn"><Eye className="action-icon" /></button>
            <button className="action-btn"><Share2 className="action-icon" /></button>
          </div>
        </div>
        
        <div className="seller-preview">
          <img src={service.seller.avatar} alt={service.seller.name} />
          {service.seller.isOnline && <div className="online-indicator"></div>}
        </div>
      </div>

      <div className="card-content">
        <div className="seller-info">
          <img src={service.seller.avatar} alt={service.seller.name} className="seller-thumb" />
          <div className="seller-details">
            <div className="seller-header">
              <h4 className="seller-name">{service.seller.name}</h4>
              <span className={`seller-level ${getLevelColor(service.seller.level)}`}>
                {service.seller.level}
              </span>
            </div>
            <div className="seller-location">
              <MapPin className="location-icon" />
              <span>{service.seller.country}</span>
            </div>
          </div>
        </div>

        <h3
          className="service-title"
          onClick={handleNavigate}
          style={{ cursor: 'pointer' }}
        >
          {service.title}
        </h3>

        <div className="service-meta">
          <div className="meta-item">
            <Clock className="meta-icon" />
            <span>{service.deliveryTime}</span>
          </div>
          <div className="rating">
            <Star className="star-icon filled" />
            <span className="rating-score">{service.rating}</span>
            <span className="review-count">({service.reviewCount})</span>
          </div>
        </div>

        <div className="skill-tags">
          {service.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>

        <div className="card-footer">
          <div className="pricing">
            {service.originalPrice && (
              <div className="original-price">${service.originalPrice}</div>
            )}
            <div className="current-price">
              <span className="price-label">Starting at</span>
              <span className="price-amount">${service.price}</span>
            </div>
          </div>
          <button className="view-details-btn" onClick={handleNavigate}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

  const Graphics = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(500);
  const [favorites, setFavorites] = useState(new Set());

  const categories = [
    'Graphics & Design', 'Digital Marketing', 'Writing & Translation',
    'Video & Animation', 'Music & Audio', 'Programming & Tech',
    'Data', 'Business', 'Photography', 'AI Services'
  ];

  const tools = [
    { name: 'Logo Design', count: '12,500+', icon: Palette, gradient: 'purple-pink' },
    { name: 'Brand Identity', count: '8,200+', icon: Layers, gradient: 'blue-indigo' },
    { name: 'Illustration', count: '6,800+', icon: Brush, gradient: 'green-emerald' },
    { name: 'Print Design', count: '5,400+', icon: FileText, gradient: 'orange-red' },
    { name: 'Photo Editing', count: '9,100+', icon: Camera, gradient: 'teal-cyan' },
    { name: 'UI/UX Design', count: '7,600+', icon: Zap, gradient: 'violet-purple' },
    { name: 'Web Graphics', count: '11,300+', icon: Image, gradient: 'rose-pink' },
    { name: 'Creative Design', count: '4,900+', icon: Sparkles, gradient: 'amber-orange' }
  ];

  const mockServices = [
    {
      id: '1',
      title: 'I will design a professional logo for your business within 24 hours',
      seller: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Top Rated',
        isOnline: true,
        country: 'United States'
      },
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      reviewCount: 2847,
      price: 25,
      originalPrice: 50,
      deliveryTime: '1 day',
      features: ['Logo Design', 'Brand Identity', 'Vector Files'],
      tags: ['Logo', 'Branding', 'Design'],
      isFeatured: true
    },
    {
      id: '2',
      title: 'I will create modern business card designs that stand out',
      seller: {
        name: 'Mike Chen',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Level 2',
        isOnline: false,
        country: 'Canada'
      },
      image: 'https://images.pexels.com/photos/6803522/pexels-photo-6803522.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.8,
      reviewCount: 1243,
      price: 15,
      deliveryTime: '2 days',
      features: ['Business Cards', 'Print Ready', 'Multiple Concepts'],
      tags: ['Business Cards', 'Print', 'Corporate']
    },
    {
      id: '3',
      title: 'I will design eye-catching social media graphics and posts',
      seller: {
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Top Rated',
        isOnline: true,
        country: 'United Kingdom'
      },
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 5.0,
      reviewCount: 892,
      price: 35,
      deliveryTime: '3 days',
      features: ['Social Media', 'Instagram', 'Facebook'],
      tags: ['Social Media', 'Instagram', 'Marketing']
    },
    {
      id: '4',
      title: 'I will create stunning website banners and headers',
      seller: {
        name: 'Alex Rodriguez',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Level 1',
        isOnline: true,
        country: 'Spain'
      },
      image: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.7,
      reviewCount: 657,
      price: 20,
      deliveryTime: '2 days',
      features: ['Web Design', 'Banners', 'Headers'],
      tags: ['Web Design', 'Banners', 'Digital']
    },
    {
      id: '5',
      title: 'I will design professional brochures and flyers for your business',
      seller: {
        name: 'Lisa Anderson',
        avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Level 2',
        isOnline: false,
        country: 'Australia'
      },
      image: 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.6,
      reviewCount: 1456,
      price: 30,
      deliveryTime: '3 days',
      features: ['Brochure', 'Flyer', 'Print Design'],
      tags: ['Print', 'Brochure', 'Marketing']
    },
    {
      id: '6',
      title: 'I will create custom illustrations and digital artwork',
      seller: {
        name: 'David Kim',
        avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 'Top Rated',
        isOnline: true,
        country: 'South Korea'
      },
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=500',
      rating: 4.9,
      reviewCount: 923,
      price: 45,
      deliveryTime: '4 days',
      features: ['Illustration', 'Digital Art', 'Custom'],
      tags: ['Illustration', 'Art', 'Custom']
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

  const getLevelColor = (level) => {
    switch (level) {
      case 'Top Rated': return 'level-top-rated';
      case 'Level 2': return 'level-2';
      case 'Level 1': return 'level-1';
      default: return 'level-new';
    }
  };

  return (
    <div className="graphics-container">
      {/* Header */}
      <header className="modern-header">
        <div className="header-wrapper">
          <div className="header-left">
            <div className="brand-logo">GraphicsPro</div>
            
            <nav className="desktop-nav">
              <button className="nav-item"> Business</button>
              <button className="nav-item">Explore</button>
              <button className="nav-item">
                <Globe className="nav-icon" />
                English
                <ChevronDown className="dropdown-icon" />
              </button>
            </nav>
          </div>

          <div className="header-search">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="What service are you looking for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-field"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>

          <div className="header-right">
            <button className="nav-item desktop-only">Pro max</button>
            <button className="nav-item desktop-only">
              <Bell className="nav-icon" />
            </button>
            <button className="nav-item signin-btn">Sign in</button>
            <button className="join-btn">Join</button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <button className="mobile-nav-item">Fiverr Business</button>
            <button className="mobile-nav-item">Explore</button>
            <button className="mobile-nav-item">Sign in</button>
            <button className="mobile-nav-item join-mobile">Join</button>
          </div>
        )}
      </header>

      {/* Category Navigation */}
      <nav className="category-nav">
        <div className="category-wrapper">
          {categories.map((category) => (
            <button key={category} className="category-item">
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Find the perfect
              <span className="highlight"> graphics design</span> services for your business
            </h1>
            <p className="hero-subtitle">
              Millions of people use GraphicsPro to turn their ideas into reality. 
              From logo design to complete brand identity, we've got you covered.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <Star className="stat-icon" />
                <span className="stat-value">4.9/5</span>
                <span className="stat-label">average rating</span>
              </div>
              <div className="stat">
                <Users className="stat-icon" />
                <span className="stat-value">2M+</span>
                <span className="stat-label">happy customers</span>
              </div>
              <div className="stat">
                <Clock className="stat-icon" />
                <span className="stat-value">24/7</span>
                <span className="stat-label">support</span>
              </div>
              <div className="stat">
                <Award className="stat-icon" />
                <span className="stat-value">Pro</span>
                <span className="stat-label">verified sellers</span>
              </div>
            </div>

            <button className="hero-cta">
              Get Started
              <ArrowRight className="cta-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Tools */}
      <section className="tools-section">
        <div className="tools-wrapper">
          <div className="section-header">
            <h2 className="section-title">Popular Graphics Services</h2>
            <p className="section-subtitle">Explore our most in-demand design categories</p>
          </div>
          
          <div className="tools-grid">
            {tools.map((tool) => (
              <div key={tool.name} className="tool-card">
                <div className={`tool-icon gradient-${tool.gradient}`}>
                  <tool.icon />
                </div>
                <div className="tool-info">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-count">{tool.count} services</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Filter Panel */}
        <div className="filter-panel">
          <div className="filter-header">
            <div className="filter-left">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="filter-toggle"
              >
                <Filter className="filter-icon" />
                Filters
                <ChevronDown className={`dropdown-icon ${showFilters ? 'rotated' : ''}`} />
              </button>
              
              <div className="quick-filters">
                <button className="quick-filter active">Pro Services</button>
                <button className="quick-filter">Express 24h</button>
                <button className="quick-filter">Local Sellers</button>
              </div>
            </div>
            
            <div className="filter-right">
              <label className="pro-toggle">
                <input type="checkbox" />
                Pro services only
              </label>
              
              <div className="view-switcher">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                >
                  <Grid className="view-icon" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                >
                  <List className="view-icon" />
                </button>
              </div>
            </div>
          </div>
          
          {showFilters && (
            <div className="advanced-filters">
              <div className="filter-group">
                <h4 className="filter-title">Service Category</h4>
                <div className="filter-options">
                  {['Logo Design', 'Brand Identity', 'Print Design', 'Illustration'].map((category) => (
                    <label key={category} className="filter-option">
                      <input type="checkbox" />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="filter-group">
                <h4 className="filter-title">Seller Level</h4>
                <div className="filter-options">
                  {['Top Rated Seller', 'Level 2', 'Level 1', 'New Seller'].map((level) => (
                    <label key={level} className="filter-option">
                      <input type="checkbox" />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="filter-group">
                <h4 className="filter-title">Budget</h4>
                <div className="price-filter">
                  <input
                    type="range"
                    min="5"
                    max="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="price-slider"
                  />
                  <div className="price-display">Up to ${priceRange}</div>
                </div>
              </div>
              
              <div className="filter-group">
                <h4 className="filter-title">Delivery Time</h4>
                <div className="filter-options">
                  {['Express 24H', 'Up to 3 days', 'Up to 7 days', '7+ days'].map((time) => (
                    <label key={time} className="filter-option">
                      <input type="checkbox" />
                      <span>{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="results-header">
          <h2 className="results-count">
            {mockServices.length.toLocaleString()} graphics design services available
          </h2>
          <div className="sort-controls">
            <label>Sort by:</label>
            <select className="sort-select">
              <option>Best Selling</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Services Grid */}
          <div className={`services-container ${viewMode}`}>
            {mockServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          viewMode={viewMode}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          getLevelColor={getLevelColor}
      />
    ))}
          </div>
        </main>
      </div>
  );
};

export default Graphics;