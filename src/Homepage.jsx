import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import { 
  Search, 
  Menu, 
  X, 
  Play,
  Heart,
  Star,
  Quote,
  Code,
  Palette,
  Megaphone,
  Video,
  PenTool,
  Music,
  TrendingUp,
  BarChart,
  MessageCircle,
  Globe,
  Zap,
  CheckCircle,
  Users,
  Award,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <Link to="/services">
        <button>Go to Services</button>
      </Link>
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: 'Programming & Tech',
    description: 'Custom software development, web applications, and technical solutions',
    color: 'icon-blue'
  },
  {
    icon: Palette,
    title: 'Graphics & Design',
    description: 'Logo design, branding, UI/UX, and creative visual solutions',
    color: 'icon-purple'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'SEO, social media marketing, content creation, and growth strategies',
    color: 'icon-orange'
  },
  {
    icon: Video,
    title: 'Video & Animation',
    description: 'Video editing, motion graphics, 3D animation, and visual effects',
    color: 'icon-red'
  },
  {
    icon: PenTool,
    title: 'Writing & Translation',
    description: 'Content writing, copywriting, translation, and editorial services',
    color: 'icon-green'
  },
  {
    icon: Music,
    title: 'Music & Audio',
    description: 'Audio production, voice-over, sound design, and music composition',
    color: 'icon-yellow'
  },
  {
    icon: TrendingUp,
    title: 'Business',
    description: 'Consulting, business strategy, market research, and planning',
    color: 'icon-indigo'
  },
  {
    icon: BarChart,
    title: 'Data & Analytics',
    description: 'Data analysis, visualization, research, and business intelligence',
    color: 'icon-pink'
  }
];

const freelancers = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Full-Stack Developer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviews: 127,
    price: 'Starting at $75',
    tags: ['React', 'Node.js', 'Python'],
    online: true
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    title: 'Brand Designer',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviews: 89,
    price: 'Starting at $50',
    tags: ['Logo Design', 'Branding', 'Illustration'],
    online: false
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    title: 'Digital Marketing Expert',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5.0,
    reviews: 203,
    price: 'Starting at $65',
    tags: ['SEO', 'Social Media', 'Content Strategy'],
    online: true
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'Video Editor',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    image: 'https://images.pexels.com/photos/1327405/pexels-photo-1327405.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    reviews: 156,
    price: 'Starting at $45',
    tags: ['Video Editing', 'Motion Graphics', 'Color Grading'],
    online: true
  },
  {
    id: 5,
    name: 'Priya Patel',
    title: 'Content Writer',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    reviews: 94,
    price: 'Starting at $25',
    tags: ['Blog Writing', 'Copywriting', 'SEO Content'],
    online: false
  },
  {
    id: 6,
    name: 'Alex Thompson',
    title: 'Data Scientist',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviews: 178,
    price: 'Starting at $85',
    tags: ['Python', 'Machine Learning', 'Analytics'],
    online: true
  }
];

