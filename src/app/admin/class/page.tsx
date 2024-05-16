'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import {MenuProps} from '@/components/MenuProps';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import {UploadOutlined} from '@ant-design/icons';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import {MdOutlineMoreVert, MdAdd} from 'react-icons/md';

export default function Class() {
  const [dataInit, setDataInit] = useState<[]>([]);
  const router = useRouter();

  const itemsDropdown: MenuProps['items'] = [
    {
      key: 'viewMore',
      label: (
        <>
          <button
            onClick={() => {
              router.push('class/1/info');
            }}
          >
            Xem thêm
          </button>
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
      title: 'Mã lớp',
      dataIndex: 'classID',
      key: 'classID',
    },
    {
      title: 'Lớp',
      dataIndex: 'class',
      key: 'class',
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
          <Dropdown menu={itemsDropdown}>
            <MdOutlineMoreVert />
          </Dropdown>
        </>
      ),
    },
  ];
  const data = [
    {
      classID: 'B21DCPT089',
      class: 'A1',
      course: 'K55',
      formTeacher: 'Vũ Viết Duy',
    },
    {
      classID: 'B21DCPT089',
      class: 'A1',
      course: 'K55',
      formTeacher: 'Vũ Viết Duy',
    },
    {
      classID: 'B21DCPT089',
      class: 'A1',
      course: 'K55',
      formTeacher: 'Vũ Viết Duy',
    },
    {
      classID: 'B21DCPT089',
      class: 'A1',
      course: 'K55',
      formTeacher: 'Vũ Viết Duy',
    },
    {
      classID: 'B21DCPT089',
      class: 'A1',
      course: 'K55',
      formTeacher: 'Vũ Viết Duy',
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
