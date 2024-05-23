import Button from '@/components/Button';
import {EditOutlined} from '@ant-design/icons';
import {Formik} from 'formik';
import React, {useRef, useState} from 'react';

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

const ModalDetail = () => {
  const [update, setUpdate] = useState(false);
  const initValue = {
    teacher: 'Vũ Viết A',
    year: '2023',
    course: 'K55',
    classMonitor: 'Nguyễn Phương Mai',
    classViceMonitor: 'Trần Xuân Lâm',
    room: 'P203',
  };
  const handleEdit = () => {
    setUpdate(!update);
    setIsEdit(!isEdit);
  };
  const handleSubmit = (value: any) => {
    console.log(value);
  };
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="mt-6 bg-white shadow-lg shadow-gray-200 rounded-2xl p-6 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
      <div className="flex justify-between mb-6">
        <h3 className="text-2xl font-semibold text-blue-900">
          Thông tin lớp học
        </h3>
        <Button className="" onClick={() => setIsEdit(!isEdit)}>
          <EditOutlined className=" text-lg"></EditOutlined>
        </Button>
      </div>
      <div className="">
        <Formik initialValues={initValue} onSubmit={handleSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-8 lg:gap-20">
                <div className="md:col-span-1 col-span-2 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Giáo viên chủ nhiệm:</p>
                    <input
                      className="border-gray-500 outline-none border rounded-md px-4 py-3 w-[50%] lg:w-[70%]"
                      type="text"
                      name="teacher"
                      onChange={handleChange}
                      value={values.teacher}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Năm học:</p>

                    <input
                      className="border-gray-500 outline-none border rounded-md px-4 py-3 w-[50%] lg:w-[70%]"
                      type="text"
                      name="year"
                      onChange={handleChange}
                      value={values.year}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Khóa:</p>
                    <input
                      className="border-gray-500 outline-none border rounded-md px-4 py-3 w-[50%] lg:w-[70%]"
                      type="text"
                      name="course"
                      onChange={handleChange}
                      value={values.course}
                      disabled={isEdit}
                    />
                  </div>
                </div>
                <div className="md:col-span-1 col-span-2 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Lớp trưởng:</p>
                    <input
                      className="border-gray-500 outline-none border rounded-md px-4 py-3 w-[50%] lg:w-[70%]"
                      type="text"
                      name="classMonitor"
                      onChange={handleChange}
                      value={values.classMonitor}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Lớp phó:</p>
                    <input
                      className="border-gray-500 outline-none border rounded-md px-4 py-3 w-[50%] lg:w-[70%]"
                      type="text"
                      name="classViceMonitor"
                      onChange={handleChange}
                      value={values.classViceMonitor}
                      disabled={isEdit}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Phòng học:</p>
                    <input
                      className="border-gray-500 outline-none border rounded-md px-4 py-3 w-[50%] lg:w-[70%]"
                      type="text"
                      name="room"
                      onChange={handleChange}
                      value={values.room}
                      disabled={isEdit}
                    />
                  </div>
                </div>
                <div className="text-end col-span-2 mr-16">
                  {isEdit && (
                    <button
                      className="px-4 py-3 border-2 bg-blue-800 cursor-pointer hover:bg-blue-700 text-white rounded-md justify-end"
                      type="submit"
                    >
                      Cập nhập
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalDetail;
