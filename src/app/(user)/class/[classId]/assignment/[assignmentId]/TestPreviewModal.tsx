import Modal from '@/components/Modal';
import Image from 'next/image';
import React from 'react';

export default function TestPreviewModal({
  isOpenTestModal,
  handleCancelTestModal,
}: {
  isOpenTestModal: boolean;
  handleCancelTestModal: () => void;
}) {
  return (
    <>
      <Modal
        width={'lg:w-[40%] md:w-[60%] w-[80%]'}
        className="max-h-[90vh] "
        title={'Thông tin phần thi'}
        open={isOpenTestModal}
        okButton="Bắt đầu thi"
        cancelButton="Huỷ"
        onCancel={() => handleCancelTestModal()}
      >
        <div className="max-h-[calc(90vh-200px)]   md:grid-cols-1  overflow-y-auto">
          <div className="border rounded-lg border-gray-300 w-full h-36 flex items-center overflow-hidden">
            <img
              src="/logo.png"
              className="object-contain w-full h-full"
              alt={'testCover'}
            />
          </div>
          <div className="mt-3 ">
            <h3 className="font-bold text-center text-xl mb-4">
              Đề kiểm tra giữa kì
            </h3>
            <div className=" px-12">
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <label className="col-span-1">Môn học</label>
                <p className="font-bold col-span-1">Toán</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <label className="col-span-1">Chủ đề:</label>
                <p className="font-bold col-span-1">
                  Hàm số, Tích phân, Đạo hàm
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <label className="col-span-1">Thời lượng</label>
                <p className="font-bold col-span-1">60 phút</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <label className="col-span-1">Thời gian bắt đầu</label>
                <p className="font-bold col-span-1">8 giờ 00 phút</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <label className="col-span-1">Thời gian kết thúc</label>
                <p className="font-bold col-span-1">9 giờ 00 phút</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <label className="col-span-1">Số lượng câu hỏi:</label>
                <p className="font-bold col-span-1 ">40 câu</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <label className="col-span-1">Phần thi:</label>
                <div className="col-span-1 grid-cols-1 ">
                  <p className="font-bold col-span-1">
                    1. Trắc nghiệm (35 câu)
                  </p>
                  <p className="font-bold col-span-1">2. Tự luận (5 câu)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
