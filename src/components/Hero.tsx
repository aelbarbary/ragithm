import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Brain className="h-16 w-16 text-blue-500 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Engineering AI Solutions
            <br />for Tomorrow
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          With a combined expertise in AI engineering and strategic business solutions, Mohamed Elhennawy and Abdelrahman Elbarbary lead the way in transforming businesses through innovative AI technologies. Drawing from years of hands-on experience in AI development, product management, and enterprise solutions, we deliver custom, impactful solutions that drive efficiency, growth, and lasting business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center px-6 py-3 border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-500/10 font-medium transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;