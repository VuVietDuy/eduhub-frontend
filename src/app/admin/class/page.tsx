'use client';
import {getAllClasses} from '@/api/class';
import {fetcher} from '@/api/fetcher';
import {getAllTeacher} from '@/api/teacher';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import InputAuto from '@/components/InputAuto';
import Modal from '@/components/Modal';
import ModalConfirm from '@/components/ModalConfirm';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import TableFooter from '@/components/TableFooter';
import {notification} from '@/utils/notification';
import {
  BarsOutlined,
  CodeOutlined,
  SettingOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {Formik} from 'formik';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {IoAttachOutline} from 'react-icons/io5';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';
import {useQuery} from 'react-query';

export default function Class() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [listTeachers, setListTeachers] = useState<any[]>([]);

  const [selectedClass, setSelectedClass] = useState<string>('');
  const [isOpenModalDeleteClass, setIsOpenModalDeleteClass] =
    useState<boolean>(false);
  const {refetch, isLoading, isFetching} = useQuery(
    'GET_ALL_CLASSES',
    getAllClasses,
    {
      onSuccess: (res) => {
        console.log(res.data);
        setDataInit(res.data.data);
      },
    },
  );

  const deleteClass = () => {
    setIsOpenModalDeleteClass(false);
    notification.success({
      message: 'Xóa lớp thành công',
    });
    refetch();
  };

  useEffect(() => {
    refetch();
    getAllTeacher().then((res) => {
      var a: any[] = [];
      res.data.data.forEach((item: any) => {
        const teacherName = `${item.firstName} ${item.lastName}`;
        a = [...a, teacherName];
      });
      setListTeachers(a);
    });
  }, []);

  const columns = [
    {
      title: 'Mã lớp',
      dataIndex: 'classID',
      key: 'classID',
      render: (data: any) => (
        <span className="font-semibold">
          {data.course}
          {data.className}
        </span>
      ),
    },
    {
      title: 'Lớp',
      dataIndex: 'className',
      key: 'className',
    },
    {
      title: 'Khoá',
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: 'Giáo viên chủ nhiệm',
      dataIndex: 'formTeacher',
      key: 'formTeacher',
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      key: 'action',
      render: (data: any) => (
        <>
          <Dropdown
            menu={[
              {
                key: 'viewMore',
                label: <span>Xem thêm</span>,
                onClick: () => {
                  router.push(`/admin/class/${data._id}/info`);
                },
              },
              {
                key: 'delete',
                label: <span>Xoá</span>,
                onClick: () => {
                  setSelectedClass(data._id);
                  setIsOpenModalDeleteClass(true);
                },
              },
            ]}
          >
            <MdOutlineMoreVert />
          </Dropdown>
        </>
      ),
    },
  ];

  const getSelectedVal = (value: any) => {
    console.log(value);
  };

  const getChanges = (value: any) => {
    console.log(value);
  };

  const handleOnSubmit = (value: any) => {
    console.log(value);
    fetcher
      .post('/api/classes/', value)
      .then((response: any) => {
        console.log(response.data);
        notification.success({
          message: 'Thành công',
          description: 'Thêm lớp thành công',
        });
        setIsOpen(false);
        refetch();
      })
      .catch((error) => {
        notification.success({
          message: 'Lỗi',
          description: 'Lỗi thêm tài khoản',
        });
      });
  };
  return (
    <div className="m-6">
      <Card className="mb-6">
        <div className="flex justify-between">
          <div className="w-36">
            <form action="">
              <SearchInput />
            </form>
          </div>
          <div className="flex">
            <Button>
              <UploadOutlined className="mr-1" />
              Import
            </Button>
            <Button
              className="ml-2"
              type="green"
              onClick={() => setIsOpen(true)}
            >
              <MdAdd className="mr-1" />
              Thêm mới
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <Table dataSource={dataInit} columns={columns}></Table>
        <TableFooter total={16}></TableFooter>
      </Card>
      <Modal
        open={isOpen}
        title="Thêm mới lớp học"
        onCancel={() => {
          setIsOpen(false);
        }}
        className="min-w-620"
        footer={[]}
      >
        <Formik
          initialValues={{
            className: '',
            course: '',
            teacher: '',
            description: '',
            formTeacher: '',
          }}
          onSubmit={handleOnSubmit}
        >
          {({values, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <div className="input-controller">
                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Lớp
                </label>
                <input
                  value={values.className}
                  onChange={handleChange}
                  name="className"
                  type="text"
                  className="input"
                  placeholder="Lớp"
                  required
                />
              </div>
              <div className="input-controller">
                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Khoá
                </label>
                <input
                  value={values.course}
                  onChange={handleChange}
                  name="course"
                  type="text"
                  className="input"
                  placeholder="Khoá"
                  required
                />
              </div>
              <div className="input-controller">
                <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                  Giáo viên chủ nhiệm
                </label>
                <InputAuto
                  label="languages"
                  pholder="Keyword..."
                  data={listTeachers}
                  onSelected={getSelectedVal}
                  onChange={getChanges}
                />
              </div>
              <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                Mô tả
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
                        <SettingOutlined></SettingOutlined>
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
              </button>{' '}
            </form>
          )}
        </Formik>
      </Modal>
      <ModalConfirm
        open={isOpenModalDeleteClass}
        onCancel={() => {
          setIsOpenModalDeleteClass(false);
        }}
        onOk={deleteClass}
        message="Bạn có chắc chắn muốn xoá môn học này?"
      ></ModalConfirm>
    </div>
  );
}
