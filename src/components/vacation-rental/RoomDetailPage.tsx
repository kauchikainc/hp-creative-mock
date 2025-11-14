'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Room } from '@/types/vacation-rental';
import { BaseLayout } from '../BaseLayout';

/**
 * RoomDetailPageコンポーネントのProps
 */
interface RoomDetailPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** 客室情報 */
  room: Room;
  /** 戻るボタンのコールバック */
  onBack: () => void;
}

/**
 * 客室詳細ページコンポーネント
 */
export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({
  companyInfo,
  room,
  onBack,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
            ← 客室一覧に戻る
          </motion.button>
        </div>

        {/* メインコンテンツ */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* メイン画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-3xl overflow-hidden mb-8"
            >
              <img
                src={room.images[selectedImageIndex]}
                alt={`${room.name} - ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* サムネイル */}
            <div className="flex gap-4 mb-16">
              {room.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative h-24 w-32 rounded-xl overflow-hidden ${
                    selectedImageIndex === index ? 'ring-4 ring-cyan-500' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`${room.name} サムネイル ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>

            {/* 詳細情報 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* 左カラム: 客室情報 */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1 bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-700 text-sm rounded-full">
                      {room.type}
                    </span>
                    {room.view && (
                      <span className="text-gray-600 text-sm">{room.view}</span>
                    )}
                  </div>

                  <h1 className="text-5xl font-light text-gray-900 mb-6">{room.name}</h1>

                  <div className="flex items-center gap-8 text-gray-700 mb-8 pb-8 border-b border-gray-200">
                    <div>
                      <span className="text-4xl font-light">¥{room.pricePerNight.toLocaleString()}</span>
                      <span className="text-sm text-gray-500"> / 泊</span>
                    </div>
                    <div className="text-sm">
                      定員{room.capacity}名 • {room.size}㎡
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-2xl font-light text-gray-900 mb-4">客室について</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{room.description}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-light text-gray-900 mb-6">設備・アメニティ</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {room.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-4 bg-white rounded-xl shadow-sm"
                        >
                          <span className="text-cyan-500">✓</span>
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 右カラム: 予約情報 */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="sticky top-8"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <h3 className="text-2xl font-light text-gray-900 mb-6">ご予約</h3>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        チェックイン
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        チェックアウト
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        人数
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        {[...Array(room.capacity)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}名
                          </option>
                        ))}
                      </select>
                    </div>

                    <motion.button
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full text-lg font-medium hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      予約リクエスト
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      予約リクエスト後、詳細をご連絡いたします
                    </p>
                  </div>

                  {/* お問い合わせ */}
                  <div className="mt-6 bg-gradient-to-br from-cyan-50 to-violet-50 rounded-3xl p-6">
                    <h4 className="font-medium text-gray-900 mb-2">ご不明な点はありませんか?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      お気軽にお問い合わせください
                    </p>
                    <button
                      onClick={onBack}
                      className="block w-full text-center px-6 py-3 bg-white text-cyan-600 rounded-full font-medium hover:shadow-md transition-shadow"
                    >
                      客室一覧に戻る
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
