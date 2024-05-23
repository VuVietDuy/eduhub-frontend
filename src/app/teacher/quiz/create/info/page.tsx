'use client';
import Button from '@/components/Button';
import Chips from '@/components/Chips';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import Image from 'next/image';
import Link from 'next/link';
import React, {ChangeEvent, useRef, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {MdCloudUpload, MdDelete} from 'react-icons/md';

const subject = [
  'Toán',
  'Ngữ văn',
  'Ngoại ngữ',
  'Lịch sử',
  'Địa lý',
  'Hoá học',
  'Vật lý',
  'Sinh học',
  'Giáo dục công dân',
  'Giáo dục quốc phòng & an ninh',
  'Giáo dục thể chất',
];
const grade = ['Khối 10', 'Khối 11', 'Khối 12'];

const assignedClassed = ['10A2', '10A4', '10A7', '10A9', '10A3'];
const status = ['Công khai', 'Chia sẻ', 'Riêng tư'];
export default function page() {
  const listChips = useRef<any>(null);
  const [selectedSubject, setSelectedSubject] =
    useState<string>('Chọn môn học');
  const [selectedGrade, setSelectedGrade] = useState<string>('Chọn khối học');
  const [selectedStatus, setSelectedStatus] =
    useState<string>('Chọn trạng thái');
  const [inputValue, setInputValue] = useState<string>('');
  const [keywords, setKeywords] = useState<any>([]);
  const subjectMenu: MenuProps['items'] = subject.map((item: any, index) => {
    return {
      key: `${item}`,
      label: (
        <button
          className={`px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 ${
            index === subject.length - 1 ? 'rounded-b-sm' : ''
          }`}
          onClick={() => setSelectedSubject(`${item}`)}
        >
          {item}
        </button>
      ),
    };
  });

  const gradeMenu: MenuProps['items'] = grade.map((item: any, index) => {
    return {
      key: `${item}`,
      label: (
        <button
          className={`px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 ${
            index === grade.length - 1 ? 'rounded-b-sm' : ''
          }`}
          onClick={() => setSelectedGrade(`${item}`)}
        >
          {item}
        </button>
      ),
    };
  });

  const handleDeleteChips = (index: number) => {
    console.log('check:', index);

    const newKeywords = keywords;
    newKeywords.splice(index, 1);
    console.log('check new:', newKeywords);
    setKeywords((prevState: any) => {
      console.log(newKeywords);

      return newKeywords;
    });
  };

  //Image upload
  const [imgUploaded, setImgUploaded] = useState<ArrayBuffer | null | string>(
    null,
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUploaded(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // console.log(`${listChips?.current?.offsetWidth}px`);
  return (
    <div className="md:h-[450px]  overflow-y-scroll h-[530px]">
      {/* Info form  */}
      <fieldset className=" border-1 rounded-4 md:mt-2 px-3 md:pt-2 md:pb-4 md:px-8 mb-5  border border-gray-300 h-fit overflow-y-hidden">
        <legend className="text-md text-gray-600 dark:text-gray-300">
          Thông tin chung{' '}
        </legend>
        <div className="grid grid-col-1 md:grid-cols-3 mt-5 md:gap-10 gap-3">
          <div className="col-span-1 h-[250px] md:h-[360px] text-gray-600 dark:text-gray-300 group md:px-4">
            {/* Upload avatar  */}
            <div className="  w-full border border-dotted border-gray-300 dark:border-gray-600 h-[200px] rounded-[4px]">
              <div className="cursor-pointer w-full h-full flex justify-center items-center">
                {imgUploaded ? (
                  <div className="flex items-center justify-center relative w-full h-full overflow-hidden ">
                    <Image
                      width={160}
                      height={150}
                      src={imgUploaded as string}
                      alt="Selected"
                      className="object-contain max-w-[200px]"
                    />
                    <button
                      className="absolute bottom-4 right-4 p-3 rounded-full bg-red-500 cursor-pointer outline-none border-none hover:shadow-me duration-200 transition-all ease-in-out"
                      onClick={() => setImgUploaded(null)}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col justify-center items-center">
                        <FaUpload className="text-4xl text-gray-600 dark:text-gray-200 " />
                        <p className="text-lg mt-3 align-middle">
                          Nhấn để thêm ảnh
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="upload-file"
                      //Nếu isImage=true thì chấp nhận mọi file có có type là image. Ngược lại các file có type là audio
                      accept="image/*"
                      className="w-0 h-0 cursor-pointer"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </label>
                )}
              </div>
              <h3 className="text-center mt-4">Ảnh đại diện</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <div className="mb-3 md:mb-5 text-gray-300 ">
              <label
                htmlFor="test-title"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Tên
              </label>
              <input
                type="text"
                id="text-title"
                className="bg-gray-50 border border-gray-300 text-textColor  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập tên đề thi"
                required
              />
            </div>
            <div className="mb-3 md:mb-5  ">
              <label
                htmlFor="test-desc"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 "
              >
                Mô tả
              </label>
              <textarea
                id="test-desc"
                className="bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập mô tả bài thi"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3 md:mb-5 mb-3 ">
              <div className="col-span-1">
                <label
                  htmlFor="test-title"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Môn học
                </label>
                <ComboBox
                  menu={subjectMenu}
                  selectedOption={selectedSubject}
                  width={'w-full'}
                  className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 "
                ></ComboBox>
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="test-title"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Khối học
                </label>
                <ComboBox
                  menu={gradeMenu}
                  selectedOption={selectedGrade}
                  width={'w-full'}
                  className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 "
                ></ComboBox>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="test-title"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Từ khoá
              </label>
              <div className="bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 flex items-center flex-wrap gap-2 w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {keywords.length > 0 && (
                  <div ref={listChips} className="ml-3  flex flex-wrap   w-fit">
                    {keywords?.map((item: any, index: number) => {
                      return (
                        <Chips
                          content={item}
                          onRemove={() => handleDeleteChips(index)}
                        />
                      );
                    })}
                  </div>
                )}
                <input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      setKeywords([...keywords, inputValue]);
                      setInputValue('');
                    }
                  }}
                  // onBlur={() => {
                  //   setKeywords([...keywords, inputValue]);
                  //   setInputValue('');
                  // }}
                  type="text"
                  id="text-title"
                  className={`block bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none ${
                    keywords.length === 0 ? 'w-full' : `flex-1 border-none`
                  }`}
                  placeholder="Nhập từ khoá liên quan"
                  required
                />
              </div>
            </div>

            {/* <div className="mt-[70px] w-full flex justify-end mr-4"></div> */}
          </div>
        </div>
      </fieldset>

      {/* Config form  */}
      <fieldset className=" border-1 rounded-4 py-2 px-3 md:px-8 mb-5  border border-gray-300 overfloy-y-hidden">
        <legend className="text-md text-gray-600 dark:text-gray-300">
          Cài đặt đề thi{' '}
        </legend>
        <div className="grid gap-4 md:gap-4 md:grid-cols-1  mb-5 ">
          <div className="col-span-1 grid items-center md:grid-cols-4 grid-cols-1">
            <label
              htmlFor="test-title"
              className="block col-span-1  mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 "
            >
              Thời gian làm bài (số phút)
            </label>
            <input
              type="text"
              id="text-title"
              className="col-span-1 md:col-span-3 bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-3"
              placeholder="Nhập thời gian làm bài"
              required
            />
          </div>
          <div className="col-span-1 grid md:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="col-span-1 grid items-center md:grid-cols-2 md:gap-2">
              <label
                htmlFor="test-title"
                className="col-span-1 block mb-2 md:mb-0 text-sm font-medium text-gray-600 dark:text-gray-300 "
              >
                Cho phép đảo câu hỏi (theo phần thi)
              </label>
              <label className="inline-flex items-center cursor-pointer col-span-1">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Tắt
                </span>
              </label>
            </div>
            <div className="col-span-1 grid items-center md:grid-cols-2 lg:gap-5">
              <label
                htmlFor="test-title"
                className="col-span-1 lg:justify-self-end block mb-2 md:mb-0 text-sm font-medium text-gray-600  dark:text-gray-300"
              >
                Cho phép đảo đáp án
              </label>
              <label className="inline-flex items-center cursor-pointer col-span-1">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Tắt
                </span>
              </label>
            </div>
          </div>
          <div className="col-span-1 grid md:grid-cols-4 md:mt-3   gap-4">
            <label
              htmlFor="test-title"
              className="block col-span-1 md:mb-2 md:mr-4 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Trạng thái
            </label>
            <div className="col-span-3">
              <div className="flex gap-8  ">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    // checked={answer.isCorrect}
                    name="list-radio"
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {}}
                  />
                  <label htmlFor="" className="text-sm">
                    Chưa giao
                  </label>
                </div>
                <div className="flex  items-center gap-2">
                  <input
                    type="radio"
                    // checked={answer.isCorrect}
                    name="list-radio"
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500 "
                    onChange={() => {}}
                  />
                  <label htmlFor="" className="text-sm">
                    Giao theo lớp
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 grid md:grid-cols-4 md:mt-3   gap-2">
            <label
              htmlFor="test-title"
              className="block col-span-1 md:mb-2 md:mr-4 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Chọn lớp giao
            </label>
            <div className="col-span-3 grid gap-3 lg:grid-cols-4 grid-cols-3">
              {assignedClassed?.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 items-center flex gap-2 item-center"
                >
                  <input
                    type="checkbox"
                    // checked={answer.isCorrect}
                    name="list-checkbox"
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {}}
                  />
                  <label htmlFor="" className="text-sm">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      <Button className="float-end mr-3" type="green">
        <Link href="/teacher/quiz/create/question">Xác nhận</Link>
      </Button>
    </div>
  );
}
