'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion } from 'framer-motion';
import { MOCK_VEHICLES } from '@/data/used-car/vehicles';
import { MOCK_SALES_RECORDS } from '@/data/used-car/sales-history';
import { formatPrice } from '@/lib/formatters';
import Image from 'next/image';

/**
 * UsedCarPage コンポーネントのプロパティ
 */
interface UsedCarPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 中古車販売業種のページコンポーネント
 * エネルギッシュでダイナミックなカタログ風デザイン
 */
export const UsedCarPage = ({ companyInfo, plan }: UsedCarPageProps) => {
  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - ダイナミックな斜めレイアウト */}
      <section className="relative h-[550px] bg-gradient-to-br from-red-600 via-red-700 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-yellow-400 text-red-900 px-4 py-1 text-xs font-bold uppercase mb-4 transform -skew-x-12">
                高品質中古車専門店
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
                {companyInfo.companyName}
              </h1>
              <p className="text-xl text-red-100 mb-8 font-semibold">
                あなたにぴったりの一台を、<br />
                豊富なラインナップでご用意
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-red-600 px-8 py-4 font-bold text-lg hover:bg-yellow-400 hover:text-red-900 transition-colors transform hover:scale-105 active:scale-95">
                  在庫を見る →
                </button>
                <button className="border-3 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-red-600 transition-colors">
                  無料査定
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-400 transform rotate-45"></div>
                <div className="relative bg-white p-6 transform rotate-2">
                  <div className="text-6xl font-black text-red-600 mb-2">30+</div>
                  <div className="text-sm font-bold text-gray-900 uppercase">台の在庫車両</div>
                  <div className="text-xs text-gray-600 mt-2">常時更新中</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0L0 48z" fill="#fff"/>
          </svg>
        </div>
      </section>

      {/* 強みセクション - カード形式で大胆に */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏆',
                title: '厳選在庫',
                description: '専門スタッフが厳しくチェックした高品質車両のみを販売',
              },
              {
                icon: '💯',
                title: '安心保証',
                description: '充実の保証制度で購入後も徹底サポート',
              },
              {
                icon: '⚡',
                title: 'スピード対応',
                description: '最短即日納車可能！お急ぎの方もご相談ください',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 border-l-4 border-red-600"
              >
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* サービスセクション - グリッド形式 */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-4">充実のサービス</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: '中古車販売', desc: '豊富な在庫からお選びいただけます' },
              { title: '高価買取', desc: '他店より1円でも高く買取ります' },
              { title: '車検・整備', desc: '国家資格整備士が対応します' },
              { title: 'オートローン', desc: '各種ローンのご相談承ります' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 p-6 border-t-4 border-red-600 hover:bg-gray-750 transition-colors"
              >
                <div className="text-red-600 font-black text-lg mb-2">0{i + 1}</div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* プレミアム限定: 在庫車両セクション */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-red-600 text-white px-6 py-2 font-bold uppercase mb-4 transform -skew-x-12">
                <span className="inline-block transform skew-x-12">おすすめ在庫車</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900">
                厳選された高品質車両
              </h2>
            </motion.div>

            {/* 検索フォーム */}
            <div className="bg-red-600 p-6 mb-12 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <select className="px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>メーカー</option>
                  <option>トヨタ</option>
                  <option>ホンダ</option>
                  <option>日産</option>
                </select>
                <select className="px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>価格帯</option>
                  <option>〜100万円</option>
                  <option>100万円〜200万円</option>
                  <option>200万円〜</option>
                </select>
                <select className="px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>車種</option>
                  <option>軽自動車</option>
                  <option>コンパクト</option>
                  <option>SUV</option>
                </select>
                <button className="bg-yellow-400 text-red-900 px-6 py-3 font-black uppercase hover:bg-yellow-300 transition-colors">
                  検索 →
                </button>
              </div>
            </div>

            {/* 車両カード */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_VEHICLES.map((vehicle, i) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group border-2 border-gray-200 hover:border-red-600"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={vehicle.imageUrl}
                      alt={`${vehicle.manufacturer} ${vehicle.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-4 py-2 font-bold text-sm transform -skew-x-12">
                      <span className="inline-block transform skew-x-12">{vehicle.year}年式</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {vehicle.manufacturer}
                      </span>
                      <span className="bg-gray-900 text-white text-xs px-2 py-1 font-bold">
                        {vehicle.transmission}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-3">
                      {vehicle.model}
                    </h3>
                    <div className="flex gap-2 mb-4">
                      <span className="bg-red-100 text-red-700 text-xs px-2 py-1 font-semibold">
                        {vehicle.fuelType}
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 font-semibold">
                        {vehicle.mileage.toLocaleString()}km
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 font-semibold">
                        {vehicle.color}
                      </span>
                    </div>
                    <div className="text-3xl font-black text-red-600 mb-2">
                      {formatPrice(vehicle.price)}<span className="text-lg text-gray-600">円</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {vehicle.description}
                    </p>
                    <button className="mt-4 w-full bg-gray-900 text-white py-2 font-bold hover:bg-red-600 transition-colors">
                      詳細を見る →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* プレミアム限定: 販売実績セクション */}
      <PremiumFeatures plan={plan}>
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-white mb-2">販売実績</h2>
              <p className="text-gray-400">お客様にお選びいただいた車両</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {MOCK_SALES_RECORDS.map((record, i) => (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gray-800 overflow-hidden hover:bg-gray-750 transition-colors"
                >
                  <div className="relative h-32 overflow-hidden bg-gray-700">
                    <Image
                      src={record.imageUrl}
                      alt={record.vehicleModel}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-400 mb-1">
                      {record.soldDate.toLocaleDateString('ja-JP', {
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </p>
                    <p className="text-sm font-bold text-white truncate mb-1">
                      {record.vehicleModel}
                    </p>
                    <p className="text-sm font-bold text-red-500">
                      {formatPrice(record.soldPrice)}円
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* プレミアム限定: お知らせセクション */}
      <PremiumFeatures plan={plan}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black text-gray-900">お知らせ</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  id: '1',
                  date: '2024-12-10',
                  category: 'announcement',
                  title: '年末年始の営業日程のお知らせ',
                  content: '誠に勝手ながら、12月30日(土)〜1月3日(水)まで年末年始休業とさせていただきます。',
                },
                {
                  id: '2',
                  date: '2024-11-25',
                  category: 'news',
                  title: '新着車両30台入庫しました',
                  content: 'トヨタ、ホンダを中心に人気車種が多数入庫しました。ぜひご覧ください。',
                },
                {
                  id: '3',
                  date: '2024-11-15',
                  category: 'news',
                  title: '無料点検キャンペーン実施中',
                  content: '12月末まで、ご成約のお客様に無料6ヶ月点検をプレゼント中です。',
                },
              ].map((news, i) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-6 bg-gradient-to-r from-gray-50 to-white border-l-4 border-red-600 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="text-sm font-bold text-gray-900">{news.date.split('-')[1]}/{news.date.split('-')[2]}</div>
                    <div className="text-xs text-gray-500">{news.date.split('-')[0]}</div>
                  </div>
                  <div
                    className={`flex-shrink-0 px-3 py-1 text-xs font-bold uppercase self-start ${
                      news.category === 'announcement'
                        ? 'bg-yellow-400 text-red-900'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {news.category === 'announcement' ? 'お知らせ' : 'ニュース'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{news.title}</h3>
                    <p className="text-gray-600 text-sm">{news.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* お問い合わせCTAセクション */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              お気軽にお問い合わせください
            </h2>
            <p className="text-red-100 mb-10 text-lg max-w-2xl mx-auto">
              車両に関するご質問、試乗のご予約など、<br />
              どんなことでもお気軽にご相談ください
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-10 py-4 font-black text-lg hover:bg-yellow-400 hover:text-red-900 transition-colors transform hover:scale-105 active:scale-95">
                お問い合わせフォーム
              </button>
              <button className="border-3 border-white text-white px-10 py-4 font-black text-lg hover:bg-white hover:text-red-600 transition-colors">
                電話で問い合わせ
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
