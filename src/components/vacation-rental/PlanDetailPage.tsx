'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/vacation-rental';
import { BaseLayout } from '../BaseLayout';

/**
 * PlanDetailPageコンポーネントのProps
 */
interface PlanDetailPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン情報 */
  plan: Plan;
  /** 戻るボタンのコールバック */
  onBack: () => void;
}

/**
 * プラン詳細ページコンポーネント
 */
export const PlanDetailPage: React.FC<PlanDetailPageProps> = ({
  companyInfo,
  plan,
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
            ← プラン一覧に戻る
          </motion.button>
        </div>

        {/* メインコンテンツ */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            {/* メイン画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden mb-12"
            >
              <img
                src={plan.imageUrl}
                alt={plan.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h1 className="text-5xl font-light text-white mb-4">{plan.name}</h1>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light text-white">
                    ¥{plan.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="text-white/80"> / 名</span>
                </div>
              </div>
            </motion.div>

            {/* プラン説明 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">プランについて</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{plan.description}</p>
            </motion.div>

            {/* 含まれるサービス */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">含まれるサービス</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-6 bg-white rounded-2xl shadow-sm"
                  >
                    <span className="text-2xl text-cyan-500">✓</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 対象客室 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-6">対象客室</h2>
              <div className="p-6 bg-gradient-to-br from-cyan-50 to-violet-50 rounded-2xl">
                <p className="text-gray-700 text-lg">
                  {plan.applicableRooms.join('、')}
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-xl text-center"
            >
              <h3 className="text-3xl font-light text-gray-900 mb-4">ご予約はこちら</h3>
              <p className="text-gray-600 mb-8">
                ご不明な点やご要望がございましたら、お気軽にお問い合わせください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`tel:${companyInfo.phoneNumber}`}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full text-lg font-medium hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  電話で予約: {companyInfo.phoneNumber}
                </motion.a>
                <motion.a
                  href={`mailto:${companyInfo.email}`}
                  className="px-8 py-4 bg-white border-2 border-cyan-500 text-cyan-600 rounded-full text-lg font-medium hover:bg-cyan-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  メールで問い合わせ
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
