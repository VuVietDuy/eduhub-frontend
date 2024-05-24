'use client';
import React, {useState} from 'react';
import Dropdown from '../Dropdown';
import {MenuProps} from '../MenuProps';
import Button from '../Button';
import {MdOutlineMoreVert} from 'react-icons/md';

interface IProps {
  title?: React.ReactNode;
  description?: string;
  className?: string;
  itemMenus?: MenuProps['items'];
  publishedAt?: string;
  children: React.ReactNode;
}

export default function Accordion(props: IProps) {
  const {title, className, itemMenus, publishedAt, children} = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={`${className} ${isOpen ? ' border-b-0' : ''}`}>
      <div className="flex relative group">
        <button
          type="button"
          className={`${
            isOpen ? 'rounded-t-lg border-b-0' : 'rounded-lg'
          } flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 duration-300 transition-all ease-in-out`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <span className="font-thin text-sm text-gray-500 mr-16">
            Đã đăng vào {publishedAt}
          </span>
        </button>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 hidden group-hover:block">
          <Dropdown menu={itemMenus}>
            <Button className="bg-gray-200 hover:bg-gray-300" type="gray">
              <MdOutlineMoreVert className="text-gray-900" />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } duration-300 transition-all ease-in-out`}
      >
        <div className="p-5 border rounded-b-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}
