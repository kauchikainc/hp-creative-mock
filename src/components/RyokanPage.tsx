'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * RyokanPage コンポーネントのプロパティ
 */
interface RyokanPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン */
  plan: Plan;
}

/**
 * 旅館業種のページコンポーネント
 * 和の雰囲気とおもてなしの心を表現したデザイン
 */
export const RyokanPage = ({ companyInfo, plan }: RyokanPageProps) => {
  // スライドショーの状態管理
  const [currentSlide, setCurrentSlide] = useState(0);

  // ヒーローセクションのスライド画像
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80',
      alt: '旅館外観',
    },
    {
      image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1600&q=80',
      alt: '客室内観',
    },
    {
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80',
      alt: '露天風呂',
    },
    {
      image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=1600&q=80',
      alt: '和室',
    },
  ];

  // 自動スライドショー（5秒ごと）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - 和の雰囲気（スライドショー付き） */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* 背景画像スライドショー */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
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
          {/* グラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-transparent" />
        </div>

        {/* スライドインジケーター */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-amber-500 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`スライド${index + 1}へ移動`}
            />
          ))}
        </div>

        {/* コンテンツ */}
        <motion.div
          className="relative z-10 text-white px-4 md:px-12 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 text-amber-300 font-serif text-xl tracking-widest">
            ようこそ
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
            {companyInfo.companyName}
          </h1>
          <p className="text-xl md:text-2xl font-serif mb-8 leading-relaxed">
            心からのおもてなしで
            <br />
            忘れられないひとときを
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#rooms"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-serif px-10 py-4 rounded-sm text-lg transition-colors shadow-lg"
            >
              客室を見る
            </a>
          </motion.div>
        </motion.div>

        {/* 和の装飾要素 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* おもてなしの心 - 旅館の特徴 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
              おもてなしの心
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-serif">
              伝統と格式、そして心温まるサービスでお迎えいたします
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '温泉',
                description: '源泉かけ流しの天然温泉で、心身ともにお寛ぎください',
                icon: '♨️',
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
              },
              {
                title: '客室',
                description: '和の趣を大切にした、くつろぎの空間をご用意',
                icon: '🏯',
                image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80',
              },
              {
                title: 'お料理',
                description: '季節の食材を活かした、心を込めた会席料理',
                icon: '🍱',
                image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-sm shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/10 transition-colors" />
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-serif leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 客室紹介 */}
      <section id="rooms" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
              客室のご案内
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-lg text-gray-700 font-serif">
              和の美しさと快適さが調和した、心安らぐ客室
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: '露天風呂付き特別室',
                type: '和洋室',
                capacity: '2〜4名様',
                price: 45000,
                image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80',
                features: ['専用露天風呂', '広縁付き', '庭園ビュー'],
              },
              {
                name: 'スタンダード和室',
                type: '和室',
                capacity: '2〜3名様',
                price: 28000,
                image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&q=80',
                features: ['10畳間', '広縁付き', '山の眺望'],
              },
            ].map((room, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-sm shadow-xl overflow-hidden border-t-4 border-amber-600"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-2">
                        {room.name}
                      </h3>
                      <p className="text-gray-600 font-serif">
                        {room.type} / {room.capacity}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 font-serif">お一人様</div>
                      <div className="text-2xl font-serif font-bold text-amber-600">
                        ¥{room.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 font-serif">〜</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-sm font-serif"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 温泉のご案内 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
              温泉のご案内
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-serif">
              源泉かけ流しの天然温泉で、日頃の疲れを癒してください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '大露天風呂',
                type: '露天風呂',
                features: ['庭園を眺めながら', '24時間入浴可'],
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
              },
              {
                name: '大浴場「月の湯」',
                type: '内湯',
                features: ['檜造り', 'サウナ完備'],
                image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800&q=80',
              },
              {
                name: '貸切風呂',
                type: '貸切風呂',
                features: ['プライベート空間', '要予約'],
                image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
              },
            ].map((onsen, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-sm shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80">
                  <Image
                    src={onsen.image}
                    alt={onsen.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">{onsen.name}</h3>
                    <p className="text-amber-300 font-serif mb-3">{onsen.type}</p>
                    <ul className="space-y-1">
                      {onsen.features.map((feature, i) => (
                        <li key={i} className="text-sm font-serif">
                          ・{feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* お料理 */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
              お料理
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-lg text-gray-600 font-serif">
              旬の食材を活かした、季節の会席料理をご堪能ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="relative h-96 rounded-sm overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80"
                alt="季節の会席料理"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif font-bold text-emerald-900 mb-6">
                季節の会席料理
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed mb-6">
                地元の旬の食材をふんだんに使用し、
                料理長が心を込めて作り上げる会席料理。
                四季折々の味覚を、美しい器とともにお楽しみください。
              </p>
              <ul className="space-y-3">
                {[
                  '地元の新鮮な海の幸',
                  '季節の山菜と野菜',
                  '厳選された和牛',
                  '自家製デザート',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 font-serif">
                    <span className="text-amber-600 mr-3">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium機能 - 宿泊プラン一覧 */}
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
                宿泊プラン
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
              <p className="text-lg text-gray-600 font-serif">
                お客様のご要望に合わせた、多彩な宿泊プランをご用意
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '【早割30】スタンダードプラン',
                  description: '30日前までのご予約で10%OFF',
                  price: 25200,
                  features: ['2食付き', 'チェックアウト11時', '温泉入り放題'],
                },
                {
                  title: '【記念日】アニバーサリープラン',
                  description: '特別な日を彩る、おもてなし',
                  price: 38000,
                  features: ['特選会席', 'ケーキ付き', 'レイトチェックアウト'],
                },
                {
                  title: '【一人旅】気ままな休日プラン',
                  description: 'お一人様でも安心してお過ごしいただけます',
                  price: 18000,
                  features: ['朝食付き', '駅送迎サービス', 'Wi-Fi完備'],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-emerald-50 rounded-sm p-8 shadow-lg border-l-4 border-amber-600"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-serif font-bold text-emerald-900 mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-gray-700 font-serif mb-6 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-serif font-bold text-amber-600">
                      ¥{plan.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 font-serif">お一人様〜</div>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 font-serif">
                        <span className="text-emerald-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能 - 季節のお便り（ブログ） */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
                季節のお便り
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
              <p className="text-lg text-gray-600 font-serif">
                四季折々の旅館の様子をお届けします
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: '紅葉の季節、露天風呂からの絶景',
                  date: '2024年11月1日',
                  category: '季節のお便り',
                  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
                  excerpt: '秋も深まり、庭園の紅葉が見頃を迎えております。露天風呂から眺める紅葉は格別です。',
                },
                {
                  title: '冬の特選会席、ふぐコースのご案内',
                  date: '2024年10月25日',
                  category: 'お料理',
                  image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
                  excerpt: '今年も冬の味覚、ふぐの季節がやってまいりました。贅沢なふぐ尽くしのコースをご用意。',
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-sm overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-sm font-serif">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 font-serif">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-emerald-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 font-serif text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能 - お知らせ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
                お知らせ
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
            </motion.div>

            <motion.div
              className="bg-emerald-50 rounded-sm p-8 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {[
                  { date: '2024.11.05', category: 'イベント', title: '年末年始の宿泊予約受付開始' },
                  { date: '2024.10.28', category: 'お知らせ', title: '貸切風呂のリニューアルが完了しました' },
                  { date: '2024.10.20', category: 'プラン情報', title: '冬の特別プラン「雪見酒プラン」販売開始' },
                ].map((news, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 pb-4 border-b border-emerald-200 last:border-0"
                  >
                    <span className="text-gray-600 font-mono text-sm whitespace-nowrap">
                      {news.date}
                    </span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-sm font-serif whitespace-nowrap">
                      {news.category}
                    </span>
                    <span className="text-gray-800 font-serif">{news.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </PremiumFeatures>

      {/* お問い合わせ */}
      <section className="py-20 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              お問い合わせ・ご予約
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
            <p className="text-lg font-serif text-emerald-100">
              お気軽にお問い合わせください
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
              <h3 className="text-2xl font-serif font-bold mb-4">お電話でのご予約</h3>
              <div className="text-3xl font-serif font-bold mb-2 text-amber-300">
                03-XXXX-XXXX
              </div>
              <p className="text-emerald-100 font-serif">
                受付時間：9:00〜20:00
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
              <h3 className="text-2xl font-serif font-bold mb-4">メールでのお問い合わせ</h3>
              <div className="text-xl font-serif mb-2 text-amber-300">
                info@example.com
              </div>
              <p className="text-emerald-100 font-serif">
                24時間受付
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white/10 rounded-sm px-8 py-6 backdrop-blur-sm">
              <h4 className="text-xl font-serif font-bold mb-3">営業時間</h4>
              <p className="font-serif text-emerald-100">
                チェックイン：15:00〜 / チェックアウト：〜10:00
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
