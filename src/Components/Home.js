import Portimg from '../Assets/Portimg.png';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


export default function Home() {
  const { theme } = useContext(ThemeContext);

  let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'

    return (
      <section id="home"
                className={`h-screen flex items-center justify-center ${theme === 'light' ? 'bg-red-400' : 'bg-gray-800'}`}
            >
      <div className="flex justify-between w-full max-w-5xl z-10 px-8">
        {/* Left Side: Welcome Message */}
        <div className="text-white text-left leading-loose">
          <p className="text-3xl font-semibold"> Welcome to my portfolio, my name is</p>
          <h2 className="text-5xl font-bold mb-4">Frank Yang</h2>
          <p className="text-2xl">A Computer Science and Physics student at UNSW from Australia!</p>
        </div>

        {/* Right Side: My Portfolio Pic */}
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 h-64 flex items-center justify-center border-8">
            <img 
              src= {Portimg}
              alt="Profile Image" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
    );
  }