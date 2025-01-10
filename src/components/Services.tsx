import React from 'react';
import { Brain, Code, Cpu, MessageSquare, Rocket, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Custom GPT Solutions',
    description: 'Tailored GPT solutions designed to meet your specific business needs and challenges.'
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'GPT Help Desk',
    description: 'Dedicated support for all GPT administration, diagnoses, and resolution needs across your organization.'
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'Training',
    description: 'Professional training sessions covering theory and practice to upskill your workforce.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging battle-tested AI technologies to deliver business outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700 hover:border-blue-500"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
