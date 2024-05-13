import {FileOutlined, FileWordOutlined, HomeOutlined} from '@ant-design/icons';
import {ReactNode} from 'react';

export interface IRoute {
  path: string;
  label: string;
  icon?: ReactNode;
  role?: number;
  titlePage?: string;
}

enum roles {
  ADMIN = 0,
  TEACHER = 1,
  STUDENT = 2,
}

const listRoutesAdmin: IRoute[] = [
  {
    path: '/admin/dashboard',
    label: 'Thống kê',
    icon: <HomeOutlined />,
    role: roles.ADMIN,
    titlePage: 'Thống kê',
  },
  {
    path: '/admin/teacher',
    label: 'Giáo viên',
    icon: <FileOutlined />,
    role: roles.ADMIN,
    titlePage: 'Giáo viên',
  },
  {
    path: '/admin/student',
    label: 'Học sinh',
    icon: <FileOutlined />,
    role: roles.ADMIN,
    titlePage: 'Học sinh',
  },
  {
    path: '/admin/class',
    label: 'Lớp học',
    icon: <FileWordOutlined />,
    role: roles.ADMIN,
    titlePage: 'Lớp học',
  },
];

const listRoutesStudent: IRoute[] = [
  {
    path: '/calendar',
    label: 'Thời khoá biểu',
    icon: <FileWordOutlined />,
    role: roles.STUDENT,
    titlePage: 'Thời khoá biểu',
  },
  {
    path: '/class',
    label: 'Lớp học',
    icon: <FileWordOutlined />,
    role: roles.STUDENT,
    titlePage: 'Lớp học',
  },
];

const listRoutesTeacher: IRoute[] = [
  {
    path: '/teacher/dashboard',
    label: 'Thống kê',
    icon: <HomeOutlined />,
    role: roles.TEACHER,
    titlePage: 'Thống kê',
  },
  {
    path: '/teacher/class',
    label: 'Lớp học',
    icon: <FileOutlined />,
    role: roles.TEACHER,
    titlePage: 'Lớp học',
  },
  {
    path: '/teacher/quiz',
    label: 'Đề thi',
    icon: <FileOutlined />,
    role: roles.TEACHER,
    titlePage: 'Đề thi',
  },
];

export {listRoutesAdmin, listRoutesStudent, listRoutesTeacher};
