'use client';

import React, {ChangeEvent, useState} from 'react';
import {Formik} from 'formik';
import Image from 'next/image';
import {FaUpload} from 'react-icons/fa6';
import {MdDelete} from 'react-icons/md';

import {fetcher} from '@/api/fetcher';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {SettingFilled} from '@ant-design/icons';
import {notification} from '@/utils/notification';
import {useRouter} from 'next/navigation';

export default function CreateTeacher() {
  const [imgUploaded, setImgUploaded] = useState<ArrayBuffer | null | string>(
    null,
  );

  const router = useRouter();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUploaded(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOnSubmit = (e: any) => {
    console.log(e);
    fetcher.post('/api/teachers', e).then((res) => {
      notification.info({
        message: 'Thành công',
        description: 'Thêm hồ sơ giáo viên thành công',
      });
      router.push('/admin/teacher');
    });
  };

  return (
    <div className="p-6">
      <Card title="HỒ SƠ GIÁO VIÊN">
        <Formik
          initialValues={{
            teacherId: '',
            firstName: '',
            lastName: '',
            email: '',
            dateOfBirth: '',
            placeOfBirth: '',
            academicLevel: '',
            position: '',
            permanentAddress: '',
            citizenIdentification: '',
            issuedBy: '',
            description: '',
          }}
          onSubmit={handleOnSubmit}
        >
          {({values, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-12 sm:col-span-3">
                  <div className="border cursor-pointer w-full min-h-24 h-full flex justify-center items-center">
                    {imgUploaded ? (
                      <div className="flex items-center justify-center relative w-full h-full overflow-hidden ">
                        <Image
                          width={160}
                          height={150}
                          src={imgUploaded as string}
                          alt="Selected"
                          className="object-contain max-w-[200px]"
                        />
                        <button
                          className="absolute bottom-4 right-4 p-3 rounded-full bg-red-500 cursor-pointer outline-none border-none hover:shadow-me duration-200 transition-all ease-in-out"
                          onClick={() => setImgUploaded(null)}
                        >
                          <MdDelete className="text-white" />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer">
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="flex flex-col justify-center items-center">
                            <FaUpload className="text-4xl text-gray-600 dark:text-gray-200 mt-6" />
                            <p className="text-lg mt-3">Nhấn để thêm ảnh</p>
                          </div>
                        </div>
                        <input
                          type="file"
                          name="file"
                          // Nếu isImage=true thì chấp nhận mọi file có có type là image. Ngược lại các file có type là audio
                          accept="image/*"
                          className="w-0 h-0 cursor-pointer"
                          onChange={(e) => handleImageChange(e)}
                        />
                      </label>
                    )}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <div className="mb-6">
                    <label className="input-label">Tên</label>
                    <input
                      value={values.firstName}
                      onChange={handleChange}
                      name="firstName"
                      type="text"
                      className="input"
                      placeholder="Tên"
                    />
                  </div>
                  <div className="">
                    <label className="input-label">Họ</label>
                    <input
                      value={values.lastName}
                      onChange={handleChange}
                      name="lastName"
                      type="text"
                      className="input"
                      placeholder="Họ"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                  <div className="mb-6">
                    <label className="input-label">Ngày sinh</label>
                    <input
                      value={values.dateOfBirth}
                      onChange={handleChange}
                      name="dateOfBirth"
                      type="date"
                      className="input"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="input-label">Nơi sinh</label>
                    <input
                      value={values.placeOfBirth}
                      onChange={handleChange}
                      name="placeOfBirth"
                      type="text"
                      className="input"
                      placeholder="Nơi sinh"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                  <div className="mb-6">
                    <label className="input-label">Căn cước công dân</label>
                    <input
                      value={values.citizenIdentification}
                      onChange={handleChange}
                      name="citizenIdentification"
                      type="text"
                      className="input"
                      placeholder="0123456789"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="input-label">Nơi cấp</label>
                    <input
                      value={values.issuedBy}
                      onChange={handleChange}
                      name="issuedBy"
                      type="text"
                      className="input"
                      placeholder="Nơi cấp"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <label className="input-label">Địa chỉ thường chú</label>
                    <input
                      value={values.permanentAddress}
                      onChange={handleChange}
                      name="permanentAddress"
                      type="text"
                      className="input"
                      placeholder="Địa chỉ thường chú"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="input-label">Email</label>
                    <input
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      className="input"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="input-label">Trình độ</label>
                    <input
                      value={values.position}
                      onChange={handleChange}
                      name="position"
                      type="text"
                      className="input"
                      placeholder="Chức vụ"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="input-label">Mã giáo viên</label>
                    <input
                      value={values.teacherId}
                      onChange={handleChange}
                      name="teacherId"
                      type="text"
                      className="input"
                      placeholder="Mã giáo viên"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="input-label">Chức vụ</label>
                    <input
                      value={values.position}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="input"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="input-label">Ghi chú</label>
                  <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                      <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              className="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 12 20"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                              />
                            </svg>
                            <span className="sr-only">Attach file</span>
                          </button>

                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              className="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 20"
                            >
                              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              className="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 20"
                            >
                              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                              <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              className="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 21 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                              />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <SettingFilled></SettingFilled>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                      <textarea
                        id="editor"
                        rows={8}
                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 ring-0"
                        placeholder="Ghi chú"
                        value={values.description}
                        onChange={handleChange}
                        name="description"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button>Lưu</Button>
              </div>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
