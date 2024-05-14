'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import {UploadOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import {MdAdd, MdOutlineMoreVert} from 'react-icons/md';
import Image from 'next/image';
import {MenuProps} from '@/components/MenuProps';
import Modal from '@/components/Modal';
import TeacherModal from './TeacherModal';
import {render} from 'react-dom';

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [selectedTeacher, setSelectedTeacher] = useState<object>({});

  const handleSelectTeacher = (teacherRow: object) => {
    setSelectedTeacher(teacherRow);
  };
  const handleClickOption = (option: string) => {
    setIsModalOpen(true);
    if (option === 'viewMore') setTitle('Xem chi tiết phân công');
    else if (option === 'add') setTitle('Phân công giáo viên');
    else if (option === 'edit') setTitle('Chỉnh sửa phân công');
    else setTitle('Chỉnh sửa phân công');
  };

  const handleSaveInfo = () => {};
  const handleCancel = () => {};
  const itemsDropdown: MenuProps['items'] = [
    {
      key: 'viewMore',
      label: (
        <>
          <button
            className="flex flex-nowrap"
            onClick={() => handleClickOption('viewMore')}
          >
            Xem giáo viên
          </button>
        </>
      ),
    },
    {
      key: 'add',
      label: (
        <>
          <button
            className='flex flex-nowrap"'
            onClick={() => handleClickOption('add')}
          >
            Phân công giáo viên
          </button>
        </>
      ),
    },
  ];

  const data = [
    {
      subject: 'Toán',
      teacherId: 'GV001',
      teacher: 'Vũ Viết Duy',
    },
    {
      subject: 'Ngữ Văn',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Tiếng Anh',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Lịch sử',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Địa lý',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Vật Lý',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Hoá học',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Giáo dục công dân',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Giáo dục quốc phòng',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Giáo dục thể chất',
      teacherId: '',
      teacher: '',
    },
    {
      subject: 'Tin học',
      teacherId: '',
      teacher: '',
    },
  ];

  const columns = [
    {
      title: 'Môn học',
      dataIndex: 'subject',
      key: 'subject',
      width: '240px',
    },
    {
      title: 'Mã giáo viên',
      dataIndex: 'teacherId',
      key: 'teacherId',
      width: '240px',
      render: (data: any) => {
        if (data.teacherId === '') return <i>chưa phân công</i>;
        else {
          return <span>{data.teacherId}</span>;
        }
      },
    },
    {
      title: 'Giáo viên ',
      dataIndex: 'teacher',
      key: 'teacher',
      width: '400px',
      render: (data: any) => {
        if (data.teacherId === '') return <i>chưa phân công</i>;
        else {
          return <span>{data.teacherId}</span>;
        }
      },
    },

    {
      title: 'Thao tác',
      dataIndex: '',
      key: 'action',
      render: (data: any) => (
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>
          Phân công giáo viên
        </Button>
      ),
    },
  ];
  return (
    <div className="m-6">
      <Card className="overflow-y-scroll">
        <div className="h-[420px]">
          <Table
            // className="h-[800px]"
            dataSource={data}
            columns={columns}
          ></Table>
        </div>
      </Card>

      {isModalOpen && (
        <TeacherModal
          selectedTeacher={selectedTeacher}
          handleSelectTeacher={handleSelectTeacher}
          title={title}
          isModalOpen={isModalOpen}
          handleSetIsModalOpen={() => setIsModalOpen(!isModalOpen)}
          handleSaveInfo={handleSaveInfo}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}
