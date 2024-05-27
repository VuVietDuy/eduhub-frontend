import type {Metadata} from 'next';
import '@/style/globals.css';
import {Providers} from '../components/Providers';
import {Toaster} from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'EduHub',
  description: 'EduHub',
  icons: '/favicon.png',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100">
        <Providers>{children}</Providers>
        <Toaster></Toaster>
      </body>
    </html>
  );
}
