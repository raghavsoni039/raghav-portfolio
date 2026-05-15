import React from 'react';
import { Code, Database, Cpu, Globe, Smartphone, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Globe size={24} />,
      skills: ['Python', 'C', 'C++', 'HTML', 'CSS']
    },
    {
      title: 'Framework / Libraries',
      icon: <Database size={24} />,
      skills: ['Streamlit', 'Pandas', 'Numpy', 'Flask', 'Matplotlib', 'Scikit-Learn', 'Seaborn']
    },
    {
      title: 'Tools',
      icon: <Cpu size={24} />,
      skills: ['Docker', 'Git', 'GitHub', 'Jenkins', 'MySQL', 'Redhat Enterprise Linux']
    },
    {
      title: 'DevOps',
      icon: <Cloud size={24} />,
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Linux', 'Git']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-[#00C9A7] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-lg hover:border hover:border-[#00C9A7] transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="text-[#00C9A7] mr-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#EAEAEA]">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#262626] text-[#B3B3B3] text-sm rounded-full hover:bg-[#00C9A7] hover:text-[#0D0D0D] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;