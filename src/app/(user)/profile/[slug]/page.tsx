import Avatar from '@/components/Avatar';
import Card from '@/components/Card';
import Paragraph from '@/components/Paragraph';
import Link from 'next/link';
import React from 'react';
import {
  MdBusiness,
  MdLink,
  MdMailOutline,
  MdOutlineCake,
  MdOutlinePhone,
  MdOutlineSchool,
  MdOutlineSettings,
} from 'react-icons/md';
import PostListItem from '../components/PostListItem';

export default function Profile() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative w-full">
        <div className="absolute w-full h-72 md:h-60 bg-slate-600 top-0 z-[-1]"></div>
        <div className="p-4 sm:p-6">
          <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between mb-6">
            <div className="flex flex-col justify-center sm:flex-row sm:items-center">
              <Avatar size="90px"></Avatar>
              <span className="ml-2 font-semibold text-white">
                Nguyen Van A
              </span>
            </div>
            <div>
              <ul className="flex">
                <li className="px-5 border-r border-white">
                  <span className="block text-center font-semibold text-white text-sm">
                    2k+
                  </span>
                  <span className="block text-center text-white text-sm">
                    Followers
                  </span>
                </li>
                <li className="px-5">
                  <span className="block text-center font-semibold text-white text-sm">
                    22
                  </span>
                  <span className="block text-center text-white text-sm">
                    Following
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:flex-row sm:justify-between mb-6">
            <div>
              <button className="px-4 py-1 border rounded-md shadow-md text-sm text-white">
                Follow
              </button>
            </div>
            <div>
              <Link href="/profile/setting">
                <span className="flex items-center text-white font-semibold hover:text-primary-700">
                  <MdOutlineSettings className="mr-2 text-lg"></MdOutlineSettings>
                  Setting
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <div className="grid grid-cols-1 gap-6">
                <Card title="About">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex mb-2">
                      <div className="flex items-center mr-4">
                        <MdBusiness className="text-4xl text-yellow-400" />
                      </div>
                      <div className="flex flex-col ">
                        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-300">
                          Email
                        </span>
                        <span className="text-sm font-semibold text-primary-900 dark:text-gray-200">
                          Example@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <div className="flex items-center mr-4">
                        <MdOutlineCake className="text-4xl text-yellow-400" />
                      </div>
                      <div className="flex flex-col ">
                        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-300">
                          Birthday
                        </span>
                        <span className="text-sm font-semibold text-primary-800 dark:text-gray-200">
                          Oct 25, 1984
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <div className="flex items-center mr-4">
                        <MdOutlineSchool className="text-4xl text-yellow-400" />
                      </div>
                      <div className="flex flex-col ">
                        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-300">
                          Went to
                        </span>
                        <span className="text-sm font-semibold text-primary-900 dark:text-gray-200">
                          Học viện công nghệ Bưu Chính Viễn Thông
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card title="Bio">
                  <Paragraph>
                    Augue mauris dignissim arcu, ut venenatis metus ante eu
                    orci. Donec non maximus neque, ut finibus ex. Quisque semper
                    ornare magna, sed ullamcorper risus luctus quis. Etiam
                    tristique dui vitae diam rutrum sodales. Mauris feugiat
                    lectus felis, nec ullamcorper risus elementum at. Aliquam
                    erat volutpat. Nullam et est eget metus gravida tincidunt.
                    Phasellus sed odio eu lacus venenatis.
                  </Paragraph>
                </Card>
                <Card title="Post">
                  <div>
                    <PostListItem
                      thumnailUrl="/logo.png"
                      title="Sundance Film Festival."
                      description="Suspendisse vel bibendum ex. Sed a felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                      pushlishedAt="Feb 23, 2024"
                      tag={['Toan', 'Van']}
                    ></PostListItem>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <Card title="Contact">
                <div className="flex mb-2">
                  <div className="flex items-center mr-4">
                    <MdMailOutline className="text-xl text-gray-500" />
                  </div>
                  <div className="flex flex-col ">
                    <span className="text-[12px] font-semibold text-gray-500">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-primary-900">
                      Example@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="flex items-center mr-4">
                    <MdLink className="text-xl text-gray-500" />
                  </div>
                  <div className="flex flex-col ">
                    <span className="text-[12px] font-semibold text-gray-500">
                      Webpage
                    </span>
                    <span className="text-sm font-semibold text-primary-900">
                      example.com
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="flex items-center mr-4">
                    <MdOutlinePhone className="text-xl text-gray-500" />
                  </div>
                  <div className="flex flex-col ">
                    <span className="text-[12px] font-semibold text-gray-500">
                      Phone
                    </span>
                    <span className="text-sm font-semibold text-primary-900">
                      +1-987 (454) 987
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
