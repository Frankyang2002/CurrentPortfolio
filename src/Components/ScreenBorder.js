import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ScreenBorder() {
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <div
                className={`pointer-events-none top-16 screen-minus-header w-screen fixed z-50 rounded-[50px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>

            <div
                className={`pointer-events-none top-16 screen-minus-header w-screen fixed z-50 rounded-[10px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>

            <div
                className={`pointer-events-none top-16 screen-minus-header w-screen fixed z-50 rounded-[30px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>
            
            <div
                className={`pointer-events-none top-16 screen-minus-header w-screen fixed z-50 rounded-[40px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>

            <div
                className={`pointer-events-none top-16 screen-minus-header w-screen fixed z-50  border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>

            <div
                className={`pointer-events-none fixed z-0 w-screen h-screen ${theme === 'light' ? 'bg-red-400' : 'bg-gray-800'}`}
            ></div>
        </div>
    );
  }