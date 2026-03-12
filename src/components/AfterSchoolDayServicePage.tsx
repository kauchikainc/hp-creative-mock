'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { Footer } from './Footer';
import { PremiumFeatures } from './PremiumFeatures';
import { IndustryNavbar, ViewType } from './common/IndustryNavbar';
import { AfterSchoolAboutPage } from './after-school/AfterSchoolAboutPage';
import { AfterSchoolServicePage } from './after-school/AfterSchoolServicePage';
import { AfterSchoolContactForm } from './after-school/AfterSchoolContactForm';

/**
 * 放課後デイサービスページコンポーネントのProps
 */
interface AfterSchoolDayServicePageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * プログラムのモックデータ
 */
const MOCK_PROGRAMS = [
  {
    id: '1',
    name: '学習サポート',
    description: '宿題や学習の支援を行います。一人ひとりのペースに合わせて、わかるまで丁寧にサポートします。',
    icon: 'book',
    color: 'amber',
  },
  {
    id: '2',
    name: '運動プログラム',
    description: '体を動かす楽しさを体験。協調運動やボール遊びなど、楽しみながら運動能力を育みます。',
    icon: 'run',
    color: 'orange',
  },
  {
    id: '3',
    name: '創作活動',
    description: '絵画、工作、音楽など、創造力を育む活動。作品づくりを通じて達成感を味わいます。',
    icon: 'art',
    color: 'yellow',
  },
  {
    id: '4',
    name: 'ソーシャルスキル',
    description: 'ゲームやグループ活動を通じて、コミュニケーション力や社会性を楽しく身につけます。',
    icon: 'users',
    color: 'amber',
  },
];

const MOCK_REASONS = [
  {
    title: '一人ひとりに合わせた支援',
    description: 'お子様の特性や発達段階に合わせて、個別支援計画を作成。無理なく成長できる環境を整えています。',
    icon: 'heart',
  },
  {
    title: '専門資格を持つスタッフ',
    description: '保育士、児童指導員、理学療法士など、専門スタッフがチームでサポートいたします。',
    icon: 'star',
  },
  {
    title: '安心の送迎サービス',
    description: '学校からご自宅まで、専用車両で安全に送迎。保護者様の負担を軽減します。',
    icon: 'car',
  },
  {
    title: '楽しいイベント',
    description: '季節ごとの行事や外出活動など、たくさんの思い出づくり。社会経験を広げます。',
    icon: 'calendar',
  },
];

const MOCK_SCHEDULE = [
  { time: '14:00', activity: 'お迎え・到着', description: '学校へお迎え、施設に到着' },
  { time: '14:30', activity: 'はじめの会', description: '今日の流れを確認' },
  { time: '14:45', activity: '個別活動', description: '宿題・学習サポート' },
  { time: '15:30', activity: 'おやつ', description: '手作りおやつでリフレッシュ' },
  { time: '16:00', activity: '集団活動', description: 'プログラム活動の時間' },
  { time: '17:00', activity: '自由時間', description: '好きな遊びを楽しむ' },
  { time: '17:30', activity: 'お帰りの準備', description: '片付け・送迎開始' },
];

const MOCK_GUIDE = {
  targetUsers: '小学生〜高校生（受給者証をお持ちの方）',
  serviceHours: '平日 14:00〜18:00 / 土曜・長期休暇 10:00〜16:00',
  capacity: 10,
  transportArea: '○○市内全域',
  feeDescription: '受給者証に基づく利用者負担（原則1割）',
};

