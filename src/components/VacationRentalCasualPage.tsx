'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import type { Room, Plan as RentalPlan, TouristSpot, Facility, GuestReview } from '@/types/vacation-rental';
import { RoomDetailPage } from './vacation-rental/RoomDetailPage';
import { PlanDetailPage } from './vacation-rental/PlanDetailPage';
import { ContactForm } from './vacation-rental/ContactForm';
import { NewsDetailPage } from './vacation-rental/NewsDetailPage';

/**
 * VacationRentalCasualPageコンポーネントのProps
 */
interface VacationRentalCasualPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン（standard or premium） */
  plan: Plan;
}

/**
 * お知らせ情報の型
 */
interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
  imageUrl?: string;
}

/**
 * ブログ記事の型
 */
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  author: string;
}

/**
 * 民泊(大衆)業種のページコンポーネント
 * 親しみやすく大衆味のあるデザイン、絵文字やカジュアルな言葉遣いを多用
 */
export const VacationRentalCasualPage: React.FC<VacationRentalCasualPageProps> = ({
  companyInfo,
  plan,
}) => {
  // 詳細ページ表示の状態管理
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<RentalPlan | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // モックデータ: 客室情報
  const rooms: Room[] = [
    {
      id: '1',
      name: '和室',
      type: '和室',
      capacity: 2,
      size: 15,
      pricePerNight: 8000,
      description: 'ゆったり過ごせる畳の和室です。窓からは緑が見えて癒されますよ♪',
      imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
        'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80',
      ],
      amenities: ['WiFi', 'エアコン', 'テレビ', 'お茶セット', '座布団'],
      view: '庭園ビュー',
    },
    {
      id: '2',
      name: '洋室ツイン',
      type: '洋室',
      capacity: 2,
      size: 20,
      pricePerNight: 9000,
      description: 'シンプルで使いやすい洋室です。ベッドは快適で朝までぐっすり眠れます！',
      imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
      ],
      amenities: ['WiFi', 'エアコン', 'テレビ', 'ドライヤー', 'ハンガー'],
      view: '街ビュー',
    },
    {
      id: '3',
      name: 'ファミリールーム',
      type: '和洋室',
      capacity: 4,
      size: 30,
      pricePerNight: 14000,
      description: '広々したファミリールーム。小さなお子さん連れにも安心です♪',
      imageUrl: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      ],
      amenities: ['WiFi', 'エアコン', 'テレビ', 'ドライヤー', 'お茶セット', 'ベビーベッド'],
      view: '庭園ビュー',
    },
  ];

  // モックデータ: 宿泊プラン (Premium機能)
  const rentalPlans: RentalPlan[] = [
    {
      id: '1',
      name: 'シンプルステイ',
      description: '素泊まりでお得に！自由気ままに過ごしたい方におすすめです。',
      pricePerPerson: 6000,
      includes: ['客室利用', 'WiFi', 'タオル'],
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      applicableRooms: ['全客室'],
    },
    {
      id: '2',
      name: '朝ごはん付き',
      description: '手作りの朝ごはん付き♪ 地元の食材を使った和定食をご用意します！',
      pricePerPerson: 8000,
      includes: ['客室利用', 'WiFi', 'タオル', '朝食', 'お茶'],
      imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      applicableRooms: ['全客室'],
    },
    {
      id: '3',
      name: 'のんびり連泊',
      description: '2泊以上でお得！長く泊まるほどお安くなります。連泊大歓迎です😊',
      pricePerPerson: 7000,
      includes: ['客室利用', 'WiFi', 'タオル', 'ランドリー無料'],
      imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      applicableRooms: ['全客室'],
    },
  ];

  // モックデータ: 施設情報
  const facilities: Facility[] = [
    { name: 'WiFi', icon: '📶', description: '全室で使えます！速度も十分です' },
    { name: '駐車場', icon: '🚗', description: '無料で停められます（2台まで）' },
    { name: 'キッチン', icon: '🍳', description: '自炊できます。調味料もあります' },
    { name: '洗濯機', icon: '🧺', description: '自由に使ってください（無料）' },
    { name: 'お風呂', icon: '🛁', description: '大きなお風呂でゆったり♨️' },
    { name: 'エアコン', icon: '❄️', description: '全室完備。暖房もバッチリ' },
  ];

  // モックデータ: 周辺情報
  const nearbySpots = [
    { name: 'コンビニ', distance: '徒歩3分', icon: '🏪' },
    { name: 'スーパー', distance: '徒歩5分', icon: '🛒' },
    { name: '駅', distance: '徒歩10分', icon: '🚉' },
    { name: '公園', distance: '徒歩7分', icon: '🌳' },
  ];

  // モックデータ: ゲストレビュー (Premium機能)
  const guestReviews: GuestReview[] = [
    {
      id: '1',
      guestName: '山田さん',
      stayDate: '2025年10月',
      rating: 5,
      comment: 'アットホームで居心地が良かったです！また泊まりたいです。',
      roomType: '和室',
    },
    {
      id: '2',
      guestName: '佐藤さん',
      stayDate: '2025年9月',
      rating: 5,
      comment: 'ホストの方が親切で、いろいろ教えてくれました。朝ごはんも美味しかったです♪',
      roomType: '洋室ツイン',
    },
    {
      id: '3',
      guestName: '田中さん',
      stayDate: '2025年8月',
      rating: 4,
      comment: '家族みんなでのんびり過ごせました。子供も楽しそうでした！',
      roomType: 'ファミリールーム',
    },
  ];

  // モックデータ: お知らせ (Premium機能)
  const newsItems: NewsItem[] = [
    {
      id: '1',
      date: '2025-11-01',
      category: 'お知らせ',
      title: '年末年始の予約受付中です🎍',
      content: '年末年始（12/28～1/5）のご予約を受け付けています。\n\nこの期間は混み合いますので、お早めのご予約をおすすめします！\n\n料金：通常料金＋50%\nチェックイン：14:00～\nチェックアウト：～11:00\n\nご予約お待ちしています😊',
      imageUrl: 'https://images.unsplash.com/photo-1482731215275-a1f151646268?w=800&q=80',
    },
    {
      id: '2',
      date: '2025-10-15',
      category: 'キャンペーン',
      title: '連泊割引やってます！',
      content: '3泊以上で10%OFF、5泊以上なら20%OFFです。\n\n期間：11月1日～11月30日\n対象：全てのお部屋\n\nゆっくり滞在してリフレッシュしてくださいね♪',
    },
    {
      id: '3',
      date: '2025-09-20',
      category: '施設情報',
      title: 'お風呂をリニューアルしました♨️',
      content: 'お風呂を新しくしました！\n\n新しい設備：\n・大きな浴槽\n・シャワーヘッド交換\n・浴室乾燥機\n\nもっと快適に使えるようになりました。ぜひご利用ください！',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    },
  ];

  // モックデータ: ブログ記事 (Premium機能)
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '近所のおすすめラーメン屋さん🍜',
      excerpt: '歩いて5分のところにある絶品ラーメン店をご紹介！',
      content: '民泊から歩いて5分のところに、めちゃくちゃ美味しいラーメン屋さんがあります。\n\n「らーめん山田」さんです！\n\n特におすすめは味噌ラーメン。濃厚なスープに太麺がよく絡んで最高です。\nチャーシューも分厚くて、食べ応えバツグンです。\n\n営業時間：11:00～14:00、18:00～22:00\n定休日：火曜日\n\nお泊まりの際はぜひ行ってみてください！',
      date: '2025-11-10',
      category: 'グルメ',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
      author: 'オーナー',
    },
    {
      id: '2',
      title: '季節のお花が見頃です🌸',
      excerpt: '近くの公園で綺麗なお花が咲いています！',
      content: '徒歩7分の公園で、今の季節のお花が見頃を迎えています。\n\nコスモスやダリアが綺麗に咲いていて、お散歩にぴったりです。\n\n朝の散歩もおすすめですよ。空気が澄んでいて気持ちいいです。\n\nベンチもあるので、ゆっくり休憩もできます。\n\nカメラを持ってお出かけしてみてはいかがでしょうか📷',
      date: '2025-10-25',
      category: 'おでかけ',
      imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
      author: 'オーナー',
    },
  ];

  // お問い合わせフォーム表示中
  if (showContactForm) {
    return <ContactForm companyInfo={companyInfo} onBack={() => setShowContactForm(false)} />;
  }

  // お知らせ詳細表示中
  if (selectedNews) {
    return <NewsDetailPage companyInfo={companyInfo} news={selectedNews} onBack={() => setSelectedNews(null)} />;
  }

  // ブログ詳細表示中
  if (selectedBlogPost) {
    return (
      <BaseLayout companyInfo={companyInfo}>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
          {/* 戻るボタン */}
          <div className="container mx-auto px-4 py-8">
            <motion.button
              onClick={() => setSelectedBlogPost(null)}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
              whileHover={{ x: -5 }}
            >
              ← ブログ一覧に戻る
            </motion.button>
          </div>

          {/* ブログ詳細 */}
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* メイン画像 */}
              <div className="relative h-80">
                <img
                  src={selectedBlogPost.imageUrl}
                  alt={selectedBlogPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm rounded-full mb-3">
                    {selectedBlogPost.category}
                  </span>
                  <h1 className="text-3xl font-bold text-white mb-3">{selectedBlogPost.title}</h1>
                  <div className="flex items-center gap-3 text-white/90 text-sm">
                    <span>{selectedBlogPost.date}</span>
                    <span>•</span>
                    <span>{selectedBlogPost.author}</span>
                  </div>
                </div>
              </div>

              {/* 本文 */}
              <div className="p-8">
                <div className="prose max-w-none">
                  {selectedBlogPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* お問い合わせCTA */}
                <div className="mt-10 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ご予約・お問い合わせ</h3>
                  <p className="text-gray-700 mb-4">
                    気になることがあれば、気軽にお問い合わせください♪
                  </p>
                  <motion.button
                    onClick={() => {
                      setSelectedBlogPost(null);
                      setShowContactForm(true);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    お問い合わせ
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }

  // 客室詳細表示中
  if (selectedRoom) {
    return <RoomDetailPage companyInfo={companyInfo} room={selectedRoom} onBack={() => setSelectedRoom(null)} />;
  }

  // プラン詳細表示中
  if (selectedPlan) {
    return <PlanDetailPage companyInfo={companyInfo} plan={selectedPlan} onBack={() => setSelectedPlan(null)} />;
  }

  // メインページ
  return (
    <BaseLayout companyInfo={companyInfo}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        {/* ヒーローセクション */}
        <section className="relative h-96">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80"
              alt="民泊外観"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 to-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white px-4"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl font-medium mb-4"
              >
                🏡 {companyInfo.companyName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl mb-6"
              >
                おうちみたいにくつろげる、あったか民泊
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={() => setShowContactForm(true)}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-lg font-bold hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                予約する
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ホストからのメッセージ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 transform rotate-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                    alt="ホスト"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">ようこそ！ 😊</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    こんにちは！オーナーです。<br />
                    うちの民泊は、一軒家を改装して作りました。<br />
                    まるで実家に帰ったような、ゆったりした時間を過ごしていただけたら嬉しいです。<br />
                    <br />
                    困ったことがあれば、いつでも声をかけてくださいね♪
                  </p>
                  <p className="text-right text-gray-600 italic">～ホストより</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* お部屋紹介 */}
        <section id="rooms" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🛏️ お部屋紹介
              </h2>
              <p className="text-gray-600">全3室、それぞれ違う雰囲気のお部屋です</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedRoom(room)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <img
                      src={room.imageUrl}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-white text-orange-600 text-sm font-bold rounded-full shadow">
                        {room.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-orange-600">
                          ¥{room.pricePerNight.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">/ 泊</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {room.capacity}名 • {room.size}畳
                      </div>
                    </div>
                    <motion.button
                      className="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-bold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      詳細を見る →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 設備・アメニティ */}
        <section id="facilities" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                ✨ 設備・アメニティ
              </h2>
              <p className="text-gray-600">必要なものは揃ってます！</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ rotate: 2 }}
                >
                  <div className="text-4xl mb-2">{facility.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{facility.name}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 宿泊プラン (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="plans" className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  💰 宿泊プラン
                </h2>
                <p className="text-gray-600">お好きなプランをお選びください</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rentalPlans.map((rentalPlan, index) => (
                  <motion.div
                    key={rentalPlan.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer relative"
                    onClick={() => setSelectedPlan(rentalPlan)}
                    whileHover={{ y: -5 }}
                  >
                    {index === 1 && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg transform rotate-12">
                          おすすめ！
                        </span>
                      </div>
                    )}
                    <div className="relative h-40">
                      <img
                        src={rentalPlan.imageUrl}
                        alt={rentalPlan.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{rentalPlan.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{rentalPlan.description}</p>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-orange-600">
                          ¥{rentalPlan.pricePerPerson.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">/ 名</span>
                      </div>
                      <ul className="space-y-1 mb-4">
                        {rentalPlan.includes.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        className="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-bold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        詳細を見る →
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </PremiumFeatures>

        {/* 周辺情報 */}
        <section id="nearby" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                📍 周辺情報
              </h2>
              <p className="text-gray-600">便利な立地です</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nearbySpots.map((spot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{spot.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{spot.name}</h3>
                      <p className="text-gray-600">{spot.distance}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ゲストの声 (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="reviews" className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  💬 ゲストの声
                </h2>
                <p className="text-gray-600">泊まった方の感想です</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {guestReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-sm relative transform rotate-1 hover:rotate-0 transition-transform"
                  >
                    <div className="absolute -top-3 -left-3 text-6xl text-orange-300 opacity-50">"</div>
                    <div className="relative">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-gray-900">{review.guestName}</span>
                        <span className="text-gray-500">{review.stayDate}</span>
                      </div>
                      <div className="mt-1 text-xs text-orange-600">{review.roomType}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </PremiumFeatures>

        {/* お知らせ (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="news" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  📢 お知らせ
                </h2>
              </motion.div>

              <div className="space-y-4">
                {newsItems.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedNews(news)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-sm font-bold rounded-full">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 hover:text-orange-600 transition-colors">
                      {news.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </PremiumFeatures>

        {/* ホストのブログ (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="blog" className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  📝 ホストのブログ
                </h2>
                <p className="text-gray-600">おすすめ情報をご紹介</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedBlogPost(post)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white text-orange-600 text-sm font-bold rounded-full shadow">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </PremiumFeatures>

        {/* アクセス */}
        <section id="access" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🗺️ アクセス
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📍 住所</h3>
                <p className="text-gray-700">
                  〒{companyInfo.postalCode}<br />
                  {companyInfo.prefecture}{companyInfo.city}{companyInfo.address}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📞 連絡先</h3>
                <p className="text-gray-700">
                  電話: {companyInfo.phoneNumber}<br />
                  メール: {companyInfo.email}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">🚃 交通</h3>
                <p className="text-gray-700">
                  最寄り駅から徒歩10分<br />
                  駐車場あり（無料）
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 予約・お問い合わせ */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                お待ちしています！ 😊
              </h2>
              <p className="text-xl text-white/90 mb-8">
                気になることがあれば、気軽にお問い合わせください
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => setShowContactForm(true)}
                  className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-bold hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  お問い合わせ
                </motion.button>
                <a
                  href={`tel:${companyInfo.phoneNumber}`}
                  className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-bold hover:shadow-2xl transition-shadow flex items-center gap-2"
                >
                  📞 {companyInfo.phoneNumber}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};
