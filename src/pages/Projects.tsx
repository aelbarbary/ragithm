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
    codePreview: `
import tensorflow as tf
from tensorflow.keras import layers

model = tf.keras.Sequential([
  layers.Conv2D(32, 3, activation='relu'),
  layers.MaxPooling2D(),
  layers.Dense(10, activation='softmax')
])
    `.trim(),
  },
  
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

                <div className="mb-4">
                  <SyntaxHighlighter
                    language="javascript"
                    style={atomDark}
                    className="rounded-lg text-sm"
                  >
                    {project.codePreview}
                  </SyntaxHighlighter>
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