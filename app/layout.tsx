import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wildlife Collection',
  description: 'Create your personal wildlife collection!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute min-h-full h-auto w-full bg-gradient-to-br from-gray-800 to-green-600 bg-fixed">
          {children}
        </div>
      </body>
    </html>
  );
}
