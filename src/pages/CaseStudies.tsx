import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, TrendingUp, Brain } from 'lucide-react';

const caseStudies = [
  {
    id: 'enterprise-rag',
    title: 'Enterprise RAG Implementation',
    client: 'Fortune 500 Financial Institution',
    description: 'Implemented a Retrieval Augmented Generation system that improved document search accuracy by 85% and reduced response time by 60%',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
    impact: [
      'Reduced search time from minutes to seconds',
      '85% improvement in search accuracy',
      '40% reduction in support tickets'
    ],
    tags: ['RAG', 'LLMs', 'Enterprise AI'],
    industry: 'Financial Services'
  },
  {
    id: 'customer-service-ai',
    title: 'AI-Powered Customer Service Platform',
    client: 'Global Retail Chain',
    description: 'Developed an intelligent customer service platform using advanced NLP and custom LLMs',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
    impact: [
      '70% reduction in response time',
      '90% customer satisfaction rate',
      '$2M annual cost savings'
    ],
    tags: ['NLP', 'Customer Service', 'LLMs'],
    industry: 'Retail'
  },
  {
    id: 'secure-ai-infrastructure',
    title: 'Secure AI Infrastructure Setup',
    client: 'Healthcare Provider Network',
    description: 'Designed and implemented a secure, HIPAA-compliant AI infrastructure for patient data analysis',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    impact: [
      'Zero security breaches',
      '99.99% system uptime',
      '45% faster patient data processing'
    ],
    tags: ['Security', 'Healthcare', 'Infrastructure'],
    industry: 'Healthcare'
  }
];

const CaseStudies = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world AI solutions that delivered measurable business impact
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                  <Building2 className="h-4 w-4" />
                  {study.industry}
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-400 mb-4">{study.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Impact</h4>
                  <ul className="space-y-2">
                    {study.impact.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <TrendingUp className="h-4 w-4 mr-2 text-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;