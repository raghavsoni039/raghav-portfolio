import React from 'react';
import profile from '../assets/profile.png';
import { Download, ArrowRight, Code, Cpu, Database } from 'lucide-react';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0D0D0D] relative flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 opacity-10">
          <Code size={120} className="text-[#00C9A7]" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Cpu size={100} className="text-[#00C9A7]" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <Database size={100} className="text-[#00C9A7]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#00A085] p-1">
                <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-44 h-44 rounded-full object-cover border-2 border-[#00C9A7]"
                    style={{ position: 'absolute', objectPosition: 'top' }}
                  />
                  <Code size={48} className="text-[#00C9A7]" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-[#00C9A7]/20"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#EAEAEA] mb-4">
            Raghav Soni
          </h1>
          <p className="text-xl md:text-2xl text-[#00C9A7] mb-6">
            AI Enthusiast | Tech Learner | DevOps Learner
          </p>
          <p className="text-lg text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
            I'm Raghav, a B.Tech AI student passionate about building intelligent systems and scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-[#00C9A7] text-[#0D0D0D] font-semibold rounded-lg hover:bg-[#00A085] transition-colors duration-300 group"
            >
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href='https://drive.google.com/file/d/16605j5fT-Ie3tYpH9KgEgpQT97zq2d9g/view?usp=drive_link'
              className="inline-flex items-center px-8 py-3 border-2 border-[#00C9A7] text-[#00C9A7] font-semibold rounded-lg hover:bg-[#00C9A7] hover:text-[#0D0D0D] transition-colors duration-300"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;