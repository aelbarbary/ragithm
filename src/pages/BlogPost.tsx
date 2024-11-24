import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

const blogPosts = {
  'understanding-rag': {
    title: 'Understanding RAG: A Complete Guide to Retrieval Augmented Generation',
    date: '2024-03-15',
    readTime: '10 min read',
    author: 'Mohamed Elhennawy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    tags: ['RAG', 'Enterprise AI', 'LLMs'],
    content: `Retrieval Augmented Generation (RAG) is revolutionizing how enterprises handle information retrieval and generation tasks. In this comprehensive guide, we'll explore what RAG is, how it works, and why it's becoming an essential tool for modern businesses.

## What is RAG?

RAG combines the power of large language models with a retrieval mechanism that can access external knowledge. This hybrid approach allows for more accurate and controllable text generation while maintaining the ability to access up-to-date information.

## Key Components

1. **Document Indexing**: Converting documents into vector embeddings
2. **Retrieval System**: Efficient similarity search mechanisms
3. **Generation Model**: Large language model for text generation
4. **Integration Layer**: Combining retrieved content with generated text

## Benefits of RAG

- Improved accuracy through factual grounding
- Reduced hallucination in AI responses
- Better control over information sources
- Real-time access to updated information

## Implementation Considerations

When implementing RAG in an enterprise setting, consider:

- Document preprocessing requirements
- Vector database selection
- Model selection and fine-tuning
- Integration with existing systems
- Security and privacy concerns

## Best Practices

1. Regular index updates
2. Proper chunk sizing
3. Thoughtful prompt engineering
4. Performance monitoring
5. User feedback integration`
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            By {post.author}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

        <div className="prose prose-invert max-w-none mb-8">
          {post.content.split('\n\n').map((section, i) => {
            if (section.startsWith('## ')) {
              return (
                <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">
                  {section.replace('## ', '')}
                </h2>
              );
            }
            return <p key={i} className="text-gray-300 mb-4">{section}</p>;
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;