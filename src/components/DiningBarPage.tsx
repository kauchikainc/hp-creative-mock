'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * DiningBarPage コンポーネントのプロパティ
 */
interface DiningBarPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン */
  plan: Plan;
}

/**
 * ダイニングバー業種のページコンポーネント
 * 洗練された大人の空間を表現したデザイン
 */
export const DiningBarPage = ({ companyInfo, plan }: DiningBarPageProps) => {
  // スライドショーの状態管理
  const [currentSlide, setCurrentSlide] = useState(0);

  // ヒーローセクションのスライド画像
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80',
      alt: 'バーカウンター',
    },
    {
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80',
      alt: '店内の雰囲気',
    },
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',
      alt: 'お料理',
    },
    {
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&q=80',
      alt: 'カクテル',
    },
  ];

  // 自動スライドショー（6秒ごと）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - ダークトーンのスタイリッシュな雰囲気（スライドショー付き） */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        {/* 背景画像スライドショー */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].alt}
                fill
                className="object-cover"
                priority={currentSlide === 0}
              />
            </motion.div>
          </AnimatePresence>
          {/* ダークオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 via-indigo-950/70 to-indigo-950/90" />
        </div>

        {/* スライドインジケーター */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-0.5 transition-all ${
                index === currentSlide
                  ? 'bg-orange-500 w-12'
                  : 'bg-white/30 w-8 hover:bg-white/50'
              }`}
              aria-label={`スライド${index + 1}へ移動`}
            />
          ))}
        </div>

        {/* コンテンツ */}
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="mb-6 text-orange-400 text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Dining & Bar
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-thin mb-8 tracking-wider">
            {companyInfo.companyName}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed tracking-wide">
            洗練された空間で
            <br />
            特別なひとときを
          </p>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a
              href="#menu"
              className="inline-block border border-orange-500 hover:bg-orange-500 text-white px-8 py-3 text-sm tracking-wider uppercase transition-colors"
            >
              Menu
            </a>
            <a
              href="#reservation"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm tracking-wider uppercase transition-colors"
            >
              Reservation
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* コンセプト */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-wide">
              Concept
            </h2>
            <div className="w-16 h-px bg-orange-500 mx-auto mb-12" />
            <p className="text-lg font-light leading-relaxed text-gray-300 mb-6">
              洗練された大人の空間で、こだわりの料理とカクテルをお楽しみいただけます。
              シェフが厳選した旬の食材を使用した創作料理と、
              バーテンダーが一杯一杯丁寧に作るカクテルで、
              特別なひとときをお過ごしください。
            </p>
            <p className="text-gray-400 font-light">
              デート、接待、記念日など、さまざまなシーンでご利用いただけます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* メニュー */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin text-indigo-950 mb-4 tracking-wide">
              Menu
            </h2>
            <div className="w-16 h-px bg-orange-500 mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-light">
              シェフこだわりの創作料理とバーテンダー厳選のカクテル
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cuisine',
                subtitle: '料理',
                description: '旬の食材を使用した創作料理',
                icon: '🍽️',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
              },
              {
                title: 'Cocktail',
                subtitle: 'カクテル',
                description: 'バーテンダー厳選のカクテル',
                icon: '🍸',
                image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
              },
              {
                title: 'Wine',
                subtitle: 'ワイン',
                description: 'ソムリエ厳選のワインリスト',
                icon: '🍷',
                image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <div className="text-sm tracking-widest text-orange-400 mb-2 uppercase">
                      {category.title}
                    </div>
                    <h3 className="text-2xl font-light mb-3">{category.subtitle}</h3>
                    <p className="text-sm font-light text-gray-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめメニュー */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin text-indigo-950 mb-4 tracking-wide">
              Recommended
            </h2>
            <div className="w-16 h-px bg-orange-500 mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-light">
              シェフおすすめの本日の一皿
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                name: '本日の鮮魚のカルパッチョ',
                description: '新鮮な旬の魚を薄くスライスし、特製ドレッシングで',
                price: 2800,
                image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=800&q=80',
              },
              {
                name: '和牛フィレステーキ',
                description: '厳選和牛をじっくりと焼き上げた逸品',
                price: 4800,
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-center bg-white p-6 shadow-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-light text-indigo-950 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-3">
                    {dish.description}
                  </p>
                  <div className="text-lg font-light text-orange-600">
                    ¥{dish.price.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium機能 - コースメニュー */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin text-indigo-950 mb-4 tracking-wide">
                Course Menu
              </h2>
              <div className="w-16 h-px bg-orange-500 mx-auto mb-6" />
              <p className="text-lg text-gray-600 font-light">
                シェフが腕を振るう特別なコース料理
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'ディナーコース A',
                  description: '前菜、スープ、メイン、デザート',
                  price: 6800,
                  courses: ['本日のアミューズ', '前菜盛り合わせ', '魚料理', '肉料理', 'デザート'],
                },
                {
                  name: 'ディナーコース B',
                  description: 'シェフのおまかせコース',
                  price: 9800,
                  courses: ['アミューズ2品', '前菜3品', '魚料理', '和牛ステーキ', 'デザート'],
                },
                {
                  name: 'アニバーサリーコース',
                  description: '記念日に最適な特別コース',
                  price: 12000,
                  courses: ['スパークリングワイン', '特選前菜', '魚料理', 'フォアグラ', '特選和牛', 'デザート'],
                },
              ].map((course, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-50 p-8 border-t-2 border-orange-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-light text-indigo-950 mb-3">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-6">
                    {course.description}
                  </p>
                  <div className="text-3xl font-light text-orange-600 mb-6">
                    ¥{course.price.toLocaleString()}
                  </div>
                  <ul className="space-y-2">
                    {course.courses.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 font-light flex items-center">
                        <span className="text-orange-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能 - イベント情報 */}
        <section className="py-24 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-wide">
                Events
              </h2>
              <div className="w-16 h-px bg-orange-500 mx-auto mb-6" />
              <p className="text-lg text-gray-300 font-light">
                今月開催予定のイベント
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'ジャズライブナイト',
                  date: '2024.11.15 (Fri)',
                  time: '19:00〜',
                  description: '本格ジャズを楽しみながらディナーをお楽しみください',
                  image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80',
                },
                {
                  title: 'ワインテイスティング会',
                  date: '2024.11.22 (Fri)',
                  time: '18:30〜',
                  description: 'ソムリエが厳選したワインを試飲いただけます',
                  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-800 overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-orange-400 text-sm mb-2 font-light">
                      {event.date} {event.time}
                    </div>
                    <h3 className="text-xl font-light mb-3">{event.title}</h3>
                    <p className="text-sm text-gray-400 font-light">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能 - お知らせ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-thin text-indigo-950 mb-4 tracking-wide">
                News
              </h2>
              <div className="w-16 h-px bg-orange-500 mx-auto mb-6" />
              <p className="text-lg text-gray-600 font-light">
                お知らせ
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-50 p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {[
                  { date: '2024.11.05', category: 'お知らせ', title: '年末年始の営業時間について' },
                  { date: '2024.10.28', category: 'メニュー', title: '冬の新メニューを追加しました' },
                  { date: '2024.10.20', category: 'イベント', title: '11月のイベントスケジュール公開' },
                ].map((news, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 pb-4 border-b border-zinc-200 last:border-0"
                  >
                    <span className="text-gray-500 font-mono text-sm whitespace-nowrap">
                      {news.date}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs whitespace-nowrap">
                      {news.category}
                    </span>
                    <span className="text-gray-800 font-light">{news.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </PremiumFeatures>

      {/* 予約・お問い合わせ */}
      <section id="reservation" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-wide">
              Reservation
            </h2>
            <div className="w-16 h-px bg-orange-500 mx-auto mb-6" />
            <p className="text-lg text-gray-300 font-light">
              ご予約・お問い合わせ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-light mb-4">お電話でのご予約</h3>
              <div className="text-3xl font-light mb-2 text-orange-400">
                03-XXXX-XXXX
              </div>
              <p className="text-gray-400 font-light">
                受付時間：17:00〜23:00
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-light mb-4">メールでのお問い合わせ</h3>
              <div className="text-xl font-light mb-2 text-orange-400">
                info@example.com
              </div>
              <p className="text-gray-400 font-light">
                24時間受付
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border border-zinc-700 px-12 py-6 bg-zinc-800/50">
              <h4 className="text-xl font-light mb-3">営業時間</h4>
              <p className="font-light text-gray-300 mb-2">
                ディナー：17:00〜24:00（ラストオーダー 23:00）
              </p>
              <p className="font-light text-gray-400 text-sm">
                定休日：月曜日
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
