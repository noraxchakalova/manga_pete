import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 w-full text-black">
      <div className="px-4 lg:px-24 text-center">
        <div className="flex justify-center gap-8 mb-4 text-black text-xl">
            <div className="relative group">
              <a href='/aboutme' className='text-black'>About Me</a>         
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
            </div>
            <div className="relative group">
              <a href='/portfolio' className='text-black'>Portfolio</a>         
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
            </div>
            <div className="relative group">
              <a href='/contact' className='text-black'>Contact</a>         
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
            </div>
          
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a href='https://www.instagram.com/manga_pete?igsh=MXRmNDVhN3hmcWZzeQ%3D%3D'><FaInstagram className="text-black text-2xl" /></a>
          <a href='https://x.com/i/flow/login?redirect_after_login=%2FManga_Pete'><FaTwitter className="text-black text-2xl" /></a>
        </div>
        <hr className="border-t border-gray-300 mb-4" />
        <p className="text-sm">Copyright © 2025 MangaMasterpiece. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href='/terms' className='text-sm text-black hover:underline'>Terms-and-conditions</a>
          <a href='/policy' className='text-sm text-black hover:underline'>Privacy-policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 