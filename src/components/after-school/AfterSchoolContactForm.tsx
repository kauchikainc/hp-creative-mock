'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';

/**
 * 放課後デイサービス お問い合わせフォームのProps
 */
interface AfterSchoolContactFormProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
}

/**
 * お問い合わせ種別
 */
const INQUIRY_TYPES = [
  '見学・体験のお申込み',
  'サービス内容のご相談',
  '利用手続きについて',
  '料金に関するお問い合わせ',
  'その他',
];

/**
 * 放課後デイサービスのお問い合わせフォームコンポーネント
 */
export const AfterSchoolContactForm = ({ companyInfo }: AfterSchoolContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = '保護者様のお名前を入力してください';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }
    if (!formData.inquiryType) {
      newErrors.inquiryType = 'お問い合わせ種別を選択してください';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-lg"
        >
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            お問い合わせを受け付けました
          </h2>
          <p className="text-gray-600 mb-6">
            担当者より2営業日以内にご連絡いたします。<br />
            しばらくお待ちください。
          </p>
          <p className="text-sm text-gray-500">
            {companyInfo.companyName}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">お問い合わせフォーム</h1>
            <p className="text-amber-100">Contact Us</p>
          </motion.div>
        </div>
      </section>

      {/* フォームセクション */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-gray-600">
                見学・体験のお申込みやサービスに関するご相談など、お気軽にお問い合わせください。
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* 保護者様お名前 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  保護者様お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="山田 太郎"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* お子様お名前 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    お子様お名前
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="山田 花子"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    お子様年齢
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="8歳（小学2年生）"
                  />
                </div>
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="090-1234-5678"
                />
              </div>

              {/* お問い合わせ種別 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">選択してください</option>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>
                )}
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="お問い合わせ内容をご記入ください"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* 送信ボタン */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors shadow-lg shadow-amber-200"
              >
                送信する
              </motion.button>
            </motion.form>

            {/* 電話でのお問い合わせ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-4">お電話でのお問い合わせ</p>
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                {companyInfo.phone}
              </a>
              <p className="text-sm text-gray-500 mt-2">
                受付時間: 平日 10:00〜18:00
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
