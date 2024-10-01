import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'Anon Message',
    description: 'A full-stack e-commerce platform built with MERN stack.',
    image: '/images/project1.jpg',
    technologies: ['MongoDB', 'Express', 'Next.js', 'Node.js'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://anon-message-six.vercel.app/',
  },
  {
    title: 'Zeeky',
    description: 'A full-stack e-commerce platform built with MERN stack.',
    image: '/images/project1.jpg',
    technologies: ['MongoDB', 'Express', 'Next.js', 'Node.js'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://anon-message-six.vercel.app/',
  },
  {
    title: 'Anon Message',
    description: 'A full-stack e-commerce platform built with MERN stack.',
    image: '/images/project1.jpg',
    technologies: ['MongoDB', 'Express', 'Next.js', 'Node.js'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://anon-message-six.vercel.app/',
  },

  // Add more projects here
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          My Projects
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title} // Use a unique key if available
              className="bg-white overflow-hidden shadow rounded-lg dark:bg-gray-800"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  >
                    <div className="text-white text-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-700"
                        aria-label={`${project.title} GitHub Repository`}
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
                        aria-label={`${project.title} Live Demo`}
                      >
                        Live Demo
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
