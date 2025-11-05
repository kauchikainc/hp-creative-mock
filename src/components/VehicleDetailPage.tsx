'use client';

import { CompanyInfo } from '@/types';
import { Vehicle } from '@/types/used-car';
import { BaseLayout } from './BaseLayout';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/formatters';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/**
 * VehicleDetailPage コンポーネントのプロパティ
 */
interface VehicleDetailPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** 車両情報 */
  vehicle: Vehicle;
}

/**
 * 中古車両の詳細ページコンポーネント
 * 車両の詳細情報を表示し、お問い合わせや一覧への戻るボタンを提供
 */
export const VehicleDetailPage = ({ companyInfo, vehicle }: VehicleDetailPageProps) => {
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
            className="mb-8 text-red-600 hover:text-red-800 flex items-center gap-2 font-bold"
          >
            ← 一覧に戻る
          </motion.button>

          <div className="max-w-6xl mx-auto bg-white border-2 border-gray-200">
            {/* メイン画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[500px] overflow-hidden bg-gray-100"
            >
              <Image
                src={vehicle.imageUrl}
                alt={`${vehicle.manufacturer} ${vehicle.model}`}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 right-6 bg-red-600 text-white px-6 py-3 font-bold text-lg transform -skew-x-12">
                <span className="inline-block transform skew-x-12">{vehicle.year}年式</span>
              </div>
            </motion.div>

            {/* 車両情報 */}
            <div className="p-8 md:p-12">
              {/* タイトルと価格 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 pb-8 border-b-2 border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-900 text-white px-4 py-2 font-bold uppercase tracking-wider">
                    {vehicle.manufacturer}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  {vehicle.model}
                </h1>
                <div className="flex items-baseline gap-2">
                  <div className="text-5xl font-black text-red-600">
                    {formatPrice(vehicle.price)}
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">円</div>
                </div>
              </motion.div>

              {/* 車両仕様 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-6">車両仕様</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex py-4 border-b-2 border-gray-100">
                    <div className="w-40 text-sm font-bold text-gray-600 uppercase">年式</div>
                    <div className="flex-1 font-bold text-gray-900">{vehicle.year}年式</div>
                  </div>
                  <div className="flex py-4 border-b-2 border-gray-100">
                    <div className="w-40 text-sm font-bold text-gray-600 uppercase">走行距離</div>
                    <div className="flex-1 font-bold text-gray-900">{vehicle.mileage.toLocaleString()}km</div>
                  </div>
                  <div className="flex py-4 border-b-2 border-gray-100">
                    <div className="w-40 text-sm font-bold text-gray-600 uppercase">車体色</div>
                    <div className="flex-1 font-bold text-gray-900">{vehicle.color}</div>
                  </div>
                  <div className="flex py-4 border-b-2 border-gray-100">
                    <div className="w-40 text-sm font-bold text-gray-600 uppercase">ミッション</div>
                    <div className="flex-1 font-bold text-gray-900">{vehicle.transmission}</div>
                  </div>
                  <div className="flex py-4 border-b-2 border-gray-100">
                    <div className="w-40 text-sm font-bold text-gray-600 uppercase">燃料</div>
                    <div className="flex-1 font-bold text-gray-900">{vehicle.fuelType}</div>
                  </div>
                </div>
              </motion.div>

              {/* 車両説明 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-black text-gray-900 mb-6">車両コメント</h2>
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-l-4 border-red-600">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {vehicle.description}
                  </p>
                </div>
              </motion.div>

              {/* アクションボタン */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4 pt-8 border-t-2 border-gray-200"
              >
                <button className="flex-1 bg-red-600 text-white px-8 py-5 text-center font-black text-lg uppercase hover:bg-red-700 transition-colors transform hover:scale-105 active:scale-95">
                  お問い合わせ →
                </button>
                <button className="flex-1 bg-yellow-400 text-red-900 px-8 py-5 text-center font-black text-lg uppercase hover:bg-yellow-300 transition-colors">
                  試乗予約
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
