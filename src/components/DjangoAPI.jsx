import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DjangoAPI = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAnimating, setIsAnimating] = useState(false);

  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/portfolio/',
      description: 'Retrieve all portfolio items',
      color: 'text-green-400'
    },
    {
      method: 'POST',
      path: '/api/portfolio/',
      description: 'Create a new portfolio item',
      color: 'text-blue-400'
    },
    {
      method: 'GET',
      path: '/api/portfolio/{id}/',
      description: 'Retrieve specific portfolio item',
      color: 'text-green-400'
    },
    {
      method: 'PUT',
      path: '/api/portfolio/{id}/',
      description: 'Update portfolio item',
      color: 'text-yellow-400'
    },
    {
      method: 'DELETE',
      path: '/api/portfolio/{id}/',
      description: 'Delete portfolio item',
      color: 'text-red-400'
    }
  ];

  const features = [
    {
      title: 'Django REST Framework',
      description: 'Powerful and flexible toolkit for building Web APIs',
      icon: '🐍',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Swagger Documentation',
      description: 'Interactive API documentation with Swagger UI',
      icon: '📚',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'JWT Authentication',
      description: 'Secure token-based authentication system',
      icon: '🔐',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'PostgreSQL Database',
      description: 'Robust relational database for data persistence',
      icon: '🗄️',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const handleTabChange = (tab) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-4xl"
            >
              🐍
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-white">Django REST Framework</h2>
              <p className="text-green-100">Professional API Development with Swagger Documentation</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700/50">
          {['overview', 'endpoints', 'features', 'swagger'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-4 text-sm font-medium transition-colors duration-200 capitalize ${
                activeTab === tab
                  ? 'text-green-400 border-b-2 border-green-400 bg-gray-800/50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">API Overview</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Built with Django REST Framework, this API provides a robust foundation for 
                      portfolio management with full CRUD operations, authentication, and comprehensive 
                      documentation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">RESTful API Design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Swagger UI Integration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">JWT Authentication</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">5</div>
                        <div className="text-sm text-gray-400">Endpoints</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">100%</div>
                        <div className="text-sm text-gray-400">Documented</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">JWT</div>
                        <div className="text-sm text-gray-400">Auth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">REST</div>
                        <div className="text-sm text-gray-400">Compliant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'endpoints' && (
              <motion.div
                key="endpoints"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4">API Endpoints</h3>
                <div className="space-y-3">
                  {apiEndpoints.map((endpoint, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded text-sm font-medium ${endpoint.color} bg-gray-700/50`}>
                            {endpoint.method}
                          </span>
                          <code className="text-gray-300 font-mono">{endpoint.path}</code>
                        </div>
                        <span className="text-gray-400 text-sm">{endpoint.description}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                key="features"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-4 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                          <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'swagger' && (
              <motion.div
                key="swagger"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4">Swagger Documentation</h3>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">📚</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Interactive API Documentation</h4>
                      <p className="text-gray-300 text-sm">Test endpoints directly from the browser</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Auto-generated from Django models</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Interactive request/response examples</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Authentication integration</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-900/50 rounded border border-gray-600/30">
                    <code className="text-green-400 text-sm">
                      /swagger/ - Interactive API documentation
                    </code>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default DjangoAPI;
