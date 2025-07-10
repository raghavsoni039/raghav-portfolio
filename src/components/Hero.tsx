import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "AI Enthusiast | Full-Stack Developer | DevOps Learner";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-slate-800 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full glow bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center float">
              <img
                src="public\me.jpg"
                alt="Raghav Soni"
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name and Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-responsive-xl font-bold mb-4"
          >
            Raghav Soni
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-responsive-lg font-semibold mb-6 text-cyan-200"
          >
            "Crafting Innovative Solutions with Code, Curiosity, and AI"
          </motion.p>

          {/* Animated typing text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-responsive mb-6 h-8 flex items-center justify-center"
          >
            <span className="text-blue-200">
              {displayText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </motion.div>

          {/* Brief intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-responsive max-w-2xl mx-auto mb-8 text-gray-200"
          >
            I'm Raghav, a B.Tech AI student passionate about building intelligent systems and scalable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-lg focus-visible:focus min-w-[160px]"
              aria-label="View my projects"
            >
              View My Work
            </button>
            
            <a
  href="public/RESUME.pdf"
  download
  className="bg-transparent border-2 border-indigo-400 text-indigo-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-indigo-400 hover:text-white hover:scale-105 hover:shadow-lg focus-visible:focus min-w-[160px]"
  aria-label="Download my resume"
>
  Download Resume
</a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDownIcon className="w-8 h-8 text-white bounce cursor-pointer" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;