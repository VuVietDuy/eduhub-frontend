'use client';
import Modal from '@/components/Modal';
import TextEditor from '@/components/TextEditor';
import TextEditor2 from '@/components/TextEditor2';
import Image from 'next/image';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {FiMinusCircle, FiPlusCircle} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import Answer from './Answer';

const questionTypeMenu = [
  {
    id: 1,
    name: 'Một đáp án',
  },
  {
    id: 2,
    name: 'Nhiều đáp án',
  },
  {
    id: 3,
    name: 'Đúng/sai',
  },
  {
    id: 4,
    name: 'Tự luận',
  },
];

interface IAnswer {
  id: number;
  content: string;
}
export default function QuestionModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: any;
  setIsModalOpen: () => void;
}) {
  const [questionType, setQuestionType] = useState<number>(1);
  const [questionContent, setQuestionContent] = useState<string>('');
  const [explainContent, setExplainContent] = useState<string>('');
  // const [answerQuantity, setAnswerQuantity] = useState<number>(4);
  const [correctAnswers, setCorrectAnswers] = useState<any>({
    id: 0,
  });
  const [answerList, setAnswerList] = useState<any>([]);
  const [answerContent, setAnswerContent] = useState<any>(null);

  const handleDeleteAnswer = (index: number) => {
    const realIndex = index + 1;
    console.log('check index', index);
    console.log('check item', answerList[index]);
    console.log('check answerList', answerList);
    const newAnswerList = answerList.filter(
      (item: any, index: any) => item !== realIndex,
    );
    console.log('check new:', answerList);
    setAnswerList(newAnswerList);
    // setAnswerQuantity((prevState) => prevState - 1);
    console.log(typeof answerContent);
    const newAnswerContent = Object.keys(answerContent).reduce(
      (newObj: any, key: any) => {
        let stringIndex = realIndex.toString();
        console.log('check newObj[key] ', newObj[key]);
        console.log('check answerContent[key]', answerContent[key]);
        if (key === stringIndex) {
          newObj[key] = answerContent[key];
        }
      },
      {},
    );
    setAnswerContent(newAnswerContent);
  };

  const handleAddAnswer = () => {
    // setAnswerQuantity((prevState) => prevState + 1);
  };

  useEffect(() => {
    // for (var i = 0; i < 4; i++) {
    const newState = answerList;
    console.log('first', newState);
    // newState.push(
    //   <Answer
    //     // key={i}
    //     answerContent={answerContent}
    //     setAnswerContent={setAnswerContent}
    //     setCorrectAnswers={setCorrectAnswers}
    //     correctAnswers={correctAnswers}
    //     // index={i}
    //     // answerOrder={i + 1}
    //     handleDeleteAnswer={handleDeleteAnswer}
    //   />,
    // );
    setAnswerList((prevState: any) => {
      console.log('second', prevState);
      return [
        ...prevState,
        <Answer
          // key={i}
          answerContent={answerContent}
          setAnswerContent={setAnswerContent}
          setCorrectAnswers={setCorrectAnswers}
          correctAnswers={correctAnswers}
          // index={i}
          // answerOrder={i + 1}
          handleDeleteAnswer={handleDeleteAnswer}
        />,
      ];
    });
    // }
  }, []);

  //Image upload
  const [imgUploaded, setImgUploaded] = useState<ArrayBuffer | null | string>(
    null,
  );
  //Audio upload
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

  // console.log('check cac đáp án: ', answerContent);
  // console.log('check đáp án đúng: ', correctAnswers);
  console.log('check list:', answerList);
  ``;
  return (
    <>
      <Modal
        title="TRÌNH SOẠN THẢO CÂU HỎI"
        width="w-[70%]"
        height="h-[calc(100vh-40px)]]"
        open={isModalOpen.isOpen}
        onCancel={setIsModalOpen}
      >
        <form className="px-3">
          <b className="">Loại câu hỏi</b>
          <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {questionTypeMenu.map((item, index) => (
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id={item.name}
                    type="radio"
                    checked={questionType === item.id}
                    name="list-radio"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {
                      setQuestionType(item.id);
                      if (item.id === 1 || item.id === 2) {
                        // setAnswerQuantity(4);
                      }
                    }}
                  />
                  <label
                    htmlFor="many-answer"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </form>

        <div className="col-span-1 px-3">
          <p className="mb-2 font-bold" style={{marginBottom: '10px'}}>
            Nội dung câu hỏi
          </p>
          {/* <TextEditor3 /> */}
          {/* <TextEditor placeholder="Nhập nội dung câu hỏi" /> */}
          <TextEditor2
            value={questionContent}
            setValue={setQuestionContent}
            questionOrder={1}
            initialValue={`Câu 1: `}
            // onSubmit=
          />
        </div>
        <div
          className="grid grid-cols-2 gap-4 mt-14 px-3"
          style={{marginTop: '24px'}}
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

        <div className="mt-8" style={{marginTop: '24px'}}>
          <p className="mb-2 px-3 font-bold" style={{marginBottom: '10px'}}>
            Tích chọn đáp án đúng
          </p>
          <div>
            {questionType === 1 && (
              <div>
                {answerList}
                {/* {answerList.map((item: any, index: any) => {
                  return (
                    <Answer
                      key={index}
                      answerContent={answerContent}
                      setAnswerContent={setAnswerContent}
                      setCorrectAnswers={setCorrectAnswers}
                      correctAnswers={correctAnswers}
                      index={index}
                      answerOrder={item}
                      handleDeleteAnswer={handleDeleteAnswer}
                    />
                  );
                })} */}
              </div>
            )}
          </div>
          <button
            className="px-3 flex items-center gap-2 text-blue-500"
            onClick={handleAddAnswer}
          >
            <FiPlusCircle className="text-3xl" />

            <span className="font-semibold">Thêm câu trả lời</span>
          </button>
        </div>
        <div className="mt-8" style={{marginTop: '24px'}}>
          <p className="mb-2 px-3 font-bold" style={{marginBottom: '10px'}}>
            Giải thích đáp án
          </p>
          <TextEditor2 value={explainContent} setValue={setExplainContent} />
        </div>
      </Modal>
    </>
  );
}
