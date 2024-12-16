import React from 'react';
import { Github, Linkedin, Youtube } from 'lucide-react';

const founders = [
  {
    name: 'Mohamed Elhennawy',
    role: 'AI Strategy & Business Solutions',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHwmfIl1f0Ozg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730755802709?e=1738195200&v=beta&t=xiloaNAAiJ0Yb8CsUn4LzkzEmTbkpUJw3_2IlE0dYo4',
    bio: `Seasoned professional passionate about empowering enterprises to overcome challenges and drive growth through the strategic application of reliable, enterprise-grade AI software, delivering lasting impact.

With nearly a decade of experience in B2B SaaS and solo-entrepreneurship, I've developed a unique ability to identify and distill complex business challenges, crafting lasting solutions that have benefited numerous clients worldwide.`,
    expertise: ['Generative AI', 'RAG', 'LLMs', 'Business Strategy'],
    social: {
      youtube: 'https://www.youtube.com/@hennawitalksbusiness',
      linkedin: 'https://www.linkedin.com/in/hennawi/',
      github: 'https://github.com/sweetsaltco'
    }
  },
  {
    name: 'Abdelrahman Elbarbary',
    role: 'Technical Architecture & Security',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGcBrHZN0D7Xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719584511561?e=1738195200&v=beta&t=Denr146ZJJLn1VG3k2zTo3lKE1JYeRAkX0UCIOSgbGU',
    bio: `A full-stack software engineer and tech lead with over 20 years of experience, including roles at Oracle and Microsoft. Specializes in building AI chatbots, Retrieval-Augmented Generation (RAG) systems, and optimizing cloud architectures. Skilled in full-stack development, cybersecurity, and cloud optimization, with expertise in tools like Fortify, Nessus, and Sonatype to deliver secure and scalable solutions.`,
    expertise: ['Full-Stack Development', 'Cybersecurity', 'System Architecture', 'Tech Leadership'],
    social: {
      linkedin: 'https://www.linkedin.com/in/aelbarb/',
      github: 'https://github.com/aelbarbary',
      youtube:'https://www.youtube.com/@AbdelrahmanElbarbary'
    }
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Founders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining decades of experience in AI, business strategy, and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold">{founder.name}</h3>
                <p className="text-blue-400">{founder.role}</p>
              </div>

              <div className="space-y-4 text-gray-300 mb-6">
                {founder.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                {founder.social.github && (
                  <a href={founder.social.github} className="text-gray-400 hover:text-blue-500">
                    <Github className="h-6 w-6" />
                  </a>
                )}
                {founder.social.linkedin && (
                  <a href={founder.social.linkedin} className="text-gray-400 hover:text-blue-500">
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
                {founder.social.youtube && (
                  <a href={founder.social.youtube} className="text-gray-400 hover:text-blue-500">
                    <Youtube className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;