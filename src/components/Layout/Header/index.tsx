import {BellFilled, MenuFoldOutlined, MenuOutlined} from '@ant-design/icons';
import React from 'react';

export default function Header() {
  return (
    <div className="fixed z-30 w-full bg-gray-50 block">
      <div className="py-3 px-3 lg:px-5 lg:pl-3">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-4 text-gray-600 rounded cursor-pointer sm:hidden lg:inline hover:text-gray-900 hover:bg-gray-100"
            >
              <MenuFoldOutlined />
            </button>
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
            >
              <MenuOutlined />
            </button>
            <a
              href="https://demos.creative-tim.com/soft-ui-flowbite-pro/"
              className="text-md font-semibold flex items-center lg:mr-1.5"
            >
              <img
                src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/logo.svg"
                className="mr-2 h-8"
                alt="Creative Tim Logo"
              />
              <span className="hidden md:inline-block self-center text-xl font-bold whitespace-nowrap">
                Eduhub
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <button className="p-2 text-gray-500 rounded-2xl hover:text-gray-900 hover:bg-gray-100">
              <BellFilled></BellFilled>
            </button>
            <a
              href=""
              className="sm:inline-flex ml-5 text-white bg-gradient-to-br from-pink-500 to-voilet-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
            >
              Hello
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
