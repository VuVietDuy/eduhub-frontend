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
    <div className="">
      <div className="flex justify-between ">
        <p className="text-2xl m-6 font-bold">Lớp 10A1</p>

        <EditOutlined
          className="text-[1.5rem] justify-end mr-12 md:mr-60 lg:mr-36  "
          onClick={handleEdit}
        ></EditOutlined>
      </div>
      <Formik initialValues={initValue} onSubmit={handleSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="lg:grid lg:grid-cols-2  gap-8 mr-6 bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
              <div className=" md:mr-[12rem] flex flex-col gap-4 mb-4">
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Giáo viên chủ nhiệm:</p>
                  <input
                    className="px-4 py-2 border-black border-2 rounded-lg border-opacity-30"
                    type="text"
                    name="teacher"
                    onChange={handleChange}
                    value={values.teacher}
                    disabled={isEdit}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Năm học:</p>

                  <input
                    className="border-black border-2 rounded-lg border-opacity-30 px-4 py-2"
                    type="text"
                    name="year"
                    onChange={handleChange}
                    value={values.year}
                    disabled={isEdit}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Khóa:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30 px-4 py-2"
                    type="text"
                    name="course"
                    onChange={handleChange}
                    value={values.course}
                    disabled={isEdit}
                  />
                </div>
              </div>
              <div className="md:mr-[12rem] flex flex-col gap-4">
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Lớp trưởng:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30 px-4 py-2"
                    type="text"
                    name="classMonitor"
                    onChange={handleChange}
                    value={values.classMonitor}
                    disabled={isEdit}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Lớp phó:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30 px-4 py-2"
                    type="text"
                    name="classViceMonitor"
                    onChange={handleChange}
                    value={values.classViceMonitor}
                    disabled={isEdit}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Phòng học:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30 px-4 py-2"
                    type="text"
                    name="room"
                    onChange={handleChange}
                    value={values.room}
                    disabled={isEdit}
                  />
                </div>
              </div>
              <div className="text-end col-span-2 mr-16">
                {update && (
                  <button
                    className="px-6 py-4  border-2 bg-blue-800 cursor-pointer hover:bg-blue-700 text-white rounded-md justify-end lg:mr-10 md:mr-32 mt-3   "
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
  );
};

export default ModalDetail;
