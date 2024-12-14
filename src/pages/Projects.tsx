import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const projects = [
  {
    title: 'Fact-Check Hub',
    description: 'A LangChain-powered platform for verifying political statements and ensuring factual accuracy.',
    tech: ['Python', 'LangChain', 'React'],
    demoUrl: '/projects/fact-check-hub',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1708413394110-dfd597305ab9?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Chat with PDF',
    description: 'An AI-powered application that allows users to interact with and query PDF documents, built using LangChain, React, and MUI.',
    tech: ['Python', 'LangChain', 'React', 'MUI', 'TypeScript'],
    demoUrl: '/projects/chat-with-pdf',
    imageUrl: 'https://images.unsplash.com/photo-1623276527153-fa38c1616b05?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];


const Projects = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">AI Projects Showcase</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of AI and machine learning projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4" style={{ maxHeight: '250px', overflow: 'hidden' }}>
                  <img src={project.imageUrl} />
                </div>

                <a
                  href={project.demoUrl}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  <Code className="h-4 w-4 mr-2" />
                  View Project
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;