import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Contact() {
  const { theme } = useContext(ThemeContext);

    let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-white'
    let bg = theme === 'light' ? 'bg-red-400' : 'bg-gray-800'

    return (
      <section id="contact"
                className={`flex items-center justify-center z-50 ${bg} ${text}`}
            >
        <div className={`w-11/12 space-y-6 items-center justify-center`}>  
          <div className={` ${bg} sticky top-16 h-16 flex w-full z-50 items-center justify-center`}>
            <h2 className={`text-1xl ${text}`} >©2024 Frank Yang</h2>
          </div>
        </div>
      </section>
    );
  }