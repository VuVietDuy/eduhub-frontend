import MainLayout from '@/components/Layout/MainLayout';
import {listRoutesAdmin} from '@/routes/listRoutes';
import React from 'react';

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <MainLayout listRoutes={listRoutesAdmin}>
      <div className="m-auto">{children}</div>
    </MainLayout>
  );
}
