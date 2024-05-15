import Card from '@/components/Card';
import React from 'react';

export default function Info() {
  return (
    <div className="">
      <Card className="m-6 ">
        <div className="mb-5 md:mb-7 flex gap-10">
          <div className=" p-6 bg-cyan-200 inline-block rounded-md ">
            <p className="text-[1.5rem]">34 Học sinh</p>
          </div>
          <div className=" p-6 bg-cyan-200 inline-block rounded-md">
            <p className="text-[1.5rem]">20 Học sinh giỏi</p>
          </div>
        </div>
        <div className=" lg:flex mr-6">
          <div className="md:mr-[12rem] flex flex-col gap-4 mb-4">
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Giáo viên chủ nhiệm</p>
              <div className="bg-cyan-400  p-4 rounded-md min-w-[13rem]">
                Nguyễn Thanh Thảo
              </div>
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Năm học</p>
              <div className="bg-cyan-400  p-4 rounded-md min-w-[13rem]">
                2023-2024
              </div>
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Khóa</p>
              <div className="bg-cyan-400  p-4 rounded-md min-w-[13rem]">
                K55
              </div>
            </div>
          </div>
          <div className="md:mr-[12rem] flex flex-col gap-4">
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Lớp trưởng</p>
              <div className="bg-cyan-400  p-4 rounded-md min-w-[13rem]">
                Nguyễn Phương Mai
              </div>
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Lớp phó</p>
              <div className="bg-cyan-400  p-4 rounded-md min-w-[13rem]">
                Trần Xuân Lâm
              </div>
            </div>
            <div className="flex justify-between min-w-[430px] ">
              <p className="p-4">Phòng học</p>
              <div className="bg-cyan-400  p-4 rounded-md min-w-[13rem]">
                P301
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
