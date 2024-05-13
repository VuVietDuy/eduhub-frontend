import type {Metadata} from 'next';
import './globals.css';
import {Providers} from '../components/Providers';
import {Provider} from 'react-redux';
import {store} from '@/store/store';

export const metadata: Metadata = {
  title: 'EduHub',
  description: 'EduHub',
  icons: '/favicon.png',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Provider store={store}>{children}</Provider>
        </Providers>
      </body>
    </html>
  );
}
