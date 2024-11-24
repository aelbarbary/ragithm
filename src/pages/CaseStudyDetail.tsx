import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, TrendingUp, Users, Brain, ExternalLink } from 'lucide-react';

const caseStudies = {
  'enterprise-rag': {
    title: 'Enterprise RAG Implementation',
    client: 'Fortune 500 Financial Institution',
    description: 'Implemented a Retrieval Augmented Generation system that improved document search accuracy by 85% and reduced response time by 60%',
    fullDescription: `Our client, a leading financial institution, faced challenges with their document search and retrieval system. The existing solution was slow, inaccurate, and required significant manual intervention.

We implemented a custom RAG system that combines the power of large language models with a specialized retrieval mechanism tailored to their document structure.

The solution includes:
- Custom document embeddings
- Semantic search capabilities
- Real-time query processing
- Integration with existing workflows`,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
    impact: [
      'Reduced search time from minutes to seconds',
      '85% improvement in search accuracy',
      '40% reduction in support tickets',
      'Improved employee satisfaction by 65%',
      '$1.2M annual cost savings'
    ],
    challenges: [
      'Complex document hierarchy',
      'Strict security requirements',
      'Integration with legacy systems',
      'High accuracy requirements'
    ],
    solution: [
      'Custom embedding model',
      'Secure document processing pipeline',
      'Real-time indexing system',
      'API-first architecture'
    ],
    tags: ['RAG', 'LLMs', 'Enterprise AI'],
    industry: 'Financial Services',
    timeline: '6 months',
    team: '4 AI engineers, 2 solution architects'
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-blue-400 hover:text-blue-300">
            Return to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Case Studies
        </Link>

        <img
          src={study.image}
          alt={study.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center gap-2 text-blue-400">
            <Building2 className="h-4 w-4" />
            {study.industry}
          </span>
          <span className="flex items-center gap-2 text-gray-400">
            <Users className="h-4 w-4" />
            {study.team}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{study.description}</p>

        <div className="grid gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <div className="prose prose-invert max-w-none">
              {study.fullDescription.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-300 mb-4">{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
            <ul className="grid gap-3">
              {study.challenges.map((challenge, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <Brain className="h-5 w-5 text-blue-400 mr-3" />
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Solution</h2>
            <ul className="grid gap-3">
              {study.solution.map((item, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <ExternalLink className="h-5 w-5 text-blue-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>
            <ul className="grid gap-3">
              {study.impact.map((impact, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <TrendingUp className="h-5 w-5 text-blue-400 mr-3" />
                  {impact}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;