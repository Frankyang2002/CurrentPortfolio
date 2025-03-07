import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-scroll';


export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  let bg = theme === 'light' ? 'bg-red-400' : 'bg-gray-800'
  let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
  let headeroffset = -60
  function openEmailTab() {
    window.open('mailto:your-email@example.com', '_blank');
  }
    return (
        
        <header className={`fixed top-0 left-0 w-full text-white py-4 z-50 ${bg}`}>
          <nav className="container mx-auto flex justify-between items-center px-4">
            <Link to="home" smooth={true} offset={headeroffset} duration={500} className="cursor-pointer text-3xl font-bold top-10 transition-transform duration-300 transform hover:scale-105">
                Frank Yang
            </Link>
            <div className='space-x-16 z-50 relative'>
              <Link to="home" smooth={true} offset={headeroffset} duration={500} className="cursor-pointer text-xl transition-transform duration-300 transform hover:scale-105">
                Home
              </Link>
              <Link to="about" smooth={true} offset={headeroffset} duration={500} className="cursor-pointer text-xl transition-transform duration-300 transform hover:scale-110">
                  About
              </Link>
              <Link to="resume" smooth={true} offset={headeroffset} duration={500} className="cursor-pointer text-xl transition-transform duration-300 transform hover:scale-110">
                  Resume
              </Link>
              <Link to="projects" smooth={true} offset={headeroffset} duration={500} className="cursor-pointer text-xl transition-transform duration-300 transform hover:scale-110">
                  Projects
              </Link>
              <a href="https://www.linkedin.com/in/frank-yang-89a5b6203/" target="_blank" 
                rel="noopener noreferrer" 
                class="text-white hover:text-blue-400 transition duration-300">
                  <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/Frankyang2002" target="_blank" 
                rel="noopener noreferrer" 
                class="text-white hover:text-gray-400 transition duration-300">
                  <i class="fab fa-github fa-2x"></i>
              </a>
              <a href='mailto:yangfrank2002@g.com' 
                class="text-white hover:text-red-400 transition duration-300">
                  <i class="fas fa-envelope fa-2x"></i>
              </a>
            </div>
        </nav>
       
      </header>
    );
  }