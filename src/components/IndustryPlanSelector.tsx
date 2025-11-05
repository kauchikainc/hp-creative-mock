'use client';

import { useState, useEffect } from 'react';
import { Industry, Plan, INDUSTRIES, PLANS } from '@/types/plan';
import { INDUSTRY_CONFIG } from '@/lib/industryConfig';
import { motion } from 'framer-motion';

/**
 * IndustryPlanSelector コンポーネントのプロパティ
 */
interface IndustryPlanSelectorProps {
  /** 選択完了時のコールバック */
  onSelect: (selection: { industry: Industry; plan: Plan }) => void;
}

/**
 * 業種・プラン選択コンポーネント
 * ユーザーが業種とプランを選択するためのUI
 */
export const IndustryPlanSelector = ({ onSelect }: IndustryPlanSelectorProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // 両方選択されたらコールバックを呼ぶ
  useEffect(() => {
    if (selectedIndustry && selectedPlan) {
      onSelect({
        industry: selectedIndustry,
        plan: selectedPlan,
      });
    }
  }, [selectedIndustry, selectedPlan, onSelect]);

  return (
    <div className="space-y-10">
      {/* 業種選択セクション */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
          業種を選択
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(INDUSTRY_CONFIG).map(([key, config], index) => {
            const industry = key as Industry;
            const isSelected = selectedIndustry === industry;

            return (
              <motion.button
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedIndustry(industry)}
                className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
                }`}
                aria-label={`業種: ${config.name}`}
              >
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
                <h4 className={`text-xl font-bold mb-2 transition-colors ${isSelected ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'}`}>
                  {config.name}
                </h4>
                <p className="text-gray-600 text-sm">{config.description}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.section>

      {/* プラン選択セクション */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
          プランを選択
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Standard プラン */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedPlan(PLANS.STANDARD)}
            className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedPlan === PLANS.STANDARD
                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
            }`}
            aria-label="プラン: Standard"
          >
            {selectedPlan === PLANS.STANDARD && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
            <div className="flex items-center justify-between mb-3">
              <h4 className={`text-xl font-bold transition-colors ${selectedPlan === PLANS.STANDARD ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'}`}>
                Standard
              </h4>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">基本</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">基本的な機能を備えたプラン</p>
            <ul className="text-left text-sm text-gray-700 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                お問い合わせフォーム
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                会社情報表示
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                レスポンシブデザイン
              </li>
            </ul>
          </motion.button>

          {/* Premium プラン */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedPlan(PLANS.PREMIUM)}
            className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedPlan === PLANS.PREMIUM
                ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl'
                : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg'
            }`}
            aria-label="プラン: Premium"
          >
            <div className="absolute -top-3 -left-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              人気
            </div>
            {selectedPlan === PLANS.PREMIUM && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
            <div className="flex items-center justify-between mb-3">
              <h4 className={`text-xl font-bold transition-colors ${selectedPlan === PLANS.PREMIUM ? 'text-indigo-700' : 'text-gray-800 group-hover:text-indigo-600'}`}>
                Premium
              </h4>
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-semibold rounded-full">充実</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">充実した機能を備えたプラン</p>
            <ul className="text-left text-sm text-gray-700 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Standardの全機能
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ブログ機能
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                お知らせ機能
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                在庫管理機能
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                CMS機能
              </li>
            </ul>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};
