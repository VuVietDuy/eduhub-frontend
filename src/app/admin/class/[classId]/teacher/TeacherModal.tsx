import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import Table from '@/components/Table';
import Image from 'next/image';
import React, {useState} from 'react';

interface IProps {
  title?: string;
  isModalOpen: boolean | undefined;
  handleSetIsModalOpen: () => void;
  handleSaveInfo?: () => void;
  handleCancel?: () => void;
  selectedTeacher?: object;
  handleSelectTeacher: (teacher: object) => void;
}

const data = [
  {
    teacherId: 'GV001',
    fullName: 'Vũ Viết Duy',
    gender: 1,
    currentClasses: ['10A2', '11A4', '10A3', '10A4'],
  },
  {
    teacherId: 'GV001',
    fullName: 'Vũ Viết Duy',
    gender: 1,
    currentClasses: [
      '10A2',
      '11A4',
      '10A3',
      '10A4',
      '12A4',
      '11A3',
      '11A2',
      '10A6',
      '11A7',
    ],
  },
  {
    teacherId: 'GV001',
    fullName: 'Vũ Viết Duy',
    gender: 1,
    currentClasses: ['10A2', '11A4', '10A3', '10A4'],
  },
  {
    teacherId: 'GV001',
    fullName: 'Vũ Viết Duy',
    gender: 1,
    currentClasses: ['10A2', '11A4', '10A3', '10A4'],
  },
];

export default function TeacherModal(props: IProps) {
  const {
    title,
    isModalOpen,
    handleSetIsModalOpen,
    handleSaveInfo,
    handleCancel,
    handleSelectTeacher,
    selectedTeacher,
  } = props;
  // const [selectedTeacher, setSelectedTeacher] = useState<object>({});

  const columns = [
    {
      title: 'Mã giáo viên',
      dataIndex: 'teacherId',
      key: 'teacherId',
      width: '140px',
    },
    {
      title: 'Họ tên ',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '160px',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      width: '120px',
      render: (data: any) => <span>{data ? 'Nam' : 'Nữ'}</span>,
    },
    {
      title: 'Đang dạy',
      dataIndex: '',
      key: 'currentClasses',
      render: (data: any) => {
        return (
          <div className="flex flex-wrap max-h-80">
            {data.currentClasses.map((item: string) => (
              <div className="mb-2">
                <Badge content={item} />
              </div>
            ))}
          </div>
        );
      },
    },

    {
      title: 'Phân công',
      dataIndex: '',
      key: 'action',
      render: (data: any) => {
        return (
          <div>
            {data === selectedTeacher ? (
              <button
                className={`max-h-10 min-w-[100px] flex items-center justify-center text-white bg-green-700 hover:bg-green-800 font-medium rounded-[4px] text-sm px-3 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 `}
              >
                Phụ trách
              </button>
            ) : (
              <button
                onClick={() => handleSelectTeacher(data)}
                // onClick={() => setSelectedTeacher(data)}
                className={`max-h-10 min-w-[100px] flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-[4px] text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 `}
              >
                Phân công
              </button>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleSaveInfo}
        onCancel={handleSetIsModalOpen}
        className="md:w-[80%] sm:w-[100%] w-full p-0"
      >
        <div>
          <h2 className="mb-3 text-xl font-semibold text-center">
            Danh sách giáo viên dạy môn Toán
          </h2>
          <Card>
            <Table dataSource={data} columns={columns}></Table>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
