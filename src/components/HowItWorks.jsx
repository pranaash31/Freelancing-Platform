import React from 'react';
import { Search, MessageSquare, CreditCard, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Find the right freelancer',
      description: 'Browse profiles, portfolios, and reviews to find the perfect match for your project.'
    },
    {
      icon: MessageSquare,
      title: 'Chat and collaborate',
      description: 'Communicate directly with freelancers to discuss your project requirements and expectations.'
    },
    {
      icon: CreditCard,
      title: 'Pay safely',
      description: 'Your payment is protected until you approve the work. Pay only when you\'re satisfied.'
    },
    {
      icon: CheckCircle,
      title: 'Get your project',
      description: 'Receive high-quality work delivered on time, or get your money back.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How it works</h2>
        <p>
          Getting started is easy. Find, hire, and work with freelancers in just a few simple steps.
        </p>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="step">
                <div className="step-icon">
                  <IconComponent size={32} />
                  <div className="step-number">{index + 1}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="get-started">
          <button className="btn btn-primary">Get Started Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;