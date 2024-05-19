'use client';
import Button from '@/components/Button';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';
import QuestionModal from './QuestionModal';
import {FaBook} from 'react-icons/fa6';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import {BsFillQuestionOctagonFill} from 'react-icons/bs';

const questionLevel = ['Dễ (0 - 5đ)', 'Trung bình (6 - 8đ)', 'Khó (9 - 10đ)'];

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [questionPart, setQuestionPart] = useState<string[]>(['Phần 1']);
  const [listQuestion, setListQuestion] = useState<number[]>([1, 2]);
  return (
    <div className={`min-h-[380px]`}>
      <div className={`grid grid-cols-3 gap-6 `}>
        <div className="col-span-1 min-h-[380px] border border-red-200 pr-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-md flex gap-2 items-center font-bold">
              <AiOutlineMenuUnfold className="text-lg" />
              Phần thi
            </span>
            <Button type="green">
              <MdAdd className="mr-1 inline-block" />
              Thêm mới
            </Button>
          </div>

          <div className="mt-4">
            {questionPart.length > 0 &&
              questionPart.map((item, index) => {
                return (
                  <div
                    className=" flex items-center justify-between p-3 bg-gray-200"
                    key={index}
                  >
                    <div className="flex gap-2 items-center">
                      <FaBook className="" />
                      {item}
                    </div>
                    <div className="flex gap-2 items-center">
                      <button>
                        <FaEdit className="mr-2 text-lg text-blue-500" />
                      </button>
                      <button>
                        <FaTrashAlt className="text-lg text-red-500" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-span-2 min-h-[380px]  border border-red-200 ">
          <div className="flex justify-between items-start">
            <div className=" flex gap-2 items-center font-bold leading-10 text-gray-700 text-md">
              <BsFillQuestionOctagonFill className="text-lg" />
              Danh sách câu hỏi
            </div>
            <div className={`flex  gap-3`}>
              <Button type="green" onClick={() => setIsModalOpen(true)}>
                <MdAdd className="mr-1 inline-block" />
                Thêm mới
              </Button>
            </div>
          </div>

          {listQuestion.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {listQuestion.map((item, index) => {
                return (
                  <button
                    className=" px-6 py-1 rounded-lg text-white bg-blue-600"
                    key={index}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {true && (
        <QuestionModal
          isModalOpen={isModalOpen}
          setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
        />
      )}
    </div>
  );
}
