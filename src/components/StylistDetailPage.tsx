'use client';

import { CompanyInfo } from '@/types';
import { Stylist } from '@/types/beauty-salon';
import { BaseLayout } from './BaseLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/**
 * StylistDetailPage コンポーネントのプロパティ
 */
interface StylistDetailPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** スタイリスト情報 */
  stylist: Stylist;
}

/**
 * スタイリストの詳細ページコンポーネント
 * スタイリストのプロフィール、得意スタイル、経歴を表示
 */
export const StylistDetailPage = ({ companyInfo, stylist }: StylistDetailPageProps) => {
  const router = useRouter();

  return (
    <BaseLayout companyInfo={companyInfo}>
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* 戻るボタン */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="mb-8 text-pink-600 hover:text-pink-800 flex items-center gap-2 font-semibold"
          >
            ← 一覧に戻る
          </motion.button>

          <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* 左側：プロフィール画像 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] md:h-auto"
              >
                <Image
                  src={stylist.imageUrl}
                  alt={stylist.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>

              {/* 右側：プロフィール情報 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 md:p-12"
              >
                {/* 役職バッジ */}
                <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 text-xs font-light uppercase tracking-widest mb-4 rounded-full">
                  {stylist.title}
                </div>

                {/* 名前 */}
                <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-tight">
                  {stylist.name}
                </h1>

                {/* 経歴年数 */}
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
                  <div className="text-5xl font-light text-pink-600">{stylist.experience}</div>
                  <div className="text-sm text-gray-600">
                    <div>years of</div>
                    <div className="font-semibold">experience</div>
                  </div>
                </div>

                {/* 得意スタイル */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">得意スタイル</h2>
                  <div className="flex flex-wrap gap-2">
                    {stylist.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 自己紹介 */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">プロフィール</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {stylist.description}
                  </p>
                </div>

                {/* アクションボタン */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    指名予約する
                  </button>
                  <button className="flex-1 border-2 border-pink-300 text-pink-700 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
                    相談する
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
