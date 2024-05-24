'use client';
import React, {useEffect, useState} from 'react';
import {CaretLeftOutlined, ClockCircleOutlined} from '@ant-design/icons';
import Button from '@/components/Button';
import Circle from '@/components/Icons/Circle';
import Comment from '@/components/Comment';
import SimpleTextEditor from '@/components/SimpleTextEditor';

interface IOption {
  _id: string;
  content: string;
}

enum IQuestionType {
  SINGLE = 0,
  MULTIPLE = 1,
  SHORT_ANSWER = 2,
}

interface IQuestion {
  _id: string;
  questionType: number;
  content: string;
  options: IOption[] | null;
}

const optionText = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'K',
  11: 'N',
  12: 'M',
};

const listQues: IQuestion[] = [
  {
    _id: 'cau1',
    questionType: IQuestionType.SINGLE,
    content: 'Các cách để mô tả tập hợp là',
    options: [
      {_id: 'cau1a', content: 'Liệt kê các phần tử của tập hợp.'},
      {
        _id: 'cau1b',
        content: 'Nếu dấu hiệu đặc trưng cho các phần tử của tập hợp',
      },
      {_id: 'cau1c', content: 'Minh họa bằng sơ đồ Venn'},
      {_id: 'cau1d', content: 'Cả A và B'},
    ],
  },
  {
    _id: 'cau2',
    questionType: IQuestionType.SINGLE,
    content:
      'Bác Nam có một khu vườn trồng hoa quả. Trên khu vườn bác trồng cam, quýt, bơ, chuối và dứa. Gọi E là tập hợp các cây mà bác Nam trồng trên khu vườn đó. Hãy viết E bằng cách liệt kê.',
    options: [
      {_id: 'cau2a', content: 'E = {cam; quýt; bơ};'},
      {_id: 'cau2b', content: 'E = {cam; quýt; bơ; dứa};'},
      {_id: 'cau2c', content: 'E = {cam; quýt; bơ; chuối; dứa};'},
      {_id: 'cau2d', content: 'E = {cam; quýt; bơ; chuối; dừa}'},
    ],
  },
  {
    _id: 'cau3',
    questionType: IQuestionType.SINGLE,
    content: 'Tập hợp Ν* là:',
    options: [
      {_id: 'cau3a', content: 'tập hợp số tự nhiên'},
      {_id: 'cau3b', content: 'tập hợp các số tự nhiên chẵn.'},
      {_id: 'cau3c', content: 'tập hợp các số tự nhiên lẻ'},
      {_id: 'cau3d', content: 'tập hợp có số tự nhiên khác 0.'},
    ],
  },
  {
    _id: 'cau4',
    questionType: IQuestionType.MULTIPLE,
    content: 'Tập hợp Ν* là:',
    options: [
      {_id: 'cau4a', content: 'tập hợp số tự nhiên'},
      {_id: 'cau4b', content: 'tập hợp các số tự nhiên chẵn.'},
      {_id: 'cau4c', content: 'tập hợp các số tự nhiên lẻ'},
      {_id: 'cau4d', content: 'tập hợp có số tự nhiên khác 0.'},
    ],
  },
  {
    _id: 'cau5',
    questionType: IQuestionType.SHORT_ANSWER,
    content:
      'Trong cuộc khai thác thuộc địa lần thứ hai ở Đông Dương 1919.1929, thực dân Pháp tập trung đầu tư vào',
    options: null,
  },
];

export default function StartQuiz() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(9);

  useEffect(() => {
    let timeInterval = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timeInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <header className="fixed top-0 px-3 py-2 flex justify-between w-full bg-gray-50 h-16 items-center z-40">
        <div>
          <button className="px-3 py-1 rounded border text-sm text-gray-700 hover:shadow-md">
            <CaretLeftOutlined />
            Thoát
          </button>
        </div>
        <div>
          <span className="font-semibold">Thí sinh: Vũ Viết Duy</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 ">
            <ClockCircleOutlined />
            <span>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
          <Button>Nộp bài</Button>
        </div>
      </header>
      <div className="mt-16 p-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-9">
          <form action="">
            {listQues.map((question, index) => (
              <div
                id={`${index}`}
                className="shadow border bg-white p-6 rounded mb-6"
              >
                <div>
                  <p className="inline-block">
                    <span className="font-semibold">{`Câu ${
                      index + 1
                    }: `}</span>
                    {question.content}
                  </p>
                </div>
                <div>
                  {question.questionType === IQuestionType.SINGLE ? (
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                      {question.options &&
                        question.options.map((option, idx) => (
                          <div className="flex lg:inline-flex items-center">
                            <label
                              className="relative flex items-center p-3 rounded-full cursor-pointer"
                              htmlFor="html"
                            >
                              <input
                                name={question._id}
                                type="radio"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-900 checked:before:bg-blue-900 hover:before:opacity-10"
                              />
                              <span className="absolute text-blue-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <Circle></Circle>
                              </span>
                            </label>
                            <label
                              className="mt-px font-light text-gray-700 cursor-pointer select-none"
                              htmlFor="html"
                            >
                              {`${String.fromCharCode(65 + idx)}. ${
                                option.content
                              }`}
                            </label>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <></>
                  )}
                  {question.questionType === IQuestionType.MULTIPLE ? (
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                      {question.options &&
                        question.options.map((option, idx) => (
                          <div className="flex items-center p-3">
                            <input
                              name={question._id}
                              type="checkbox"
                              value=""
                              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              {`${String.fromCharCode(65 + idx)}. ${
                                option.content
                              }`}
                            </label>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <></>
                  )}
                  {question.questionType === IQuestionType.SHORT_ANSWER ? (
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                      <SimpleTextEditor className="m-3"></SimpleTextEditor>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="col-span-12 md:col-span-3 md:fixed md:top-[88px] md:right-6 md:min-w-[22.5vw]">
          <div className="border shadow rounded p-3">
            <h3 className="text-md font-medium"> Danh sách câu hỏi </h3>
            <div className="grid grid-cols-10 gap-2 mt-3 sheet-screen">
              {listQues.map((item, idx) => (
                <div className="col-span-2 ng-star-inserted">
                  <a
                    href={`#${idx}`}
                    className="rounded-md block text-center align-middle border border-slate-400 p-1 w-full active"
                  >
                    {` ${idx < 10 ? '0' + (idx + 1) : idx + 1} `}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
