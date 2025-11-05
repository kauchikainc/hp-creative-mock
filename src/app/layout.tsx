import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HP Mock Sample',
  description: '業種別のホームページモックを提供するシステム',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
