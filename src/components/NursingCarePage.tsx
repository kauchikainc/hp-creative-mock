'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { Footer } from './Footer';
import { PremiumFeatures } from './PremiumFeatures';
import { IndustryNavbar, ViewType } from './common/IndustryNavbar';
import { NursingCareAboutPage } from './nursing-care/NursingCareAboutPage';
import { NursingCareServicePage } from './nursing-care/NursingCareServicePage';
import { NursingCareContactForm } from './nursing-care/NursingCareContactForm';

/**
 * 介護ページコンポーネントのProps
 */
interface NursingCarePageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 介護サービスのモックデータ
 */
const MOCK_SERVICES = [
  {
    id: '1',
    name: '訪問介護',
    description: 'ご自宅での日常生活をサポート。入浴・食事・排泄介助から家事援助まで、きめ細やかにお手伝いします。',
    icon: 'home',
  },
  {
    id: '2',
    name: 'デイサービス',
    description: '日帰りで施設をご利用いただけます。入浴、食事、レクリエーション、機能訓練などをご提供。',
    icon: 'sun',
  },
  {
    id: '3',
    name: 'グループホーム',
    description: '認知症の方が少人数で共同生活。家庭的な環境で、その人らしい暮らしを支援します。',
    icon: 'users',
  },
  {
    id: '4',
    name: 'ショートステイ',
    description: '短期間の宿泊サービス。ご家族の介護負担軽減や、ご本人のリフレッシュにご利用ください。',
    icon: 'moon',
  },
];

const MOCK_REASONS = [
  {
    title: '24時間体制の安心',
    description: '緊急時も安心の24時間対応。夜間・休日も専門スタッフがサポートいたします。',
    number: '01',
  },
  {
    title: '有資格者による専門ケア',
    description: '介護福祉士、看護師など専門資格を持つスタッフが、一人ひとりに合わせたケアをご提供。',
    number: '02',
  },
  {
    title: '地域に根ざした30年の実績',
    description: '地域の皆様に支えられ30年。信頼と実績に基づいた質の高いサービスを継続しています。',
    number: '03',
  },
];

const MOCK_FLOW = [
  { step: 1, title: 'お問い合わせ', description: 'お電話またはフォームよりお気軽にご連絡ください' },
  { step: 2, title: 'ご相談・見学', description: '施設見学やご要望のヒアリングを行います' },
  { step: 3, title: 'ケアプラン作成', description: 'ケアマネジャーと一緒に最適なプランを作成' },
  { step: 4, title: 'サービス開始', description: 'ご契約後、サービスを開始いたします' },
];

const MOCK_STAFF = [
  {
    id: '1',
    name: '山田 花子',
    position: '施設長',
    qualifications: ['介護福祉士', '社会福祉主事'],
    message: '皆様が安心して過ごせる場所づくりを心がけています。',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
  },
  {
    id: '2',
    name: '鈴木 太郎',
    position: '介護主任',
    qualifications: ['介護福祉士', '認知症ケア専門士'],
    message: 'ご利用者様の笑顔が私たちの喜びです。',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
  },
  {
    id: '3',
    name: '佐藤 美咲',
    position: '看護師',
    qualifications: ['正看護師', '介護支援専門員'],
    message: '医療と介護の両面からサポートいたします。',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
  },
];

const MOCK_FACILITIES = [
  {
    id: '1',
    name: 'デイサービスセンター',
    features: ['広々とした浴室', '機能訓練室', '庭園スペース'],
    imageUrl: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600',
  },
  {
    id: '2',
    name: 'グループホーム',
    features: ['個室完備', '家庭的なリビング', '見守りシステム'],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },
];

const MOCK_TESTIMONIALS = [
  {
    id: '1',
    name: 'A.S様',
    relation: 'ご家族',
    comment: '母を安心して預けられます。スタッフの方々がとても親切で、母もいつも楽しそうです。',
  },
  {
    id: '2',
    name: 'T.K様',
    relation: 'ご家族',
    comment: '父の認知症ケアをお願いしています。専門的なケアのおかげで、症状が安定しています。',
  },
  {
    id: '3',
    name: 'M.Y様',
    relation: 'ご本人',
    comment: 'デイサービスに通うのが毎日の楽しみです。友達もできて、生活に張り合いが出ました。',
  },
];

const MOCK_NEWS = [
  {
    id: '1',
    title: '夏祭りを開催しました',
    date: '2024.08.15',
    category: 'イベント',
  },
  {
    id: '2',
    title: '感染症対策について',
    date: '2024.07.20',
    category: 'お知らせ',
  },
  {
    id: '3',
    title: '新しいスタッフが加わりました',
    date: '2024.06.01',
    category: 'お知らせ',
  },
];

/**
 * ホームページコンテンツ
 * 介護業種のメインページコンテンツ
 */
