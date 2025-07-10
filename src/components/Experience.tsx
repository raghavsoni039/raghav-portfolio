import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/10 to-teal-400/10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-responsive-lg font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Experience & Education</h2>
          <p className="text-responsive text-gray-300 max-w-2xl mx-auto">
            My journey in technology and artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Internship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-emerald-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <BriefcaseIcon className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl font-semibold">Internship</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-emerald-400 mb-2">Linux World Internship (Agentic AI)</h4>
              <p className="text-sm text-gray-400 mb-2">Ongoing • Started June 2025</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-emerald-400 h-2 rounded-full w-3/4 pulse"></div>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Launched Red Hat Linux on Windows VM
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Implemented Docker containerization
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Automated social media posting
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Deployed Docker-in-Docker containers
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <AcademicCapIcon className="w-8 h-8 text-teal-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-teal-400 mb-1">B.Tech in Artificial Intelligence</h4>
                <p className="text-sm text-gray-300">Arya College of Engineering, Jaipur</p>
                <p className="text-sm text-gray-400">2023 - 2027 (Expected)</p>
              </div>
              
              <div className="border-t border-gray-600 pt-4">
                <h4 className="font-semibold text-teal-400 mb-1">10th & 12th</h4>
                <p className="text-sm text-gray-300">St. Edmunds School, Jaipur</p>
                <p className="text-sm text-gray-400">Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-cyan-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrophyIcon className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-1">MySQL Certificate</h4>
                  <p className="text-sm text-gray-400">HackerRank</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-1">C Programming Certificate</h4>
                  <p className="text-sm text-gray-400">Udemy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-1">Linux World Certification</h4>
                  <p className="text-sm text-gray-400">Engineer's Tech Rath Yatra</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;