'use client';
import React from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

export default function Layout({children}: {children: React.ReactNode}) {
  const pathName = usePathname();
  const path = pathName.split('/')[4];
  const listRoute = [
    {
      path: 'info',
      label: 'Thông tin',
    },
    {
      path: 'assignment',
      label: 'Bài tập',
    },
    {
      path: 'transcript',
      label: 'Bảng điểm',
    },
  ];
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700 fixed bg-gray-50 top-[65px] w-[100%]">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {listRoute.map((item, index) => (
            <li className="me-2">
              <Link
                href={item.path}
                className={`${
                  item.path === path
                    ? 'text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                    : 'hover:border-gray-300 hover:text-gray-600 border-transparent'
                } inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg  dark:hover:text-gray-300 group`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[54px] content min-h-[80vh]">{children}</div>
    </div>
  );
}
