'use client';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import {
  CheckCircleFilled,
  CheckOutlined,
  CloseCircleFilled,
  FlagFilled,
  MinusCircleFilled,
} from '@ant-design/icons';
import {useState} from 'react';

const listQues = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export default function TestResult() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={'m-6 p-6 rounded-lg bg-white shadow-lg shadow-gray-200'}>
      <h3 className={'mb-6'}>Kết quả</h3>
      <div
        className={'grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-x-8 mb-6'}
      >
        <div
          className={'p-6 rounded-lg shadow-gray-200 border bg-gray-50 w-full'}
        >
          <div>
            <table className="w-full text-left text-gray-500">
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-gray-900 whitespace-nowrap"
                  >
                    <CheckCircleFilled></CheckCircleFilled>
                  </th>
                  <td className="py-4">Kết quả làm bài</td>
                  <td className="py-4 font-semibold">40/50</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-gray-900 whitespace-nowrap"
                  >
                    <CheckCircleFilled></CheckCircleFilled>
                  </th>
                  <td className="py-4">Kết quả làm bài</td>
                  <td className="py-4 font-semibold">40/50</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="py-4 text-gray-900 whitespace-nowrap"
                  >
                    <CheckCircleFilled></CheckCircleFilled>
                  </th>
                  <td className="py-4">Kết quả làm bài</td>
                  <td className="py-4 font-semibold">40/50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={'md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8'}>
          <div
            className={
              'rounded-lg border flex flex-col justify-center items-center p-2'
            }
          >
            <h3 className={'text-green-700 mb-2'}>
              <CheckCircleFilled />
            </h3>
            <h4 className={'text-green-700 mb-2'}>Số câu đúng</h4>
            <h3>40</h3>
          </div>
          <div
            className={
              'rounded-lg border flex flex-col justify-center items-center p-2'
            }
          >
            <h3 className={'text-red-700 mb-2'}>
              <CloseCircleFilled />
            </h3>
            <h4 className={'text-red-700 mb-2'}>Số câu sai</h4>
            <h3>10</h3>
          </div>
          <div
            className={
              'rounded-lg border flex flex-col justify-center items-center p-2'
            }
          >
            <h3 className={'text-gray-700 mb-2'}>
              <MinusCircleFilled />
            </h3>
            <h4 className={'text-gray-700 mb-2'}>Bỏ qua</h4>
            <h3>0</h3>
          </div>
          <div
            className={
              'rounded-lg border flex flex-col justify-center items-center p-2'
            }
          >
            <h3 className={'text-gray-700 mb-2'}>
              <FlagFilled />
            </h3>
            <h4 className={'text-gray-700 mb-2'}>Điểm số</h4>
            <h3>8</h3>
          </div>
        </div>
      </div>
      <h3 className={'mb-6'}>Đáp án</h3>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'}>
        {listQues.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className={'flex items-center'}>
            <div
              className={
                'rounded-full w-8 h-8 flex items-center justify-center bg-blue-200 text-blue-950 font-bold mr-2'
              }
            >
              <span>{index}</span>
            </div>
            <span>A:</span>
            <span className={'line-through mr-2'}>D</span>
            <CheckOutlined className={'text-green-700 mr-2'} />
            <Button
              className="bg-gray-100 hover:bg-gray-200 text-black font-thin"
              type="gray"
              onClick={() => setIsOpen(true)}
            >
              Chi tiết
            </Button>
          </div>
        ))}
      </div>
      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        title="Câu 1"
        // footer={[]}
      >
        <div>
          <h4 className={'text-gray-500'}>Tiêu đề bài thi</h4>
        </div>
        <hr className={'my-8'} />
        <div className={'flex items-center mb-4'}>
          <div>
            <div
              className={
                'w-8 h-8 rounded-full flex items-center justify-center bg-blue-200 text-blue-950 font-bold mr-2'
              }
            >
              <span>1</span>
            </div>
          </div>
          <p>
            Mark the letter A, B, C, or D on your answer sheet to indicate the
            correct answer to each of the following questions
          </p>
        </div>
        <ul className={'ml-10'}>
          <li>
            <span>A. red Japanese expensive</span>
          </li>
          <li>
            <span>B. red Japanese expensive</span>
          </li>
          <li>
            <span>C. red Japanese expensive</span>
          </li>
          <li>
            <span>D. red Japanese expensive</span>
          </li>
        </ul>
        <hr className={'my-8'} />
        <Accordion title={'Giải thích'}>
          <>
            <p>
              Khi có nhiều tính từ cùng đứng trước 1 danh từ, sắp xếp chúng theo
              thứ tự: OSASCOMP + N. Trong đó:
            </p>
            <ul>
              <li>O – opinion: quan điểm</li>
              <li>S – size: kích thước</li>
              <li>A – age: độ tuổi (mới, cũ, trẻ, già,…)</li>
              <li>S – shape: hình dạngm</li>
              <li>C – color: màu sắc</li>
              <li>O – origin: nguồn gốc</li>
            </ul>
          </>
        </Accordion>
      </Modal>
    </div>
  );
}
