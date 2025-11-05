'use client';

import { useState, useCallback, ChangeEvent, FocusEvent } from 'react';
import { CompanyInfo } from '@/types';
import { validateCompanyInfo, normalizePostalCode } from '@/lib/validation';
import { motion } from 'framer-motion';

/**
 * CompanyInfoForm コンポーネントのプロパティ
 */
interface CompanyInfoFormProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** 会社情報更新時のコールバック */
  onUpdate: (info: Partial<CompanyInfo>) => void;
}

/**
 * 会社情報入力フォームコンポーネント
 * バリデーション機能付き
 */
export const CompanyInfoForm = ({ companyInfo, onUpdate }: CompanyInfoFormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  /**
   * 入力値変更ハンドラ
   */
  const handleChange = useCallback(
    (field: keyof CompanyInfo) => (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      // 郵便番号の場合は自動フォーマット
      if (field === 'postalCode') {
        value = normalizePostalCode(value);
      }

      onUpdate({ [field]: value });

      // タッチ済みの場合は即座にバリデーション
      if (touched[field]) {
        const newErrors = validateCompanyInfo({ ...companyInfo, [field]: value });
        setErrors(newErrors);
      }
    },
    [companyInfo, onUpdate, touched]
  );

  /**
   * フォーカス離脱時のハンドラ
   */
  const handleBlur = useCallback(
    (field: keyof CompanyInfo) => (e: FocusEvent<HTMLInputElement>) => {
      setTouched((prev) => ({ ...prev, [field]: true }));

      // バリデーション実行
      const newErrors = validateCompanyInfo(companyInfo);
      setErrors(newErrors);
    },
    [companyInfo]
  );

  /**
   * 入力フィールドの共通スタイル
   */
  const inputClassName = (fieldName: string) =>
    `w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ${
      errors[fieldName] && touched[fieldName]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50'
        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 hover:border-gray-300'
    }`;

  const labelClassName = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="space-y-5">
      {/* 会社名 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <label htmlFor="companyName" className={labelClassName}>
          会社名/組織名/屋号 <span className="text-red-500">*</span>
        </label>
        <input
          id="companyName"
          type="text"
          value={companyInfo.companyName}
          onChange={handleChange('companyName')}
          onBlur={handleBlur('companyName')}
          className={inputClassName('companyName')}
          placeholder="例: サンプル株式会社"
        />
        {errors.companyName && touched.companyName && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-600 flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.companyName}
          </motion.p>
        )}
      </motion.div>

      {/* 代表者名 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <label htmlFor="representativeName" className={labelClassName}>
          代表者名
        </label>
        <input
          id="representativeName"
          type="text"
          value={companyInfo.representativeName}
          onChange={handleChange('representativeName')}
          onBlur={handleBlur('representativeName')}
          className={inputClassName('representativeName')}
          placeholder="例: 山田 太郎"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 郵便番号 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <label htmlFor="postalCode" className={labelClassName}>
            郵便番号
          </label>
          <input
            id="postalCode"
            type="text"
            value={companyInfo.postalCode}
            onChange={handleChange('postalCode')}
            onBlur={handleBlur('postalCode')}
            className={inputClassName('postalCode')}
            placeholder="例: 100-0001"
          />
          {errors.postalCode && touched.postalCode && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-600 flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.postalCode}
            </motion.p>
          )}
        </motion.div>

        {/* 都道府県 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <label htmlFor="prefecture" className={labelClassName}>
            都道府県
          </label>
          <input
            id="prefecture"
            type="text"
            value={companyInfo.prefecture}
            onChange={handleChange('prefecture')}
            onBlur={handleBlur('prefecture')}
            className={inputClassName('prefecture')}
            placeholder="例: 東京都"
          />
        </motion.div>
      </div>

      {/* 市区町村 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <label htmlFor="city" className={labelClassName}>
          市区町村
        </label>
        <input
          id="city"
          type="text"
          value={companyInfo.city}
          onChange={handleChange('city')}
          onBlur={handleBlur('city')}
          className={inputClassName('city')}
          placeholder="例: 千代田区"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 番地 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <label htmlFor="streetAddress" className={labelClassName}>
            番地
          </label>
          <input
            id="streetAddress"
            type="text"
            value={companyInfo.streetAddress}
            onChange={handleChange('streetAddress')}
            onBlur={handleBlur('streetAddress')}
            className={inputClassName('streetAddress')}
            placeholder="例: 千代田1-1-1"
          />
        </motion.div>

        {/* 建物名 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <label htmlFor="buildingName" className={labelClassName}>
            建物名/階数
          </label>
          <input
            id="buildingName"
            type="text"
            value={companyInfo.buildingName}
            onChange={handleChange('buildingName')}
            onBlur={handleBlur('buildingName')}
            className={inputClassName('buildingName')}
            placeholder="例: サンプルビル3F"
          />
        </motion.div>
      </div>
    </div>
  );
};
