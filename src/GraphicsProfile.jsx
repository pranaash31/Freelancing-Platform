
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { 
  Star, 
  Heart, 
  Share2, 
  MoreHorizontal, 
  Clock, 
  RefreshCw, 
  CheckCircle, 
  MessageCircle,
  Palette,
  Zap,
  Award,
  Users,
  ArrowRight,
  Play,
  Camera,
  Layers,
  Pen
} from 'lucide-react';
import './GraphicsProfile.css';

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
    isFeatured: true,
    description: 'Professional and high-quality logo design for your brand.'
  }
];

const GraphicsProfile = () => {
  const { id } = useParams();
  const service = mockServices.find((s) => s.id === id);
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [notification, setNotification] = useState('');
  const [activeTab, setActiveTab] = useState('Basic');
  const [isLiked, setIsLiked] = useState(false);


  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setNotification(`${pkg} package selected!`);
    setTimeout(() => setNotification(''), 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div className="p-6 text-red-600">Service not found.</div>;

  const serviceTiers = {
    Basic: {
      title: 'Logo Design Starter',
      price: '₹2,999',
      description: 'Professional Logo Design with 3 Initial Concepts',
      delivery: '2-day delivery',
      revisions: '3 Revisions',
      features: [
        '3 Logo concepts',
        'High-resolution files',
        'Basic brand guidelines',
        'Commercial use rights'
      ]
    },
    Standard: {
      title: 'Brand Identity Package',
      price: '₹7,999',
      description: 'Complete Brand Identity with Logo, Business Cards & Stationery',
      delivery: '5-day delivery',
      revisions: 'Unlimited Revisions',
      features: [
        '5 Logo concepts',
        'Business card design',
        'Letterhead design',
        'Brand color palette',
        'Typography guidelines',
        'Social media kit'
      ]
    },
    Premium: {
      title: 'Complete Brand Suite',
      price: '₹15,999',
      description: 'Full Brand Package with Website Mockup & Marketing Materials',
      delivery: '7-day delivery',
      revisions: 'Unlimited Revisions',
      features: [
        'Unlimited logo concepts',
        'Complete stationery suite',
        'Website mockup design',
        'Social media templates',
        'Brand guidelines book',
        'Marketing collateral',
        'Brand strategy consultation'
      ]
    }
  };

  const portfolioItems = [
    { id: 1, type: 'Logo', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, type: 'Brand', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, type: 'Print', image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, type: 'Digital', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div className="graphics-profile">
      {/* Header Navigation */}
      <nav className="profile-nav">
        <div className="nav-container">
          <div className="nav-breadcrumb">
            <span>Graphics & Design</span>
            <span>/</span>
            <span>Logo Design</span>
            <span>/</span>
            <span>Professional Branding</span>
          </div>
          <div className="nav-actions">
            <button className="nav-action-btn" onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`icon ${isLiked ? 'liked' : ''}`} />
              <span>247</span>
            </button>
            <button className="nav-action-btn">
              <Share2 className="icon" />
            </button>
            <button className="nav-action-btn">
              <MoreHorizontal className="icon" />
            </button>
          </div>
        </div>
      </nav>

      <div className="profile-container">
        {/* Main Content */}
        <div className="profile-main">
          {/* Service Title */}
          <div className="service-header">
            <h1 className="service-title">
              I will create stunning logo design, complete brand identity & graphic design solutions
            </h1>
          </div>

          {/* Designer Info */}
          <div className="designer-info">
            <div className="designer-avatar">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="Designer Avatar"
                className="avatar-image"
              />
              <div className="online-indicator"></div>
            </div>
            <div className="designer-details">
              <div className="designer-name">
                <span className="name">Sarah Johnson</span>
                <span className="badge top-rated">Top Rated</span>
                <span className="level">Level 2</span>
              </div>
              <div className="designer-stats">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star filled" />
                  ))}
                  <span className="rating-text">4.9 (2,847 reviews)</span>
                </div>
                <span className="orders-queue">18 orders in queue</span>
              </div>
            </div>
          </div>

          {/* Highlight Banner */}
          <div className="highlight-banner">
            <Zap className="highlight-icon" />
            <span>People keep coming back! priya_designs has an exceptional number of repeat buyers.</span>
          </div>

          {/* Portfolio Showcase */}
          <div className="portfolio-showcase">
            <div className="portfolio-main">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Featured Work"
                className="portfolio-featured"
              />
              <div className="portfolio-overlay">
                <Play className="play-icon" />
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="service-features">
            <div className="feature-grid">
              <div className="feature-card">
                <Palette className="feature-icon" />
                <h3>Creative Excellence</h3>
                <p>Award-winning designs that make your brand stand out</p>
              </div>
              <div className="feature-card">
                <Zap className="feature-icon" />
                <h3>Fast Delivery</h3>
                <p>Quick turnaround without compromising on quality</p>
              </div>
              <div className="feature-card">
                <Users className="feature-icon" />
                <h3>2800+ Happy Clients</h3>
                <p>Trusted by businesses worldwide for their branding needs</p>
              </div>
              <div className="feature-card">
                <Award className="feature-icon" />
                <h3>100% Satisfaction</h3>
                <p>Unlimited revisions until you're completely satisfied</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="profile-sidebar">
          {/* Pricing Tabs */}
          <div className="pricing-card">
            <div className="pricing-tabs">
              {Object.keys(serviceTiers).map((tier) => (
                <button
                  key={tier}
                  className={`pricing-tab ${activeTab === tier ? 'active' : ''}`}
                  onClick={() => setActiveTab(tier)}
                >
                  {tier}
                </button>
              ))}
            </div>

            <div className="pricing-content">
              <div className="pricing-header">
                <h3 className="package-title">{serviceTiers[activeTab].title}</h3>
                <div className="package-price">{serviceTiers[activeTab].price}</div>
              </div>

              <p className="package-description">
                {serviceTiers[activeTab].description}
              </p>

              <div className="package-meta">
                <div className="meta-item">
                  <Clock className="meta-icon" />
                  <span>{serviceTiers[activeTab].delivery}</span>
                </div>
                <div className="meta-item">
                  <RefreshCw className="meta-icon" />
                  <span>{serviceTiers[activeTab].revisions}</span>
                </div>
              </div>

              <div className="package-features">
                <h4>What's Included</h4>
                <ul className="features-list">
                  {serviceTiers[activeTab].features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <CheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="continue-btn">
                <span>Continue</span>
                <ArrowRight className="btn-icon" />
              </button>

              <button className="contact-btn">
                <MessageCircle className="btn-icon" />
                <span>Contact me</span>
              </button>
            </div>
          </div>

          {/* Designer Stats */}
          <div className="stats-card">
            <h3 className="stats-title">Why choose me?</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">2,847</div>
                <div className="stat-label">Completed Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">On-time Delivery</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-card">
            <h3 className="skills-title">Specialized In</h3>
            <div className="skills-list">
              <span className="skill-tag">Logo Design</span>
              <span className="skill-tag">Brand Identity</span>
              <span className="skill-tag">Print Design</span>
              <span className="skill-tag">Digital Graphics</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Packaging Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsProfile;