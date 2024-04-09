import Header from '@/components/Header';
import React from 'react';

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header></Header>
      <div className="max-w-screen-xl m-auto">{children}</div>
    </div>
  );
}
