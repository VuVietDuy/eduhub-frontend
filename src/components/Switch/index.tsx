'use client';
import React, {useState} from 'react';

export default function Switch() {
  const [isTest, setIsTest] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="relative w-full rounded-md border h-10 p-1 bg-gray-200">
        <div className="relative w-full h-full flex items-center">
          <div className="w-full flex justify-center text-gray-400 cursor-pointer">
            <button onClick={() => setIsTest(false)}>Luyện tập</button>
          </div>
          <div className="w-full flex justify-center text-gray-400 cursor-pointer">
            <button onClick={() => setIsTest(true)}>Kiểm tra</button>
          </div>
        </div>

        <span
          className={`${
            isTest
              ? 'left-1/2 -ml-1 text-gray-800'
              : 'left-1 text-indigo-600 font-semibold'
          } bg-white shadow text-sm flex items-center justify-center w-1/2 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute`}
        >
          {isTest ? 'Kiểm tra' : 'Luyện tập'}
        </span>
      </div>
    </div>
  );
}
