'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Comment from '@/components/Comment';
import Modal from '@/components/Modal';
import Image from 'next/image';
import React, {useState} from 'react';
import TestPreviewModal from './TestPreviewModal';

export default function Asignment() {
  const [isOpenTestModal, setIsOpenTestModal] = useState(false);
  const value = `
  <h4>Hi all</h4> 
    <ul>
      <li>Các bạn đến thi theo lịch trên qldt</li>
      <li>Phòng máy dự kiến trong khu vực phòng</li>
      <li>Vì submit trên hệ thống code ptit, thời gian làm bài có thể tăng lên 90p.</li>
      <li>Các bạn chỉ thi phần bài tập, không thi phần lí thuyết vấn đáp, đề bài tập bốc ngẫu nhiên trong NHCHT</li>
      <li style="line-height: 1.1;">File submit có thể là file word/pdf đều được, nhưng phải nén thành file .zip hoặc .rar</li>
      <li style="line-height: 1.1;">Trao đổi nói chuyện với các bạn khác&nbsp;</li>
      <li style="line-height: 1.1;">Nhìn màn hình các bạn khác&nbsp;</li>
      <li style="line-height: 1.1;">Vào các thư mục chia sẻ trong máy tính&nbsp;</li>
      <li style="line-height: 1.1;">cắm USB vào máy.&nbsp;</li>
      <li style="line-height: 1.1;">Vào trình duyệt trên máy&nbsp;</li>
      <li style="line-height: 1.1;">Chia sẻ bài làm hay nhận chia sẻ từ người khác.</li>
  </ul>
  `;

  const quiz = {
    title: 'Kiểm tra học kỳ I',
    img: '/pattern_react.jpg',
    tag: ['Hàm số', 'Tích phân', 'Đạo hàm'],
  };

  const handleCancelTestModal = () => {
    setIsOpenTestModal(false);
  };
  return (
    <div className="p-6 grid grid-cols-12 gap-6">
      <Card className="col-span-12 md:col-span-8">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-blue-900">
          Kiểm tra 15 phút
        </h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">
            {' '}
            8 thg 5 (Đã chỉnh sửa 13 thg 5)
          </span>
        </div>
        <div>Đến hạn 15:59 11 thg 5</div>
        <hr className="border-blue-500 my-4" />
        <div className="markdown">
          <div dangerouslySetInnerHTML={{__html: value}}></div>
        </div>
      </Card>
      <div className="col-span-12 md:col-span-4">
        <Card>
          <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-400 from-blue-900">
            Bài kiểm tra
          </h3>
          <div className="h-20 w-full border rounded-lg overflow-hidden flex justify-between pr-6 mt-6 mb-6">
            <div className=" flex items-center justify-center">
              <div className="overflow-hidden h-28 object-cover flex items-center justify-center">
                <Image src={quiz.img} width={128} height={78} alt=""></Image>
              </div>
              <div className="ml-4 ">
                <h3 className="font-semibold text-xl">{quiz.title}</h3>
                {quiz.tag.map((itm, idx) => (
                  <span className="badge-blue">{itm}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              ></button>
            </div>
          </div>
          <Button onClick={() => setIsOpenTestModal(true)} className="w-full">
            Làm bài
          </Button>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-8">
        <article className="p-6 text-base bg-white border rounded-lg dark:bg-gray-900 mb-6">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Trần Xuân Lâm
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time title="February 8th, 2022">Feb. 8, 2022</time>
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
            <div
              id="dropdownComment1"
              className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">Đề thi rất hay ạ</p>
        </article>
        <Comment></Comment>
      </div>
      <TestPreviewModal
        isOpenTestModal={isOpenTestModal}
        handleCancelTestModal={handleCancelTestModal}
      />
    </div>
  );
}
