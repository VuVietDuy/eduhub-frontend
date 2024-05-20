import TextEditor2 from '@/components/TextEditor2';
import React from 'react';
import {FiMinusCircle} from 'react-icons/fi';

interface IProps {
  answerOrder?: number;
  correctAnswers?: any;
  setCorrectAnswers?: any;
  answerContent?: any;
  setAnswerContent?: any;
  index?: any;
  handleDeleteAnswer?: any;
}
export default function (props: IProps) {
  const {
    answerOrder,
    correctAnswers,
    setCorrectAnswers,
    answerContent,
    setAnswerContent,
    index,
    handleDeleteAnswer,
  } = props;
  let realIndex = index + 1;
  return (
    <>
      <div className="flex items-center gap-2 w-[90%]  mb-8 ml-4">
        <input
          type="radio"
          checked={correctAnswers.id === realIndex}
          name="list-radio"
          className="w-6 h-6 mr-10 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
          onChange={() => {
            // const tmp = index;
            setCorrectAnswers({
              id: realIndex,
              content: answerContent[realIndex],
            });
          }}
        />
        <div className="mr-5">
          <p className="font-semibold mb-2 ">Đáp án {answerOrder}</p>
          <TextEditor2
            value={answerContent?.order && ''}
            setValue={setAnswerContent}
            answerOrder={answerOrder}
          />
        </div>
        <button
          className="text-3xl text-red-500"
          onClick={() => handleDeleteAnswer(index)}
        >
          <FiMinusCircle />
        </button>
      </div>
    </>
  );
}
