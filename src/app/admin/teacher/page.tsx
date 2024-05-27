'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';

import {UploadOutlined} from '@ant-design/icons';
import {fetcher} from '@/api/fetcher';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import TableFooter from '@/components/TableFooter';
import {formatDate} from '@/utils/formatDate';
import ModalConfirm from '@/components/ModalConfirm';
import {notification} from '@/utils/notification';
import {useQuery} from 'react-query';
import Avatar from '@/components/Avatar';

async function getAllTeachers() {
  return fetcher.get('/api/teachers?limit=5');
}

export default function Teacher() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTeacher, setSelectedTeacher] = useState<string>('');
  const {refetch, isLoading, isFetching} = useQuery(
    'GET_ALL_TEACHERS',
    getAllTeachers,
    {
      onSuccess: (res) => {
        console.log(res.data);
        setDataInit(res.data.data);
      },
    },
  );

  useEffect(() => {
    refetch();
  }, []);

  const handleDeleteTeacher = () => {
    console.log(selectedTeacher);
    setIsOpen(false);
    fetcher
      .delete(`/api/teachers/${selectedTeacher}`)
      .then((res) => {
        console.log(res);
        notification.success({
          message: 'Thành công',
          description: 'Xoá người dùng thành công',
        });
        refetch();
      })
      .catch((error) => {
        notification.error({
          message: 'Lỗi',
          description: 'Xoá người dùng thất bại, vui lòng thử lại',
        });
      });
  };

  const columns = [
    {
      title: 'Mã giáo viên',
      dataIndex: 'teacherId',
      key: 'teacherId',
      // width: '10px',
    },
    {
      title: 'Thẻ',
      dataIndex: 'teacherCard',
      key: 'teacherCard',
      render: (data: any) => (
        <>
          {data.src ? (
            <Image src={data.teacherCard} width={50} height={50} alt=""></Image>
          ) : (
            <Avatar>{data.firstName[0]}</Avatar>
          )}
        </>
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
      key: 'dateOfBirth',
      render: (data: any) => <span>{formatDate(data.dateOfBirth)}</span>,
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      render: (data: any) => <span>{data.gender ? 'Nam' : 'Nữ'}</span>,
    },
    {
      title: 'Vị trí',
      dataIndex: 'position',
      key: 'position',
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
                key: 'edit',
                label: <span>Chỉnh sửa</span>,
              },
              {
                key: 'delete',
                label: <span>Xoá</span>,
                onClick: () => {
                  setSelectedTeacher(data.id);
                  setIsOpen(true);
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
        <Table dataSource={dataInit} columns={columns}></Table>
        <TableFooter></TableFooter>
      </Card>
      <ModalConfirm
        open={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        onOk={handleDeleteTeacher}
        message="Bạn có chắc chắn muốn xoá người dùng này?"
      ></ModalConfirm>
    </div>
  );
}
