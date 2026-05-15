import React from 'react';
import { User, MapPin, Calendar, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#00C9A7] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-[#EAEAEA] mb-6">
              Hello! I'm Raghav Soni
            </h3>
            <p className="text-[#B3B3B3] mb-6 leading-relaxed">
              I’m a passionate AI and software developer currently pursuing B.Tech in Artificial Intelligence at Arya College. I enjoy building intelligent, user-focused applications that combine creativity, automation, and real-world problem solving.
            </p><p className="text-[#B3B3B3] mb-6 leading-relaxed">
              My interests lie in AI, Cloud Computing, DevOps, and modern software development. I love transforming complex ideas into practical and intuitive solutions through projects involving Python, Streamlit, MySQL, Docker, and Machine Learning.
            </p><p className="text-[#B3B3B3] mb-6 leading-relaxed">
              I’ve worked on projects like an AI-powered SQL Visualizer, business management systems, and automation-based applications that focus on improving efficiency and user experience. I’m constantly exploring new technologies, sharpening my development skills, and learning industry tools to grow as a developer.
            </p>

            {/* <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-[#B3B3B3]">
                <User size={20} className="text-[#00C9A7] mr-3" />
                <span>Raghav Soni</span>
              </div>
              <div className="flex items-center text-[#B3B3B3]">
                <MapPin size={20} className="text-[#00C9A7] mr-3" />
                <span>Jaipur,Rajasthan</span>
              </div>
              <div className="flex items-center text-[#B3B3B3]">
                <Calendar size={20} className="text-[#00C9A7] mr-3" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center text-[#B3B3B3]">
                <Mail size={20} className="text-[#00C9A7] mr-3" />
                <span>Raghav@example.com</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;