'use client';
import React, {useState} from 'react';

export default function Accordion({className}: {className?: string}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={`${className} ${isOpen ? ' border-b-0 shadow-lg' : ''}`}>
      <h2 className="">
        <button
          type="button"
          className={`${
            isOpen ? 'rounded-t-lg border-b-0' : 'rounded-lg'
          } flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 duration-300 transition-all ease-in-out`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>What is Flowbite?</span>
        </button>
      </h2>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } duration-300 transition-all ease-in-out`}
      >
        <div className="p-5 border rounded-b-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{' '}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
