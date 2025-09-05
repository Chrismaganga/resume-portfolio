import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import DjangoAPI from "./DjangoAPI";
import { generateResumePDF } from "../utils/pdfGenerator";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAPI, setShowAPI] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message
    alert('Message sent successfully!');
  };

  const handleDownloadResume = () => {
    try {
      generateResumePDF();
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Error downloading resume. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "chrismaganga3@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Cape Town, South Africa",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      url: "https://github.com/Chrismaganga",
      gradient: "from-gray-500 to-gray-700"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/chrismaganga",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      name: "Twitter",
      url: "https://twitter.com/chrismaganga",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-purple-500 to-green-500 p-4 text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 600 - 300],
              y: [0, Math.random() * 600 - 300],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center max-w-screen-lg mx-auto min-h-screen relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8 text-center"
        >
          <h2 className="text-4xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="py-6 text-xl text-white">Let's build something amazing together</p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAPI(!showAPI)}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-white cursor-pointer"
            >
              {showAPI ? 'Hide API Documentation' : 'View API Documentation'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-white flex items-center gap-2 cursor-pointer"
            >
              <FaDownload className="text-lg" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>

        {/* API Documentation Section */}
        <AnimatePresence>
          {showAPI && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <DjangoAPI />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h3>

            {/* Contact info cards - Direct implementation */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative group cursor-pointer"
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                  
                  {/* Main card content */}
                  <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-6 h-20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      {/* Icon */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        className="text-2xl text-gray-800"
                      >
                        {info.icon}
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-black mb-1">{info.title}</h4>
                        <p className="text-black text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                    
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: index * 0.2 + 0.7, duration: 0.8 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-gradient-to-r ${social.gradient} shadow-lg hover:shadow-xl transition-all duration-300 text-white cursor-pointer`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Send Message
              </span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/90 border-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/90 border-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/90 border-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-green-600 px-6 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    ⏳
                  </motion.div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
