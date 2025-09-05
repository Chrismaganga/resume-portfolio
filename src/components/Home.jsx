import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight, MdCode, MdRocket, MdTrendingUp } from "react-icons/md";
import { Link } from "react-scroll";
import FlashingCard from "./FlashingCard";

const Home = () => {
  const techCards = [
    {
      title: "Frontend Mastery",
      description: "React, Next.js, Tailwind CSS, and modern JavaScript frameworks",
      icon: <MdCode className="text-4xl" />,
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      title: "Backend Expertise",
      description: "Python, Django, FastAPI, and RESTful API development",
      icon: <MdRocket className="text-4xl" />,
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end development with modern technologies and best practices",
      icon: <MdTrendingUp className="text-4xl" />,
      gradient: "from-purple-500 to-pink-500",
      delay: 0.6
    }
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-purple-500 to-green-500 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
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

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10">
        <div className="flex flex-col justify-center h-full">
          {/* Animated title */}
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            I'm a{" "}
            <motion.span
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.span>
          </motion.h2>

          {/* Animated description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white py-4 max-w-md font-bold"
          >
            I have 6 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like JavaScript,
            React, Tailwind, Next JS and Python, Django and FastAPI
          </motion.p>

          {/* Animated CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-600 to-green-600 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Portfolio</span>
              <motion.span 
                className="group-hover:rotate-90 duration-300 relative z-10"
                whileHover={{ rotate: 90 }}
              >
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Enhanced hero image with animations */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          {/* Multiple animated backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-green-600/30 rounded-b-3xl blur-xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-blue-600/20 rounded-b-3xl blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          
          <motion.img
            src={HeroImage}
            alt="my profile"
            className="relative rounded-b-3xl mx-auto w-2/3 md:w-full shadow-2xl shadow-purple-500/50"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating tech icons around the image */}
          {[
            { icon: "⚛️", position: { top: "10%", left: "-10%" } },
            { icon: "🐍", position: { top: "20%", right: "-15%" } },
            { icon: "⚡", position: { bottom: "30%", left: "-10%" } },
            { icon: "🚀", position: { bottom: "10%", right: "-10%" } }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl"
              style={item.position}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.3
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tech cards section */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 z-10"
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techCards.map((card, index) => (
              <FlashingCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                gradient={card.gradient}
                delay={card.delay}
                className="h-32"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
