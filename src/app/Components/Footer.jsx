import React from 'react';
import logo from '../assets/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-[#0d0d0d] text-white px-6 py-4 border-t border-zinc-800">
   
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 relative flex items-center justify-center">
          <Image 
            src={logo} 
            alt="FitLog Logo" 
            width={24} 
            height={24} 
            className="object-contain"
          />
        </div>
        <span className="text-lg font-black tracking-wider text-white uppercase">
          FITLOG
        </span>
      </div>

      
      <div className="text-xs text-zinc-400 font-normal">
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;