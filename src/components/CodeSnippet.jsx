import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ 
  code, 
  language = 'javascript', 
  title = 'Code Snippet',
  description = '',
  autoPlay = true,
  speed = 2000
}) => {
  const [currentCode, setCurrentCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      setShowCode(true);
      typeCode();
    }
  }, [autoPlay]);

  const typeCode = async () => {
    setIsTyping(true);
    setCurrentCode('');
    
    for (let i = 0; i <= code.length; i++) {
      setCurrentCode(code.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    setIsTyping(false);
  };

  const resetCode = () => {
    setCurrentCode('');
    setShowCode(false);
    setTimeout(() => {
      setShowCode(true);
      typeCode();
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-green-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700/50">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm font-medium">{title}</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={resetCode}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </motion.button>
        </div>

        {/* Description */}
        {description && (
          <div className="px-4 py-2 bg-gray-800/30 border-b border-gray-700/30">
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        )}

        {/* Code content */}
        <div className="relative">
          <AnimatePresence>
            {showCode && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SyntaxHighlighter
                  language={language}
                  style={tomorrow}
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    background: 'transparent',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {currentCode}
                </SyntaxHighlighter>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Typing cursor */}
          {isTyping && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute bottom-4 right-4 w-2 h-5 bg-green-400"
            />
          )}
        </div>

        {/* Floating code particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/20 text-xs font-mono"
              animate={{
                x: [0, Math.random() * 300 - 150],
                y: [0, Math.random() * 200 - 100],
                opacity: [0, 0.5, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              {['{', '}', '(', ')', ';', '=', '=>', 'const', 'let', 'var'][Math.floor(Math.random() * 10)]}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
