import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Contact() {
  const { theme } = useContext(ThemeContext);

    let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'

    return (
      <section id="contact"
                className={`bg-white screen-minus-header relative z-10 flex items-top justify-center rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] border-8   ${border}`}
            >
          <div>
          <div className="sticky top-16 z-20 bg-white h-16 flex items-center justify-center">
            <h2 className={`text-3xl font-bold ${text}`}>Contact</h2>
          </div>
            <p className="text-gray-800 text-xl">Hi</p>
          </div>
      </section>
    );
  }