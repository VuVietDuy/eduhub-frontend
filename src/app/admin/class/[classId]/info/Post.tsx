import Card from '@/components/Card';
import {LayoutOutlined, ProjectOutlined} from '@ant-design/icons';
import React from 'react';

const Post = () => {
  return (
    <div className="m-6">
      <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900 grid grid-cols-3 gap-4">
        <div className="flex items-center bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
            <ProjectOutlined />
          </div>
          <div className=" ml-3 flex">
            <p className="mr-12">34</p>
            <p>Học sinh</p>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <LayoutOutlined />
            </div>
            <div className=" ml-3 flex items-center ">
              <p className="mr-12">9.3</p>
              <p>Trung bình điểm</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <LayoutOutlined />
            </div>
            <div className=" ml-3 flex items-center ">
              <p className="mr-12">90</p>
              <p>Điểm thi đua</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
