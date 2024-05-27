'use client';
import React, {useState, useRef, useEffect} from 'react';
import {MenuProps} from '../MenuProps';

export default function Dropdown({
  children,
  menu,
}: {
  children: React.ReactNode;
  menu?: MenuProps['items'];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="z-50">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center gap-x-1.5 rounded-md text-sm font-semibold text-gray-900 "
          >
            {children}
          </button>
        </div>
        <div
          className={`${
            isOpen ? '' : 'hidden'
          } absolute right-0 p-1 z-10 mt-2 min-w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          {menu?.map((item) => (
            <button
              className=" px-4 py-2 block w-full text-left rounded hover:bg-gray-200 cursor-pointer"
              key={item.key}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
