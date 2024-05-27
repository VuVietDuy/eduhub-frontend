import Button from '@/components/Button';
import {EditOutlined} from '@ant-design/icons';
import {Formik} from 'formik';
import React, {useState} from 'react';

interface IProps {
  className?: string;
  teacher?: string;
  year?: string;
  course?: string;
  classMonitor?: string;
  classViceMonitor?: string;
  room?: string;
}

const ModalDetail = ({
  className,
  teacher,
  year,
  course,
  classMonitor,
  classViceMonitor,
  room,
}: IProps) => {
  const [update, setUpdate] = useState(false);
  var initValue = {
    teacher: teacher,
    year: year,
    course: course,
    classMonitor: classMonitor,
    classViceMonitor: classViceMonitor,
    room: room,
  };
  const a = initValue;
  const handleEdit = () => {
    setIsEdit(!isEdit);
    initValue = a;
  };
  const handleSubmit = (value: any) => {
    console.log(value);
    setIsEdit(false);
  };
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="mt-6 bg-white shadow-lg shadow-gray-200 rounded-2xl p-6 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
      <div className="flex justify-between mb-6">
        <h3 className="text-2xl font-semibold text-blue-900">
          Thông tin lớp học
        </h3>
        <Button className="" onClick={handleEdit}>
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
                      disabled={!isEdit}
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
                      disabled={!isEdit}
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
                      disabled={!isEdit}
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
                      disabled={!isEdit}
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
                      disabled={!isEdit}
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
                      disabled={!isEdit}
                    />
                  </div>
                </div>
              </div>
              {isEdit && (
                <div className="flex justify-end mt-6">
                  <Button
                    className="text-gray-800 bg-gray-100 mr-6 hover:bg-gray-200"
                    type="gray"
                  >
                    Huỷ
                  </Button>
                  <Button htmlType="submit">Lưu</Button>
                </div>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalDetail;
