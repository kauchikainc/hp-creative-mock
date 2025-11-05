'use client';

import { CompanyInfo } from '@/types';
import { formatFullAddress } from '@/lib/formatters';
import { motion } from 'framer-motion';

/**
 * Footer コンポーネントのプロパティ
 */
interface FooterProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
}

/**
 * フッターコンポーネント
 * 全ページ共通のフッター部分を表示
 * 会社情報と著作権表示を含む
 */
export const Footer = ({ companyInfo }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 text-white py-12 mt-20"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 会社情報セクション */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{companyInfo.companyName}</h3>
            <div className="space-y-2 text-gray-300">
              <p>代表: {companyInfo.representativeName}</p>
              <p>{formatFullAddress(companyInfo)}</p>
            </div>
          </motion.div>

          {/* リンクセクション */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <nav className="space-y-2">
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                ホーム
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ x: 5 }}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                会社概要
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                お問い合わせ
              </motion.a>
            </nav>
          </motion.div>
        </div>

        {/* 著作権表示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          <p>&copy; {currentYear} {companyInfo.companyName}. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
