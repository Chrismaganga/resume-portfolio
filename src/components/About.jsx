import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeSnippet from "./CodeSnippet";
import FlashingCard from "./FlashingCard";
import { FaCode, FaRocket, FaDatabase, FaMobile } from "react-icons/fa";

const About = () => {
  const [activeCode, setActiveCode] = useState(0);

  const codeSnippets = [
    {
      title: "React Hook Example",
      language: "javascript",
      code: `import { useState, useEffect } from 'react';

const PortfolioCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Animate card on mount
    const timer = setTimeout(() => {
      setIsHovered(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div 
      className={\`card \${isHovered ? 'hovered' : ''}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={handleLike}>
        ❤️ {likes} likes
      </button>
    </div>
  );
};`,
      description: "Modern React hooks for interactive portfolio cards"
    },
    {
      title: "Django REST API",
      language: "python",
      code: `from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = '__all__'

class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    
    @action(detail=True, methods=['post'])
    def like(self, request, pk=None):
        portfolio = self.get_object()
        portfolio.likes += 1
        portfolio.save()
        return Response({'likes': portfolio.likes})`,
      description: "Django REST Framework API with custom actions"
    },
    {
      title: "FastAPI Endpoint",
      language: "python",
      code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Portfolio API", version="1.0.0")

class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]

@app.get("/projects/", response_model=List[Project])
async def get_projects():
    return projects

@app.post("/projects/", response_model=Project)
async def create_project(project: Project):
    projects.append(project)
    return project`,
      description: "FastAPI for high-performance API development"
    }
  ];

  const skills = [
    {
      title: "Frontend Development",
      description: "React, Next.js, JavaScript, TypeScript, Tailwind CSS",
      icon: <FaCode className="text-3xl" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      description: "Python, Django, FastAPI, Node.js, Express",
      icon: <FaRocket className="text-3xl" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & DevOps",
      description: "PostgreSQL, MongoDB, Docker, AWS, CI/CD",
      icon: <FaDatabase className="text-3xl" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile & UI/UX",
      description: "React Native, Responsive Design, Figma, Adobe XD",
      icon: <FaMobile className="text-3xl" />,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-purple-500 to-green-500 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
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
          />
        ))}
      </div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8 text-center"
        >
          <h2 className="text-4xl font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I am a versatile web developer proficient in Python, Django, and full-stack 
              technologies like Next.js and React. With Python's robust backend capabilities, 
              I craft efficient server-side solutions, leveraging Django's MVC framework for 
              scalable web applications.
            </motion.p>

            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Fluent in frontend development, I harness the power of React to build dynamic 
              user interfaces, enhancing user experiences. My expertise extends to full-stack 
              development, seamlessly integrating frontend and backend components for cohesive 
              applications.
            </motion.p>

            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              With a keen eye for detail and a passion for innovation, I consistently deliver 
              high-quality solutions tailored to client needs. My proficiency in these 
              technologies makes me a valuable asset in the ever-evolving landscape of web development.
            </motion.p>
          </motion.div>

          {/* Code snippets section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Code Showcase
              </span>
            </h3>

            {/* Code snippet tabs */}
            <div className="flex space-x-2 mb-4">
              {codeSnippets.map((snippet, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCode(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCode === index
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-white/10 text-white/70 hover:bg-white/15'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {snippet.title}
                </motion.button>
              ))}
            </div>

            {/* Active code snippet */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CodeSnippet
                  code={codeSnippets[activeCode].code}
                  language={codeSnippets[activeCode].language}
                  title={codeSnippets[activeCode].title}
                  description={codeSnippets[activeCode].description}
                  autoPlay={true}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Skills cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <FlashingCard
                key={index}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                gradient={skill.gradient}
                delay={index * 0.2}
                className="h-40"
                textColor="text-gray-800"
                textColorSecondary="text-gray-600"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
