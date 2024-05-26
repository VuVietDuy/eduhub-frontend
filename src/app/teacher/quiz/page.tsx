'use client';
import {fetcher} from '@/api/fetcher';
import Button from '@/components/Button';
import Card from '@/components/Card';
import ComboBox from '@/components/ComboBox';
import Dropdown from '@/components/Dropdown';
import {MenuProps} from '@/components/MenuProps';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import TableFooter from '@/components/TableFooter';
import {RootState} from '@/redux/store';
import {UploadOutlined} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';
import {useSelector} from 'react-redux';

export default function TeacherQuizHome() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string | number>('Tất cả');
  const router = useRouter();
  const userId = useSelector((state: RootState) => state.user);
  console.log('check userId', userId._id);
  const itemsDropdown: MenuProps['items'] = [
    {
      key: 'edit',
      label: (
        <button className="hover:brightness-75">
          <FaEdit className="mr-3 text-xl text-blue-500" />
        </button>
      ),
    },
    {
      key: 'delete',
      label: (
        <button className="hover:brightness-75">
          <FaTrashAlt className="text-xl text-red-500" />
        </button>
      ),
    },
  ];

  const handleSelectGrade = (grade: string) => {
    if (grade === 'Khối 10') setSelectedGrade(10);
    else if (grade === 'Khối 11') setSelectedGrade(11);
    else if (grade === 'Khối 12') setSelectedGrade(12);
    else setSelectedGrade('Tất cả');
  };

  useEffect(() => {
    if (selectedGrade === 'Tất cả') {
      fetcher
        .get(`api/quizzes/${userId}`)
        .then((res) => {
          console.log('check  ', res.data.data);
          setDataInit(res.data.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetcher
      .get(`api/quizzes/${userId}/${selectedGrade}`)
      .then((res) => {
        console.log('check  ', res.data.data);
        setDataInit(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [selectedGrade]);
  useEffect(() => {
    fetcher
      .get(`api/quizzes/${userId}`)
      .then((res) => {
        console.log('check  ', res.data.data);
        setDataInit(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const comboBoxMenu: MenuProps['items'] = [
    {
      key: 'all',
      label: (
        <button
          className="px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 rounded-t-sm"
          onClick={() => handleSelectGrade('Tất cả')}
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
          onClick={() => handleSelectGrade('Khối 10')}
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
          onClick={() => handleSelectGrade('Khối 11')}
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
          onClick={() => handleSelectGrade('Khối 12')}
        >
          Khối 12
        </button>
      ),
    },
  ];

  const columns = [
    {
      title: 'Mã đề thi',
      dataIndex: 'quizzId',
      key: 'quizzId',
      // width: '10px',
    },
    {
      title: 'Tên đề thi',
      dataIndex: 'title',
      key: 'title',
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
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      // render: (data: any) => <span>{data ? 'Nam' : 'Nữ'}</span>,
    },
    {
      title: 'Sửa lần cuối',
      dataIndex: 'updatedAt',
      key: 'upadatedAt',
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      key: 'action',
      render: (data: any) => (
        <>
          <div className="flex items-center flex-nowrap">
            <button>
              <FaEdit className="mr-3 text-2xl text-blue-500" />
            </button>
            <button>
              <FaTrashAlt className="text-xl text-red-500" />
            </button>
          </div>
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
      status: 'Chưa giao',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '002',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Chưa giao',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '003',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Chưa giao',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '004',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Chưa giao',
      timeUpdate: '10/10/2003 14:03',
    },
    {
      testId: '005',
      testName: 'Đề cuối học kỳ 1 Toán 12 năm 2024',
      testImg: '/img/studentCard.jpg',
      countSubmit: '30',
      status: 'Chưa giao',
      timeUpdate: '10/10/2003 14:03',
    },
  ];
  // console.log()

  return (
    <div className="my-4 mx-6">
      <Card className="mb-4 px-3 py-3">
        <div className="flex  justify-between">
          <div className="w-80 flex flex-1">
            <form action="" className="mr-6">
              <SearchInput />
            </form>
            <ComboBox
              // onChange={handleSelectGrade}
              selectedOption={
                selectedGrade === 'Tất cả' ? 'Tất cả' : `Khối ${selectedGrade}`
              }
              menu={comboBoxMenu}
            ></ComboBox>
          </div>
          <div className="flex flex-end">
            <Button>
              <UploadOutlined className="mr-1" />
              Import
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
      <Card className="max-h-fit overflow-hidden px-4 py-4">
        <Table className="" dataSource={dataInit} columns={columns}></Table>
        <TableFooter className="px-4 py-0" />
      </Card>
    </div>
  );
}
