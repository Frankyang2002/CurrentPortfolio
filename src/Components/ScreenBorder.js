import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ScreenBorder() {
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <div
                className={`top-16 screen-minus-header w-screen fixed z-40 rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>


            <div
                className={`top-16 screen-minus-header w-screen fixed z-40 rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>

            <div
                className={`top-16 screen-minus-header w-screen fixed z-40 rounded-bl-[30px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[30px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>
            
            <div
                className={`top-16 screen-minus-header w-screen fixed z-40 rounded-bl-[40px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[40px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>

            <div
                className={`top-16 screen-minus-header w-screen fixed z-40 rounded-bl-[55px] rounded-br-[55px] rounded-tl-[55px] rounded-tr-[55px] border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>
            
            <div
                className={`top-16 screen-minus-header w-screen fixed z-40  border-8  ${theme === 'light' ? 'border-red-400' : 'border-gray-800'}`}
            ></div>

            <div
                className={`fixed z-0 w-screen h-screen ${theme === 'light' ? 'bg-red-400' : 'bg-gray-800'}`}
            ></div>
        </div>
    );
  }