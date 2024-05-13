import MainLayout from '@/components/Layout/MainLayout';
import {listRoutesTeacher} from '@/routes/listRoutes';

export default function Layout({children}: {children: React.ReactNode}) {
  return <MainLayout listRoutes={listRoutesTeacher}>{children}</MainLayout>;
}