const testimonials = [
  {
    id: 1,
    text: "FreelanceHub connected me with amazing developers who understood my vision perfectly. The project was delivered on time and exceeded my expectations.",
    author: "Jennifer Adams",
    role: "CEO, TechStart",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 2,
    text: "The quality of freelancers on this platform is outstanding. I found a designer who created a brand identity that perfectly represents our company.",
    author: "Michael Brown",
    role: "Marketing Director, InnovateCorp",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 3,
    text: "As a freelancer, this platform has transformed my business. The tools and support provided help me deliver my best work to clients worldwide.",
    author: "Lisa Wang",
    role: "Freelance Designer",
    avatar: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.service-card, .freelancer-card, .testimonial-card, .step');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const popularTags = ['Website Design', 'Logo Design', 'WordPress', 'Voice Over', 'Video Editing', 'Data Entry', 'Mobile App', 'SEO'];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">FreelanceHub</div>
            
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#freelancers">Freelancers</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#testimonials">Testimonials</a>
            </nav>

            <div className="header-actions">
              <a href="#" className="sign-in-link">Sign in</a>
              <button className="btn btn-primary">Join</button>
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#services">Services</a>
            <a href="#freelancers">Freelancers</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#" className="sign-in-link">Sign in</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Find the perfect <span className="highlight">freelancer</span> for your project
              </h1>
              
              <div className="search-box">
                <Search className="search-icon" size={24} />
                <input
                  type="text"
                  placeholder="Search for any service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn">Search</button>
              </div>

              <div className="popular-tags">
                <span>Popular:</span>
                {popularTags.map((tag, index) => (
                  <button key={index} className="tag">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-image">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Freelancers working"
              />
              <button className="play-button">
                <Play size={32} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Popular Services</h2>
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className={`service-icon ${service.color}`}>
                    <IconComponent size={40} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Freelancers */}
      <section id="freelancers" className="freelancers">
        <div className="container">
          <h2>Featured Freelancers</h2>
          <p>Discover talented professionals ready to bring your projects to life</p>
          
          <div className="freelancers-grid">
            {freelancers.map((freelancer) => (
              <div key={freelancer.id} className="freelancer-card">
                <div className="freelancer-image">
                  <img src={freelancer.image} alt={freelancer.name} />
                  <button className="heart-btn">
                    <Heart size={18} />
                  </button>
                  {freelancer.online && (
                    <div className="online-badge">Online</div>
                  )}
                </div>
                
                <div className="freelancer-info">
                  <div className="freelancer-header">
                    <img 
                      src={freelancer.avatar} 
                      alt={freelancer.name}
                      className="freelancer-avatar"
                    />
                    <div>
                      <h3 className="freelancer-name">{freelancer.name}</h3>
                      <p className="freelancer-title">{freelancer.title}</p>
                    </div>
                  </div>

                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="star"
                        fill={i < Math.floor(freelancer.rating) ? "currentColor" : "none"}
                      />
                    ))}
                    <span className="rating-text">{freelancer.rating}</span>
                    <span className="rating-count">({freelancer.reviews})</span>
                  </div>

                  <div className="tags">
                    {freelancer.tags.map((tag, i) => (
                      <span key={i} className="tag-small">{tag}</span>
                    ))}
                  </div>

                  <div className="price">{freelancer.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <p>Getting started is easy. Follow these simple steps to find your perfect freelancer</p>
          
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">
                <Search size={40} />
                <div className="step-number">1</div>
              </div>
              <h3>Post Your Project</h3>
              <p>Tell us what you need done. Include your budget, timeline, and project details.</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Users size={40} />
                <div className="step-number">2</div>
              </div>
              <h3>Review Proposals</h3>
              <p>Get matched with qualified freelancers who submit proposals for your project.</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <MessageCircle size={40} />
                <div className="step-number">3</div>
              </div>
              <h3>Collaborate</h3>
              <p>Work directly with your chosen freelancer using our built-in communication tools.</p>
            </div>

            <div className="step">
              <div className="step-icon">
                <Award size={40} />
                <div className="step-number">4</div>
              </div>
              <h3>Get Results</h3>
              <p>Receive your completed project on time and provide feedback to build your reputation.</p>
            </div>
          </div>

          <div className="get-started">
            <button className="btn btn-primary">Get Started Today</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <p>See how FreelanceHub has helped businesses and freelancers succeed</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <Quote className="quote-icon" size={32} />
                <p className="testimonial-text">"{testimonial.text}"</p>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star" fill="currentColor" />
                  ))}
                </div>

                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="author-avatar"
                  />
                  <div>
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h3>Ready to Get Started?</h3>
            <p>Join thousands of businesses and freelancers who trust FreelanceHub for their projects</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Post a Project</button>
              <button className="btn btn-secondary">Become a Freelancer</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">FreelanceHub</div>
              <p className="footer-description">
                The world's largest freelancing and crowdsourcing marketplace. 
                Connect with talented professionals and grow your business.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Categories</h3>
              <ul className="footer-links">
                <li><a href="#">Graphics & Design</a></li>
                <li><a href="#">Programming & Tech</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Video & Animation</a></li>
                <li><a href="#">Writing & Translation</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Support</h3>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Trust & Safety</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Partnerships</a></li>
                <li><a href="#">Investor Relations</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Copyright Policy</a></li>
                <li><a href="#">Code of Conduct</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 FreelanceHub. All rights reserved.
            </div>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;  