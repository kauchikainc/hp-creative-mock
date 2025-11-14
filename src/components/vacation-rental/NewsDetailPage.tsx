'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { BaseLayout } from '../BaseLayout';

/**
 * お知らせ情報の型
 */
interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
  imageUrl?: string;
}

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
 */
export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({
  companyInfo,
  news,
  onBack,
}) => {
  return (
    <BaseLayout companyInfo={companyInfo}>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50">
        {/* 戻るボタン */}
        <div className="container mx-auto px-4 py-8">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
            whileHover={{ x: -5 }}
          >
            ← お知らせ一覧に戻る
          </motion.button>
        </div>

        {/* メインコンテンツ */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              {/* メイン画像（ある場合） */}
              {news.imageUrl && (
                <div className="relative h-96">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}

              {/* コンテンツ */}
              <div className="p-12">
                {/* カテゴリーと日付 */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-700 text-sm rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>

                {/* タイトル */}
                <h1 className="text-4xl font-light text-gray-900 mb-8">{news.title}</h1>

                {/* 本文 */}
                <div className="prose prose-lg max-w-none">
                  {news.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < paragraph.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  ))}
                </div>

                {/* お問い合わせCTA */}
                <div className="mt-12 p-8 bg-gradient-to-br from-cyan-50 to-violet-50 rounded-2xl">
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    ご予約・お問い合わせ
                  </h3>
                  <p className="text-gray-700 mb-6">
                    ご不明な点やご予約については、お気軽にお問い合わせください。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={`tel:${companyInfo.phoneNumber}`}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full text-center font-medium hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      電話: {companyInfo.phoneNumber}
                    </motion.a>
                    <motion.a
                      href={`mailto:${companyInfo.email}`}
                      className="px-8 py-4 bg-white border-2 border-cyan-500 text-cyan-600 rounded-full text-center font-medium hover:bg-cyan-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      メール: {companyInfo.email}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
