'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCompanyInfo } from '@/hooks/useCompanyInfo';
import { CompanyInfoForm } from '@/components/CompanyInfoForm';
import { IndustryPlanSelector } from '@/components/IndustryPlanSelector';
import { Industry, Plan } from '@/types/plan';
import { motion } from 'framer-motion';

/**
 * トップページ（ホームページ）
 * 会社情報入力と業種・プラン選択を行う
 */
export default function Home() {
  const router = useRouter();
  const { companyInfo, updateCompanyInfo, isLoaded } = useCompanyInfo();
  const [showSelector, setShowSelector] = useState(false);

  /**
   * 業種・プラン選択完了時の処理
   */
  const handleSelection = ({ industry, plan }: { industry: Industry; plan: Plan }) => {
    // 選択された業種とプランのページに遷移
    router.push(`/${industry}/${plan}`);
  };

  /**
   * 次へボタンのクリックハンドラ
   */
  const handleNext = () => {
    setShowSelector(true);
  };

  // LocalStorageからの読み込み完了を待つ
  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl text-gray-600">読み込み中...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-5xl w-full">
          {/* ヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Website Mock Generator
              </div>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              HP Mock Sample
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              業種別のホームページモックを数分で生成
            </p>
          </motion.div>

          {!showSelector ? (
            /* 会社情報入力セクション */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20"
            >
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    会社情報を入力
                  </h2>
                  <p className="text-gray-500 mt-1">基本情報を入力してください（会社名のみ必須）</p>
                </div>
              </div>

              <CompanyInfoForm
                companyInfo={companyInfo}
                onUpdate={updateCompanyInfo}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                disabled={!companyInfo.companyName}
                className={`mt-10 w-full py-5 px-8 rounded-xl text-white font-bold text-lg transition-all shadow-lg ${
                  companyInfo.companyName
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/50'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                <span className="flex items-center justify-center">
                  次のステップへ
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          ) : (
            /* 業種・プラン選択セクション */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20"
            >
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    業種とプランを選択
                  </h2>
                  <p className="text-gray-500 mt-1">ご希望の業種とプランを選んでください</p>
                </div>
              </div>

              <IndustryPlanSelector onSelect={handleSelection} />

              <motion.button
                whileHover={{ scale: 1.02, x: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowSelector(false)}
                className="mt-10 flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                会社情報の入力に戻る
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
