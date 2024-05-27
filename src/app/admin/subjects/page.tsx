'use client';
import {fetcher} from '@/api/fetcher';
import {getAllSubject} from '@/api/subjects';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import {MenuProps} from '@/components/MenuProps';
import ModalConfirm from '@/components/ModalConfirm';
import Table from '@/components/Table';
import {notification} from '@/utils/notification';
import {
  BarsOutlined,
  CodeOutlined,
  SettingFilled,
  UploadOutlined,
} from '@ant-design/icons';
import {Formik} from 'formik';
import Image from 'next/image';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {IoAttachOutline} from 'react-icons/io5';
import {MdDelete, MdOutlineMoreVert} from 'react-icons/md';
import {useQuery} from 'react-query';

export default function SubjectManagement() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const deleteSubject = () => {
    fetcher
      .delete(`api/subjects/${selectedSubject}`)
      .then((data) => {
        refetch();
        notification.success({
          message: 'Thành công',
          description: 'Xoá môn học thành công',
        });
        setIsOpen(false);
      })
      .catch((err) => {
        notification.error({
          message: 'Lỗi',
          description: 'Xoá môn học thất bại, vui lòng thử lại',
        });
      });
  };

  const {refetch, isLoading, isFetching} = useQuery(
    'GET_ALL_TEACHERS',
    getAllSubject,
    {
      onSuccess: (res) => {
        setDataInit(res.data.data);
      },
    },
  );

  useEffect(() => {
    refetch();
  }, []);

  const columns = [
    {
      title: 'id',
      dataIndex: '_id',
      key: 'id',
      width: '10px',
    },
    {
      title: 'Img',
      dataIndex: 'imgUrl',
      key: 'imgUrl',
      render: (data: any) => (
        <Image src={data.imgUrl} width={50} height={50} alt=""></Image>
      ),
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      key: 'action',
      render: (data: any) => (
        <Dropdown
          menu={[
            {
              key: 'edit',
              label: <span>Chỉnh sửa</span>,
            },
            {
              key: 'delete',
              label: <span>Xoá</span>,
              onClick: () => {
                setSelectedSubject(data._id);
                setIsOpen(true);
              },
            },
          ]}
        >
          <MdOutlineMoreVert />
        </Dropdown>
      ),
    },
  ];
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

  const handleOnSubmit = (
    e: {name: string | Blob; description: string | Blob},
    {resetForm}: any,
  ) => {
    console.log(e);
    const data = new FormData();
    data.append('name', e.name);
    data.append('description', e.description);
    if (imgUploaded) {
      const blob = new Blob([imgUploaded], {type: 'image/*'});
      data.append('img', blob);
    }
    fetcher.post('api/subjects', data).then((res) => {
      console.log(res);
      refetch();
      resetForm();
    });
  };

  const itemsDropdown: MenuProps['items'] = [
    {
      key: 'viewMore',
      label: (
        <>
          <button>Xem thêm</button>
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

  return (
    <div className="m-6 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-3">
        <Card>
          <Formik
            initialValues={{
              name: '',
              description: '',
            }}
            onSubmit={handleOnSubmit}
          >
            {({values, handleChange, handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mb-6">
                    <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                      Ảnh bìa
                    </label>

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
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                    Tên môn học
                  </label>
                  <input
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tên môn học"
                    required
                  />
                </div>

                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Tên môn học
                </label>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <IoAttachOutline></IoAttachOutline>
                        </button>

                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <UploadOutlined></UploadOutlined>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <CodeOutlined></CodeOutlined>
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <BarsOutlined></BarsOutlined>
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
                    <label className="sr-only">Publish post</label>
                    <textarea
                      id="editor"
                      rows={8}
                      className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800  dark:text-white dark:placeholder-gray-400 "
                      placeholder="Ghi chú"
                      required
                      value={values.description}
                      onChange={handleChange}
                      name="description"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Lưu
                </button>
              </form>
            )}
          </Formik>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-9">
        <Card>
          {dataInit ? (
            <Table dataSource={dataInit} columns={columns}></Table>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <ModalConfirm
        open={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        onOk={deleteSubject}
        message="Bạn có chắc chắn muốn xoá môn học này?"
      ></ModalConfirm>
    </div>
  );
}
