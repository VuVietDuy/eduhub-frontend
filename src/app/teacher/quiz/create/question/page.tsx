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
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {RiCloseCircleFill} from 'react-icons/ri';
import QuestionPartModal from './QuestionPartModal';

const questionLevel = ['Dễ (0 - 5đ)', 'Trung bình (6 - 8đ)', 'Khó (9 - 10đ)'];

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState<any>({
    isOpen: false,
    type: '',
    title: '',
  });
  const [questionPart, setQuestionPart] = useState<any>([
    {
      id: 1,
      title: 'Phần 1',
      desc: 'Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adip',
    },
    {
      id: 1,
      title: 'Phần 2',
      desc: 'Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adip',
    },
  ]);
  const [listQuestion, setListQuestion] = useState<number[]>([1, 2]);
  const [selectedQuestionPart, setSelectedQuestionPart] = useState<any>(
    questionPart[0],
  );
  return (
    <div className={`min-h-[380px] `}>
      <div className={`grid grid-cols-3 gap-6 `}>
        <div className="col-span-1 min-h-[380px]  border-r border-gray-300 pr-6 ">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-md flex gap-2 items-center font-bold">
              <AiOutlineMenuUnfold className="text-lg" />
              Phần thi
            </span>
            <div className={`flex  gap-3`}>
              <Button
                type="green"
                onClick={() =>
                  setIsModalOpen({
                    isOpen: true,
                    type: 'questionPart',
                    title: 'THÊM MỚI PHẦN THI',
                  })
                }
              >
                <MdAdd className="mr-1 inline-block" />
                Thêm mới
              </Button>
            </div>
          </div>

          <div className="mt-4 ">
            {questionPart.length > 0 &&
              questionPart.map((item: any, index: any) => {
                return (
                  <div
                    className={` flex items-center justify-between p-3 cursor-pointer ${
                      selectedQuestionPart.title === item.title && 'bg-gray-200'
                    } `}
                    key={index}
                    onClick={() => setSelectedQuestionPart(item)}
                  >
                    <div className="flex gap-2 items-center">
                      <FaBook className="" />
                      {item.title}
                    </div>
                    <div className="flex gap-2 items-center">
                      {/* <button
                        onClick={() =>
                          setIsModalOpen({
                            isOpen: true,
                            type: 'questionPart',
                            title: 'CHỈNH SỬA PHẦN THI',
                          })
                        }
                      >
                        <FaEdit className="mr-2 text-lg text-blue-500" />
                      </button> */}
                      <div className={``}>
                        <button
                          onClick={() =>
                            setIsModalOpen({
                              isOpen: true,
                              type: 'questionPart',
                              title: 'CHỈNH SỬA PHẦN THI',
                            })
                          }
                        >
                          <FaEdit className="mr-2 text-lg text-blue-500" />
                        </button>
                      </div>
                      <button>
                        <FaTrashAlt className="text-lg text-red-500" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-span-2 min-h-[380px]  max-h-[380px] overflow-y-auto ">
          <div className="flex justify-between items-start">
            <div className=" flex gap-2 items-center font-bold leading-10 text-gray-700 text-md">
              <BsFillQuestionOctagonFill className="text-lg" />
              Danh sách câu hỏi
            </div>
            <div className={`flex  gap-3`}>
              <Button
                type="green"
                onClick={() =>
                  setIsModalOpen({
                    isOpen: true,
                    type: 'question',
                    title: 'THÊM MỚI CÂU HỎI',
                  })
                }
              >
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

          <div className="flex flex-col mt-8 border border-gray-300 rounded-lg min-h-8 p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Câu 1 (1 đáp án)</p>
              </div>
              <div>
                <button>
                  <FaEdit className="mr-3 text-xl text-blue-500" />
                </button>
                <button>
                  <FaTrashAlt className="text-xl text-red-500" />
                </button>
              </div>
            </div>
            <div className="my-3 border-b border-gray-300">
              <p className="mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                voluptates consequatur quas quod, perferendis ullam nulla enim
                ut dolores at sequi quidem commodi dolore quisquam suscipit
                molestias ipsam ducimus asperiores! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. A quidem quae iure, obcaecati
                dolorem dolor saepe excepturi! Dolorum, mollitia distinctio fuga
                sunt porro sit praesentium atque quos. Itaque, ipsa sed. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nobis vel,
                possimus sequi, ipsa numquam quas dolores quaerat labore officia
                autem molestias laboriosam debitis voluptatum ducimus iusto unde
                eos aliquam accusamus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Deleniti vitae similique earum facere delectus
                vel quae, placeat perspiciatis ut porro nihil unde fugit debitis
                sunt? Temporibus libero magni exercitationem ea.
              </p>
            </div>
            <div className=" grid md:grid-cols-2 grid-flow-row gap-4 px-3 ">
              <div className="md:col-span-1 mb-2 flex items-center">
                <IoIosCheckmarkCircle className="text-xl mr-2 text-green-500" />
                <p>Lorem ipsum, dolor sit amet consectetu.</p>
              </div>
              <div className="md:col-span-1 mb-2 flex items-center">
                <RiCloseCircleFill className="text-xl mr-2 text-red-500" />

                <p>Lorem ipsum dolor sit am</p>
              </div>
              <div className="md:col-span-1 mb-2 flex items-center">
                <RiCloseCircleFill className="text-xl mr-2 text-red-500" />

                <p>Lorem ipsum dolor sit am</p>
              </div>
              <div className="md:col-span-1 mb-2 flex items-center">
                <RiCloseCircleFill className="text-xl mr-2 text-red-500" />
                <p>Lorem ipsum dolor sit amet cont. !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen.isOpen && isModalOpen.type === 'questionPart' && (
        <QuestionPartModal
          isModalOpen={isModalOpen}
          setIsModalOpen={() =>
            setIsModalOpen({
              isOpen: false,
              type: '',
              title: '',
            })
          }
        />
      )}
      {isModalOpen.isOpen &&
        isModalOpen.type === 'question' &&
        isModalOpen.title === 'THÊM MỚI CÂU HỎI' && (
          <QuestionModal
            isModalOpen={isModalOpen}
            setIsModalOpen={() =>
              setIsModalOpen({
                isOpen: false,
                type: '',
                title: '',
              })
            }
          />
        )}
    </div>
  );
}
