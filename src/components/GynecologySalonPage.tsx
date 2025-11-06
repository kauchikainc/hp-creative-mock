'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TreatmentMenu, Doctor, CaseStudy, NewsItem, Testimonial } from '@/types/gynecology-salon';
import { ContactForm } from './ContactForm';
import { NewsDetailPage } from './NewsDetailPage';

/**
 * GynecologySalonPageコンポーネントのProps
 */
interface GynecologySalonPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 婦人科サロンのページコンポーネント
 *
 * デザインコンセプト:
 * - 安心感と清潔感のある配色（pink-400, purple-400）
 * - 柔らかく優しい印象（曲線、グラデーション）
 * - 女性専用の安心空間を表現
 * - Serifフォントで品格を演出
 * - プライバシーへの配慮を感じさせるデザイン
 */
export const GynecologySalonPage = ({ companyInfo, plan }: GynecologySalonPageProps) => {
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentMenu | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // ヒーロー画像のリスト
  const heroImages = [
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&q=80', // 清潔な医療空間
    'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1920&q=80', // リラックス空間
    'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=1920&q=80', // 医療機器
    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1920&q=80', // 待合室
  ];

  // 画像を自動切り替え（5秒ごと）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  // モックデータ
  const treatments: TreatmentMenu[] = [
    {
      id: '1',
      name: '月経トラブル相談',
      description: '月経痛、月経不順、PMS（月経前症候群）などの相談と治療',
      price: '初診 5,000円〜',
      duration: '30分〜60分',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      features: ['問診', '診察', '超音波検査', '処方'],
    },
    {
      id: '2',
      name: '子宮頸がん検診',
      description: '定期的な検診で早期発見・早期治療をサポート',
      price: '8,000円',
      duration: '20分',
      imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
      features: ['細胞診', 'HPV検査', '内診', '結果説明'],
    },
    {
      id: '3',
      name: '更年期相談',
      description: 'ホットフラッシュ、イライラ、不眠などの症状に対応',
      price: '初診 6,000円〜',
      duration: '40分〜60分',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      features: ['ホルモン検査', 'カウンセリング', 'HRT（ホルモン補充療法）', '漢方治療'],
    },
    {
      id: '4',
      name: 'ブライダルチェック',
      description: '結婚前・妊娠前の健康チェック',
      price: '25,000円',
      duration: '90分',
      imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
      features: ['血液検査', '子宮・卵巣検査', '性感染症検査', '風疹抗体検査'],
    },
    {
      id: '5',
      name: '不妊相談',
      description: '妊娠を希望される方へのサポート',
      price: '初診 8,000円〜',
      duration: '60分',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      features: ['タイミング指導', 'ホルモン検査', '超音波検査', 'カウンセリング'],
    },
    {
      id: '6',
      name: 'ピル処方',
      description: '避妊・月経調整・PMS改善のためのピル処方',
      price: '初診 3,000円〜',
      duration: '20分',
      imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
      features: ['問診', '血圧測定', '処方', 'アフターケア'],
    },
  ];

  const doctors: Doctor[] = [
    {
      id: '1',
      name: '山田 花子',
      position: '院長',
      specialty: ['婦人科全般', '不妊治療', '更年期医療'],
      imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
      bio: '女性医科大学卒業後、大学病院産婦人科に15年勤務。女性特有の悩みに寄り添った診療を心がけています。',
      qualifications: ['日本産科婦人科学会専門医', '日本女性医学学会認定医', '母体保護法指定医'],
      message: '女性の一生を通じた健康をサポートいたします。どんな些細なことでもお気軽にご相談ください。',
    },
    {
      id: '2',
      name: '佐藤 美咲',
      position: '副院長',
      specialty: ['婦人科検診', '月経トラブル', 'ピル外来'],
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      bio: '女性の健康を守るため、予防医療に力を入れています。患者様一人ひとりに合わせた治療を提案します。',
      qualifications: ['日本産科婦人科学会専門医', '日本婦人科腫瘍学会専門医'],
      message: '安心して受診していただける環境づくりを大切にしています。',
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: '月経痛の改善例',
      category: 'treatment',
      description: '20代女性。強い月経痛に悩まされていたが、ピル治療により改善',
      beforeImageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
      afterImageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      treatment: 'LEP（低用量エストロゲン・プロゲスチン配合剤）',
      duration: '3ヶ月',
      date: '2024年10月',
      testimonial: '月経痛がほとんどなくなり、日常生活が快適になりました。',
    },
    {
      id: '2',
      title: '更年期症状の緩和例',
      category: 'menopause',
      description: '50代女性。ホットフラッシュと不眠に悩まれていたケース',
      beforeImageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      afterImageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
      treatment: 'ホルモン補充療法（HRT）',
      duration: '6ヶ月',
      date: '2024年9月',
      testimonial: 'ホットフラッシュが軽減し、夜もよく眠れるようになりました。',
    },
  ];

  const newsItems: NewsItem[] = [
    {
      id: '1',
      date: '2024-11-01',
      category: 'お知らせ',
      title: '年末年始の診療スケジュールについて',
      content: '年末年始の診療スケジュールをお知らせいたします。\n\n12月29日（金）：通常診療\n12月30日（土）：午前のみ診療\n12月31日（日）〜1月3日（水）：休診\n1月4日（木）：通常診療\n\n※緊急の場合は提携病院をご案内いたします。',
      imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
    },
    {
      id: '2',
      date: '2024-10-28',
      category: 'イベント',
      title: '女性の健康セミナー開催のお知らせ',
      content: '11月20日（月）14:00より、当院にて「更年期を乗り越えるために」をテーマとした健康セミナーを開催いたします。\n\n参加費：無料\n定員：20名\n\nご予約はお電話またはWebからどうぞ。',
      imageUrl: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80',
    },
  ];

  const blogPosts = [
    {
      id: '1',
      title: '子宮頸がん検診の重要性',
      excerpt: '子宮頸がんは早期発見で治療可能ながんです。定期検診の重要性について...',
      category: 'health',
      date: '2024-11-01',
      imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    },
    {
      id: '2',
      title: 'PMS（月経前症候群）との向き合い方',
      excerpt: '月経前の不調は我慢せず、適切な治療で改善できます。PMSの症状と対策...',
      category: 'health',
      date: '2024-10-28',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    },
    {
      id: '3',
      title: '更年期症状とホルモン補充療法',
      excerpt: '更年期の症状は個人差が大きいものです。HRTの効果と注意点について...',
      category: 'menopause',
      date: '2024-10-25',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: '田中 美穂様',
      age: '30代',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      comment: '長年悩んでいた月経痛が、こちらで治療を受けてから驚くほど改善しました。女性医師の先生が親身に話を聞いてくださり、安心して相談できました。',
      treatment: '月経トラブル治療',
      date: '2024年10月',
    },
    {
      id: '2',
      name: '佐藤 恵子様',
      age: '40代',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      rating: 5,
      comment: '更年期の症状で悩んでいましたが、ホルモン補充療法を始めてから体調が安定しました。先生の丁寧な説明とサポートに感謝しています。',
      treatment: '更年期相談',
      date: '2024年9月',
    },
    {
      id: '3',
      name: '山本 由美様',
      age: '20代',
      imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      rating: 5,
      comment: 'ブライダルチェックを受けました。結婚前の不安を丁寧に解消してくださり、安心して次のステップに進むことができました。',
      treatment: 'ブライダルチェック',
      date: '2024年8月',
    },
  ];

  // お問い合わせフォーム表示中
  if (showContactForm) {
    return <ContactForm companyInfo={companyInfo} onBack={() => setShowContactForm(false)} industry="gynecology-salon" />;
  }

  // お知らせ詳細表示中
  if (selectedNews) {
    return <NewsDetailPage companyInfo={companyInfo} news={selectedNews} onBack={() => setSelectedNews(null)} primaryColor="pink-400" />;
  }

  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt={`${companyInfo.companyName} イメージ ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-pink-300/30" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl max-w-3xl mx-4"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-800">
              {companyInfo.companyName}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-pink-600 font-serif">
              女性のための安心できる専門医療
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              一人ひとりの女性に寄り添い、<br />
              心身ともに健やかな毎日をサポートします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                ご予約・お問い合わせ
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg border-2 border-pink-400 hover:bg-pink-50 transition-all"
              >
                診療内容を見る
              </motion.button>
            </div>
          </motion.div>
        </div>
        {/* インジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'w-8 bg-pink-400' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 当院の特徴 */}
      <section id="features" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              当院の特徴
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌸',
                title: '女性医師による診察',
                description: '女性医師が丁寧に診察いたします。話しにくいことも安心してご相談ください。',
              },
              {
                icon: '🏥',
                title: '完全予約制',
                description: 'プライバシーに配慮した完全予約制。待ち時間も少なく、リラックスして受診いただけます。',
              },
              {
                icon: '💝',
                title: '充実したアフターケア',
                description: '治療後のフォローも丁寧に。お困りの際はいつでもご相談ください。',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 診療内容 */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              診療内容
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: '月経トラブル', description: '月経痛・月経不順・PMSなど' },
              { title: '婦人科検診', description: '子宮頸がん検診・乳がん検診' },
              { title: '更年期相談', description: 'ホルモン補充療法・漢方治療' },
              { title: 'ブライダルチェック', description: '結婚前・妊娠前の健康チェック' },
              { title: '不妊相談', description: 'タイミング指導・ホルモン検査' },
              { title: 'ピル処方', description: '避妊・月経調整・PMS改善' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-100 hover:border-pink-300 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium機能：施術メニュー */}
      <PremiumFeatures plan={plan}>
        <section id="treatments" className="py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                施術メニュー
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                  onClick={() => setSelectedTreatment(treatment)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={treatment.imageUrl}
                      alt={treatment.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{treatment.name}</h3>
                    <p className="text-gray-600 mb-4">{treatment.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-pink-600 font-bold text-lg">{treatment.price}</span>
                      <span className="text-gray-500 text-sm">{treatment.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* 医師紹介 */}
      <section id="doctors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              医師紹介
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-80">
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-2 text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-pink-600 font-bold mb-4">{doctor.position}</p>
                  <p className="text-gray-600 mb-4">{doctor.bio}</p>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">専門分野</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialty.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-pink-200 pt-4">
                    <p className="text-gray-600 italic">&quot;{doctor.message}&quot;</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium機能：症例実績 */}
      <PremiumFeatures plan={plan}>
        <section id="cases" className="py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                症例実績
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
              <p className="text-gray-600 mt-4">
                ※画像はイメージです。個人情報保護のため、詳細は変更しています。
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedCase(caseStudy)}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{caseStudy.title}</h3>
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                        {caseStudy.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">治療法：</span>
                        {caseStudy.treatment}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold">治療期間：</span>
                        {caseStudy.duration}
                      </p>
                    </div>
                    {caseStudy.testimonial && (
                      <div className="bg-pink-50 p-4 rounded-xl border-l-4 border-pink-400">
                        <p className="text-gray-700 italic">&quot;{caseStudy.testimonial}&quot;</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* 安心への取り組み */}
      <section id="safety" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              安心への取り組み
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'プライバシー保護',
                description: '完全個室の診察室で、他の患者様と顔を合わせることなく受診いただけます。',
              },
              {
                title: '衛生管理の徹底',
                description: '医療機器の滅菌消毒を徹底し、清潔な環境を維持しています。',
              },
              {
                title: '丁寧なカウンセリング',
                description: '十分な時間をとってお話を伺い、一人ひとりに合った治療を提案します。',
              },
              {
                title: '土日診療対応',
                description: '平日お忙しい方も通いやすいよう、土日の診療も行っています。',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 診療時間 */}
      <section id="hours" className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              診療時間
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-400 to-purple-400 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">曜日</th>
                    <th className="px-6 py-4 text-center font-bold">午前</th>
                    <th className="px-6 py-4 text-center font-bold">午後</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: '月曜日', morning: '9:00-12:00', afternoon: '14:00-18:00' },
                    { day: '火曜日', morning: '9:00-12:00', afternoon: '14:00-18:00' },
                    { day: '水曜日', morning: '9:00-12:00', afternoon: '休診' },
                    { day: '木曜日', morning: '9:00-12:00', afternoon: '14:00-18:00' },
                    { day: '金曜日', morning: '9:00-12:00', afternoon: '14:00-18:00' },
                    { day: '土曜日', morning: '9:00-13:00', afternoon: '休診' },
                    { day: '日曜日', morning: '休診', afternoon: '休診' },
                  ].map((schedule, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-pink-50/50' : 'bg-white'}
                    >
                      <td className="px-6 py-4 font-bold text-gray-800">{schedule.day}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{schedule.morning}</td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        {schedule.afternoon}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-pink-50 text-center">
              <p className="text-gray-600">
                ※完全予約制です。お電話またはWebからご予約ください。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium機能：健康コラム（ブログ） */}
      <PremiumFeatures plan={plan}>
        <section id="blog" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                健康コラム
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium機能：お知らせ */}
      <PremiumFeatures plan={plan}>
        <section id="news" className="py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                お知らせ
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="divide-y divide-pink-100">
                {newsItems.map((news) => (
                  <div
                    key={news.id}
                    onClick={() => setSelectedNews(news)}
                    className="p-6 hover:bg-pink-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-sm text-gray-500 font-mono">{news.date}</span>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                          {news.category}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 hover:text-pink-600 transition-colors">
                          {news.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium機能：お客様の声 */}
      <PremiumFeatures plan={plan}>
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                お客様の声
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
              <p className="text-gray-600 mt-4">
                当院で治療を受けられた患者様からのお声をご紹介します
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.age}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                  <div className="border-t border-pink-200 pt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">施術内容：</span>
                      {testimonial.treatment}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{testimonial.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              お気軽にご相談ください
            </h2>
            <p className="text-xl mb-10 leading-relaxed">
              些細なことでもお気軽にお問い合わせください。<br />
              女性医師が丁寧にお答えいたします。
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactForm(true)}
              className="px-12 py-5 bg-white text-pink-600 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
            >
              ご予約・お問い合わせ
            </motion.button>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
