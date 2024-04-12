import type { Metadata } from 'next';

import HeaderComponent from '@base/Header';
import '@styles/index.scss';
import clsx from 'clsx';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  description: 'TEST',
  title: 'TEST',
};

const EestiFont = localFont({
  preload: true,
  src: [
    { path: '../shared/assets/fonts/GTEesti-400.woff2', weight: '400' },
    { path: '../shared/assets/fonts/GTEesti-700.woff2', weight: '700' },
  ],
  variable: '--eesti',
});

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <html className={clsx(EestiFont.variable)} lang="ru" suppressHydrationWarning>
      <body>
        <HeaderComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
