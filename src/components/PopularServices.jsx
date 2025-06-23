import React from 'react';
import { Palette, Code, Camera, Megaphone, FileText, Music, Video, Smartphone } from 'lucide-react';

const PopularServices = () => {
  const services = [
    { icon: Palette, name: 'Graphics & Design', colorClass: 'icon-orange' },
    { icon: Code, name: 'Programming & Tech', colorClass: 'icon-blue' },
    { icon: Megaphone, name: 'Digital Marketing', colorClass: 'icon-green' },
    { icon: FileText, name: 'Writing & Translation', colorClass: 'icon-purple' },
    { icon: Video, name: 'Video & Animation', colorClass: 'icon-red' },
    { icon: Music, name: 'Music & Audio', colorClass: 'icon-yellow' },
    { icon: Smartphone, name: 'AI Services', colorClass: 'icon-indigo' },
    { icon: Camera, name: 'Photography', colorClass: 'icon-pink' },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Popular professional services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card">
                <div className={`service-icon ${service.colorClass}`}>
                  <IconComponent size={32} />
                </div>
                <h3>{service.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;