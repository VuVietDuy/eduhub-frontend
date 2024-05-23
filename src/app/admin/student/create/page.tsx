'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {Formik} from 'formik';
import Image from 'next/image';
import React, {ChangeEvent, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {MdDelete} from 'react-icons/md';

export default function CreateStudent() {
  const [imgUploaded, setImgUploaded] = useState<ArrayBuffer | null | string>(
    null,
  );

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
  };

  return (
    <div className="p-6">
      <Card title="HỒ SƠ HỌC SINH">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
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
                          name="upload-file"
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
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Tên
                    </label>
                    <input
                      value={values.firstName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                  <div className="">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Họ
                    </label>
                    <input
                      value={values.lastName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Ngày sinh
                    </label>
                    <input
                      value={values.firstName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Nơi sinh
                    </label>
                    <input
                      value={values.lastName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Căn cước công dân
                    </label>
                    <input
                      value={values.lastName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Nơi cấp
                    </label>
                    <input
                      value={values.lastName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Địa chỉ thường chú
                    </label>
                    <input
                      value={values.lastName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Mã lớp học
                    </label>
                    <input
                      value={values.lastName}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên môn học"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                    Ghi chú
                  </label>
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
                            <span className="sr-only">Upload image</span>
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
                            <span className="sr-only">Format code</span>
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
                            <span className="sr-only">Add list</span>
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
                              viewBox="0 0 20 20"
                            >
                              <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                            </svg>
                            <span className="sr-only">Settings</span>
                          </button>
                        </div>
                      </div>
                      <div
                        id="tooltip-fullscreen"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                      >
                        Show full screen
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                      <label className="sr-only">Publish post</label>
                      <textarea
                        id="editor"
                        rows={8}
                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 ring-0"
                        placeholder="Write an article..."
                        required
                        value={''}
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
