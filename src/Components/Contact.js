import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Contact() {
  const { theme } = useContext(ThemeContext);

    let border = theme === 'light' ? 'border-red-400' : 'border-gray-800'
    let text = theme === 'light' ? 'text-red-400' : 'text-gray-800'
    let bg = theme === 'light' ? 'bg-red-400' : 'bg-gray-800'

    return (
      <section id="contact"
                className={`screen-minus-header flex items-center justify-center ${bg}`}
            >
        
          <div class="w-6/12 z-50 p-8 bg-white rounded-lg ">
            <h2 class={`text-2xl font-semibold text-center mb-6  ${text}`}>Contact Me</h2>
            <form action="/submit-form" method="POST" class="space-y-4" >
            
              <div>
                <label for="full-name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  required
                  placeholder="Your Full Name"
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="5"
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none resize-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div class="flex justify-center">
                <button
                  type="submit"
                  class="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>


      </section>
    );
  }