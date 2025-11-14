'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { BaseLayout } from '../BaseLayout';

/**
 * ContactFormコンポーネントのProps
 */
interface ContactFormProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** 戻るボタンのコールバック */
  onBack: () => void;
}

/**
 * お問い合わせフォームコンポーネント
 */
export const ContactForm: React.FC<ContactFormProps> = ({
  companyInfo,
  onBack,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '宿泊予約について',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の実装では、ここでフォームデータを送信
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 送信完了画面
  if (isSubmitted) {
    return (
      <BaseLayout companyInfo={companyInfo}>
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white rounded-3xl p-12 shadow-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <span className="text-5xl text-white">✓</span>
            </motion.div>

            <h2 className="text-4xl font-light text-gray-900 mb-6">
              送信完了
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              お問い合わせありがとうございます。<br />
              内容を確認の上、2営業日以内にご連絡させていただきます。
            </p>

            <motion.button
              onClick={onBack}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full text-lg font-medium hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              トップに戻る
            </motion.button>
          </motion.div>
        </div>
      </BaseLayout>
    );
  }

  // お問い合わせフォーム
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
            ← 戻る
          </motion.button>
        </div>

        {/* フォーム */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-light text-gray-900 mb-4">お問い合わせ</h1>
              <p className="text-lg text-gray-600">
                ご予約やご質問など、お気軽にお問い合わせください
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-12 shadow-xl"
            >
              {/* お名前 */}
              <div className="mb-8">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="山田太郎"
                />
              </div>

              {/* メールアドレス */}
              <div className="mb-8">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="example@email.com"
                />
              </div>

              {/* 電話番号 */}
              <div className="mb-8">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="090-1234-5678"
                />
              </div>

              {/* お問い合わせ種別 */}
              <div className="mb-8">
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="宿泊予約について">宿泊予約について</option>
                  <option value="客室について">客室について</option>
                  <option value="プランについて">プランについて</option>
                  <option value="施設について">施設について</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              {/* お問い合わせ内容 */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* 送信ボタン */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full text-lg font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                送信する
              </motion.button>

              <p className="text-sm text-gray-500 text-center mt-6">
                送信いただいた情報は、お問い合わせ対応にのみ使用いたします。
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
