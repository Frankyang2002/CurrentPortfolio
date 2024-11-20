import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';



export default function Logo() {
  const { theme } = useContext(ThemeContext);
    return (
      <footer class="bg-gray-800 text-white py-6 mt-8 z-50">
        <div class="max-w-7xl mx-auto text-center">
          <div class="flex justify-center space-x-6 mb-4">
            <a href="https://facebook.com" class="text-white hover:text-blue-600">
              <i class="fab fa-facebook-square text-2xl"></i>
            </a>
            <a href="https://twitter.com" class="text-white hover:text-blue-400">
              <i class="fab fa-twitter-square text-2xl"></i>
            </a>
            <a href="https://instagram.com" class="text-white hover:text-pink-500">
              <i class="fab fa-instagram-square text-2xl"></i>
            </a>
            <a href="https://linkedin.com" class="text-white hover:text-blue-700">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
          </div>

          <div class="text-sm text-white z-50">
            &copy; 2024 Your Name. All Rights Reserved.
          </div>
        </div>
    </footer>
    );
  }