'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import {MenuProps} from '@/components/MenuProps';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import {UploadOutlined} from '@ant-design/icons';
import Image from 'next/image';
import React, {useState} from 'react';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';

export default function Student() {
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
      title: 'Mã học sinh',
      dataIndex: 'studentID',
      key: 'studentID',
      // width: '10px',
    },
    {
      title: 'Thẻ',
      dataIndex: 'studentCard',
      key: 'studentCard',
      render: (data: any) => (
        <Image src={data.studentCard} width={50} height={50} alt=""></Image>
      ),
    },
    {
      title: 'Họ',
      dataIndex: 'lastName',
      key: 'lastName',
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
      studentID: 'B21DCPT089',
      studentCard: '/img/studentCard.jpg',
      firstName: 'Duy',
      lastName: 'Vũ Viết Duy',
      dateOfBirth: '10/10/2003',
      gender: 1,
    },
    {
      studentID: 'B21DCPT089',
      studentCard: '/img/studentCard.jpg',
      firstName: 'Duy',
      lastName: 'Vũ Viết Duy',
      dateOfBirth: '10/10/2003',
      gender: 1,
    },
    {
      studentID: 'B21DCPT089',
      studentCard: '/img/studentCard.jpg',
      firstName: 'Duy',
      lastName: 'Vũ Viết Duy',
      dateOfBirth: '10/10/2003',
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
              <MdAdd className="mr-1" />
              Thêm mới
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