'use client';
import Button from '@/components/Button';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';
import QuestionModal from './QuestionModal';

const questionLevel = ['Dễ (0 - 5đ)', 'Trung bình (6 - 8đ)', 'Khó (9 - 10đ)'];

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={`min-h-[360px]`}>
      <div className={`flex justify-between`}>
        <b className="leading-10 text-2xl">Danh sách câu hỏi</b>
        <div className={`flex  items-center gap-3`}>
          <Button>Cài đặt mức độ</Button>

          <Button type="green" onClick={() => setIsModalOpen(true)}>
            <MdAdd className="mr-1 inline-block" />
            Thêm câu hỏi
          </Button>
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
