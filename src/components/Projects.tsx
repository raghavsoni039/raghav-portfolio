import { ExternalLink, Github, Code, Zap, Brain } from 'lucide-react';
import sqlImg from '../assets/SQL-Visulaizer.png';
import MicroserviceImg from '../assets/Microservice-Architecture.png';
import flaskImg from '../assets/Flask-With-CICD.png';
import MetallurgyImg from '../assets/Metallurgy.png';
import BMSImg from '../assets/BMS.png';
import FMS from '../assets/FMS.png';
const Projects = () => {
  const projects = [

    {
      title: 'Flask Web Application with CI/CD',
      description: 'A Docker + Jenkins pipeline built during Linux World Internship for automated deployment and testing.',
      image: flaskImg,
      tech: ['Python','Docker','Jenkins','Red Hat Linux'],
      github: 'https://github.com/raghavsoni039/DevOps-Project-1',
      icon: <Zap size={24} />
    },
    {
      title: 'Containerized Microservices Architecture',
      description: 'Built a Flask-based microservices project using Docker, Redis, and PostgreSQL for fast, cached data handling—deployed on RHEL 9.',
      image: MicroserviceImg,
      tech: ['Python' , 'Postgres SQL','Redis','Red hat Linux','Docker'],
      github: 'https://github.com/raghavsoni039/MicroService-Architecture',
      icon: <Zap size={24} />
    },
    {
      title: 'AI-Powered SQL Visualizer',
      description: 'A Streamlit web app for visualizing and interacting with MySQL databases. Supports custom SQL queries and CSV uploads to insert data into tables',
      image: sqlImg,
      tech: ['Streamlit', 'Python', 'Pandas', 'MySQL'],
      github: 'https://github.com/raghavsoni039/mysql-visualizer',
      icon: <Brain size={24} />
    },
    {
      title: 'Finance Management System',
      description: 'A console-based C++ application to manage customer loan records and EMI calculations with a user-friendly interface.',
      image: FMS,
      tech: ['C++'],
      github: 'https://github.com/raghavsoni039/Finance_Management_System',
      icon: <Code size={24} />
    },
    {
      title: 'Bank Management System',
      description: 'A Python-Streamlit-MySQL app for creating users, managing deposits/withdrawals, and viewing transactions via an intuitive UI.',
      image: BMSImg,
      tech: ['Python','Streamlit','MySQL'],
      github: 'https://github.com/raghavsoni039/Bank_Management_System',
      icon: <Zap size={24} />
    },
    
    {
      title: 'Metallurgy Industry Management System',
      description: 'A Python-MySQL system to manage ores, workers, and financial data in the metallurgy industry with CRUD operations.',
      image: MetallurgyImg,
      tech: ['Python','MySQL'],
      github: 'https://github.com/raghavsoni039/Industry-Management',
      icon: <Zap size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#00C9A7] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#262626] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#00C9A7]/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0D0D0D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-[#00C9A7]">
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#EAEAEA] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#B3B3B3] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#1A1A1A] text-[#00C9A7] text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-[#B3B3B3] hover:text-[#00C9A7] transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  {/* <a
                    href={project.demo}
                    className="flex items-center text-[#B3B3B3] hover:text-[#00C9A7] transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;