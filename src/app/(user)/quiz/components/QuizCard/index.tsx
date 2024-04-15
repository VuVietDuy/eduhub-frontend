'use client';
import React from 'react';
import {useRouter} from 'next/navigation';
import Avatar from '@/components/Avatar';

export function QuizCard() {
  const router = useRouter();
  return (
    <div className="w-full rounded-lg border bg-white overflow-hidden hover:shadow-lg">
      <div className="flex justify-center items-center overflow-hidden">
        <img
          src="/img/quiz.jpg"
          className="w-full h-[168px] overflow-hidden"
        ></img>
      </div>
      <div className="p-4">
        <div>
          <p className="mb-3">Exam title</p>
        </div>
        <div className="flex justify-between mb-3">
          <div>
            <div className={`inline-block relative`}>
              <img
                className={`w-[32px] h-[32px] bg-gray-400 rounded-full`}
                src={'/img/default-avatar.jpg'}
                alt=""
              />
            </div>
            <span className="ml-2">Nguyen Van An</span>
          </div>
          <div className="flex justify-center items-center">
            h<span className="ml-2">19/02/2024</span>
          </div>
        </div>
        <div className="flex mb-3">
          <div>
            l<span>20</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="badge mb-2">Chủ đề 1</div>
          <div className="badge mb-2">Chủ đề 1</div>
          <div className="badge mb-2">Chủ đề 1</div>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              onClick={() => {
                router.push('/quiz');
              }}
              className="h-8 px-4 rounded-sm bg-blue-600 text-white"
            >
              Bắt đầu
            </button>
          </div>
          <div className="flex">
            <div className="mr-2 flex justify-center items-center hover:text-blue-500">
              l
            </div>
            <div className="mr-2 flex justify-center items-center hover:text-red-500">
              h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
