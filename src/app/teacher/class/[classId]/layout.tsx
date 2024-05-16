import React from 'react';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="m-auto">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              Thông tin
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
              aria-current="page"
            >
              Phân công
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              Học sinh
            </a>
          </li>
        </ul>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
