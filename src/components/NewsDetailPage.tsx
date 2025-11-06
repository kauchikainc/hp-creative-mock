'use client';

import { CompanyInfo } from '@/types';
import { NewsItem } from '@/types/cleaning-service';
import { BaseLayout } from './BaseLayout';
import { motion } from 'framer-motion';

/**
 * NewsDetailPageコンポーネントのProps
 */
interface NewsDetailPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** お知らせ情報 */
  news: NewsItem;
  /** 戻るボタンのコールバック */
  onBack: () => void;
}

/**
 * お知らせ詳細ページコンポーネント
 *
 * お知らせの詳細内容を表示。
 */
export const NewsDetailPage = ({ companyInfo, news, onBack }: NewsDetailPageProps) => {
  return (
    <BaseLayout companyInfo={companyInfo}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* 戻るボタン */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onBack}
            className="flex items-center text-cyan-600 hover:text-cyan-700 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            一覧に戻る
          </motion.button>

          {/* 記事ヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                {news.category}
              </span>
              <span className="text-gray-500 font-mono text-sm">{news.date}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">{news.title}</h1>
          </motion.div>

          {/* メイン画像 */}
          {news.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-96 object-cover"
              />
            </motion.div>
          )}

          {/* 記事本文 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              {news.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* 関連リンク */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">お問い合わせ</h2>
            <p className="text-gray-600 mb-6">
              詳しい情報やご質問がございましたら、お気軽にお問い合わせください。
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              お問い合わせフォームへ
            </motion.button>
          </motion.div>
        </div>
      </div>
    </BaseLayout>
  );
};
