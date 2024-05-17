'use client';
import Card from '@/components/Card';
import React, {useState} from 'react';
import Post from './Post';

export default function Info() {
  const [teacher, setTeacher] = useState('Trần Phương Thảo');
  const [inputTeacher, setInputTeacher] = useState(teacher);
  const [year, setYear] = useState('2023');
  const [inputYear, setInputYear] = useState(year);
  const [course, setCourse] = useState('k55');
  const [inputCourse, setInputCourse] = useState(course);
  const [classMonitor, setClassMonitor] = useState('Nguyễn Phương Mai');
  const [inputClassMonitor, setInputClassMonitor] = useState(classMonitor);
  const [classViceAcademic, setClassViceAcademic] = useState('Trần Xuân Lâm');
  const [inputClassViceAcademic, setInputClassViceAcademic] =
    useState(classViceAcademic);
  const [room, setRoom] = useState('P203');
  const [inputRoom, setInputRoom] = useState(room);
  const handleUpdateClick = () => {
    setTeacher(inputTeacher);
    setYear(inputYear);
    setCourse(inputCourse);
    setClassMonitor(inputClassMonitor);
    setClassViceAcademic(inputClassViceAcademic);
    setRoom(inputRoom);
  };
  return (
    <div className="">
      <Card className="m-6 ">
        <Post></Post>
        <p className="text-2xl m-6 font-bold">Lớp 10A1</p>
        <div className=" grid grid-cols-2 gap-8 mr-6 bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className=" flex flex-col gap-4 mb-4">
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Giáo viên chủ nhiệm:</p>

              <input
                className="border-black border-2 rounded-lg border-opacity-30"
                type="text"
                value={inputTeacher}
                onChange={(e) => setInputTeacher(e.target.value)}
              />
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Năm học:</p>

              <input
                className="border-black border-2 rounded-lg border-opacity-30"
                type="text"
                value={inputYear}
                onChange={(e) => setInputYear(e.target.value)}
              />
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Khóa:</p>
              <input
                className="border-black border-2 rounded-lg border-opacity-30"
                type="text"
                value={inputCourse}
                onChange={(e) => setInputCourse(e.target.value)}
              />
            </div>
          </div>
          <div className="md:mr-[12rem] flex flex-col gap-4">
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Lớp trưởng:</p>
              <input
                className="border-black border-2 rounded-lg border-opacity-30"
                type="text"
                value={inputClassMonitor}
                onChange={(e) => setInputClassMonitor(e.target.value)}
              />
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Lớp phó:</p>
              <input
                className="border-black border-2 rounded-lg border-opacity-30"
                type="text"
                value={inputClassViceAcademic}
                onChange={(e) => setInputClassViceAcademic(e.target.value)}
              />
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Phòng học:</p>
              <input
                className="border-black border-2 rounded-lg border-opacity-30"
                type="text"
                value={inputRoom}
                onChange={(e) => setInputRoom(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="text-end ">
          <button
            className="p-6 m-6 border-2 bg-black text-white rounded-md"
            onClick={handleUpdateClick}
          >
            Cập nhập
          </button>
        </div>
      </Card>
    </div>
  );
}
