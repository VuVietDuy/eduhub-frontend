import Button from '@/components/Button';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import Switch from '@/components/Switch';
import Table from '@/components/Table';
import {CloseOutlined, ImportOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {useState} from 'react';

interface IProps {}

interface IQuiz {
  title: string;
  img: string;
  tag: string[];
}

export default function AssignAssignment(props: IProps) {
  const [quizList, setQuizList] = useState<IQuiz[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addQuiz = () => {
    const quiz: IQuiz = {
      title: 'Kiểm tra học kỳ I',
      img: '/pattern_react.jpg',
      tag: ['Hàm số', 'Tích phân', 'Đạo hàm'],
    };
    const list: IQuiz[] = [...quizList, quiz];
    setQuizList(list);
  };

  const alreadyQuizs = [
    {
      title: 'Kiểm tra học kỳ I',
      img: '/pattern_react.jpg',
      tag: ['Hàm số', 'Tích phân', 'Đạo hàm'],
    },
    {
      title: 'Kiểm tra học kỳ I',
      img: '/pattern_react.jpg',
      tag: ['Hàm số', 'Tích phân', 'Đạo hàm'],
    },
    {
      title: 'Kiểm tra học kỳ I',
      img: '/pattern_react.jpg',
      tag: ['Hàm số', 'Tích phân', 'Đạo hàm'],
    },
    {
      title: 'Kiểm tra học kỳ I',
      img: '/pattern_react.jpg',
      tag: ['Hàm số', 'Tích phân', 'Đạo hàm'],
    },
  ];

  const handleAddQuiz = () => {
    setIsOpen(false);
    addQuiz();
  };

  const handleDeleteQuiz = () => {};

  const columns = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      render: (data: any) => (
        <div className="flex items-center gap-4">
          <Image src={data.img} width={50} height={50} alt=""></Image>
          <h3>{data.title}</h3>
        </div>
      ),
    },
    {
      title: 'Thẻ',
      dataIndex: 'tag',
      key: 'tag',
      render: (data: any) => (
        <>
          {data.tag.map((itm: any, idx: any) => (
            <span className="badge-blue">{itm}</span>
          ))}
        </>
      ),
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
      render: (data: any) => (
        <>
          <Button onClick={handleAddQuiz}>Thêm</Button>
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row justify-between h-full">
      <div className="w-full p-6 bg-gray-100">
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
          {quizList.map((item, index) => (
            <div className="h-20 w-full border rounded-lg overflow-hidden flex justify-between pr-6 mt-6">
              <div className=" flex items-center justify-center">
                <div className="overflow-hidden h-28 object-cover flex items-center justify-center">
                  <Image src={item.img} width={128} height={78} alt=""></Image>
                </div>
                <div className="ml-4 ">
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  {item.tag.map((itm, idx) => (
                    <span className="badge-blue">{itm}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <CloseOutlined />
                </button>
              </div>
            </div>
          ))}
        </Card>
        <div className="max-w-[1000px] m-auto mt-6 flex justify-center gap-6">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            data-modal-toggle="new-card-modal"
            className="flex justify-center items-center py-2 px-4 w-full font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:border-gray-300"
          >
            <ImportOutlined></ImportOutlined>
            Thêm đề
          </button>
        </div>
      </div>
      <div className="border-l border-gray-200 z-50 w-96 p-6 h-full">
        <h3 className="text-xl inline-block font-semibold mb-2">Cấu hình</h3>
        <div className="mb-6">
          <Switch></Switch>
        </div>
        <div className="mb-6">
          <label
            className="text-xl inline-block font-semibold mb-2"
            htmlFor="Title"
          >
            Hạn làm bài
          </label>
          <input
            placeholder="Nhập tiêu đề vào đây"
            className="px-4 py-3 w-full border rounded"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="text-xl inline-block font-semibold mb-2"
            htmlFor="Title"
          >
            Hiển thị điểm
          </label>
          <div className="flex items-center mb-3">
            <input
              id="isShowResult-1"
              type="radio"
              value=""
              name="isShowResult"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Không hiện thị
            </label>
          </div>
          <div className="flex items-center  mb-3">
            <input
              id="isShowResult-2"
              type="radio"
              value=""
              name="isShowResult"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Khi làm bài xong
            </label>
          </div>
          <div className="flex items-center mb-3">
            <input
              id="isShowResult-2"
              type="radio"
              value=""
              name="isShowResult"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Khi tất cả làm xong
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label
            className="text-xl inline-block font-semibold mb-2"
            htmlFor="Title"
          >
            Cho xem đáp án
          </label>
          <div className="flex items-center mb-3">
            <input
              id="isShowResult-1"
              type="radio"
              value=""
              name="isShowAnswer"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Không hiện thị
            </label>
          </div>
          <div className="flex items-center mb-3">
            <input
              id="isShowAnswer-2"
              type="radio"
              value=""
              name="isShowAnswer"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Khi làm bài xong
            </label>
          </div>
          <div className="flex items-center mb-3">
            <input
              id="isShowAnswer-2"
              type="radio"
              value=""
              name="isShowAnswer"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Khi tất cả làm xong
            </label>
          </div>
          <div className="flex items-center mb-3">
            <input
              id="isShowAnswer-2"
              type="radio"
              value=""
              name="isShowAnswer"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Khi đạt đến số điểm nhất định
            </label>
          </div>
        </div>
        <div>
          <Button className="w-full">Lưu</Button>
        </div>
      </div>
      <Modal open={isOpen} onCancel={() => setIsOpen(false)}>
        <Table dataSource={alreadyQuizs} columns={columns}></Table>
      </Modal>
    </div>
  );
}
