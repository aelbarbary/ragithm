import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';

const articles = [
  {
    id: 'understanding-rag',
    title: 'Understanding RAG: A Complete Guide to Retrieval Augmented Generation',
    excerpt: 'Dive deep into how RAG systems work and why they are becoming essential for enterprise AI applications...',
    date: '2024-03-15',
    readTime: '10 min read',
    author: 'Mohamed Elhennawy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    tags: ['RAG', 'Enterprise AI', 'LLMs'],
    featured: true
  },
  {
    id: 'securing-ai-systems',
    title: 'Securing AI Systems: Best Practices and Common Pitfalls',
    excerpt: 'Essential security considerations when implementing AI in enterprise environments...',
    date: '2024-03-10',
    readTime: '8 min read',
    author: 'Abdelrahman Elbarbary',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80',
    tags: ['Security', 'AI Infrastructure', 'Best Practices']
  },
  {
    id: 'business-impact-ai',
    title: 'The Business Impact of AI: Real World Applications',
    excerpt: 'Exploring how businesses are leveraging AI to drive growth and innovation...',
    date: '2024-03-05',
    readTime: '6 min read',
    author: 'Mohamed Elhennawy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['Business Strategy', 'AI Implementation', 'Case Studies']
  }
];

const Blog = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert insights on AI implementation, business strategy, and technical excellence
          </p>
        </div>

        <div className="grid gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors ${
                article.featured ? 'md:grid md:grid-cols-2' : ''
              }`}
            >
              <img
                src={article.image}
                alt={article.title}
                className={`w-full ${article.featured ? 'h-full' : 'h-48'} object-cover`}
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className={`${article.featured ? 'text-2xl' : 'text-xl'} font-semibold mb-2`}>
                  {article.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  By {article.author}
                </div>
                
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${article.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Read Article
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

export default Blog;