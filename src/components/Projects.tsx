import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CircleStackIcon, 
  CpuChipIcon, 
  CommandLineIcon, 
  BanknotesIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  githubLink?: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects: Project[] = [
    {
      title: "AI-Powered SQL Visualizer",
      description: "A Streamlit web app for visualizing and interacting with MySQL databases. Supports custom SQL queries and CSV uploads to insert data into tables.",
      techStack: ["Streamlit", "MySQL", "Python", "Pandas"],
      icon: <CircleStackIcon className="w-8 h-8" />,
      githubLink: "https://github.com/raghavsoni039/mysql-visualizer",
      
    },
    {
      title: "Finance Management System",
      description: "A console-based C++ application to manage customer loan records and EMI calculations with a user-friendly interface.",
      techStack: ["C++"],
      icon: <BanknotesIcon className="w-8 h-8" />,
      githubLink: "https://github.com/raghavsoni039/Finance_Management_System"
    },
    {
      title: "Bank Management System",
      description: "A Python-Streamlit-MySQL app for creating users, managing deposits/withdrawals, and viewing transactions via an intuitive UI.",
      techStack: ["Python", "Streamlit", "MySQL"],
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      githubLink: "https://github.com/raghavsoni039/Bank_Management_System",
      
    },
    {
      title: "Flask Web Application with CI/CD",
      description: "A Docker + Jenkins pipeline built during Linux World Internship for automated deployment and testing.",
      techStack: ["Docker", "Jenkins", "Red Hat Linux"],
      icon: <CommandLineIcon className="w-8 h-8" />,
      githubLink: "https://github.com/raghavsoni039/DevOps-Project-1"
    },
    {
      title: "Metallurgy Industry Management System",
      description: "A Python-MySQL system to manage ores, workers, and financial data in the metallurgy industry with CRUD operations.",
      techStack: ["Python", "MySQL"],
      icon: <CpuChipIcon className="w-8 h-8" />,
      githubLink: "https://github.com/raghavsoni039/Industry-Management"
    },
    {
      title: "Containerized Microservices Architecture",
      description: " Built a Flask-based microservices project using Docker, Redis, and PostgreSQL for fast, cached data handling—deployed on RHEL 9.",
      techStack: ["Docker"," Python" ,"Red Hat Linux","Postgres SQL" , "Redis"],
      icon:<CommandLineIcon className='w-8 h-8' />,
      githubLink:"https://github.com/raghavsoni039/MicroService-Architecture"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #6366F1 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8B5CF6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-responsive-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-responsive text-gray-300 max-w-2xl mx-auto">
            A showcase of my work in AI, web development, and system design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-purple-500/20 hover:border-purple-400/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, ) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded-full text-sm font-medium border border-purple-500 border-opacity-30 hover:bg-opacity-30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.githubLink && (
                  <button
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="flex-1 bg-transparent border border-purple-400 text-purple-400 py-2 px-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-medium focus-visible:focus"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub
                  </button>
                )}
                {project.demoLink && (
                  <button
                    onClick={() => window.open(project.demoLink, '_blank')}
                    className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 font-medium focus-visible:focus"
                    aria-label={`View ${project.title} demo`}
                  >
                    Demo
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;