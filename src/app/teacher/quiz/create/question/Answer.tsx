import TextEditor2 from '@/components/TextEditor2';
import {IAnswer} from '@/redux/types/question.type';
import React from 'react';
import {FiMinusCircle} from 'react-icons/fi';

interface IProps {
  type: number;
  answer: IAnswer;
  setAnswerList: any;
  index: number;
  handleDeleteAnswer?: any;
}
export default function (props: IProps) {
  const {answer, setAnswerList, index, handleDeleteAnswer, type} = props;
  return (
    <>
      <div className="flex items-center gap-2 md:w-[93%] w-[98%]  mb-8 md:ml-4">
        <input
          type={type === 1 ? 'radio' : 'checkbox'}
          checked={answer.isCorrect}
          name="list-radio"
          className="w-6 h-6 md:mr-10 mr-3 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
          onChange={() => {
            console.log('check radio: ', index);
            setAnswerList((prevState: IAnswer[]) => {
              let newState = prevState;

              newState.map((item: IAnswer) => {
                if (item.id === index) {
                  item.isCorrect = true;
                }
              });
              return newState;
            });
          }}
        />
        <div className="mr-5 flex-1">
          <p className="font-semibold mb-2 ">Đáp án {index + 1}</p>
          <TextEditor2
            category="answer"
            value={answer.content}
            setValue={setAnswerList}
            answerOrder={index}
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
