'use client';
import {useTheme} from 'next-themes';
import React from 'react';
import {BsBrightnessHighFill, BsCloudMoonFill} from 'react-icons/bs';

export default function ToggleThemeButton() {
  const {theme, setTheme} = useTheme();

  const toggleThemeButton = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleThemeButton}
      className="rounded-[50%] border flex items-center justify-center whitespace-nowrap px-1.5 py-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:bg-slate-800 sm:p-2 hover:shadow-lg shadow-gray-200 mr-4"
      type="button"
    >
      {theme === 'light' ? (
        <BsCloudMoonFill></BsCloudMoonFill>
      ) : (
        <BsBrightnessHighFill></BsBrightnessHighFill>
      )}
    </button>
  );
}
