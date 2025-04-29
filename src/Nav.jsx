import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle('overflow-hidden', !menuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); 
    document.body.classList.remove('overflow-hidden'); 
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isHomePage && !isScrolled ? 'bg-transparent' : 'shadow-custom bg-black'}`}>
      <nav className="px-5 max-w-[1290px] w-full flex justify-between items-center mx-auto h-[80px]">
        <div className="flex gap-[48px] justify-center items-center">
          <a href="/" className="flex items-center text-white text-2xl font-bold">
            <h1>manga_pete</h1>
          </a>
          </div>
        <div>
          <ul className={`hidden lg:flex gap-[32px] text-[16px] font-normal ${isHomePage && !isScrolled ? 'text-white' : 'text-white'}`}>
            <li className="relative group">
              <a
                href="/aboutme"
                className="relative"
              >
                About Me
                <span className="absolute top-[20px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="/portfolio"
                className="relative"
              >
                Portfolio
                <span className="absolute top-[20px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="/contact"
                className="relative"
              >
                Contact
                <span className="absolute top-[20px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
            
          </ul>
          </div>

        <div className="flex items-center space-x-4">
          <div className='hidden lg:flex gap-4'> 
            <a
            href="/portfolio"
            className="flex border-1 border-white items-center justify-center gap-2 p-[4px_14px] rounded-[6px] bg-transparent text-white hover:bg-white hover:text-black font-medium transition-all duration-300 ease-in-out"
        >
            Explore
        </a>
        <a href="/contact" className="flex items-center justify-center gap-2 p-[4px_14px] rounded-[6px] bg-white text-black hover:bg-transparent hover:text-white font-medium transition-all duration-300 ease-in-out border-1 border-white">
            Contact
        </a> </div>
                
          <button
            onClick={toggleMenu} className="lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed  inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-6 p-6">
          <button onClick={toggleMenu} className="absolute top-4 right-6 text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center gap-6 text-white text-[20px]">
            <li>
              <a
                href="/aboutme"
                onClick={(event) => {
                  handleMenuItemClick();
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                onClick={(event) => {
                  handleMenuItemClick();
                }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={(event) => {
                  handleMenuItemClick();
                }}
              >
                Contact
              </a>
            </li>
            
          </ul>
          <div className='flex gap-4'>
          <a
            href="/portfolio"
            className="flex border-1 border-white items-center justify-center gap-2 p-[4px_14px] rounded-[6px] bg-transparent text-white hover:bg-white hover:text-black font-medium transition-all duration-300 ease-in-out"
        >
            Explore
        </a>
        <a href="/contact" className="flex items-center justify-center gap-2 p-[4px_14px] rounded-[6px] bg-white text-black hover:bg-transparent hover:text-white font-medium transition-all duration-300 ease-in-out border-1 border-white">
            Contact
        </a>  
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
