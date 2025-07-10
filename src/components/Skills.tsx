import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  icon: string;
  category: string;
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', icon: '🐍', category: 'Programming Languages', color: 'from-yellow-400 to-blue-500' },
    { name: 'C++', icon: '⚡', category: 'Programming Languages', color: 'from-blue-500 to-purple-600' },
    { name: 'C', icon: '🔧', category: 'Programming Languages', color: 'from-gray-400 to-gray-600' },
    { name: 'JavaScript', icon: '🟨', category: 'Programming Languages', color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML', icon: '🌐', category: 'Programming Languages', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: '🎨', category: 'Programming Languages', color: 'from-blue-400 to-blue-600' },
    
    // Frameworks/Libraries
    { name: 'Streamlit', icon: '🚀', category: 'Frameworks/Libraries', color: 'from-red-500 to-pink-500' },
    { name: 'Pandas', icon: '🐼', category: 'Frameworks/Libraries', color: 'from-blue-600 to-indigo-600' },
    { name: 'NumPy', icon: '🔢', category: 'Frameworks/Libraries', color: 'from-blue-500 to-cyan-500' },
    { name: 'Flask', icon: '🌶️', category: 'Frameworks/Libraries', color: 'from-gray-600 to-gray-800' },
    { name: 'Matplotlib', icon: '📊', category: 'Frameworks/Libraries', color: 'from-green-500 to-blue-500' },
    { name: 'Scikit-learn', icon: '🤖', category: 'Frameworks/Libraries', color: 'from-orange-500 to-yellow-500' },
    { name: 'Seaborn', icon: '📈', category: 'Frameworks/Libraries', color: 'from-teal-500 to-cyan-500' },
    
    // Tools
    { name: 'Docker', icon: '🐳', category: 'Tools', color: 'from-blue-500 to-blue-700' },
    { name: 'Git', icon: '📝', category: 'Tools', color: 'from-orange-600 to-red-600' },
    { name: 'GitHub', icon: '🐙', category: 'Tools', color: 'from-gray-700 to-black' },
    { name: 'Jenkins', icon: '🔧', category: 'Tools', color: 'from-blue-600 to-indigo-700' },
    { name: 'MySQL', icon: '🗄️', category: 'Tools', color: 'from-blue-600 to-orange-500' },
    { name: 'Red Hat Linux', icon: '🐧', category: 'Tools', color: 'from-red-600 to-red-800' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 gradient-alt relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-responsive-lg font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills & Expertise</h2>
          <p className="text-responsive text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-indigo-500/20"
            >
              <h3 className="text-xl font-semibold mb-8 text-indigo-400 text-center">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.filter(skill => skill.category === category).map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  >
                    <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-xl text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}>
                      <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-white text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;