const HomeContent = ({
  companyInfo,
  plan,
  onNavigate,
}: {
  companyInfo: CompanyInfo;
  plan: Plan;
  onNavigate: (view: ViewType) => void;
}) => {
  return (
    <>
      {/* ヒーローセクション - 落ち着いた背景と大きな余白 */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-emerald-700 text-lg mb-4 tracking-wider">
                {companyInfo.companyName}
              </p>
              <h1 className="text-4xl lg:text-5xl font-medium text-gray-800 leading-relaxed mb-8">
                安心と信頼で、<br />
                大切なご家族をお守りします
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                地域に根ざした介護サービスで、ご利用者様とご家族の暮らしに寄り添い、
                心のこもったケアをお届けします。
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-colors"
                >
                  無料相談・見学予約
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-emerald-600 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
                >
                  お問い合わせ
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-medium text-gray-800 mb-4">選ばれる理由</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {MOCK_REASONS.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <span className="text-5xl font-light text-emerald-200">{reason.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス案内セクション */}
      <section id="services" className="py-24 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-medium text-gray-800 mb-4">サービス案内</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {MOCK_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onNavigate('service')}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100 cursor-pointer"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <motion.button
              onClick={() => onNavigate('service')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-emerald-600 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
            >
              サービス詳細を見る
            </motion.button>
          </div>
        </div>
      </section>

      {/* 資格・認定セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-emerald-50 rounded-2xl p-10"
            >
              <h2 className="text-2xl font-medium text-gray-800 mb-6 text-center">資格・認定</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6">
                  <p className="text-emerald-600 font-medium mb-2">介護保険指定事業所</p>
                  <p className="text-gray-500 text-sm">事業所番号: 1234567890</p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-emerald-600 font-medium mb-2">ISO9001認証取得</p>
                  <p className="text-gray-500 text-sm">品質マネジメントシステム</p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-emerald-600 font-medium mb-2">地域密着型サービス</p>
                  <p className="text-gray-500 text-sm">○○市指定事業所</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ご利用の流れセクション */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-medium text-gray-800 mb-4">ご利用の流れ</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 縦線 */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-emerald-200 hidden md:block" />

              <div className="space-y-8">
                {MOCK_FLOW.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-8"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-medium relative z-10">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium: スタッフ紹介 */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-medium text-gray-800 mb-4">スタッフ紹介</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {MOCK_STAFF.map((staff, index) => (
                <motion.div
                  key={staff.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-emerald-100">
                    <img
                      src={staff.imageUrl}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">{staff.name}</h3>
                  <p className="text-emerald-600 text-sm mb-3">{staff.position}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {staff.qualifications.map((qual) => (
                      <span
                        key={qual}
                        className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{staff.message}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium: 施設紹介 */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-emerald-50/50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-medium text-gray-800 mb-4">施設紹介</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {MOCK_FACILITIES.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="aspect-video bg-emerald-100">
                    <img
                      src={facility.imageUrl}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">{facility.name}</h3>
                    <ul className="space-y-2">
                      {facility.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-600">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
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
      </PremiumFeatures>

      {/* Premium: ご利用者様の声 */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-medium text-gray-800 mb-4">ご利用者様の声</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {MOCK_TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-emerald-50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700 font-medium">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-emerald-600">{testimonial.relation}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium: お知らせ */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-emerald-50/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-medium text-gray-800 mb-4">お知らせ</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto" />
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {MOCK_NEWS.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 border-b border-emerald-100 last:border-b-0 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-gray-500 w-24">{news.date}</span>
                    <span className="text-xs px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-gray-800 flex-1">{news.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* CTAセクション */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-medium mb-6">まずはお気軽にご相談ください</h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
              ご本人様、ご家族様のご不安やご要望をお聞かせください。<br />
              専門スタッフが丁寧にご対応いたします。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => onNavigate('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white text-emerald-700 rounded-lg font-medium shadow-lg hover:bg-emerald-50 transition-colors"
              >
                お問い合わせフォーム
              </motion.button>
              <motion.a
                href="tel:000-0000-0000"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                電話で相談 000-0000-0000
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

/**
 * 介護業種のページコンポーネント
 * 信頼と安心感を重視したデザイン
 * カラー: エメラルドグリーン系（落ち着きと安心感）
 * 複数ビュー対応（ホーム、会社概要、サービス、お問い合わせ）
 */
export const NursingCarePage = ({ companyInfo, plan }: NursingCarePageProps) => {
  // 現在表示中のビュー
  const [currentView, setCurrentView] = useState<ViewType>('home');

  /**
   * ビュー切り替えハンドラー
   */
  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    // ページトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * 現在のビューに応じたコンテンツをレンダリング
   */
  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return <NursingCareAboutPage companyInfo={companyInfo} />;
      case 'service':
        return <NursingCareServicePage companyInfo={companyInfo} plan={plan} />;
      case 'contact':
        return <NursingCareContactForm companyInfo={companyInfo} />;
      default:
        return <HomeContent companyInfo={companyInfo} plan={plan} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 業種別Navbar */}
      <IndustryNavbar
        companyName={companyInfo.companyName}
        currentView={currentView}
        onNavigate={handleNavigate}
        primaryColor="emerald"
      />

      {/* メインコンテンツ */}
      {renderContent()}

      {/* フッター */}
      <Footer companyInfo={companyInfo} />
    </div>
  );
};
