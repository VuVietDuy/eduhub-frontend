import {EditOutlined} from '@ant-design/icons';
import {Formik} from 'formik';
import React, {useState} from 'react';

const ModalDetail = () => {
  const [edit, setEdit] = useState(false);
  const initValue = {
    teacher: 'Vũ Viết A',
    year: '2023',
    course: 'K55',
    classMonitor: 'Nguyễn Phương Mai',
    classViceMonitor: 'Trần Xuân Lâm',
    room: 'P203',
  };

  const handleSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 ">
        <p className="text-2xl m-6 font-bold">Lớp 10A1</p>

        <EditOutlined
          className="text-[1.5rem] justify-end mr-12 md:mr-60 lg:mr-36  "
          onClick={() => setEdit(!edit)}
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
                    className="border-black border-2 rounded-lg border-opacity-30"
                    type="text"
                    name="teacher"
                    onChange={handleChange}
                    value={values.teacher}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Năm học:</p>

                  <input
                    className="border-black border-2 rounded-lg border-opacity-30"
                    type="text"
                    name="year"
                    onChange={handleChange}
                    value={values.year}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Khóa:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30"
                    type="text"
                    name="course"
                    onChange={handleChange}
                    value={values.course}
                  />
                </div>
              </div>
              <div className="md:mr-[12rem] flex flex-col gap-4">
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Lớp trưởng:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30"
                    type="text"
                    name="classMonitor"
                    onChange={handleChange}
                    value={values.classMonitor}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Lớp phó:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30"
                    type="text"
                    name="classViceMonitor"
                    onChange={handleChange}
                    value={values.classViceMonitor}
                  />
                </div>
                <div className="flex justify-between min-w-[430px] ">
                  <p className="p-4">Phòng học:</p>
                  <input
                    className="border-black border-2 rounded-lg border-opacity-30"
                    type="text"
                    name="room"
                    onChange={handleChange}
                    value={values.room}
                  />
                </div>
              </div>
              <div className="text-end col-span-2 mr-16">
                {edit && (
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
