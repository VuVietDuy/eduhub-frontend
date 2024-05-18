import type {Metadata} from 'next';
import '@/style/globals.css';
import {Providers} from '../components/Providers';
import {Provider} from 'react-redux';
import {store} from '@/redux/store';

export const metadata: Metadata = {
  title: 'EduHub',
  description: 'EduHub',
  icons: '/favicon.png',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
