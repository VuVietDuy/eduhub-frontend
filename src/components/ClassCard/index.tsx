import {BellFilled, BellOutlined} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

interface ITeacherInfo {
  fullName: string;
}

export default function ClassCard({
  subject,
  teacher,
  img,
  notification,
  link,
}: {
  subject: string;
  link?: string;
  teacher: string;
  img?: string;
  notification?: number;
}) {
  return (
    <Link
      href={link || 'class/math/info'}
      className="block max-w-sm w-[240px] overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
    >
      <div className="h-[140px] w-[240px] lg:w-[280px] overflow-hidden flex items-center justify-center">
        <img className="rounded-t-lg object-cover" src={img} alt="" />
      </div>
      <div className="p-5 border-t">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {subject}
          </h5>
          {notification ? (
            <div className="relative">
              <BellOutlined className="text-gray-400 shadow-sm text-2xl"></BellOutlined>
              <div className="absolute top-0 right-0 inline-block w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <span className="font-medium"> {teacher}</span>
        </div>
      </div>
    </Link>
  );
}
