import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import portfolioimage from '../Assets/Portfolio Image.png'
import threebsimage from '../Assets/3bsimulation.png'
import dodoimg from '../Assets/dodo.png'

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
                className={`${bg} screen-minus-header relative z-40 w-screen flex items-top justify-center rounded-[50px] border-8 ${border}`}
            >        
        <div className={`w-11/12 space-y-6 items-center justify-center`}>  
          <div className={` ${bg} sticky top-16 h-16 flex w-full z-50 items-center justify-center`}>
            <h2 className={`text-3xl font-bold ${text}`} >Projects</h2>
          </div>
          <div className="grid h-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className={`${invert} p-4 h-4/6 rounded-[20px] text-white text-center space-y-4 `}>
              <h3 className="font-bold text-xl">Developer Portfolio</h3>

              <div className={`${invertborder} ${bg} ${text} relative h-1/5 border  border-2  px-4 overflow-y-auto rounded z-40`}>
                <p className="mt-2 text-left">
                This is the very website you're browsing! 
                </p>
                <p className="mt-2 text-left">
                This portfolio showcases my work, interests, and skills in web development, design, and data science. Built with modern technologies like HTML, CSS, Tailwind CSS, and JavaScript, the site reflects my approach to clean, responsive design and user-friendly interfaces.
                </p>
              </div>
              

              <p className="mt-2 font-semibold">Technology Stack</p>
              <div className="grid grid-cols-5 gap-4 place-items-center">
     
                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  alt="React Icon" class="w-16 h-16 "/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>React</p>
                </div>

                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"  alt="React Icon" class="w-16 h-16 "/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>Javascript</p>
                </div>

                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>HTML</p>
                </div>

                <div className="text-center transition-transform duration-300 transform hover:scale-105">   
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  alt="React Icon" class="w-16 h-16"/>
                    <p className={`mt-2 font-semibold ${textinvert}`}>TailwindCSS</p>
                </div>

                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
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
              <div class={`${bg} ${text} px-4 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105 z-50`}>
                <a href="https://github.com/Frankyang2002/CurrentPortfolio">
                  <button
                    type="submit"
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>


            <div className={`${invert} p-4 h-4/6 rounded-[20px] text-white text-center space-y-4`}>
              <h3 className="font-bold text-xl">Three Body Problem Simulation</h3>

              <div className={`${invertborder} ${bg} ${text} relative h-1/5 border  border-2 px-4 overflow-y-auto rounded z-40`}>
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
     
                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>React</p>
                </div>

                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"  alt="React Icon" class="w-16 h-16 "/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>Javascript</p>
                </div>

                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>HTML</p>
                </div>

                <div className="text-center transition-transform duration-300 transform hover:scale-105">   
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
              <div class={`${bg} ${text} px-4 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105 z-50`}>
                <a href="https://github.com/Frankyang2002/threebodysimulation">
                  <button
                    type="submit"
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>



            <div className={`${invert} p-4 h-4/6 rounded-[20px] text-white text-center space-y-4`}>
              <h3 className="font-bold text-xl">Optimal Control Code for Dodo Project</h3>

              <div className={`${invertborder} ${bg} ${text} relative h-1/5 border  border-2 px-4 overflow-y-auto rounded z-40`}>                
                <p class="mt-2 text-left">
                  This project involves designing and simulating the optimal control of a robotic "dodo" leg using MATLAB. Inspired by biomechanics and robotics, it focuses on achieving precise, efficient movement that mimics the natural gait of a bird.
                </p>
                
                <p class="mt-2 text-left">The project includes:</p>
                <ul class="list-disc list-inside mt-2 text-left">
                  <li>Mathematical modeling: Developed a dynamic model of the dodo's leg, incorporating joint angles, torque, and constraints for realistic motion.</li>
                  <li>Optimal control implementation: Utilized MATLAB's optimization tools to minimize energy expenditure while ensuring smooth and stable leg movements.</li>
                  <li>Simulation and analysis: Visualized the leg's trajectory in MATLAB to verify the model's accuracy and efficiency under varying conditions.</li>
                </ul>

                <p class="mt-2 text-left">
                  This work bridges physics, mathematics, and robotics, showcasing my ability to apply theoretical concepts to real-world challenges while leveraging MATLAB for advanced simulations and analysis.
                </p>
              </div>
              

              <p className="mt-2 font-semibold">Technology Stack</p>
              <div className="grid grid-cols-1 gap-4 place-items-center">
     
                <div className="text-center transition-transform duration-300 transform hover:scale-105"> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"  alt="React Icon" class="w-16 h-16"/>
                  <p className={`mt-2 font-semibold ${textinvert}`}>Matlab</p>
                </div>
              </div>

              
              <div className={`${invertborder} rounded-lg overflow-hidden w-128 h-64 flex border-8 justify-center`}>
                <img 
                  src= {dodoimg}
                  alt="Profile Image" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div class={`${bg} ${text} px-4 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105 z-50`}>
                <a href="https://github.com/Frankyang2002/OptimalControl">
                  <button
                    type="submit"
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>

          </div>  
        </div>
        
      </section>
    );
  }