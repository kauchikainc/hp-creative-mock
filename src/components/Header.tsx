'use client';

import { CompanyInfo } from '@/types';
import { motion } from 'framer-motion';

/**
 * Header コンポーネントのプロパティ
 */
interface HeaderProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
}

/**
 * ヘッダーコンポーネント
 * 全ページ共通のヘッダー部分を表示
 * 会社名とナビゲーションを含む
 */
export const Header = ({ companyInfo }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white shadow-md"
      role="banner"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 会社名/ロゴエリア */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-2xl font-bold text-gray-800"
          >
            {companyInfo.companyName || 'サンプル株式会社'}
          </motion.div>

          {/* ナビゲーションエリア */}
          <nav className="hidden md:flex space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ホーム
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              会社概要
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              お問い合わせ
            </motion.a>
          </nav>

          {/* モバイルメニューボタン */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};
