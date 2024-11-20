import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Resume() {
  const { theme } = useContext(ThemeContext);

  let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
    let bg = theme === 'light' ? 'bg-white':'bg-gray-200'
    return (
      <section id="resume"
                className={`${bg} screen-minus-header relative z-10 flex items-top justify-center rounded-[50px] border-8 ${border}`}
            >
        <div>
            <div className={` ${bg} sticky top-16 z-20 h-16 flex items-center justify-center`}>
                <h2 className={`text-3xl font-bold ${text}`}>Resume</h2>
            </div>
            <p className="text-lg mt-4">
                Hello I am a current student at University of New South Wales
            </p>  
        </div>
        
      </section>
    );
  }