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
 * VacationRentalPageコンポーネントのProps
 */
interface VacationRentalPageProps {
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
 * 民泊業種のページコンポーネント
 * スタイリッシュで流れるようなデザイン、写真を豊富に使用
 */
export const VacationRentalPage: React.FC<VacationRentalPageProps> = ({
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
      name: 'オーシャンビュールーム',
      type: '洋室',
      capacity: 2,
      size: 32,
      pricePerNight: 15000,
      description: '目の前に広がる青い海を眺めながら、心地よい時間をお過ごしいただけます。',
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
      ],
      amenities: ['WiFi', 'エアコン', '冷蔵庫', 'テレビ', 'ドライヤー', 'バスタオル'],
      view: 'オーシャンビュー',
    },
    {
      id: '2',
      name: 'ガーデンスイート',
      type: '和洋室',
      capacity: 4,
      size: 45,
      pricePerNight: 22000,
      description: '緑豊かな庭園を望む広々としたスイートルーム。ファミリーやグループに最適です。',
      imageUrl: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      ],
      amenities: ['WiFi', 'エアコン', '冷蔵庫', 'テレビ', 'ドライヤー', 'バスタオル', 'キッチン'],
      view: 'ガーデンビュー',
    },
    {
      id: '3',
      name: 'ペントハウス',
      type: '洋室',
      capacity: 6,
      size: 65,
      pricePerNight: 35000,
      description: '最上階に位置するラグジュアリーなペントハウス。360度のパノラマビューをお楽しみください。',
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
        'https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      ],
      amenities: ['WiFi', 'エアコン', '冷蔵庫', 'テレビ', 'ドライヤー', 'バスタオル', 'キッチン', 'ジャグジー'],
      view: 'パノラマビュー',
    },
  ];

  // モックデータ: 宿泊プラン (Premium機能)
  const rentalPlans: RentalPlan[] = [
    {
      id: '1',
      name: 'シンプルステイプラン',
      description: '素泊まりでお得に。自由な旅をお楽しみください。',
      pricePerPerson: 8000,
      includes: ['客室利用', 'WiFi', '駐車場'],
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      applicableRooms: ['オーシャンビュールーム', 'ガーデンスイート'],
    },
    {
      id: '2',
      name: 'リゾート満喫プラン',
      description: '朝食付き。地元の新鮮な食材を使った朝食で1日をスタート。',
      pricePerPerson: 12000,
      includes: ['客室利用', 'WiFi', '駐車場', '朝食', 'ウェルカムドリンク'],
      imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      applicableRooms: ['全客室'],
    },
    {
      id: '3',
      name: 'プレミアムステイプラン',
      description: '2食付きの贅沢プラン。地元の特産品を使った夕食と朝食をご用意。',
      pricePerPerson: 18000,
      includes: ['客室利用', 'WiFi', '駐車場', '朝食', '夕食', 'ウェルカムドリンク', 'アーリーチェックイン'],
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      applicableRooms: ['全客室'],
    },
  ];

  // モックデータ: 施設情報
  const facilities: Facility[] = [
    { name: 'WiFi', icon: '📶', description: '全室で高速WiFiが無料でご利用いただけます' },
    { name: '駐車場', icon: '🚗', description: '無料駐車場完備（5台まで）' },
    { name: 'BBQスペース', icon: '🔥', description: '屋外BBQスペースをご用意（要予約）' },
    { name: 'ランドリー', icon: '🧺', description: '共用ランドリー設備あり' },
    { name: 'キッチン', icon: '🍳', description: '一部客室にフルキッチン完備' },
    { name: '自転車レンタル', icon: '🚴', description: '周辺観光に便利な自転車の無料レンタル' },
  ];

  // モックデータ: 周辺観光スポット
  const touristSpots: TouristSpot[] = [
    {
      id: '1',
      name: 'サンセットビーチ',
      category: '観光地',
      description: '夕日の絶景スポット。白い砂浜と青い海が美しいビーチです。',
      distance: 0.5,
      travelTime: 5,
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    },
    {
      id: '2',
      name: '地元市場',
      category: 'グルメ',
      description: '新鮮な海の幸と地元の特産品が並ぶ活気ある市場。',
      distance: 1.2,
      travelTime: 15,
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    },
    {
      id: '3',
      name: 'マリンアクティビティセンター',
      category: 'アクティビティ',
      description: 'シュノーケリング、ダイビング、SUPなど各種マリンスポーツが楽しめます。',
      distance: 2.0,
      travelTime: 20,
      imageUrl: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&q=80',
    },
    {
      id: '4',
      name: '歴史的灯台',
      category: '観光地',
      description: '100年以上の歴史を持つ灯台。展望台からの眺めは圧巻です。',
      distance: 3.5,
      travelTime: 30,
      imageUrl: 'https://images.unsplash.com/photo-1580241991114-34ef25f8f823?w=800&q=80',
    },
  ];

  // モックデータ: ゲストレビュー (Premium機能)
  const guestReviews: GuestReview[] = [
    {
      id: '1',
      guestName: '田中様',
      stayDate: '2025年10月',
      rating: 5,
      comment: '清潔で広々とした客室で、海の眺めも最高でした。ホストの対応も親切で、また泊まりたいと思います。',
      roomType: 'オーシャンビュールーム',
    },
    {
      id: '2',
      guestName: '佐藤様',
      stayDate: '2025年9月',
      rating: 5,
      comment: '家族4人で利用しました。キッチンが付いていたので自炊もでき、とても便利でした。',
      roomType: 'ガーデンスイート',
    },
    {
      id: '3',
      guestName: '鈴木様',
      stayDate: '2025年8月',
      rating: 4,
      comment: 'ロケーション抜群で、ビーチまで徒歩圏内。設備も充実していて快適に過ごせました。',
      roomType: 'オーシャンビュールーム',
    },
  ];

  // モックデータ: お知らせ (Premium機能)
  const newsItems: NewsItem[] = [
    {
      id: '1',
      date: '2025-11-01',
      category: 'お知らせ',
      title: '年末年始の予約受付を開始しました',
      content: '2025年12月28日～2026年1月5日の年末年始期間の予約受付を開始いたしました。\n\n例年人気の期間となっておりますので、お早めのご予約をおすすめいたします。\n\n年末年始特別料金：通常料金の1.5倍\nチェックイン：14:00～\nチェックアウト：～11:00',
      imageUrl: 'https://images.unsplash.com/photo-1482731215275-a1f151646268?w=800&q=80',
    },
    {
      id: '2',
      date: '2025-10-15',
      category: 'キャンペーン',
      title: '秋の連泊割引キャンペーン実施中',
      content: '3泊以上のご予約で10%OFF、5泊以上で20%OFFの特別割引を実施中です。\n\n期間：2025年11月1日～11月30日\n対象：全客室\n\n長期滞在でゆっくりと秋の海辺をお楽しみください。',
    },
    {
      id: '3',
      date: '2025-09-20',
      category: '施設情報',
      title: 'BBQスペースをリニューアルしました',
      content: '屋外BBQスペースを全面リニューアルいたしました。\n\n新しい設備：\n・ガスグリル2台追加\n・屋根付きテーブル4卓\n・照明設備の増設\n\nご利用は要予約制です。フロントまでお問い合わせください。',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    },
  ];

  // モックデータ: ブログ記事 (Premium機能)
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '地元民が教える！周辺おすすめグルメスポット5選',
      excerpt: '民泊周辺の隠れた名店をご紹介。地元の新鮮な海の幸が味わえるお店から、昔ながらの喫茶店まで。',
      content: '当施設周辺には、地元の人々に愛される美味しいお店がたくさんあります。\n\n1. 海鮮食堂「潮風」\n朝獲れの新鮮な魚介類が自慢の食堂。特に刺身定食は絶品です。\n\n2. カフェ「波音」\n海を眺めながらゆっくりできるカフェ。自家焙煎のコーヒーとケーキが人気。\n\n3. 居酒屋「漁火」\n地元の漁師さんが営む居酒屋。その日に獲れた魚で作る料理は格別です。\n\n4. パン屋「朝日堂」\n朝6時から営業する老舗のパン屋さん。焼きたてのパンの香りが最高。\n\n5. そば処「潮騒」\n地元産のそば粉を使った手打ちそばが自慢。海鮮天ぷらそばがおすすめです。',
      date: '2025-11-10',
      category: 'グルメ',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      author: 'スタッフ 山田',
    },
    {
      id: '2',
      title: '秋のおすすめ散策コース',
      excerpt: '紅葉シーズンにぴったりの散策コースをご紹介します。',
      content: '秋の海辺は、夏とは違った魅力があります。\n\nおすすめの散策コースをご紹介します。\n\n【朝の散歩コース（約1時間）】\n民泊 → サンセットビーチ → 灯台 → 民泊\n\n早朝の静かな海辺を歩くと、心が洗われるような気持ちになります。\n灯台からの朝日は絶景です。\n\n【午後の散策コース（約2時間）】\n民泊 → 地元市場 → カフェ「波音」→ ビーチ → 民泊\n\n市場で地元の特産品を見たり、カフェでゆっくりしたり。\n最後はビーチで夕日を眺めて。\n\n秋の海辺の散策、ぜひお楽しみください。',
      date: '2025-10-25',
      category: '観光',
      imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      author: 'スタッフ 佐藤',
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
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50">
          {/* 戻るボタン */}
          <div className="container mx-auto px-4 py-8">
            <motion.button
              onClick={() => setSelectedBlogPost(null)}
              className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              whileHover={{ x: -5 }}
            >
              ← ブログ一覧に戻る
            </motion.button>
          </div>

          {/* ブログ詳細 */}
          <div className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* メイン画像 */}
              <div className="relative h-96">
                <img
                  src={selectedBlogPost.imageUrl}
                  alt={selectedBlogPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-4 py-1 bg-cyan-500 text-white text-sm rounded-full mb-4">
                    {selectedBlogPost.category}
                  </span>
                  <h1 className="text-4xl font-bold text-white mb-4">{selectedBlogPost.title}</h1>
                  <div className="flex items-center gap-4 text-white/90 text-sm">
                    <span>{selectedBlogPost.date}</span>
                    <span>•</span>
                    <span>{selectedBlogPost.author}</span>
                  </div>
                </div>
              </div>

              {/* 本文 */}
              <div className="p-12">
                <div className="prose prose-lg max-w-none">
                  {selectedBlogPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* お問い合わせCTA */}
                <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-violet-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">ご予約・お問い合わせ</h3>
                  <p className="text-gray-700 mb-6">
                    ご不明な点やご予約については、お気軽にお問い合わせください。
                  </p>
                  <motion.button
                    onClick={() => {
                      setSelectedBlogPost(null);
                      setShowContactForm(true);
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full font-bold hover:shadow-lg transition-shadow"
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
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50">
        {/* ヒーローセクション - フルスクリーン、写真重視 */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
              alt="民泊外観"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 via-transparent to-black/60" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center text-white px-4"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-8xl font-light mb-6 tracking-wide"
              >
                {companyInfo.companyName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-3xl font-light mb-12 tracking-wider"
              >
                暮らすように旅する、特別な滞在体験を
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                onClick={() => setShowContactForm(true)}
                className="px-12 py-4 bg-white text-cyan-700 rounded-full text-lg font-medium hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                ご予約・お問い合わせ
              </motion.button>
            </motion.div>
          </div>
          {/* スクロールインジケーター */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl"
          >
            ↓
          </motion.div>
        </section>

        {/* コンセプトセクション */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                Our Philosophy
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mb-12" />
              <p className="text-xl text-gray-700 leading-relaxed">
                旅行は、ただの移動ではありません。<br />
                その土地の空気を感じ、人々の暮らしに触れ、<br />
                自分自身を見つめ直す時間。<br />
                <br />
                {companyInfo.companyName}では、<br />
                暮らすように旅する体験を大切にしています。
              </p>
            </motion.div>
          </div>
        </section>

        {/* 客室のご案内 - 大きな写真とミニマルなテキスト */}
        <section id="rooms" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                客室のご案内
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto" />
            </motion.div>

            <div className="space-y-32">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 cursor-pointer group`}
                  onClick={() => setSelectedRoom(room)}
                >
                  {/* 画像 */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden rounded-3xl">
                    <motion.img
                      src={room.imageUrl}
                      alt={room.name}
                      className="w-full h-96 object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* テキスト */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-700 text-sm rounded-full">
                        {room.type}
                      </span>
                      <span className="text-gray-500 text-sm">定員{room.capacity}名</span>
                    </div>
                    <h3 className="text-4xl font-light text-gray-900 mb-4">{room.name}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{room.description}</p>
                    <div className="flex items-center gap-8 text-gray-700 mb-8">
                      <div>
                        <span className="text-3xl font-light">¥{room.pricePerNight.toLocaleString()}</span>
                        <span className="text-sm text-gray-500"> / 泊</span>
                      </div>
                      <div className="text-sm">
                        {room.size}㎡ • {room.view}
                      </div>
                    </div>
                    <motion.button
                      className="flex items-center gap-2 text-cyan-600 font-medium group-hover:gap-4 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      詳細を見る →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 宿泊プラン一覧 (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="plans" className="py-32 px-4 bg-gradient-to-br from-cyan-50 to-violet-50">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                  宿泊プラン
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mb-8" />
                <p className="text-lg text-gray-600">
                  旅のスタイルに合わせて、お好きなプランをお選びください
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rentalPlans.map((rentalPlan, index) => (
                  <motion.div
                    key={rentalPlan.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                    onClick={() => setSelectedPlan(rentalPlan)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={rentalPlan.imageUrl}
                        alt={rentalPlan.name}
                        className="w-full h-full object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-4">{rentalPlan.name}</h3>
                      <p className="text-gray-600 mb-6">{rentalPlan.description}</p>
                      <div className="mb-6">
                        <span className="text-3xl font-light text-cyan-600">
                          ¥{rentalPlan.pricePerPerson.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500"> / 名</span>
                      </div>
                      <motion.button
                        className="text-cyan-600 font-medium group-hover:text-cyan-700"
                        whileHover={{ x: 5 }}
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

        {/* 施設・設備 */}
        <section id="facilities" className="py-32 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                施設・設備
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-cyan-50 to-violet-50 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{facility.icon}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 周辺観光スポット - 横スクロール風デザイン */}
        <section id="spots" className="py-32 px-4 bg-gradient-to-br from-violet-50 to-cyan-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                周辺観光スポット
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mb-8" />
              <p className="text-lg text-gray-600">
                民泊周辺の魅力的なスポットをご紹介
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {touristSpots.map((spot, index) => (
                <motion.div
                  key={spot.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-64">
                    <img
                      src={spot.imageUrl}
                      alt={spot.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-cyan-700 text-sm rounded-full">
                        {spot.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-4">{spot.name}</h3>
                    <p className="text-gray-600 mb-6">{spot.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-500">📍</span>
                        <span>{spot.distance}km</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-violet-500">⏱</span>
                        <span>{spot.travelTime}分</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ゲストレビュー (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="reviews" className="py-32 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                  ゲストレビュー
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {guestReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-gradient-to-br from-cyan-50 to-violet-50 rounded-3xl"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">「{review.comment}」</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="font-medium">{review.guestName}</span>
                      <span>{review.stayDate}</span>
                    </div>
                    <div className="mt-2 text-xs text-cyan-600">{review.roomType}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </PremiumFeatures>

        {/* お知らせ (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="news" className="py-32 px-4 bg-gradient-to-br from-violet-50 to-cyan-50">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                  お知らせ
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto" />
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-6">
                {newsItems.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedNews(news)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-700 text-sm rounded-full">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 hover:text-cyan-600 transition-colors">
                      {news.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </PremiumFeatures>

        {/* ブログ (Premium) */}
        <PremiumFeatures plan={plan}>
          <section id="blog" className="py-32 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                  ブログ
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mb-8" />
                <p className="text-lg text-gray-600">
                  地元の魅力やおすすめスポットをご紹介
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                    onClick={() => setSelectedBlogPost(post)}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <motion.img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1 bg-white/90 backdrop-blur-sm text-cyan-700 text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
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
        <section id="access" className="py-32 px-4 bg-gradient-to-br from-cyan-50 to-violet-50">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-wide">
                アクセス
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-12 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">📍 住所</h3>
                  <p className="text-gray-700">
                    〒{companyInfo.postalCode}<br />
                    {companyInfo.prefecture}{companyInfo.city}{companyInfo.address}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">📞 お問い合わせ</h3>
                  <p className="text-gray-700">
                    TEL: {companyInfo.phoneNumber}<br />
                    Email: {companyInfo.email}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">🚗 アクセス</h3>
                <p className="text-gray-700 leading-relaxed">
                  電車でお越しの方：最寄り駅から徒歩15分<br />
                  お車でお越しの方：高速道路ICから車で10分<br />
                  空港からお越しの方：空港から車で30分
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light text-white mb-8 tracking-wide">
                ご予約お待ちしております
              </h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                特別な滞在体験をお届けいたします。<br />
                ご不明な点やご要望がございましたら、お気軽にお問い合わせください。
              </p>
              <motion.button
                onClick={() => setShowContactForm(true)}
                className="px-12 py-4 bg-white text-cyan-700 rounded-full text-lg font-medium hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                ご予約・お問い合わせ
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
};
