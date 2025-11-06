'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Service, WorkCase, Certification, ServiceArea, NewsItem } from '@/types/cleaning-service';
import { ContactForm } from './ContactForm';
import { NewsDetailPage } from './NewsDetailPage';

/**
 * CleaningServicePageコンポーネントのProps
 */
interface CleaningServicePageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 清掃・廃棄物処理業のページコンポーネント
 *
 * デザインコンセプト:
 * - クリーンで信頼感のある配色（cyan系）
 * - 環境への配慮を感じさせるグリーンアクセント
 * - 分かりやすい情報整理
 * - Before/After表示で実績を視覚化
 */
export const CleaningServicePage = ({ companyInfo, plan }: CleaningServicePageProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedWorkCase, setSelectedWorkCase] = useState<WorkCase | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // ヒーロー画像のリスト
  const heroImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80', // 清掃スタッフ
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80', // オフィス清掃
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80', // 廃棄物処理
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80', // 環境・リサイクル
  ];

  // 画像を自動切り替え（5秒ごと）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  // モックデータ
  const services: Service[] = [
    {
      id: '1',
      title: 'オフィス清掃',
      category: 'office',
      description: '快適な職場環境を維持するための定期清掃サービス',
      features: ['日常清掃', '定期清掃', '特別清掃'],
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    },
    {
      id: '2',
      title: '商業施設清掃',
      category: 'commercial',
      description: 'お客様に快適な空間を提供するための清掃サービス',
      features: ['開店前清掃', '営業中清掃', '閉店後清掃'],
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    },
    {
      id: '3',
      title: '医療施設清掃',
      category: 'medical',
      description: '高度な衛生基準を満たす専門的な清掃サービス',
      features: ['感染対策', '専用資機材', '有資格者対応'],
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    },
    {
      id: '4',
      title: '産業廃棄物処理',
      category: 'industrial',
      description: '適正な処理で環境保全に貢献',
      features: ['収集運搬', '中間処理', 'マニフェスト管理'],
      imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    },
    {
      id: '5',
      title: '一般廃棄物収集運搬',
      category: 'general-waste',
      description: '定期的な廃棄物収集で清潔な環境を維持',
      features: ['定期回収', '臨時回収', '分別サポート'],
      imageUrl: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80',
    },
    {
      id: '6',
      title: 'リサイクル処理',
      category: 'recycling',
      description: '資源の有効活用で持続可能な社会を実現',
      features: ['分別収集', 'リサイクル処理', '再資源化'],
      imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    },
  ];

  const workCases: WorkCase[] = [
    {
      id: '1',
      title: 'A商業施設 全館清掃',
      category: 'commercial',
      client: 'A商業施設様',
      location: '東京都',
      completedDate: '2024年10月',
      description: '延床面積5,000㎡の商業施設全館清掃を実施。日常清掃と定期清掃を組み合わせ、常に清潔な環境を維持。',
      beforeImageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      afterImageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      results: ['顧客満足度95%達成', '清掃時間30%短縮', '環境負荷20%削減'],
    },
    {
      id: '2',
      title: 'B病院 感染対策清掃',
      category: 'medical',
      client: 'B病院様',
      location: '神奈川県',
      completedDate: '2024年9月',
      description: '高度な衛生基準を満たす医療施設清掃を実施。感染対策を徹底し、安全な医療環境を提供。',
      beforeImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      afterImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      results: ['院内感染ゼロ達成', 'スタッフ満足度向上', '清掃品質の安定化'],
    },
  ];

  const certifications: Certification[] = [
    {
      id: '1',
      name: '産業廃棄物収集運搬業許可',
      number: '第○○○○○○○○号',
      issueDate: '2020年4月1日',
      authority: '東京都',
    },
    {
      id: '2',
      name: '一般廃棄物収集運搬業許可',
      number: '第○○○○○○○○号',
      issueDate: '2020年4月1日',
      authority: '東京都',
    },
    {
      id: '3',
      name: 'ISO 14001認証',
      number: 'JQA-EM○○○○',
      issueDate: '2021年3月15日',
      authority: '日本品質保証機構',
    },
  ];

  const serviceAreas: ServiceArea[] = [
    {
      prefecture: '東京都',
      cities: ['千代田区', '中央区', '港区', '新宿区', '文京区', '台東区', '墨田区', '江東区', '品川区', '目黒区'],
      description: '全域対応可能',
    },
    {
      prefecture: '神奈川県',
      cities: ['横浜市', '川崎市', '相模原市'],
      description: '主要エリア対応',
    },
    {
      prefecture: '千葉県',
      cities: ['千葉市', '船橋市', '市川市'],
      description: '主要エリア対応',
    },
  ];

  const blogPosts = [
    {
      id: '1',
      title: '清掃の基本：日常清掃と定期清掃の違い',
      excerpt: '清掃には日常清掃と定期清掃があります。それぞれの役割と効果的な組み合わせ方をご紹介...',
      category: 'cleaning',
      date: '2024-11-01',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    },
    {
      id: '2',
      title: '産業廃棄物の適正処理について',
      excerpt: '産業廃棄物の適正処理は法律で義務付けられています。マニフェスト制度と処理の流れ...',
      category: 'waste',
      date: '2024-10-28',
      imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    },
    {
      id: '3',
      title: 'SDGsと清掃・廃棄物処理業の役割',
      excerpt: '持続可能な開発目標（SDGs）の達成に向けて、清掃・廃棄物処理業が果たす役割...',
      category: 'environment',
      date: '2024-10-25',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    },
  ];

  const news: NewsItem[] = [
    {
      id: '1',
      date: '2024-11-01',
      category: 'お知らせ',
      title: '年末年始の営業時間について',
      content: '平素より格別のご高配を賜り、厚く御礼申し上げます。\n\n年末年始の営業時間につきまして、下記のとおりご案内申し上げます。\n\n【年末年始休業期間】\n2024年12月29日（日）～ 2025年1月3日（金）\n\n【営業開始日】\n2025年1月4日（土）より通常営業\n\n休業期間中にいただいたお問い合わせにつきましては、1月4日以降、順次対応させていただきます。\n\nご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。',
      imageUrl: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=1200&q=80',
    },
    {
      id: '2',
      date: '2024-10-28',
      category: 'プレスリリース',
      title: 'ISO 14001認証を取得しました',
      content: 'この度、当社は環境マネジメントシステムの国際規格であるISO 14001:2015の認証を取得いたしました。\n\nISO 14001は、環境保全活動を体系的に管理し、継続的な改善を図るための国際標準規格です。今回の認証取得により、当社の環境への取り組みが国際的に認められたことになります。\n\n【今後の取り組み】\n・廃棄物の削減とリサイクル率の向上\n・省エネルギー活動の推進\n・環境負荷の低い清掃資材の採用\n・従業員への環境教育の徹底\n\n今後も環境に配慮した事業活動を推進し、持続可能な社会の実現に貢献してまいります。',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    },
    {
      id: '3',
      date: '2024-10-15',
      category: 'サービス',
      title: '新サービス「エコ清掃プラン」開始',
      content: '環境に配慮した新サービス「エコ清掃プラン」の提供を開始いたしました。\n\n【エコ清掃プランの特徴】\n\n1. 環境配慮型洗剤の使用\n植物由来の洗剤を使用し、排水による環境負荷を最小限に抑えます。\n\n2. 省エネルギー機器の導入\n最新の省エネ型清掃機器を使用し、電力消費を従来比30%削減。\n\n3. ペーパーレス報告書\nタブレット端末を活用した電子報告書により、紙の使用を削減。\n\n4. リサイクルの徹底\n清掃で回収した廃棄物の分別とリサイクルを徹底的に実施。\n\n環境への配慮と高品質な清掃サービスを両立させた「エコ清掃プラン」を、ぜひご利用ください。\n\n詳細はお問い合わせフォームよりお気軽にご連絡ください。',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
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

  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 text-white overflow-hidden">
        {/* 背景画像スライダー */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="清掃・廃棄物処理サービス"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-cyan-800/70 to-teal-800/80" />

        {/* 装飾的なブラー効果 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>

        {/* 画像インジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`画像 ${index + 1} を表示`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
            クリーンな未来を創る
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {companyInfo.companyName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-50">
            クリーンな環境づくりで、持続可能な社会を実現
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactForm(true)}
              className="px-8 py-4 bg-white text-cyan-700 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              お問い合わせ
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
            >
              サービス案内
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 実績セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-cyan-600 mb-2">25年</div>
              <div className="text-gray-600">年の実績</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-cyan-600 mb-2">1,200+</div>
              <div className="text-gray-600">取引実績</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-cyan-600 mb-2">98%</div>
              <div className="text-gray-600">顧客満足度</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-cyan-600 mb-2">150名</div>
              <div className="text-gray-600">スタッフ数</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* サービス案内 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">サービス案内</h2>
            <p className="text-gray-600 text-lg">
              幅広い清掃・廃棄物処理サービスをご提供
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">選ばれる理由</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '豊富な実績',
                description: '25年以上の実績と1,200件以上の取引実績で培った確かな技術',
                icon: '📊',
              },
              {
                title: '有資格者対応',
                description: '各種許可・認証を取得し、専門知識を持つスタッフが対応',
                icon: '🎓',
              },
              {
                title: '環境への配慮',
                description: 'ISO 14001認証取得。環境に配慮した清掃・処理を実施',
                icon: '🌱',
              },
              {
                title: '柔軟な対応',
                description: '24時間365日対応可能。お客様のニーズに合わせたサービスを提供',
                icon: '⏰',
              },
              {
                title: '適正価格',
                description: '無駄を省いた効率的な作業で、適正価格でのサービス提供',
                icon: '💰',
              },
              {
                title: '安心のサポート',
                description: 'アフターフォローも充実。定期的な報告と改善提案',
                icon: '🤝',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border-l-4 border-cyan-500 bg-gray-50 rounded-r-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 認証・許可 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">認証・許可</h2>
            <p className="text-gray-600 text-lg">
              適切な許可を取得し、法令を遵守したサービスを提供
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{cert.name}</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">許可番号: </span>
                    {cert.number}
                  </div>
                  <div>
                    <span className="font-semibold">取得日: </span>
                    {cert.issueDate}
                  </div>
                  <div>
                    <span className="font-semibold">発行元: </span>
                    {cert.authority}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">対応エリア</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-700">{area.prefecture}</h3>
                <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.cities.slice(0, 6).map((city, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                      {city}
                    </span>
                  ))}
                  {area.cities.length > 6 && (
                    <span className="px-3 py-1 text-sm text-gray-500">
                      他{area.cities.length - 6}市区
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium機能: 施工事例 */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">施工事例</h2>
              <p className="text-gray-600 text-lg">
                Before/Afterで見る、確かな技術
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {workCases.map((workCase, index) => (
                <motion.div
                  key={workCase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-2">施工前</div>
                      <img
                        src={workCase.beforeImageUrl}
                        alt="施工前"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-cyan-600 mb-2">施工後</div>
                      <img
                        src={workCase.afterImageUrl}
                        alt="施工後"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{workCase.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600 mb-4">
                      <span>{workCase.client}</span>
                      <span>|</span>
                      <span>{workCase.location}</span>
                      <span>|</span>
                      <span>{workCase.completedDate}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{workCase.description}</p>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900">成果</div>
                      {workCase.results.map((result, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <span className="text-cyan-500 mr-2">✓</span>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* お知らせ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">お知らせ</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedNews(item)}
                  className="bg-white border-b border-gray-200 pb-4 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="text-gray-500 font-mono text-sm md:w-32">
                      {item.date}
                    </div>
                    <div className="md:w-32">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex-1 text-gray-900">{item.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ブログ */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">ブログ</h2>
              <p className="text-gray-600 text-lg">
                清掃・環境に関する情報をお届け
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
            <p className="text-xl mb-8 text-cyan-50">
              清掃・廃棄物処理に関するご相談はお気軽にどうぞ
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4 bg-white text-cyan-700 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
              >
                お問い合わせフォーム
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                電話で問い合わせ
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
