'use client';
import React, {useState} from 'react';
import {MenuProps} from '../MenuProps';

export default function Select({
  placeholder,
  menuItems,
}: {
  placeholder: string;
  menuItems: MenuProps['items'];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        className="px-3 py-3 border rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {placeholder}
      </div>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } absolute top-[42px] left-0 right-0 p-1 bg-white border rounded shadow-lg z-50`}
      >
        {menuItems.map((item, index) => (
          <div className="hover:bg-gray-200 px-4 py-3 rounded" key={item.key}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
