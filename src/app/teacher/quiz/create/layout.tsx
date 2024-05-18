'use client';
import React from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Card from '@/components/Card';
import Breadcrumb from '@/components/Breadcrumb';

export default function Layout({children}: {children: React.ReactNode}) {
  const pathName = usePathname();
  const path = pathName.split('/')[4];
  const listRoute = [
    {
      path: 'info',
      label: 'Thông tin',
    },
    {
      path: 'question',
      label: 'Câu hỏi',
    },
    {
      path: 'config',
      label: 'Cài đặt',
    },
  ];
  return (
    <div className="pt-5">
      <Breadcrumb
        className="px-6"
        previousLink="/teacher/quiz"
        previousPage="Đề thi"
        currentPage="Tạo mới đề thi"
      />
      <Card className="mx-0 my-6 md:m-6 md:w-[calc(100%-52px)] xl:md:w-[calc(100%-52px)]">
        <div className="border-b border-gray-200 dark:border-gray-700 fixed top-[136px]">
          <ul className=" flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
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
        <div className="mt-[64px] content">{children}</div>
      </Card>
    </div>
  );
}
