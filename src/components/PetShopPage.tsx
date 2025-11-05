'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * PetShopPage コンポーネントのプロパティ
 */
interface PetShopPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * ペットショップ業種のページコンポーネント
 * 可愛らしく温かみのある、動きのあるデザイン
 */
export const PetShopPage = ({ companyInfo, plan }: PetShopPageProps) => {
  // スライドショーの状態管理
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=80',
      title: 'かわいい子犬たちが、あなたを待っています',
      subtitle: '新しい家族との出会いをサポートします',
    },
    {
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80',
      title: '愛らしい子猫ちゃんも多数います',
      subtitle: '一目惚れする子が必ず見つかります',
    },
    {
      image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1200&q=80',
      title: '小動物から爬虫類まで幅広く取り扱い',
      subtitle: 'あなたにぴったりのペットを見つけましょう',
    },
  ];

  // 自動スライドショー
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - スライドショー */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* グラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* コンテンツ */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-gradient-to-r from-amber-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
                  🐾 {companyInfo.companyName} 🐾
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {heroSlides[currentSlide].title}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
                  {heroSlides[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    ペットを見る 🐶🐱
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors"
                  >
                    お問い合わせ
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* スライドインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`スライド ${index + 1}に移動`}
            />
          ))}
        </div>
      </section>

      {/* サービス紹介セクション - 肉球デザイン */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🐾</div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent mb-4">
              サービス紹介
            </h2>
            <p className="text-gray-600 text-lg">
              大切な家族との幸せな暮らしを全力でサポートします
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                emoji: '🏠',
                title: 'ペット販売',
                description: '健康で元気な子犬・子猫・小動物など、様々なペットを取り扱っています',
                color: 'from-amber-400 to-orange-400',
              },
              {
                emoji: '✂️',
                title: 'トリミング',
                description: '経験豊富なトリマーが、可愛く・清潔に仕上げます',
                color: 'from-pink-400 to-rose-400',
              },
              {
                emoji: '🏥',
                title: 'ペットホテル',
                description: '旅行やお出かけの際も安心。愛情込めてお預かりします',
                color: 'from-purple-400 to-indigo-400',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-amber-200"
              >
                <div className="text-7xl mb-6 animate-bounce">{service.emoji}</div>
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 人気のペットギャラリー */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              人気のペットたち
            </h2>
            <p className="text-gray-600 text-lg">
              今週の人気者をご紹介します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
                name: 'ポメラニアンの男の子',
                age: '生後3ヶ月',
                price: '¥280,000',
              },
              {
                image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80',
                name: 'スコティッシュフォールドの女の子',
                age: '生後2ヶ月',
                price: '¥250,000',
              },
              {
                image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80',
                name: 'トイプードルの男の子',
                age: '生後4ヶ月',
                price: '¥320,000',
              },
            ].map((pet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    人気No.{index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pet.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{pet.age}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
                      {pet.price}
                    </span>
                    <button className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-shadow">
                      詳細 →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声セクション - 吹き出しデザイン */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">💕</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-gray-600 text-lg">
              たくさんの飼い主様から嬉しいお声をいただいています
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: '田中様',
                petName: 'ポチ',
                comment: '初めての犬でしたが、スタッフの方が丁寧に飼い方を教えてくださり、安心してお迎えできました。ポチも元気いっぱいです！',
                rating: 5,
              },
              {
                name: '佐藤様',
                petName: 'ミケ',
                comment: 'トリミングの仕上がりがいつも可愛くて大満足です。ミケも嫌がらずにお利口さんにしているそうです。',
                rating: 5,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg relative">
                  {/* 吹き出しの三角 */}
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>

                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    「{review.comment}」
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.petName}ちゃんの飼い主様</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium機能: 新着ペット一覧 */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="text-6xl mb-4">🆕</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                新着ペット
              </h2>
              <p className="text-gray-600 text-lg">
                最新の子たちが仲間入りしました
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { species: '犬', breed: 'チワワ', age: '2ヶ月', image: 'https://images.unsplash.com/photo-1612536410284-4a726fcb4e7f?w=400&q=80' },
                { species: '猫', breed: 'マンチカン', age: '3ヶ月', image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&q=80' },
                { species: '犬', breed: '柴犬', age: '3ヶ月', image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&q=80' },
                { species: '猫', breed: 'アメリカンショートヘア', age: '2ヶ月', image: 'https://images.unsplash.com/photo-1573865526739-10c1d3a1f208?w=400&q=80' },
              ].map((pet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={pet.image}
                      alt={pet.breed}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {pet.species}
                      </span>
                      <span className="text-sm text-gray-600">{pet.age}</span>
                    </div>
                    <h3 className="font-bold text-gray-900">{pet.breed}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能: スタッフ日記 */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="text-6xl mb-4">📖</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                スタッフ日記
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: '新しく仲間入りした子犬たちをご紹介！',
                  date: '2025-11-05',
                  image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80',
                  excerpt: '今週は可愛い子犬たちが新しく仲間入りしました。元気いっぱいの子たちばかりです...',
                },
                {
                  title: 'トリミング技術講習会に参加してきました',
                  date: '2025-11-01',
                  image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&q=80',
                  excerpt: '最新のトリミング技術を学ぶため、講習会に参加しました。さらに可愛く仕上げられます...',
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-52">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <button className="text-pink-600 font-bold hover:text-pink-700 transition-colors">
                      続きを読む →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能: お知らせ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="text-6xl mb-4">📢</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                お知らせ
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8">
              {[
                { date: '2025-11-05', category: '新着ペット', title: 'かわいい柴犬の子犬が仲間入りしました' },
                { date: '2025-11-01', category: 'イベント', title: '12月のペット撮影会のお知らせ' },
                { date: '2025-10-28', category: 'お知らせ', title: '年末年始の営業時間について' },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 mb-4 last:mb-0 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <span className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 hover:text-pink-600 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* お問い合わせセクション */}
      <section className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-pink-500 relative overflow-hidden">
        {/* 肉球の装飾 */}
        <div className="absolute top-10 right-10 text-white/10 text-9xl">🐾</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-9xl">🐾</div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-7xl mb-6">🏠❤️🐾</div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ご来店お待ちしています
            </h2>

            <p className="text-xl text-white/90 mb-12">
              可愛いペットたちに会いに来てください。<br />
              スタッフ一同、心よりお待ちしております。
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-10 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-semibold mb-2">
                    📞 お電話でのお問い合わせ
                  </div>
                  <div className="text-2xl font-black text-pink-600">
                    0120-XXX-XXX
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    10:00〜19:00（年中無休）
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-semibold mb-2">
                    ✉️ メールでのお問い合わせ
                  </div>
                  <div className="text-lg font-bold text-pink-600 break-all">
                    info@example.com
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    24時間受付
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-12 py-5 rounded-full font-black text-xl shadow-lg hover:shadow-xl transition-all"
            >
              お問い合わせフォームへ →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
