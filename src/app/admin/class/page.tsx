'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import {MenuProps} from '@/components/MenuProps';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import TableFooter from '@/components/TableFooter';
import {UploadOutlined} from '@ant-design/icons';
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
              router.push('/admin/class/1/info');
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
      render: (data: any) => (
        <span className="font-semibold">{data.classID}</span>
      ),
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
      classID: 'A01K55',
      class: 'A01',
      course: 'K55',
      formTeacher: 'Vũ Viết Duy',
    },
    {
      classID: 'A02K55',
      class: 'A02',
      course: 'K55',
      formTeacher: 'Nguyễn Văn Duy',
    },
    {
      classID: 'A03K55',
      class: 'A03',
      course: 'K55',
      formTeacher: 'Trần Xuân Lâm',
    },
    {
      classID: 'A04K55',
      class: 'A04',
      course: 'K55',
      formTeacher: 'Hoàng Hữu Tiến Dũng',
    },
    {
      classID: 'A05K55',
      class: 'A05',
      course: 'K55',
      formTeacher: 'Trần Văn Lâm',
    },
    {
      classID: 'A06K55',
      class: 'A06',
      course: 'K55',
      formTeacher: 'Vũ Thị Minh Ngọc',
    },
    {
      classID: 'A07K55',
      class: 'A07',
      course: 'K55',
      formTeacher: 'Trần Thanh Tâm',
    },
    {
      classID: 'A08K55',
      class: 'A08',
      course: 'K55',
      formTeacher: 'Vũ Văn Toản',
    },
    {
      classID: 'A09K55',
      class: 'A09',
      course: 'K55',
      formTeacher: 'Võ Yên Nhi',
    },
    {
      classID: 'A10K55',
      class: 'A10',
      course: 'K55',
      formTeacher: 'Trần Quang Thắng',
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
        <TableFooter total={16}></TableFooter>
      </Card>
    </div>
  );
}
