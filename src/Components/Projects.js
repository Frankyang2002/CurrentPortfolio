import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import portfolioimage from '../Assets/Portfolio Image.png'
import threebsimage from '../Assets/3bsimulation.png'


export default function Projects() {
  const { theme } = useContext(ThemeContext);

    let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
    let textinvert = theme === 'light' ? 'text-white':'text-gray-200'
    let bg = theme === 'light' ? 'bg-white':'bg-gray-200'
    let invert = theme === 'light' ? 'bg-red-400' : 'bg-gray-800'
    let invertborder = theme === 'light' ? 'border-white':'border-gray-200'
    return (
        <section id="projects"
                className={`${bg} screen-minus-header relative z-10 flex items-top justify-center rounded-[50px] border-8 ${border}`}
            >        
        <div className={`w-11/12 space-y-3`}>  
          <div className={` ${bg} sticky top-16 z-50 h-16 flex items-center justify-center`}>
            <h2 className={`text-3xl font-bold ${text}`} >Projects</h2>
          </div>
          <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className={`${invert} p-4 h-5/6 rounded-[20px] text-white text-center space-y-4`}>
              <h3 className="font-bold text-xl">Developer Portfolio</h3>

              <div className={`${invertborder} relative h-36 border  border-2 px-4 overflow-y-auto rounded z-40`}>

              <p className="mt-2 text-left">
              This is the very website you're browsing! 
              </p>
              <p className="mt-2 text-left">
              This portfolio showcases my work, interests, and skills in web development, design, and data science. Built with modern technologies like HTML, CSS, Tailwind CSS, and JavaScript, the site reflects my approach to clean, responsive design and user-friendly interfaces.
              </p>
              </div>
              

              <p className="mt-2 font-semibold">Technology Stack</p>
              <div className="grid grid-cols-5 gap-4 place-items-center">
     
                <div className="text-center"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>React</p>
                </div>

                <div className="text-center"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"  alt="React Icon" class="w-16 h-16 "/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>Javascript</p>
                </div>

                <div className="text-center"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>HTML</p>
                </div>

                <div className="text-center">   
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  alt="React Icon" class="w-16 h-16"/>
                    <p className={`mt-2 font-semibold ${textinvert}`}>TailwindCSS</p>
                </div>

                <div className="text-center"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>CSS</p>
                </div>
              </div>

              
              <div className={`${invertborder} rounded-lg overflow-hidden w-128 h-64 flex border-8 justify-center`}>
                <img 
                  src= {portfolioimage}
                  alt="Profile Image" 
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                type="submit"
                class={`${bg} ${text} px-6 py-2 rounded-lg hover:bg-blue-700 z-40`}
              >
                View Project
              </button>
            </div>


            <div className={`${invert} p-4 h-5/6 rounded-[20px] text-white text-center space-y-4`}>
              <h3 className="font-bold text-xl">Three Body Problem Simulation</h3>

              <div className={`${invertborder} relative h-36 border  border-2 px-4 overflow-y-auto rounded z-40`}>
                <p class="mt-2 text-left">
                  This interactive simulation explores the fascinating dynamics of the three-body problem, blending my interest in physics with web development. Built with React, Three.js, HTML, and JavaScript, this project allows users to experiment with a 3D visualization of gravitational interactions.
                </p>
                
                <p class="mt-2 text-left">Key features include:</p>
                <ul class="list-disc list-inside mt-2 text-left">
                  <li>Adjustable radius, mass, and initial positions of celestial bodies on a 3D plane.</li>
                  <li>Drag-and-drop functionality for repositioning masses dynamically.</li>
                  <li>Real-time display of velocity and acceleration vectors directly on the bodies, enhancing understanding of motion dynamics.</li>
                </ul>
              </div>
              

              <p className="mt-2 font-semibold">Technology Stack</p>
              <div className="grid grid-cols-4 gap-4 place-items-center">
     
                <div className="text-center"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>React</p>
                </div>

                <div className="text-center"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"  alt="React Icon" class="w-16 h-16 "/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>Javascript</p>
                </div>

                <div className="text-center"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>HTML</p>
                </div>

                <div className="text-center">   
                   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg"  alt="React Icon" class="w-16 h-16"/>
                    <p className={`mt-2 font-semibold ${textinvert}`}>Threejs</p>
                </div>
              </div>

              
              <div className={`${invertborder} rounded-lg overflow-hidden w-128 h-64 flex border-8 justify-center`}>
                <img 
                  src= {threebsimage}
                  alt="Profile Image" 
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                type="submit"
                class={`${bg} ${text} px-6 py-2 rounded-lg hover:bg-blue-700 z-50`}
              >
                View Project
              </button>
            </div>



            <div className={`${invert} p-4 h-5/6 rounded-[20px] text-white text-center space-y-4`}>
              <h3 className="font-bold">Developer Portfolio</h3>
              <p className="mt-2 text-left">Description of the project...</p>
              <a href="#" className={`${invert}`}>View Project</a>
            </div>
          </div>  
        </div>
        
      </section>
    );
  }