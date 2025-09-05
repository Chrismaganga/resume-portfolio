import React from 'react';
import { motion } from 'framer-motion';

const FlashingCard = ({ 
  title, 
  description, 
  icon, 
  gradient = "from-purple-500 to-green-500",
  delay = 0,
  className = "",
  textColor = "text-black",
  textColorSecondary = "text-black"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
      
      {/* Flashing border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-green-500 to-purple-500 bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Main card content */}
      <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Icon with pulsing animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: delay
          }}
          className="text-4xl mb-4 text-gray-800"
        >
          {icon}
        </motion.div>
        
        {/* Title with typewriter effect */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
          className={`text-xl font-bold ${textColor} mb-2`}
        >
          {title}
        </motion.h3>
        
        {/* Description with fade-in effect - FORCE BLACK TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="text-black text-sm leading-relaxed font-medium"
        >
          {description}
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: delay + 0.7, duration: 0.8 }}
          className="h-0.5 bg-gradient-to-r from-purple-400 to-green-400 mt-3"
        ></motion.div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FlashingCard;
