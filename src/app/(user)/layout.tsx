import MainLayout from '@/components/Layout/MainLayout';
import {listRoutesStudent} from '@/routes/listRoutes';

export default function Layout({children}: {children: React.ReactNode}) {
  return <MainLayout listRoutes={listRoutesStudent}>{children}</MainLayout>;
}
