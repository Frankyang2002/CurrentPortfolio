import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-scroll';


export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  let bg = theme === 'light' ? 'bg-red-400' : 'bg-gray-800'
  let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
  let headeroffset = -60
    return (

        <header className={`fixed top-0 left-0 w-full text-white py-4 z-50 ${bg}`}>
          <nav className="container mx-auto flex justify-between items-center px-4">
            <Link to="home" smooth={true} offset={headeroffset} duration={500} className="text-3xl font-bold top-10 transition-transform duration-300 transform hover:scale-105">
                Frank Yang
            </Link>
            <Link to="home" smooth={true} offset={headeroffset} duration={500} className="text-xl transition-transform duration-300 transform hover:scale-110">
                Home
            </Link>
            <Link to="about" smooth={true} offset={headeroffset} duration={500} className="text-xl transition-transform duration-300 transform hover:scale-110">
                About
            </Link>
            <Link to="resume" smooth={true} offset={headeroffset} duration={500} className="text-xl transition-transform duration-300 transform hover:scale-110">
                Resume
            </Link>
            <Link to="projects" smooth={true} offset={headeroffset} duration={500} className="text-xl transition-transform duration-300 transform hover:scale-110">
                Projects
            </Link>
            <Link to="contact" smooth={true} offset={headeroffset} duration={500} className="text-xl transition-transform duration-300 transform hover:scale-110">
                Contact
            </Link>
            <button
                onClick={toggleTheme}
                className={`bg-white ${text} px-4 py-2 rounded-[30px] transition-transform duration-300 transform hover:scale-110`}
            >
                Toggle Theme
          </button>
        </nav>
       
      </header>
    );
  }