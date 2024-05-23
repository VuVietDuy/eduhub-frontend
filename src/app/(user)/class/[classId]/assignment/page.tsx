'use client';
import Accordion from '@/components/Accordion';
import Card from '@/components/Card';
import {MenuProps} from '@/components/MenuProps';
import React, {useState} from 'react';

const itemsDropdown: MenuProps['items'] = [
  {
    key: 'viewMore',
    label: (
      <>
        <button className="flex-nowrap">Sao chép liên kết</button>
      </>
    ),
  },
  {
    key: 'edit',
    label: (
      <>
        <button>Xem chi tiết</button>
      </>
    ),
  },
];

export default function page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="p-6">
      <Card>
        <Accordion
          itemMenus={itemsDropdown}
          publishedAt="10/10/2024"
          title={
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full">
                K
              </div>
              <h3>Kiểm tra giữa học kỳ I</h3>
            </div>
          }
          className="mb-6"
        >
          <div></div>
        </Accordion>
      </Card>
    </div>
  );
}
