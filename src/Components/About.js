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
        <div className={`w-10/12 space-y-3`}>    
          <div className={` ${bg} sticky top-16 z-40 h-16 flex items-center justify-center`}>
            <h2 className={`text-3xl font-bold ${text}`} >About Me</h2>
          </div>

          <div className={`flex items-start justify-between`}>
            <div className={`w-3/4 text-xl ${text} space-y-6 `}>
              <p>Hi, I'm a student at the University of New South Wales (UNSW), where I study Computer Science and Physics. I’ve also had the privilege of expanding my academic horizons through an exchange program at the Technical University of Munich (TUM) with a learning focus on data science and artificial intelligence.</p>
              <p>My interests span a wide range of fields: physics and mathematics captivate me with their ability to explain the natural world through elegant principles, while history and economics fascinate me with their insights into human behavior, societies, and decision-making. I enjoy combining these disciplines with my passion for data science and analysis to explore complex systems, whether in science, technology, or the broader world.</p>
              <p>Outside of academics, I love reading books from historical to fictional and traveling to experience different cultures and historical landmarks. Feel free to connect if you would like to discuss ideas or collaborate!</p>
            </div>

            {/* Right Side: My Portfolio Pic */}
            <div className={`${border} rounded-lg overflow-hidden w-80 h-80 flex border-8`}>
              <img 
                src= {Portimg}
                alt="Profile Image" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          

          <div className={` ${bg} sticky top-16 z-40 h-16 flex items-center justify-center`}>
            <h2 className={`text-3xl font-bold ${text}`} >Skills</h2>
          </div>

          <div className="grid grid-cols-5 gap-4 place-items-center">
     
            <div className="text-center"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>React</p>
            </div>

            <div className="text-center"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>Javascript</p>
            </div>

            <div className="text-center"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>Java</p>
            </div>

            <div className="text-center"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>CSS</p>
            </div>

            <div className="text-center"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>Matlab</p>
            </div>


            <div className="text-center"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>Python</p>
            </div>

            <div className="text-center"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-plain.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>RStudio</p>
            </div>

            <div className="text-center">   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>TailwindCSS</p>
            </div>

            <div className="text-center"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>HTML</p>
            </div>

            <div className="text-center">   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"  alt="React Icon" class="w-32 h-32"/>
              <p className={`mt-2 font-semibold ${text}`}>Github</p>
            </div>
          </div>

        </div>
      </section>
    );
  }