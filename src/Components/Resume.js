import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Portimg from '../Assets/profile.jpg';
import UNSWasset from '../Assets/UNSWasset.png';
import Phoenixasset from '../Assets/phoenixedu.png'
import tumasset from '../Assets/tumasset.png'
import tpw from '../Assets/tpw.png'
import sbhs from '../Assets/sbhs.png'


export default function Resume() {
  const { theme } = useContext(ThemeContext);

  let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
    let bg = theme === 'light' ? 'bg-white':'bg-gray-200'
    return (
      <section id="resume" className={`${bg} screen-minus-header relative z-40 flex items-top justify-center rounded-[50px] border-8 ${border}`}>
        <div className={`w-11/12 space-y-6 items-center justify-center`}>
            <div className={` ${bg} sticky top-16 z-20 h-16 flex items-center justify-center`}>
                <h2 className={`text-3xl font-bold ${text}`}>Resume</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div class="absolute top-1/8 left-[10%] w-1/2 h-3/4">
                <h2 class="text-2xl font-bold mb-8">Job Experience</h2>
                <div class="absolute h-full w-1 bg-green-500 left-[1%] transform -translate-x-1/2"></div>
                <ul class="space-y-8">
                  <li class="relative group">
                    <div
                      class="w-4 h-4 bg-green-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 transition-all group-hover:w-8">
                    </div>
                    <div class="ml-6 group-hover:ml-16 transition-all">
                      <h3 class="font-bold text-lg">Maths and Physics Tutor</h3>
                      <div className={`${border} overflow-hidden w-32 h-full flex`}>
                        <img 
                          src={Phoenixasset}
                          alt="Phoenix Education" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                     
                      <p class="text-sm font-semibold">Phoenix Education | 2022-Present</p>
                      <p class="text-sm text-gray-600">Teaching HSC Physics and Maths</p>
                    </div>
                  </li>
                  <li class="relative group">
                    <div
                      class="w-4 h-4 bg-green-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 transition-all group-hover:w-8">
                    </div>
                    <div class="ml-6 group-hover:ml-16 transition-all">
                      <h3 class="font-bold text-lg">Curriculum Developer and Administrator</h3>
                      <div className={`${border} overflow-hidden w-32 h-full flex`}>
                        <img 
                          src={tpw}
                          alt="The Primary Way" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                     
                      <p class="text-sm font-semibold">The Primary Way | 2021 Jan - 2021 Dec</p>
                      <p class="text-sm text-gray-600">Creating curriculum content and handling administrative duties</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="absolute top-1/8 left-[50%] w-1/2 h-3/4">
                <h2 class="font-bold text-2xl mb-8">Education and Certifications</h2>
                <div class="absolute h-full w-1 bg-blue-500 left-[1%] transform -translate-x-1/2"></div>
                <ul class="space-y-8">
                  <li class="relative group">
                    <div
                      class="w-4 h-4 bg-blue-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 transition-all group-hover:w-8 ">
                    </div>
                    <div class="ml-6 group-hover:ml-16 transition-all">
                      <h3 class="font-bold text-lg">Undergraduate Student</h3>
                      <div className={`${border} overflow-hidden w-32 h-full flex`}>
                        <img 
                          src={UNSWasset}
                          alt="UNSW" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p class="text-sm font-semibold">University of New South Wales | 2020-2026</p>
                      <p class="text-sm text-gray-600">Bachelor of Advanced Physics (Honours) and Computer Science</p>
                      <p class="text-sm text-gray-600">Diploma of German Studies</p>
                    </div>
                  </li>
                  <li class="relative group">
                    <div
                      class="w-4 h-4 bg-blue-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 transition-all group-hover:w-8">
                    </div>
                    <div class="ml-6 group-hover:ml-16 transition-all">
                      <h3 class="font-bold text-lg">Exchange Student</h3>
                      <div className={`${border} overflow-hidden w-32 h-full flex`}>
                        <img 
                          src={tumasset}
                          alt="UNSW" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p class="text-sm font-semibold">Technical University of Munich | 2024-2025</p>
                      <p class="text-sm text-gray-600">Took courses in Machine learning, Deep Learning and Data Analysis with R</p>
                    </div>
                  </li>
                  <li class="relative group">
                    <div
                      class="w-4 h-4 bg-blue-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 transition-all group-hover:w-8">
                    </div>
                    <div class="ml-6 group-hover:ml-16 transition-all">
                      <h3 class="font-bold text-lg">High School Student</h3>
                      <div className={`${border} overflow-hidden w-16 h-full flex`}>
                        <img 
                          src={sbhs}
                          alt="UNSW" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p class="text-sm font-semibold">Sydney Boys High School | 2014-2020</p>
                      <p class="text-sm text-gray-600">Student of a top 10 Australian Selective High School in 2020</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        
      </section>
    );
  }