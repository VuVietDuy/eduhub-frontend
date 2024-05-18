'use client';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import Card from '@/components/Card';
import ModalFullScreen from '@/components/ModalFullScreen';
import React, {useState} from 'react';

export default function page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="p-6">
      <Card>
        <Button onClick={() => setIsOpen(true)} className="mb-6">
          Tạo bài tập
        </Button>
        <Accordion className="mb-6"></Accordion>
        <Accordion className="mb-6"></Accordion>
        <Accordion className="mb-6"></Accordion>
      </Card>
      <ModalFullScreen
        title="Bài tập"
        onCancel={() => setIsOpen(false)}
        open={isOpen}
        footer={[]}
      >
        <div className="flex flex-col sm:flex-row justify-between h-full">
          <div className="w-full p-6">
            <Card className="max-w-[1000px] m-auto">
              <label
                className="text-xl inline-block font-semibold mb-2"
                htmlFor="Title"
              >
                Tiêu đề
              </label>
              <input
                placeholder="Nhập tiêu đề vào đây"
                className="px-4 py-3 w-full border rounded mb-6"
              ></input>
              <label
                className="text-xl inline-block font-semibold mb-2"
                htmlFor="Title"
              >
                Hướng dẫn
              </label>
              <textarea
                cols={30}
                placeholder="Nhập tiêu đề vào đây"
                className="px-4 py-3 h-48 w-full border rounded"
              ></textarea>
              <Button>Thêm đề</Button>
            </Card>
          </div>
          <div className="border-l border-gray-200 z-50 w-80 p-6 h-full">
            <label
              className="text-xl inline-block font-semibold mb-2"
              htmlFor="Title"
            >
              Tiêu đề
            </label>
            <input
              placeholder="Nhập tiêu đề vào đây"
              className="px-4 py-3 w-full border rounded mb-6"
            ></input>
            <button
              type="button"
              data-modal-toggle="new-card-modal"
              className="flex justify-center items-center py-2 w-full font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:border-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add another card
            </button>
            <Button>Lưu</Button>
          </div>
        </div>
      </ModalFullScreen>
    </div>
  );
}
