'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import {MenuProps} from '@/components/MenuProps';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import TableFooter from '@/components/TableFooter';
import {UploadOutlined} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';

export default function Teacher() {
  const [dataInit, setDataInit] = useState<[]>([]);

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

  const columns = [
    {
      title: 'Mã giáo viên',
      dataIndex: 'teacherID',
      key: 'teacherID',
      // width: '10px',
    },
    {
      title: 'Thẻ',
      dataIndex: 'teacherCard',
      key: 'teacherCard',
      render: (data: any) => (
        <Image src={data.teacherCard} width={50} height={50} alt=""></Image>
      ),
    },
    {
      title: 'Họ',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Tên',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dateOfBirth',
      key: 'firstName',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      render: (data: any) => <span>{data ? 'Nam' : 'Nữ'}</span>,
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      key: 'action',
      render: (data: any) => (
        <>
          <Dropdown menu={itemsDropdown}>
            <MdOutlineMoreVert />
          </Dropdown>
        </>
      ),
    },
  ];
  const data = [
    {
      teacherID: 'GV001',
      teacherCard: '/img/teacherCard.jpg',
      firstName: 'Duy',
      lastName: 'Vũ Viết Duy',
      dateOfBirth: '10/10/1999',
      gender: 1,
    },
    {
      teacherID: 'GV002',
      teacherCard: '/img/teacherCard.jpg',
      firstName: 'Dũng',
      lastName: 'Nguyễn Tuấn',
      dateOfBirth: '10/10/1991',
      gender: 1,
    },
    {
      teacherID: 'GV003',
      teacherCard: '/img/teacherCard.jpg',
      firstName: 'Linh',
      lastName: 'Trần Tuấn',
      dateOfBirth: '10/10/1997',
      gender: 1,
    },
    {
      teacherID: 'GV004',
      teacherCard: '/img/teacherCard.jpg',
      firstName: 'Lâm',
      lastName: 'Trần Xuân',
      dateOfBirth: '10/10/1993',
      gender: 1,
    },
    {
      teacherID: 'GV005',
      teacherCard: '/img/teacherCard.jpg',
      firstName: 'Duy',
      lastName: 'Nguyễn Văn',
      dateOfBirth: '10/10/2000',
      gender: 1,
    },
  ];
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
            <Button className="ml-2" type="green">
              <Link
                href="/admin/teacher/create"
                className="flex gap-1 items-center"
              >
                <MdAdd className="mr-1" />
                Thêm mới
              </Link>
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <Table dataSource={data} columns={columns}></Table>
        <TableFooter></TableFooter>
      </Card>
    </div>
  );
}
