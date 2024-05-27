'use client';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import Modal from '@/components/Modal';
import TextEditor from '@/components/TextEditor';
import TextEditor2 from '@/components/TextEditor2';
import Image from 'next/image';
import React, {ChangeEvent, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {MdDelete} from 'react-icons/md';

export default function QuestionPartModal({
  isModalOpen,
  setIsModalOpen,
  partContent,
  setPartContent,
}: {
  isModalOpen: any;
  setIsModalOpen: () => void;
  partContent: any;
  setPartContent: any;
}) {
  console.log('check: ', isModalOpen);
  return (
    <>
      <Modal
        title={isModalOpen.title}
        width="md:w-[60%] lg:w-[40%] w-[95%]"
        height="h-[calc(100vh-40px)]]"
        open={isModalOpen.isOpen}
        onCancel={setIsModalOpen}
      >
        <form className="px-3">
          <div className="mb-5 text-gray-300 ">
            <label
              htmlFor="test-title"
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Tên phần thi
            </label>
            <input
              type="text"
              value={partContent.title}
              id="text-title"
              className="bg-gray-50 border border-gray-300 text-textColor  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập tên đề thi"
              required
              onChange={(e) =>
                setPartContent((prev: any) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-5  ">
            <label
              htmlFor="test-desc"
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 "
            >
              Mô tả phần thi
            </label>
            <textarea
              id="test-desc"
              value={partContent.des}
              className="bg-gray-50 border min-h-24 border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập mô tả bài thi"
              onChange={(e) => {
                setPartContent((prev: any) => ({
                  ...prev,
                  des: e.target.value,
                }));
              }}
            ></textarea>
          </div>
        </form>
      </Modal>
    </>
  );
}
