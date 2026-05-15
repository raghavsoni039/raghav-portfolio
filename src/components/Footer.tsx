import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#333333] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-[#B3B3B3] mb-4 md:mb-0">
            <span>Designed and Developed by Raghav Soni</span>
            {/* <Heart size={16} className="mx-2 text-[#00C9A7]" />
            <span>and</span>
            <Code size={16} className="mx-2 text-[#00C9A7]" />
            <span>by Raghav Soni</span> */}
          </div>
          
          <div className="text-[#B3B3B3] text-sm">
            © 2025 Raghav Soni. All rights reserved.
          </div>
        </div>
        
        {/* <div className="mt-6 pt-6 border-t border-[#333333] text-center">
          <p className="text-[#B3B3B3] text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;