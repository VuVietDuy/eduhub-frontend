'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import ComboBox from '@/components/ComboBox';
import Dropdown from '@/components/Dropdown';
import {MenuProps} from '@/components/MenuProps';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import {UploadOutlined} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';

export default function TeacherQuizHome() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string>('Chọn khối');
  const router = useRouter();
  const itemsDropdown: MenuProps['items'] = [
    {
      key: 'show',
      label: <button>Xem chi tiết</button>,
    },
    {
      key: 'edit',
      label: <button>Chỉnh sửa</button>,
    },
    {
      key: 'delete',
      label: <button>Xoá</button>,
    },
  ];
  const comboBoxMenu: MenuProps['items'] = [
    {
      key: 'all',
      label: (
        <button
          className="px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 rounded-t-sm"
          onClick={() => setSelectedGrade('Tất cả')}
        >
          Tất cả
        </button>
      ),
    },
    {
      key: 'grade-ten',
      label: (
        <button
          className="px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 "
          onClick={() => setSelectedGrade('Khối 10')}
        >
          Khối 10
        </button>
      ),
    },
    {
      key: 'grade-eleven',
      label: (
        <button
          className="px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 "
          onClick={() => setSelectedGrade('Khối 11')}
        >
          Khối 11
        </button>
      ),
    },
    {
      key: 'grade-twelve',
      label: (
        <button
          className="px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 rounded-b-[4px]"
          onClick={() => setSelectedGrade('Khối 12')}
        >
          Khối 12
        </button>
      ),
    },
  ];

  const columns = [
    {
      title: 'Mã đề thi',
      dataIndex: 'testId',
      key: 'testId',
      // width: '10px',
    },
    {
      title: 'Tên đề thi',
      dataIndex: 'testName',
      key: 'testName',
    },
    {
      title: 'Ảnh',
      dataIndex: 'testImg',
      key: 'testImg',
      render: (data: any) => (
        <Image src={'/logo.png'} width={50} height={50} alt=""></Image>
      ),
    },
    {
      title: 'Số bài đã nộp',
      dataIndex: 'countSubmit',
      key: 'countSubmit',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      // render: (data: any) => <span>{data ? 'Nam' : 'Nữ'}</span>,
    },
    {
      title: 'Sửa lần cuối',
      dataIndex: 'timeUpdate',
      key: 'timeUpdate',
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      key: 'action',
      render: (data: any) => (
        <>
          <Dropdown menu={itemsDropdown}>
            <Button type="white">
              <MdOutlineMoreVert className="text-gray-900" />
            </Button>
          </Dropdown>
        </>
      ),
    },
  ];
  const data = [
    {
      testId: '001',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Công khai',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '001',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Công khai',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '001',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Công khai',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '001',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Công khai',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '001',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Công khai',
      timeUpdate: '10/10/2003 14:03',
    },
  ];

  const handleSelectGrade = () => {};
  return (
    <div className="m-6">
      <Card className="mb-6">
        <div className="flex  justify-between">
          <div className="w-80 flex flex-1">
            <form action="" className="mr-6">
              <SearchInput />
            </form>
            <ComboBox
              // onChange={handleSelectGrade}
              selectedOption={selectedGrade}
              menu={comboBoxMenu}
            ></ComboBox>
          </div>
          <div className="flex flex-end">
            <Button>
              <UploadOutlined className="mr-1" />
              Import
            </Button>
            <Button className="ml-2" type="green">
              Tạo đề từ ngân hàng đề
            </Button>
            <Button
              className="ml-2"
              type="green"
              // onClick={() => {
              //   router.push('/teacher/quiz/create/info');
              // }}
            >
              <Link href={'quiz/create/info'}>
                <MdAdd className="mr-1 inline-block" />
                Thêm mới
              </Link>
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <Table dataSource={data} columns={columns}></Table>
      </Card>
    </div>
  );
}
