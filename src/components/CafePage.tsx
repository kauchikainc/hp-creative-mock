'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

/**
 * CafePage コンポーネントのプロパティ
 */
interface CafePageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン */
  plan: Plan;
}

/**
 * モックメニューデータ
 */
const mockMenu = [
  {
    id: '1',
    name: 'ブレンドコーヒー',
    category: 'coffee' as const,
    price: 480,
    description: '深煎りの豆をブレンドした、コクのある味わい',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
  },
  {
    id: '2',
    name: 'カフェラテ',
    category: 'coffee' as const,
    price: 550,
    description: 'エスプレッソとミルクのハーモニー',
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80',
  },
  {
    id: '3',
    name: 'アイスティー',
    category: 'tea' as const,
    price: 450,
    description: 'さわやかな香りのアールグレイ',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  },
  {
    id: '4',
    name: 'チーズケーキ',
    category: 'dessert' as const,
    price: 520,
    description: '濃厚でなめらかな口当たり',
    imageUrl: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&q=80',
  },
  {
    id: '5',
    name: 'サンドイッチセット',
    category: 'food' as const,
    price: 880,
    description: '新鮮野菜と自家製パンのサンドイッチ',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
  },
  {
    id: '6',
    name: 'フレンチトースト',
    category: 'food' as const,
    price: 780,
    description: 'ふわふわの食感にメープルシロップ',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80',
  },
];

/**
 * モックイベントデータ
 */
const mockEvents = [
  {
    id: '1',
    title: 'コーヒー豆試飲会',
    date: '2025-12-15',
    description: '世界各地のコーヒー豆を試飲できるイベントを開催します。',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
  },
  {
    id: '2',
    title: 'クリスマスライブ演奏',
    date: '2025-12-24',
    description: 'アコースティックギターの生演奏をお楽しみください。',
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80',
  },
];

/**
 * モックお知らせデータ
 */
const mockNews = [
  {
    id: '1',
    date: '2025-11-01',
    category: 'お知らせ',
    title: '冬季限定メニュー登場',
  },
  {
    id: '2',
    date: '2025-10-15',
    category: 'キャンペーン',
    title: 'スタンプカード2倍キャンペーン実施中',
  },
  {
    id: '3',
    date: '2025-10-01',
    category: 'イベント',
    title: 'ハロウィンスペシャルドリンク販売',
  },
];

/**
 * カフェ業種のページコンポーネント
 * 温かみのあるブラウン系の落ち着いたデザイン
 */
export const CafePage = ({ companyInfo, plan }: CafePageProps) => {
  const [selectedMenu, setSelectedMenu] = useState<typeof mockMenu[0] | null>(null);

  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - 温かみのあるカフェの雰囲気 */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
            alt="カフェの雰囲気"
            fill
            className="object-cover"
            priority
          />
          {/* 温かみのあるオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 via-amber-900/60 to-amber-900/80" />
        </div>

        {/* コンテンツ */}
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-4 text-amber-200 text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to our Café
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {companyInfo.companyName}
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            くつろぎのひとときと
            <br />
            こだわりの一杯を
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#menu"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              メニューを見る
            </a>
            <a
              href="#access"
              className="inline-block border-2 border-white hover:bg-white hover:text-amber-900 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              アクセス
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* カフェの特徴 */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
              Our Features
            </h2>
            <p className="text-gray-600">私たちの3つのこだわり</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '☕',
                title: 'こだわりの豆',
                description: '世界各地から厳選した高品質なコーヒー豆を使用しています。',
              },
              {
                icon: '🏠',
                title: '落ち着く空間',
                description: '木のぬくもりを感じる店内で、ゆったりとした時間をお過ごしいただけます。',
              },
              {
                icon: '🥐',
                title: '手作りフード',
                description: '毎朝店内で焼き上げるパンや、丁寧に作るスイーツをご用意しています。',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* メニュー */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
              Menu
            </h2>
            <p className="text-gray-600">ドリンク＆フード</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockMenu.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMenu(item)}
              >
                <div className="relative h-48">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                    <span className="text-amber-700 font-bold">¥{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium機能: おすすめメニュー */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-gradient-to-b from-amber-100 to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                Today&apos;s おすすめ
              </h2>
              <p className="text-gray-600">本日のおすすめメニュー</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-amber-700 font-bold mb-2">本日のコーヒー</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  エチオピア イルガチェフェ
                </h3>
                <p className="text-gray-600 mb-4">
                  華やかな香りとフルーティーな酸味が特徴の、スペシャルティコーヒーです。
                </p>
                <div className="text-amber-700 font-bold text-xl">¥680</div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-amber-700 font-bold mb-2">シェフのおすすめ</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">
                  季節のフルーツタルト
                </h3>
                <p className="text-gray-600 mb-4">
                  旬のフルーツをたっぷり使った、見た目も華やかなタルトです。
                </p>
                <div className="text-amber-700 font-bold text-xl">¥620</div>
              </motion.div>
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium機能: イベント情報 */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                Events
              </h2>
              <p className="text-gray-600">今月のイベント</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {mockEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-amber-700 text-sm mb-2">{event.date}</div>
                    <h3 className="text-xl font-bold text-amber-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium機能: お知らせ */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                News
              </h2>
              <p className="text-gray-600">お知らせ</p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {mockNews.map((news, index) => (
                <div
                  key={news.id}
                  className={`p-6 hover:bg-amber-50 transition-colors cursor-pointer ${
                    index !== mockNews.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{news.date}</span>
                      <span className="bg-amber-700 text-white text-xs px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                    </div>
                    <div className="text-gray-900 font-medium">{news.title}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </PremiumFeatures>

      {/* アクセス・お問い合わせ */}
      <section id="access" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
              Access
            </h2>
            <p className="text-gray-600">アクセス・営業時間</p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto bg-amber-50 rounded-lg p-8 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">店舗情報</h3>
                <p className="text-gray-700">
                  {companyInfo.companyName}
                  <br />
                  〒{companyInfo.postalCode}
                  <br />
                  {companyInfo.prefecture}{companyInfo.city}{companyInfo.streetAddress}
                  {companyInfo.buildingName && ` ${companyInfo.buildingName}`}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">営業時間</h3>
                <p className="text-gray-700">
                  平日: 8:00 - 20:00
                  <br />
                  土日祝: 9:00 - 21:00
                  <br />
                  定休日: 毎週火曜日
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <motion.button
                className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせ
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
