'use client';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';
import Card from '@/components/Card';
import ModalFullScreen from '@/components/ModalFullScreen';
import {ContainerFilled, PlusOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import AssignAssignment from './AssignAssignment';
import {MenuProps} from '@/components/MenuProps';

const itemsDropdown: MenuProps['items'] = [
  {
    key: 'viewMore',
    label: (
      <>
        <button
          onClick={() => {
            // router.push('/admin/class/1/info');
          }}
        >
          Xem thêm
        </button>
      </>
    ),
  },
  {
    key: 'edit',
    label: (
      <>
        <button>Chỉnh sửa</button>
      </>
    ),
  },
  {
    key: 'delete',
    label: (
      <>
        <button>Xoá</button>
      </>
    ),
  },
];

export default function page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const value = `
 <h1></h1> 
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
  return (
    <div className="p-6">
      <Card>
        <Button onClick={() => setIsOpen(true)} className="mb-6">
          <PlusOutlined className="mr-2 text-lg"></PlusOutlined>
          Tạo bài tập
        </Button>
        <Accordion
          title={
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full">
                K
              </div>
              <h3>Kiểm tra giữa học kỳ I</h3>
            </div>
          }
          publishedAt="10/10/2024"
          itemMenus={itemsDropdown}
          className="mb-6"
        >
          <p className="text-sm text-gray-500">Đến hạn 22:00 12/10/2024</p>
          <div className="flex justify-between mt-1">
            <div className="markdown">
              <div dangerouslySetInnerHTML={{__html: value}}></div>
            </div>
            <div>
              <div className="w-24 border-l-2 border-gray-200 flex flex-col items-center ml-6">
                <h4 className="text-3xl">10</h4>
                <span>Đã nộp</span>
              </div>
            </div>
          </div>
        </Accordion>
        <Accordion
          title={
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full">
                K
              </div>
              <h3>Kiểm tra 15</h3>
            </div>
          }
          publishedAt="10/10/2024"
          itemMenus={itemsDropdown}
          className="mb-6"
        >
          <p className="text-sm text-gray-500">Đến hạn 22:00 12/10/2024</p>
          <div className="flex justify-between mt-1">
            <div className="markdown">
              <div dangerouslySetInnerHTML={{__html: value}}></div>
            </div>
            <div>
              <div className="w-24 border-l-2 border-gray-200 flex flex-col items-center ml-6">
                <h4 className="text-3xl">10</h4>
                <span>Đã nộp</span>
              </div>
            </div>
          </div>
        </Accordion>
      </Card>
      <ModalFullScreen
        title={
          <div className="flex justify-center items-center">
            <div className="bg-gray-100 h-10 w-10 text-gray-400 rounded-full flex justify-center items-center mr-2">
              <ContainerFilled />
            </div>
            <h2>Bài tập</h2>
          </div>
        }
        onCancel={() => setIsOpen(false)}
        open={isOpen}
        footer={[]}
      >
        <AssignAssignment></AssignAssignment>
      </ModalFullScreen>
    </div>
  );
}
