import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Categories',
      links: [
        'Graphics & Design',
        'Digital Marketing',
        'Writing & Translation',
        'Video & Animation',
        'Music & Audio',
        'Programming & Tech',
        'Photography',
        'Business'
      ]
    },
    {
      title: 'About',
      links: [
        'Careers',
        'Press & News',
        'Partnerships',
        'Privacy Policy',
        'Terms of Service',
        'Intellectual Property Claims',
        'Investor Relations'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help & Support',
        'Trust & Safety',
        'Selling on Freelancr',
        'Buying on Freelancr',
        'Community Standards',
        'Contact Support'
      ]
    },
    {
      title: 'Community',
      links: [
        'Customer Success Stories',
        'Community Hub',
        'Forum',
        'Events',
        'Blog',
        'Creators',
        'Affiliates',
        'Podcast'
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and description */}
          <div className="footer-brand">
            <div className="footer-logo">freelancr</div>
            <p className="footer-description">
              The world's largest marketplace for services. Connect with talented freelancers worldwide.
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
              <a href="#" className="social-link">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2024 Freelancr Inc. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;