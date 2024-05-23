import {
  CalendarOutlined,
  ContactsOutlined,
  CopyrightOutlined,
  FileOutlined,
  FileWordOutlined,
  HomeOutlined,
  LineChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import {ReactNode} from 'react';

export interface IRoute {
  path: string;
  label: string;
  icon?: ReactNode;
  role?: number;
  titlePage?: string;
  rootRoute: string[];
  menuChilds?: {
    path: string;
    label: ReactNode;
  };
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
    icon: <LineChartOutlined />,
    role: roles.ADMIN,
    titlePage: 'Thống kê',
    rootRoute: ['admin', 'dashboard'],
  },
  {
    path: '/admin/teacher',
    label: 'Giáo viên',
    icon: <TeamOutlined />,
    role: roles.ADMIN,
    titlePage: 'Giáo viên',
    rootRoute: ['admin', 'teacher'],
  },
  {
    path: '/admin/student',
    label: 'Học sinh',
    icon: <ContactsOutlined />,
    role: roles.ADMIN,
    titlePage: 'Học sinh',
    rootRoute: ['admin', 'student'],
  },
  {
    path: '/admin/class',
    label: 'Lớp học',
    icon: <CopyrightOutlined />,
    role: roles.ADMIN,
    titlePage: 'Lớp học',
    rootRoute: ['admin', 'class'],
  },
  {
    path: '/admin/subjects',
    label: 'Môn học',
    icon: <CopyrightOutlined />,
    role: roles.ADMIN,
    titlePage: 'Môn học',
    rootRoute: ['admin', 'subjects'],
  },
];

const listRoutesStudent: IRoute[] = [
  {
    path: '/calendar',
    label: 'Thời khoá biểu',
    icon: <CalendarOutlined />,
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
  {
    path: '/transcript',
    label: 'Bảng điểm',
    icon: <FileWordOutlined />,
    role: roles.STUDENT,
    titlePage: 'Bảng điểm',
    rootRoute: ['transcript'],
  },
];

const listRoutesTeacher: IRoute[] = [
  {
    path: '/teacher/calendar',
    label: 'Lịch dạy',
    icon: <CalendarOutlined />,
    role: roles.TEACHER,
    titlePage: 'Lịch dạy',
    rootRoute: ['teacher', 'calendar'],
  },
  {
    path: '/teacher/class',
    label: 'Lớp học',
    icon: <CopyrightOutlined />,
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
