'use client';

import { ReactNode } from 'react';
import { CompanyInfo } from '@/types';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * BaseLayout コンポーネントのプロパティ
 */
interface BaseLayoutProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** 子要素 */
  children: ReactNode;
}

/**
 * ベースレイアウトコンポーネント
 * Header、メインコンテンツ、Footerを含む基本的なページ構造を提供
 */
export const BaseLayout = ({ companyInfo, children }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <Header companyInfo={companyInfo} />

      {/* メインコンテンツ */}
      <main role="main" className="flex-1">
        {children}
      </main>

      {/* フッター */}
      <Footer companyInfo={companyInfo} />
    </div>
  );
};
