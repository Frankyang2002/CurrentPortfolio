import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';



export default function Logo() {
  const { theme } = useContext(ThemeContext);
    return (
        <section id="logo"
                className={`h-48 flex items-center justify-center ${theme === 'light' ? 'bg-red-400' : 'bg-gray-800'}`}
            >
        <div className="text-center">
            <h2 className="text-white text-5xl font-bold mb-4">Thats all</h2>
        </div>
      </section>
    );
  }