'use client';
import {fetcher} from '@/api/fetcher';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import ModalConfirm from '@/components/ModalConfirm';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import TableFooter from '@/components/TableFooter';
import {formatDate} from '@/utils/formatDate';
import {notification} from '@/utils/notification';
import {UploadOutlined} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';

export default function Student() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<string>('');

  useEffect(() => {
    fetcher.get('/api/students').then((res) => {
      setDataInit(res.data.data);
    });
  }, []);

  const handleDeleteTeacher = () => {
    console.log(selectedStudent);
    setIsOpen(false);
    fetcher
      .delete(`/api/students/${selectedStudent}`)
      .then((res) => {
        console.log(res);
        notification.success({
          message: 'Thành công',
          description: 'Xoá người dùng thành công',
        });
        // refetch();
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
      title: 'Mã học sinh',
      dataIndex: 'studentId',
      key: 'studentId',
      // width: '10px',
    },
    {
      title: 'Thẻ',
      dataIndex: 'avatarUrl',
      key: 'avatarUrl',
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
                  setSelectedStudent(data.id);
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
                href="/admin/student/create"
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
        <TableFooter total={600}></TableFooter>
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
