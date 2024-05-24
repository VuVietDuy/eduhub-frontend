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
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/store';

const questionLevel = ['Dễ (0 - 5đ)', 'Trung bình (6 - 8đ)', 'Khó (9 - 10đ)'];

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState<any>({
    isOpen: false,
    type: '',
    title: '',
  });

  const [isOpenPartTest, setIsOpenPartTest] = useState<boolean>(true);

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

  const questionList = useSelector(
    (state: RootState) => state.question.questionList,
  );
  console.log(questionList);
  return (
    <div className={`max-h-[calc(100vh-46px)] `}>
      <div className={`grid grid-cols-3 gap-4 `}>
        {isOpenPartTest ? (
          <div className="md:col-span-1 col-span-3 h-fit px-3 md:h-[calc(100vh-175px)] md:max-h-[80vh] md:border-r border-gray-300 md:pl-3 md:pr-6  ">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 text-md flex gap-2 items-center font-bold ">
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
                        selectedQuestionPart.title === item.title &&
                        'bg-gray-200 dark:bg-gray-600'
                      } `}
                      key={index}
                      onClick={() => setSelectedQuestionPart(item)}
                    >
                      <div className="flex gap-2 items-center">
                        <FaBook className="" />
                        {item.title}
                      </div>
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() =>
                            setIsModalOpen({
                              isOpen: true,
                              type: 'questionPart',
                              title: 'CHỈNH SỬA PHẦN THI',
                            })
                          }
                        >
                          <FaEdit className="mr-1 text-xl text-blue-500" />
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
        ) : (
          <></>
        )}
        <div
          className={`${
            isOpenPartTest ? 'md:col-span-2' : ''
          } col-span-3 max-h-[calc(100vh-175px)] px-3  overflow-y-auto`}
        >
          <div className="flex justify-between items-start">
            <div className=" flex gap-2 items-center font-bold  leading-10 text-gray-700 dark:text-gray-300 text-md">
              <AiOutlineMenuUnfold
                onClick={() => setIsOpenPartTest(!isOpenPartTest)}
                className="text-xl cursor-pointer"
              />
              Phần thi 1
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

          {questionList.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {questionList.map((item, index) => {
                return (
                  <button
                    className=" px-6 py-1 rounded-lg text-white bg-blue-600"
                    key={index}
                  >
                    {item.order}
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex flex-col mt-4 border border-gray-300 rounded-lg  px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Câu 1 (1 đáp án)</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    console.log('ditme');
                    setIsModalOpen({
                      isOpen: true,
                      type: 'question',
                      title: 'CHỈNH SỬA CÂU HỎI',
                    });
                  }}
                >
                  <FaEdit className="mr-2 text-xl text-blue-500" />
                </button>
                <button>
                  <FaTrashAlt className="text-lg text-red-500" />
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
                sunt? Temporibus libero magni exercitationem ea. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nostrum harum
                dolore iste corporis earum itaque obcaecati magnam fugiat sed.
                Iure, aspernatur perferendis quo nisi asperiores assumenda
                veniam voluptate necessitatibus harum!
              </p>
            </div>
            <div className=" grid md:grid-cols-2 grid-flow-row gap-y-4 gap-x-8  ">
              <div className="md:col-span-1 mb-2 flex items-center flex-nowrap">
                <div>
                  <IoIosCheckmarkCircle className="block text-xl mr-2 text-green-500" />
                </div>
                <p className="inline-block leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetu. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="md:col-span-1 mb-2 flex items-center flex-nowrap">
                <RiCloseCircleFill className="block text-xl mr-2 text-red-500" />

                <p className="inline-block leading-tight text-justify">
                  Lorem ipsum dolor sit am
                </p>
              </div>
              <div className="md:col-span-1 mb-2 flex items-center flex-nowrap">
                <RiCloseCircleFill className="block text-xl mr-2 text-red-500" />

                <p className="inline-block leading-tight text-justify">
                  Lorem ipsum dolor sit am
                </p>
              </div>
              <div className="md:col-span-1 mb-2 flex items-center flex-nowrap">
                <RiCloseCircleFill className="block text-xl mr-2 text-red-500" />
                <p className="inline-block leading-tight text-justify">
                  Lorem ipsum dolor sit amet cont. !
                </p>
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
      {isModalOpen.isOpen &&
        isModalOpen.type === 'question' &&
        isModalOpen.title === 'CHỈNH SỬA CÂU HỎI' && (
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
