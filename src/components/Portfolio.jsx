import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlashingCard from './FlashingCard';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaDatabase } from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Django REST API, and PostgreSQL",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Django", "PostgreSQL", "Stripe"],
      category: "fullstack",
      github: "https://github.com/example",
      live: "https://example.com",
      icon: <FaRocket className="text-3xl" />
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time task management with React hooks and WebSocket integration",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "frontend",
      github: "https://github.com/example",
      live: "https://example.com",
      icon: <FaCode className="text-3xl" />
    },
    {
      id: 3,
      title: "API Documentation Portal",
      description: "Interactive API documentation with Django REST Framework and Swagger",
      image: "/api/placeholder/400/300",
      technologies: ["Django", "DRF", "Swagger", "PostgreSQL"],
      category: "backend",
      github: "https://github.com/example",
      live: "https://example.com",
      icon: <FaDatabase className="text-3xl" />
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Dynamic portfolio website with React animations and responsive design",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      github: "https://github.com/example",
      live: "https://example.com",
      icon: <FaCode className="text-3xl" />
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-purple-500 to-green-500 text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 800 - 400],
              y: [0, Math.random() * 800 - 400],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-lg mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-8">Check out some of my recent work</p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/15'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                  {/* Project image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-600/30 to-green-600/30 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg text-white hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <FaGithub className="text-sm" />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg text-white hover:shadow-lg transition-all duration-200"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="text-sm">Live</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
