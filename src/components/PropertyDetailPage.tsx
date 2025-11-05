'use client';

import { CompanyInfo } from '@/types';
import { Property } from '@/types/real-estate';
import { BaseLayout } from './BaseLayout';
import { motion } from 'framer-motion';
import { formatPrice, formatArea } from '@/lib/formatters';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/**
 * PropertyDetailPage コンポーネントのプロパティ
 */
interface PropertyDetailPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** 物件情報 */
  property: Property;
}

/**
 * 不動産物件の詳細ページコンポーネント
 * 物件の詳細情報を表示し、お問い合わせや一覧への戻るボタンを提供
 */
export const PropertyDetailPage = ({ companyInfo, property }: PropertyDetailPageProps) => {
  const router = useRouter();

  return (
    <BaseLayout companyInfo={companyInfo}>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* 戻るボタン */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="mb-8 text-blue-700 hover:text-blue-900 flex items-center gap-2 font-semibold"
          >
            ← 一覧に戻る
          </motion.button>

          <div className="max-w-6xl mx-auto bg-white border border-gray-200">
            {/* メイン画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[500px] overflow-hidden"
            >
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 物件情報 */}
            <div className="p-8 md:p-12">
              {/* タイトルと価格 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 pb-8 border-b border-gray-200"
              >
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                  {property.title}
                </h1>
                <div className="flex items-baseline gap-2">
                  <div className="text-4xl font-serif font-bold text-blue-700">
                    {formatPrice(property.price)}
                  </div>
                  <div className="text-xl text-gray-600">円</div>
                </div>
              </motion.div>

              {/* 物件基本情報 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">物件概要</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex py-3 border-b border-gray-200">
                    <div className="w-32 text-sm text-gray-600">所在地</div>
                    <div className="flex-1 text-gray-900">{property.location}</div>
                  </div>
                  <div className="flex py-3 border-b border-gray-200">
                    <div className="w-32 text-sm text-gray-600">間取り</div>
                    <div className="flex-1 text-gray-900">{property.layout}</div>
                  </div>
                  <div className="flex py-3 border-b border-gray-200">
                    <div className="w-32 text-sm text-gray-600">専有面積</div>
                    <div className="flex-1 text-gray-900">{formatArea(property.area)}</div>
                  </div>
                  <div className="flex py-3 border-b border-gray-200">
                    <div className="w-32 text-sm text-gray-600">築年数</div>
                    <div className="flex-1 text-gray-900">築{property.buildingAge}年</div>
                  </div>
                </div>
              </motion.div>

              {/* 物件説明 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">物件説明</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {property.description}
                </p>
              </motion.div>

              {/* アクションボタン */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4 pt-8 border-t border-gray-200"
              >
                <button className="flex-1 bg-blue-700 text-white px-8 py-4 text-center font-semibold uppercase tracking-wider hover:bg-blue-800 transition-colors">
                  お問い合わせ
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 text-center font-semibold uppercase tracking-wider hover:border-gray-400 transition-colors">
                  内見予約
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
