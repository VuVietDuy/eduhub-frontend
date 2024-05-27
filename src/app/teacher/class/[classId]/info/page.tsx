import Card from '@/components/Card';
import {EditOutlined, LayoutOutlined, ProjectOutlined} from '@ant-design/icons';
import React from 'react';

const items = [
  {
    title: 'Giáo viên chủ nghiệm',
    name: 'Vũ Viết Duy',
  },
  {
    title: 'Lớp trưởng',
    name: 'Nguyễn Phương Mai',
  },
  {
    title: 'Năm học',
    name: '2023',
  },

  {
    title: 'Lớp phó',
    name: 'Trần Xuân Lâm',
  },
  {
    title: 'Khóa',
    name: 'k55',
  },
  {
    title: 'Phòng học',
    name: 'P203',
  },
];
export default function page() {
  return (
    <div className="m-6 mt-9">
      <div className="mb-6">
        <div className=" md:grid md:grid-cols-3 md:gap-4 grid gap-3">
          <div className="flex items-center bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <ProjectOutlined />
            </div>
            <div className=" ml-3 flex font-bold text-xl">
              <p className="mr-12 ">34</p>
              <p className="">Học sinh</p>
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
            <div className="flex items-center">
              <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
                <LayoutOutlined />
              </div>
              <div className=" ml-3 flex items-center font-bold text-xl">
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
              <div className=" ml-3 flex items-center font-bold text-xl ">
                <p className="mr-12">90</p>
                <p>Điểm thi đua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card className="">
        <div className="">
          <div className=" ">
            <p className="text-2xl m-6 font-bold">Lớp 10A1</p>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-x-4">
            {items.map((item, index) => (
              <div
                key={index}
                className=" bg-white   shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900"
              >
                <div className="flex justify-between max-w-[430px] md:max-w-[600px] ">
                  <p className="p-4">{item.title}</p>
                  <input
                    className="px-4 py-2 border-black border-2 rounded-lg "
                    type="text"
                    name="teacher"
                    value={item.name}
                    disabled
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
