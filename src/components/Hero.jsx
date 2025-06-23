import React, { useState } from 'react';
import { Search, Play } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = [
    'Logo Design', 'WordPress', 'Voice Over', 'Video Editing', 'Social Media'
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Find the perfect
              <span className="highlight"> freelance</span>
              <br />
              services for your business
            </h1>
            
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Try 'building mobile app'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">Search</button>
            </div>

            <div className="popular-tags">
              <span>Popular:</span>
              {popularSearches.map((search, index) => (
                <button key={index} className="tag">
                  {search}
                </button>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Freelancer working"
            />
            <button className="play-button">
              <Play size={32} className="play-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;