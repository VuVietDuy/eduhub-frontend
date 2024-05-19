'use client';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import Modal from '@/components/Modal';
import TextEditor from '@/components/TextEditor';
import TextEditor2 from '@/components/TextEditor2';
import Image from 'next/image';
import React, {ChangeEvent, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {MdDelete} from 'react-icons/md';

const questionLevel = ['Dễ (0 - 5đ)', 'Trung bình (6 - 8đ)', 'Khó (9 - 10đ)'];
export default function QuestionModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
}) {
  const [selectedLevel, setSelectedLevel] = useState<string>('Chọn mức độ');
  const questienLevelMenu: MenuProps['items'] = questionLevel.map(
    (item: any, index) => {
      return {
        key: `${item}`,
        label: (
          <button
            className={`px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 ${
              index === questionLevel.length - 1 ? 'rounded-b-sm' : ''
            }`}
            onClick={() => setSelectedLevel(`${item}`)}
          >
            {item}
          </button>
        ),
      };
    },
  );
  //Image upload
  const [imgUploaded, setImgUploaded] = useState<ArrayBuffer | null | string>(
    null,
  );
  const [audioUploaded, setAudioUploaded] = useState<
    ArrayBuffer | null | string
  >(null);

  const handleInputFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'img') {
          setImgUploaded(reader.result);
        } else {
          setAudioUploaded(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Modal
        title="TRÌNH SOẠN THẢO CÂU HỎI"
        width="w-[70%]"
        height="h-[calc(100vh-40px)]]"
        open={isModalOpen}
        onCancel={setIsModalOpen}
      >
        <div>
          <b className="">Loại câu hỏi</b>
          <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="one-answer"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="one-answer"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Một đáp án
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="many-answer"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="many-answer"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Nhiều đáp án
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="true-false"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="true-false"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Đúng sai
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="essay"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="essay"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tự luận
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-span-1 ">
          <p className="mb-2 font-bold" style={{marginBottom: '16px'}}>
            Nội dung câu hỏi
          </p>
          {/* <TextEditor placeholder="Nhập nội dung câu hỏi" /> */}
          <TextEditor2 placeholder="Nhập nội dung câu hỏi" />
        </div>
        <div
          className="grid grid-cols-2 gap-4 mt-14"
          style={{marginTop: '80px'}}
        >
          <div className="col-span-1">
            <div className="mt-2  w-full border border-dotted border-gray-300 dark:border-gray-600 h-[160px] rounded-[4px]">
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
                        <p className="text-lg mt-3">Nhấn để thêm ảnh</p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="upload-file"
                      //Nếu isImage=true thì chấp nhận mọi file có có type là image. Ngược lại các file có type là audio
                      accept="image/*"
                      className="w-0 h-0 cursor-pointer"
                      onChange={(e) => handleInputFileChange(e, 'img')}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mt-2  w-full border border-dotted border-gray-300 dark:border-gray-600 h-[160px] rounded-[4px]">
              <div className="cursor-pointer w-full h-full flex justify-center items-center">
                {audioUploaded ? (
                  <div className="flex items-center justify-center relative w-full h-full overflow-hidden ">
                    <audio
                      src={audioUploaded as string}
                      controls
                      // className="w-full h-full object-contain"
                    ></audio>
                    <button
                      className="absolute bottom-4 right-4 p-3 rounded-full bg-red-500 cursor-pointer outline-none border-none hover:shadow-me duration-200 transition-all ease-in-out"
                      onClick={() => setAudioUploaded(null)}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col justify-center items-center">
                        <FaUpload className="text-4xl text-gray-600 dark:text-gray-200 " />
                        <p className="text-lg mt-3">Nhấn để thêm audio</p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="upload-file"
                      //Nếu isImage=true thì chấp nhận mọi file có có type là image. Ngược lại các file có type là audio
                      accept="audio/*"
                      className="w-0 h-0 cursor-pointer"
                      onChange={(e) => handleInputFileChange(e, 'audio')}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <b className="">Mức độ</b>
          <div className="mt-2">
            <ComboBox
              menu={questienLevelMenu}
              selectedOption={selectedLevel}
              width={'w-full'}
            ></ComboBox>
          </div>
        </div>
      </Modal>
    </>
  );
}
