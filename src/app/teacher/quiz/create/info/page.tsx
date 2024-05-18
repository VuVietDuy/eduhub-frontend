'use client';
import Button from '@/components/Button';
import Chips from '@/components/Chips';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import Link from 'next/link';
import React, {useRef, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {MdCloudUpload} from 'react-icons/md';

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
const status = ['Công khai', 'Chia sẻ', 'Riêng tư'];
export default function page() {
  const keywordRef = useRef(null);
  const [selectedSubject, setSelectedSubject] =
    useState<string>('Chọn môn học');
  const [selectedStatus, setSelectedStatus] =
    useState<string>('Chọn trạng thái');
  const [inputValue, setInputValue] = useState<string>('');
  const [keywords, setKeywords] = useState<string[]>([]);
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

  const statusMenu: MenuProps['items'] = status.map((item: any, index) => {
    return {
      key: `${item}`,
      label: (
        <button
          className={`px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 ${
            index === status.length - 1 ? 'rounded-b-sm' : ''
          }`}
          onClick={() => setSelectedStatus(`${item}`)}
        >
          {item}
        </button>
      ),
    };
  });

  //Image upload
  const [songImgCover, setSongImgCover] = useState(null);
  const [imgUploadProgress, setImgUploadProgress] = useState<number>(0);
  const [isImgUploading, setIsImgUploading] = useState<boolean>(false);

  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-10 px-5 pb-2 h-[360px] overflow-y-scroll ">
      <div className="col-span-1 h-[250px] md:h-[360px] text-gray-600 dark:text-gray-300 group md:px-4">
        <div className="  w-full border border-gray-300 dark:border-gray-600 h-[200px] rounded-[4px]">
          {/* <div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">
                  <MdCloudUpload />
                </p>
                <p className="text-lg">Nhấn để thêm ảnh</p>
              </div>
            </div>
            <input
              type="file"
              name="upload-file"
              //Nếu isImage=true thì chấp nhận mọi file có có type là image. Ngược lại các file có type là audio
              accept={'image/*'}
              className="w-0 h-0 cursor-pointer"
              onChange={(e) => uploadFile(e)}
            />
          </div> */}
          <div className="cursor-pointer w-full h-full flex justify-center items-center">
            <FaUpload className="text-4xl text-gray-600 dark:text-gray-200 " />
          </div>
          <h3 className="text-center mt-4">Ảnh đại diện</h3>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 ">
        <div className="mb-5 text-gray-300 ">
          <label
            htmlFor="test-title"
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Tên
          </label>
          <input
            type="text"
            id="text-title"
            className="bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập tên đề thi"
            required
          />
        </div>
        <div className="mb-5  ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 mb-5 ">
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
              Chủ đề
            </label>
            <input
              type="text"
              id="text-title"
              className="bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập chủ đề bài thi"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="test-title"
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Từ khoá
          </label>
          {keywords.length > 0 && (
            <div className="my-3 flex gap-2 w-full flex-wrap">
              {keywords.map((item, index) => {
                return (
                  <Chips
                    content={item}
                    onRemove={() => {
                      setKeywords((keywords) => {
                        console.log('check:', index);
                        const newKeywords = keywords.splice(index, 1);
                        console.log('check new:', newKeywords);

                        return newKeywords;
                        // return [...keywords, keywords.pop()];
                      });
                    }}
                  />
                );
              })}
            </div>
          )}

          <input
            value={inputValue}
            ref={keywordRef}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                setKeywords([...keywords, inputValue]);
                setInputValue('');
              }
            }}
            type="text"
            id="text-title"
            className="bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập từ khoá rồi nhấn phím Enter"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5 ">
          <div className="col-span-1">
            <label
              htmlFor="test-title"
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Trạng thái
            </label>
            <ComboBox
              menu={statusMenu}
              selectedOption={selectedStatus}
              width={'w-full'}
              className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 "
            ></ComboBox>
          </div>
        </div>

        <div className="mt-[70px] w-full flex justify-end mr-4">
          <Button type="green">
            <Link href="/teacher/quiz/create/question">Xác nhận</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
