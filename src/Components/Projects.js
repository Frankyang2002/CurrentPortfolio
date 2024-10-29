import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


export default function Projects() {
  const { theme } = useContext(ThemeContext);

  let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
    return (
      <section id="projects" className={`bg-white screen-minus-header relative z-10 flex items-top justify-center rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] border-8   ${border}`}>
        <div>
          <div className="sticky top-16 z-20 bg-white h-16 flex items-center justify-center">
          <h2 className={`text-3xl font-bold ${text}`}>Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">Project 1</h3>
              <p className="mt-2">Description of the project...</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">Project 2</h3>
              <p className="mt-2">Description of the project...</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">Project 2</h3>
              <p className="mt-2">Description of the project...</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
          </div>  
        </div>
        
      </section>
    );
  }