import React from 'react';
import { Star, Heart } from 'lucide-react';
import './FeaturedFreelancers.css';

const FeaturedFreelancers = () => {
  const freelancers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'UI/UX Designer',
      image: 'https://fthmb.tqn.com/f6uChwfNF8VyWQk02SvWhoJfnE0=/2121x1414/filters:fill(auto,1)/GettyImages-505095190-58ee7c925f9b582c4ddfc6a4.jpg',
      rating: 5.0,
      reviews: 247,
      price: 'Starting at $25',
      tags: ['UI Design', 'Figma', 'Prototyping'],
      isOnline: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Full Stack Developer',
      image: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/10/02072937/Freelancer-start-1024x512.png',
      rating: 4.9,
      reviews: 189,
      price: 'Starting at $45',
      tags: ['React', 'Node.js', 'MongoDB'],
      isOnline: false
    }
  ];

  return (
    <section className="freelancers">
      <div className="container">
        <h2>Featured freelancers</h2>
        <p>
          Work with talented people at the most affordable price to get the most out of your time and cost
        </p>

        <div className="freelancers-grid">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="freelancer-card">
              <div className="freelancer-image">
                <img src={freelancer.image} alt={freelancer.name} />
                <button className="heart-btn">
                  <Heart size={16} />
                </button>
                {freelancer.isOnline && (
                  <div className="online-badge">Online</div>
                )}
              </div>

              <div className="freelancer-info">
                <div className="freelancer-header">
                  <img
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="freelancer-avatar"
                  />
                  <div>
                    <h3 className="freelancer-name">{freelancer.name}</h3>
                    <p className="freelancer-title">{freelancer.title}</p>
                  </div>
                </div>

                <div className="rating">
                  <Star className="star" size={16} fill="currentColor" />
                  <span className="rating-text">{freelancer.rating}</span>
                  <span className="rating-count">({freelancer.reviews})</span>
                </div>

                <div className="tags">
                  {freelancer.tags.map((tag, index) => (
                    <span key={index} className="tag-small">{tag}</span>
                  ))}
                </div>

                <div className="price">{freelancer.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button className="btn btn-primary">View All Freelancers</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancers;
