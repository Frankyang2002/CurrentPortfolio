import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Portimg from '../Assets/profile.jpg';
import Pythonicon from '../Assets/python.svg';
import Reacticon from '../Assets/react.svg';


export default function About() {
  const { theme } = useContext(ThemeContext);

    let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
    let bg = theme === 'light' ? 'bg-white':'bg-gray-200'
    return (
      <section id="about"
                className={`${bg} screen-minus-header relative z-10 flex items-top justify-center rounded-[50px] border-8 ${border}`}
            >
        <div className={`w-10/12 h-full`}>  
          <div className='h-2/5'> 
            <div className={` ${bg}  top-16 z-40 h-16 flex items-center justify-center sticky`}>
              <h2 className={`text-3xl font-bold ${text}`} >About Me</h2>
            </div>

            <div className={`flex items-start justify-between h-full`}>
              <div className={`w-3/4 text-xl ${text} space-y-6 overflow-y-auto h-3/4`}>
                <p>Hi, I'm a student at the University of New South Wales (UNSW), where I study Computer Science and Physics. I’ve also had the privilege of expanding my academic horizons through an exchange program at the Technical University of Munich (TUM) with a learning focus on data science and artificial intelligence.</p>
                <p>My interests span a wide range of fields: physics and mathematics captivate me with their ability to explain the natural world through elegant principles, while history and economics fascinate me with their insights into human behavior, societies, and decision-making. I enjoy combining these disciplines with my passion for programming and data science to explore complex systems, whether in science, technology, or the broader world.</p>
              </div>

              {/* Right Side: My Portfolio Pic */}
              <div className={`${border} rounded-lg overflow-hidden w-1/5 h-4/6 flex border-8`}>
                <img 
                  src= {Portimg}
                  alt="Profile Image" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div> 

          
          <div className='h-3/5'>
            <div className={` ${bg} top-16 z-40 h-16 flex items-center justify-center sticky`}>
              <h2 className={`text-3xl font-bold ${text}`} >Tools</h2>
            </div>

            <div className="grid sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-5 gap-4  place-items-center pt-4 h-4/5 w-full overflow-x-auto">
              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>React</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>Javascript</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>Java</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>CSS</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>Matlab</p>
              </div>


              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>Python</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-plain.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>RStudio</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110">   
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>Tailwind</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>HTML</p>
              </div>

              <div className="text-center w-1/2 transition-transform duration-300 transform hover:scale-110">   
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"  alt="React Icon" class="w-full h-full"/>
                <p className={`mt-2 font-semibold ${text}`}>Github</p>
              </div>
            </div>
           </div>
        </div>
      </section>
    );
  }