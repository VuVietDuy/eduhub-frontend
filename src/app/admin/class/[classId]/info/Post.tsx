import {
  BarChartOutlined,
  GlobalOutlined,
  LayoutOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import React from 'react';

const Post = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4">
      <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
            <ProjectOutlined />
          </div>
          <div className="flex-shrink-0 ml-3">
            <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
              34
            </span>
            <h3 className="text-base font-normal text-gray-500">Học sinh</h3>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
            <LayoutOutlined />
          </div>
          <div className="flex-shrink-0 ml-3">
            <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
              8.3
            </span>
            <h3 className="text-base font-normal text-gray-500">
              Trung bình điểm
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
            <GlobalOutlined />
          </div>
          <div className="flex-shrink-0 ml-3">
            <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
              34
            </span>
            <h3 className="text-base font-normal text-gray-500">
              Điểm thi đua
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
            <BarChartOutlined />
          </div>
          <div className="flex-shrink-0 ml-3">
            <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
              430
            </span>
            <h3 className="text-base font-normal text-gray-500">
              Tổng lượng truy cập tháng này
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
