'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { StylistDetailPage } from './StylistDetailPage';
import { BlogDetailPage } from './BlogDetailPage';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { Stylist } from '@/types/beauty-salon';
import { BlogPost } from '@/types/cms';
import { MOCK_STYLISTS } from '@/data/beauty-salon/stylists';
import { MOCK_MENUS } from '@/data/beauty-salon/menus';
import { MOCK_GALLERY } from '@/data/beauty-salon/gallery';
import { MOCK_REVIEWS } from '@/data/beauty-salon/reviews';
import { MOCK_BLOG_POSTS } from '@/data/beauty-salon/blog';
import { MOCK_NEWS } from '@/data/beauty-salon/news';
import { useState } from 'react';

/**
 * BeautySalonPageのprops
 */
interface BeautySalonPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン */
  plan: Plan;
}

/**
 * 美容室業種のページコンポーネント
 * エレガント・洗練されたデザインで、美しさと品質を重視
 */
export const BeautySalonPage = ({ companyInfo, plan }: BeautySalonPageProps) => {
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // 詳細ページ表示中は詳細ページコンポーネントを返す
  if (selectedStylist) {
    return <StylistDetailPage companyInfo={companyInfo} stylist={selectedStylist} />;
  }

  if (selectedBlogPost) {
    return <BlogDetailPage companyInfo={companyInfo} post={selectedBlogPost} />;
  }

  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - 柔らかいグラデーションと優雅なレイアウト */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
        {/* 装飾的な背景要素 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側：テキストコンテンツ */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 text-xs font-light uppercase tracking-widest mb-6 rounded-full">
                Beauty Salon
              </div>
              <h1 className="text-5xl md:text-6xl font-extralight mb-6 text-gray-800 leading-tight">
                {companyInfo.companyName}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                あなたの魅力を最大限に引き出す、上質なヘアサロン。<br />
                経験豊富なスタイリストが、理想のスタイルを実現します。
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 text-sm font-light uppercase tracking-wider rounded-full hover:shadow-lg transition-all hover:scale-105">
                  ご予約
                </button>
                <button className="border border-pink-300 text-pink-700 px-8 py-3 text-sm font-light uppercase tracking-wider rounded-full hover:bg-pink-50 transition-all">
                  メニューを見る
                </button>
              </div>
            </motion.div>

            {/* 右側：画像 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="relative h-[500px] hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-purple-200/50 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 overflow-hidden rounded-3xl transform -rotate-3 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop"
                  alt="Salon"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* サロンの特徴セクション - カード型で柔らかいデザイン */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extralight text-gray-800 mb-4">当サロンの特徴</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '✨',
                title: '確かな技術',
                description: '経験豊富なスタイリストが、最新のトレンドと技術で理想のスタイルを実現します。',
              },
              {
                icon: '💆',
                title: '上質な空間',
                description: 'リラックスできる落ち着いた空間で、特別なひとときをお過ごしください。',
              },
              {
                icon: '🌿',
                title: 'こだわりの薬剤',
                description: '髪と頭皮に優しいオーガニック薬剤を使用し、美しさと健康を両立します。',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl text-center hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-light text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* メニューセクション - エレガントなテーブル風 */}
      <section className="bg-gradient-to-b from-white to-pink-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extralight text-gray-800 mb-4">メニュー</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {MOCK_MENUS.map((menu, i) => (
              <motion.div
                key={menu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-pink-100"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-light text-gray-800">{menu.name}</h3>
                      {menu.isPopular && (
                        <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-0.5 text-xs rounded-full">
                          人気
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {menu.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">所要時間: 約{menu.duration}分</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-pink-600">
                      ¥{menu.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* プレミアム限定: スタイリスト紹介セクション */}
      <PremiumFeatures plan={plan}>
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-extralight text-gray-800 mb-4">スタイリスト</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {MOCK_STYLISTS.map((stylist, i) => (
                <motion.div
                  key={stylist.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedStylist(stylist)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-72 mb-4 overflow-hidden rounded-3xl">
                    <Image
                      src={stylist.imageUrl}
                      alt={stylist.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="text-xs font-light mb-1">{stylist.title}</div>
                      <div className="text-lg font-light">{stylist.name}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    経験{stylist.experience}年
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {stylist.specialties.map((specialty, j) => (
                      <span
                        key={j}
                        className="bg-pink-100 text-pink-700 px-2 py-1 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {stylist.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* プレミアム限定: ヘアギャラリーセクション */}
      <PremiumFeatures plan={plan}>
        <section className="bg-gradient-to-b from-pink-50 to-purple-50 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-extralight text-gray-800 mb-4">ヘアギャラリー</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {MOCK_GALLERY.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-lg font-light mb-1">{item.title}</div>
                      <div className="text-xs font-light opacity-90">{item.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* プレミアム限定: お客様の声セクション */}
      <PremiumFeatures plan={plan}>
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-extralight text-gray-800 mb-4">お客様の声</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {MOCK_REVIEWS.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    「{review.comment}」
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="text-gray-800 font-light">{review.customerName}</div>
                      <div className="text-gray-500 text-xs">{review.age}</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {review.menu}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* プレミアム限定: ブログセクション */}
      <PremiumFeatures plan={plan}>
        <section className="bg-gradient-to-b from-white to-pink-50 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-extralight text-gray-800 mb-4">ビューティーコラム</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {MOCK_BLOG_POSTS.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedBlogPost(post)}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 text-xs rounded-full">
                        {post.category}
                      </span>
                      <time className="text-xs text-gray-500">{post.publishedAt}</time>
                    </div>
                    <h3 className="text-lg font-light text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {post.excerpt}
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
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-extralight text-gray-800 mb-4">お知らせ</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {MOCK_NEWS.map((news, i) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 p-5 rounded-2xl hover:shadow-md transition-all cursor-pointer border-l-4 border-pink-400"
                >
                  <div className="flex items-start gap-4">
                    <time className="text-sm text-gray-500 font-light min-w-[100px]">
                      {news.publishedAt.toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </time>
                    <span
                      className={`text-xs font-light px-3 py-1 rounded-full min-w-[80px] text-center ${
                        news.category === 'campaign'
                          ? 'bg-rose-100 text-rose-700'
                          : news.category === 'event'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-pink-100 text-pink-700'
                      }`}
                    >
                      {news.category === 'campaign'
                        ? 'キャンペーン'
                        : news.category === 'event'
                        ? 'イベント'
                        : 'お知らせ'}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-light text-gray-800 mb-1">{news.title}</h3>
                      <p className="text-gray-600 text-sm font-light">{news.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* お問い合わせCTAセクション - 優雅なグラデーション */}
      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extralight mb-4 text-white">
              ご予約・お問い合わせ
            </h2>
            <p className="text-pink-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              理想のスタイルを実現するため、まずはお気軽にご相談ください。<br />
              経験豊富なスタイリストが、あなたに最適なプランをご提案いたします。
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-10 py-4 text-sm font-light uppercase tracking-wider rounded-full hover:shadow-2xl transition-all hover:scale-105">
                ご予約フォーム
              </button>
              <button className="border-2 border-white text-white px-10 py-4 text-sm font-light uppercase tracking-wider rounded-full hover:bg-white/10 transition-all">
                お電話でのご予約
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
