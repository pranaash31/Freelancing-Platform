import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Williams',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The quality of work I received was outstanding. The freelancer delivered exactly what I needed, on time and within budget. Highly recommended!'
    },
    {
      id: 2,
      name: 'Robert Taylor',
      role: 'CEO',
      company: 'Digital Solutions',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'I\'ve used this platform multiple times and it never disappoints. The talent pool is incredible and the process is seamless.'
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      role: 'Product Manager',
      company: 'InnovateCorp',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with freelancers through this platform has been a game-changer for our business. We get access to top talent worldwide.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What our customers say</h2>
        <p>
          Don't just take our word for it. Here's what real customers have to say about their experience.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star" size={20} fill="currentColor" />
                ))}
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-avatar"
                />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3>Ready to get started?</h3>
          <p>
            Join thousands of satisfied customers who have found the perfect freelancer for their projects.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Find Freelancers</button>
            <button className="btn btn-secondary">Post a Project</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;