const MOCK_STAFF = [
  {
    id: '1',
    name: '田中 さくら',
    position: '児童発達支援管理責任者',
    qualifications: ['保育士', '児童発達支援管理責任者'],
    specialties: ['発達支援', '保護者相談'],
    message: 'お子様の「できた！」を一緒に喜びたいです。',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
  {
    id: '2',
    name: '木村 健太',
    position: '児童指導員',
    qualifications: ['教員免許（小学校）', '児童指導員'],
    specialties: ['学習支援', '運動療育'],
    message: '楽しく学べる環境づくりを心がけています。',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    id: '3',
    name: '伊藤 あかり',
    position: '保育士',
    qualifications: ['保育士', '幼稚園教諭'],
    specialties: ['創作活動', '音楽療育'],
    message: '一人ひとりの個性を大切にします。',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];

const MOCK_ACTIVITIES = [
  {
    id: '1',
    title: 'お誕生日会',
    description: '毎月のお誕生日会。みんなでお祝いします。',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600',
    category: 'イベント',
  },
  {
    id: '2',
    title: '夏祭り',
    description: 'ヨーヨー釣りやゲームを楽しみました。',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    category: 'イベント',
  },
  {
    id: '3',
    title: '創作の時間',
    description: '紙粘土で動物を作りました。',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
    category: '創作',
  },
  {
    id: '4',
    title: '運動の時間',
    description: 'バランスボールで体幹トレーニング。',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
    category: '運動',
  },
];

const MOCK_TESTIMONIALS = [
  {
    id: '1',
    name: 'S.M様',
    childInfo: '小学3年生',
    duration: '1年6ヶ月',
    comment: '最初は不安でしたが、今では毎日楽しそうに通っています。スタッフの方々がとても丁寧で、安心してお任せできます。',
  },
  {
    id: '2',
    name: 'K.T様',
    childInfo: '小学5年生',
    duration: '2年',
    comment: '学習面でのサポートが充実していて、学校の勉強にも自信がついてきました。送迎もあるので、共働きの我が家には大変助かっています。',
  },
];

const MOCK_NEWS = [
  {
    id: '1',
    title: '夏休みイベントのお知らせ',
    date: '2024.07.01',
    category: 'イベント',
  },
  {
    id: '2',
    title: '見学会を開催します',
    date: '2024.06.15',
    category: 'お知らせ',
  },
  {
    id: '3',
    title: '新しいスタッフを紹介します',
    date: '2024.05.20',
    category: 'お知らせ',
  },
];

/**
 * ホームページコンテンツ
 * 放課後デイサービスのメインページコンテンツ
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
      {/* ヒーローセクション - 明るく親しみやすい */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        {/* 装飾的な背景要素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-amber-200/40 rounded-full" />
          <div className="absolute top-40 right-40 w-20 h-20 bg-orange-200/30 rounded-full" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-200/30 rounded-full" />
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-amber-300/20 rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-600 text-lg mb-4 tracking-wider font-medium">
                {companyInfo.companyName}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
                お子様の笑顔と成長を、<br />
                一緒に見守ります
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
                一人ひとりの個性を大切に、楽しみながら成長できる場所。
                専門スタッフが、お子様とご家族をサポートします。
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-amber-500 text-white rounded-full font-medium shadow-lg shadow-amber-200 hover:bg-amber-600 transition-colors"
                >
                  見学・体験のお申込み
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-amber-600 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow border border-amber-200"
                >
                  お問い合わせ
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-amber-200/50 rounded-3xl" />
                <div className="relative bg-amber-100 rounded-3xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
                    alt="子どもたちの活動"
                    className="w-full h-full object-cover"
                  />
                </div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">選ばれる理由</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {MOCK_REASONS.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200">
                  <div className="w-8 h-8 bg-white rounded-lg" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* プログラム紹介セクション */}
      <section id="programs" className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">プログラム紹介</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              お子様の興味や発達段階に合わせた多彩なプログラムをご用意しています
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MOCK_PROGRAMS.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onNavigate('service')}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-amber-100 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{program.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <motion.button
              onClick={() => onNavigate('service')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-amber-500 text-amber-600 rounded-full font-medium hover:bg-amber-50 transition-colors"
            >
              プログラム詳細を見る
            </motion.button>
          </div>
        </div>
      </section>

      {/* 一日の流れセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">一日の流れ</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* タイムライン */}
              <div className="absolute left-[72px] top-6 bottom-6 w-1 bg-gradient-to-b from-amber-300 via-orange-300 to-yellow-300 rounded-full hidden md:block" />

              <div className="space-y-6">
                {MOCK_SCHEDULE.map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-6 bg-gradient-to-r from-amber-50 to-transparent rounded-2xl p-4"
                  >
                    <div className="w-20 text-center">
                      <span className="text-lg font-bold text-amber-600">{item.time}</span>
                    </div>
                    <div className="w-4 h-4 bg-amber-400 rounded-full flex-shrink-0 relative z-10 shadow-md shadow-amber-200" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{item.activity}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ご利用案内セクション */}
      <section className="py-24 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">ご利用案内</h2>
            <div className="w-20 h-1 bg-white/50 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="font-bold mb-3 text-amber-100">対象</h3>
                <p>{MOCK_GUIDE.targetUsers}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="font-bold mb-3 text-amber-100">営業時間</h3>
                <p>{MOCK_GUIDE.serviceHours}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="font-bold mb-3 text-amber-100">定員</h3>
                <p>{MOCK_GUIDE.capacity}名</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="font-bold mb-3 text-amber-100">送迎エリア</h3>
                <p>{MOCK_GUIDE.transportArea}</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <h3 className="font-bold mb-3 text-amber-100">ご利用料金</h3>
              <p>{MOCK_GUIDE.feeDescription}</p>
            </motion.div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">スタッフ紹介</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {MOCK_STAFF.map((staff, index) => (
                <motion.div
                  key={staff.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={staff.imageUrl}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{staff.name}</h3>
                  <p className="text-amber-600 text-sm mb-3">{staff.position}</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {staff.qualifications.map((qual) => (
                      <span
                        key={qual}
                        className="text-xs px-2 py-1 bg-white text-amber-700 rounded-full"
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

      {/* Premium: 活動の様子 */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-amber-50/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">活動の様子</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {MOCK_ACTIVITIES.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                >
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs px-2 py-1 bg-amber-500 text-white rounded-full">
                        {activity.category}
                      </span>
                      <h3 className="text-white font-bold mt-2">{activity.title}</h3>
                      <p className="text-white/80 text-sm">{activity.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium: 保護者様の声 */}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">保護者様の声</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {MOCK_TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-amber-600 text-sm">{testimonial.childInfo} / ご利用{testimonial.duration}</p>
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
        <section className="py-24 bg-amber-50/30">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">お知らせ</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
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
                    className="flex items-center gap-6 p-6 border-b border-amber-100 last:border-b-0 hover:bg-amber-50/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-gray-500 w-24">{news.date}</span>
                    <span className="text-xs px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full">
                      {news.category}
                    </span>
                    <span className="text-gray-800 flex-1 font-medium">{news.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* CTAセクション */}
      <section className="py-24 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">まずは見学・体験にお越しください</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              お子様の様子を見ながら、施設やプログラムについてご説明いたします。<br />
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => onNavigate('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white text-amber-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                見学・体験のお申込み
              </motion.button>
              <motion.a
                href="tel:000-0000-0000"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                お電話でのご相談 000-0000-0000
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

/**
 * 放課後デイサービス業種のページコンポーネント
 * 温かみと希望を感じるデザイン
 * カラー: アンバー/オレンジ系（明るさ、元気、温かみ）
 * 複数ビュー対応（ホーム、会社概要、サービス、お問い合わせ）
 */
export const AfterSchoolDayServicePage = ({ companyInfo, plan }: AfterSchoolDayServicePageProps) => {
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
        return <AfterSchoolAboutPage companyInfo={companyInfo} />;
      case 'service':
        return <AfterSchoolServicePage companyInfo={companyInfo} plan={plan} />;
      case 'contact':
        return <AfterSchoolContactForm companyInfo={companyInfo} />;
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
        primaryColor="amber"
      />

      {/* メインコンテンツ */}
      {renderContent()}

      {/* フッター */}
      <Footer companyInfo={companyInfo} />
    </div>
  );
};
