import {FileOutlined, FileWordOutlined, HomeOutlined} from '@ant-design/icons';
import {ReactNode} from 'react';

export interface IRoute {
  path: string;
  label: string;
  icon?: ReactNode;
  role?: number;
  titlePage?: string;
  rootRoute: string[];
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
    rootRoute: ['admin', 'dashboard'],
  },
  {
    path: '/admin/teacher',
    label: 'Giáo viên',
    icon: <FileOutlined />,
    role: roles.ADMIN,
    titlePage: 'Giáo viên',
    rootRoute: ['admin', 'teacher'],
  },
  {
    path: '/admin/student',
    label: 'Học sinh',
    icon: <FileOutlined />,
    role: roles.ADMIN,
    titlePage: 'Học sinh',
    rootRoute: ['admin', 'student'],
  },
  {
    path: '/admin/class',
    label: 'Lớp học',
    icon: <FileWordOutlined />,
    role: roles.ADMIN,
    titlePage: 'Lớp học',
    rootRoute: ['admin', 'class'],
  },
];

const listRoutesStudent: IRoute[] = [
  {
    path: '/calendar',
    label: 'Thời khoá biểu',
    icon: <FileWordOutlined />,
    role: roles.STUDENT,
    titlePage: 'Thời khoá biểu',
    rootRoute: ['calendar'],
  },
  {
    path: '/class',
    label: 'Lớp học',
    icon: <FileWordOutlined />,
    role: roles.STUDENT,
    titlePage: 'Lớp học',
    rootRoute: ['class'],
  },
];

const listRoutesTeacher: IRoute[] = [
  {
    path: '/teacher/dashboard',
    label: 'Thống kê',
    icon: <HomeOutlined />,
    role: roles.TEACHER,
    titlePage: 'Thống kê',
    rootRoute: ['teacher', 'dashboard'],
  },
  {
    path: '/teacher/class',
    label: 'Lớp học',
    icon: <FileOutlined />,
    role: roles.TEACHER,
    titlePage: 'Lớp học',
    rootRoute: ['teacher', 'class'],
  },
  {
    path: '/teacher/quiz',
    label: 'Đề thi',
    icon: <FileOutlined />,
    role: roles.TEACHER,
    titlePage: 'Đề thi',
    rootRoute: ['teacher', 'quiz'],
  },
];

export {listRoutesAdmin, listRoutesStudent, listRoutesTeacher};
