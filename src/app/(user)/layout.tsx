import Header from '@/components/Header';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}
