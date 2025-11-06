'use client';

import { CompanyInfo } from '@/types';
import { BaseLayout } from './BaseLayout';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
 *
 * お問い合わせ内容を入力するフォーム。
 * 実際の送信機能は実装されていないモック。
 */
export const ContactForm = ({ companyInfo, onBack }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // モックなので実際の送信は行わない
    setSubmitted(true);
  };

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
            戻る
          </motion.button>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* ヘッダー */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">お問い合わせ</h1>
                <p className="text-gray-600">
                  お気軽にお問い合わせください。担当者より折り返しご連絡いたします。
                </p>
              </div>

              {/* フォーム */}
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="space-y-6">
                  {/* お名前 */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* 会社名・団体名 */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="株式会社サンプル"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="example@example.com"
                    />
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="03-1234-5678"
                    />
                  </div>

                  {/* お問い合わせ種別 */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="office">オフィス清掃について</option>
                      <option value="commercial">商業施設清掃について</option>
                      <option value="medical">医療施設清掃について</option>
                      <option value="industrial">産業廃棄物処理について</option>
                      <option value="general">一般廃棄物収集運搬について</option>
                      <option value="recycling">リサイクル処理について</option>
                      <option value="estimate">お見積もり依頼</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  {/* 送信ボタン */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      送信する
                    </motion.button>
                  </div>
                </div>
              </form>

              {/* 注意事項 */}
              <div className="mt-8 text-sm text-gray-500 text-center">
                <p>※ このフォームはデモンストレーション用です。実際の送信は行われません。</p>
              </div>
            </motion.div>
          ) : (
            // 送信完了画面
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="inline-block p-6 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-full mb-6">
                <svg className="w-16 h-16 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">送信完了</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                お問い合わせありがとうございます。<br />
                担当者より3営業日以内にご連絡いたします。
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
              >
                トップに戻る
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
