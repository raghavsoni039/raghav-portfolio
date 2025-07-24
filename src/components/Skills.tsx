import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  faPython,
  faJs,
  faHtml5,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faGithub,
  faJenkins,
  faRedhat,
  faLine,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faCogs,
  faDatabase,
  faRobot,
  faChartBar,
  faFlask,
  faServer,
  faTerminal,
  faLaptopCode,
  faStream,
  faChartLine,
  faListNumeric,
  faLineChart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Skill {
  name: string;
  icon: IconDefinition;
  category: string;
  color: string;
  link: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills: Skill[] = [
    { name: 'Python', icon: faPython, category: 'Programming Languages', color: 'from-yellow-400 to-blue-500', link: 'https://www.python.org/' },
    { name: 'C', icon: faCode, category: 'Programming Languages', color: 'from-gray-400 to-gray-600', link: 'https://www.c-language.org/' },
    { name: 'C++', icon: faCode, category: 'Programming Languages', color: 'from-blue-500 to-purple-600', link: 'https://isocpp.org/' },
    { name: 'JavaScript', icon: faJs, category: 'Programming Languages', color: 'from-yellow-400 to-orange-500', link: 'https://www.javascript.com/' },
    { name: 'HTML', icon: faHtml5, category: 'Programming Languages', color: 'from-orange-500 to-red-500', link: 'https://html.spec.whatwg.org/' },
    { name: 'CSS', icon: faCss3Alt, category: 'Programming Languages', color: 'from-blue-400 to-blue-600', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Streamlit', icon: faStream, category: 'Frameworks/Libraries', color: 'from-red-500 to-pink-500', link: 'https://streamlit.io/' },
    { name: 'Pandas', icon: faLineChart, category: 'Frameworks/Libraries', color: 'from-blue-600 to-indigo-600', link: 'https://pandas.pydata.org/' },
    { name: 'NumPy', icon: faLineChart, category: 'Frameworks/Libraries', color: 'from-blue-500 to-cyan-500', link: 'https://numpy.org/' },
    { name: 'Flask', icon: faFlask, category: 'Frameworks/Libraries', color: 'from-gray-600 to-gray-800', link: 'https://flask.palletsprojects.com/en/stable/' },
    { name: 'Matplotlib', icon: faChartBar, category: 'Frameworks/Libraries', color: 'from-green-500 to-blue-500', link: 'https://matplotlib.org/' },
    { name: 'Scikit-learn', icon: faRobot, category: 'Frameworks/Libraries', color: 'from-orange-500 to-yellow-500', link: 'https://scikit-learn.org/stable/' },
    { name: 'Seaborn', icon: faChartLine, category: 'Frameworks/Libraries', color: 'from-teal-500 to-cyan-500', link: 'https://seaborn.pydata.org/' },
    { name: 'Docker', icon: faDocker, category: 'Tools', color: 'from-blue-500 to-blue-700', link: 'https://hub.docker.com/' },
    { name: 'Git', icon: faGitAlt, category: 'Tools', color: 'from-orange-600 to-red-600', link: 'https://git-scm.com/' },
    { name: 'GitHub', icon: faGithub, category: 'Tools', color: 'from-gray-700 to-black', link: 'https://github.com/raghavsoni039' },
    { name: 'Jenkins', icon: faJenkins, category: 'Tools', color: 'from-blue-600 to-indigo-700', link: 'https://www.jenkins.io/' },
    { name: 'MySQL', icon: faDatabase, category: 'Tools', color: 'from-blue-600 to-orange-500', link: 'https://www.mysql.com/' },
    { name: 'Red Hat Linux', icon: faRedhat, category: 'Tools', color: 'from-red-600 to-red-800', link: 'https://www.redhat.com/en' },
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
          <h2 className="text-responsive-lg font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
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
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.a
                      key={skill.name}
                      href={skill.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + index * 0.1,
                      }}
                    >
                      <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-xl text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}>
                        <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                          <FontAwesomeIcon icon={skill.icon} />
                        </div>
                        <span className="font-medium text-white text-sm">{skill.name}</span>
                      </div>
                    </motion.a>
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
