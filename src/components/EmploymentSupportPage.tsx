'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { PremiumFeatures } from './PremiumFeatures';
import { IndustryNavbar, ViewType } from './common/IndustryNavbar';
import {
  EmploymentAboutPage,
  EmploymentServicePage,
  EmploymentContactForm,
} from './employment';

/**
 * 就労支援ページコンポーネントのProps
 */
interface EmploymentSupportPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 支援内容のモックデータ
 */
const MOCK_SUPPORTS = [
  {
    id: '1',
    name: '就労移行支援',
    description: '一般企業への就職を目指す方へ。ビジネスマナー、PC訓練、面接対策など、就職に必要なスキルを習得できます。',
    target: '一般企業への就職を希望される方',
    period: '原則2年間',
  },
  {
    id: '2',
    name: '就労継続支援A型',
    description: '雇用契約を結び、働きながらスキルアップ。最低賃金以上の給与をお支払いしながら、一般就労を目指します。',
    target: '雇用契約に基づく就労が可能な方',
    period: '利用期間の制限なし',
  },
  {
    id: '3',
    name: '就労継続支援B型',
    description: '自分のペースで働ける環境。体調に合わせた作業を通じて、働く喜びと工賃を得ることができます。',
    target: '就労に対して不安がある方',
    period: '利用期間の制限なし',
  },
  {
    id: '4',
    name: '就労定着支援',
    description: '就職後も安心のフォロー体制。職場での困りごとや生活面の相談に、専門スタッフが対応します。',
    target: '就職後6ヶ月以上の方',
    period: '最長3年間',
  },
];

const MOCK_REASONS = [
  {
    number: '01',
    title: '高い就職率と定着率',
    description: '過去3年間の就職率85%以上、1年後の定着率90%以上の実績があります。',
  },
  {
    number: '02',
    title: '多彩な訓練プログラム',
    description: 'PCスキル、軽作業、接客など、様々な業種に対応できるプログラムをご用意。',
  },
  {
    number: '03',
    title: '個別支援計画',
    description: '一人ひとりの目標や特性に合わせた支援計画を作成し、段階的にスキルアップ。',
  },
  {
    number: '04',
    title: '企業との強いネットワーク',
    description: '地域の100社以上の企業と連携。幅広い業種への就職をサポートします。',
  },
];

const MOCK_RESULTS = [
  { year: 2023, employed: 28, retention: 92, industries: ['事務職', '製造業', 'サービス業'] },
  { year: 2022, employed: 25, retention: 88, industries: ['事務職', 'IT', '小売業'] },
  { year: 2021, employed: 22, retention: 90, industries: ['製造業', '事務職', '介護'] },
];

const MOCK_FLOW = [
  { step: 1, title: 'お問い合わせ・見学', description: '施設の雰囲気や訓練内容をご確認いただけます' },
  { step: 2, title: '体験利用', description: '実際の訓練を体験し、ご自身に合うかご検討ください' },
  { step: 3, title: '受給者証の申請', description: '市区町村の窓口で障害福祉サービス受給者証を申請' },
  { step: 4, title: '契約・利用開始', description: '個別支援計画を作成し、サービス利用を開始します' },
];

const MOCK_STAFF = [
  {
    id: '1',
    name: '高橋 誠',
    position: 'サービス管理責任者',
    qualifications: ['社会福祉士', '精神保健福祉士'],
    specialties: ['就労支援', 'キャリアカウンセリング'],
    message: '一人ひとりの可能性を信じ、共に歩んでいきます。',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    id: '2',
    name: '渡辺 真理',
    position: '就労支援員',
    qualifications: ['キャリアコンサルタント', 'ジョブコーチ'],
    specialties: ['企業開拓', '職場定着支援'],
    message: '就職はゴールではなくスタート。長く働ける職場を一緒に探しましょう。',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    id: '3',
    name: '中村 健一',
    position: '職業指導員',
    qualifications: ['ビジネスキャリア検定', 'MOS'],
    specialties: ['PC訓練', 'ビジネスマナー'],
    message: '実践的なスキルを楽しく身につけられるよう工夫しています。',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
  },
];

const MOCK_WORK_CONTENTS = [
  {
    id: '1',
    name: 'データ入力・事務作業',
    category: 'office',
    description: 'PC操作、書類整理、データ入力など事務系の作業を行います。',
    skills: ['PC基本操作', 'タイピング', 'Excel', '文書作成'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600',
  },
  {
    id: '2',
    name: '軽作業・製造',
    category: 'manufacturing',
    description: '検品、梱包、組立など、手先を使った作業を行います。',
    skills: ['正確性', '集中力', 'チームワーク'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600',
  },
  {
    id: '3',
    name: '清掃・環境整備',
    category: 'service',
    description: 'オフィスや商業施設の清掃作業を担当します。',
    skills: ['丁寧さ', '体力', '時間管理'],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
  },
];

const MOCK_PARTNERS = [
  { id: '1', name: '株式会社ABC', industry: '製造業' },
  { id: '2', name: 'XYZサービス', industry: 'サービス業' },
  { id: '3', name: 'テクノ株式会社', industry: 'IT' },
  { id: '4', name: 'ケアステーション', industry: '介護' },
  { id: '5', name: 'オフィスソリューション', industry: '事務' },
  { id: '6', name: 'グリーンファーム', industry: '農業' },
];

const MOCK_SUCCESS_STORIES = [
  {
    id: '1',
    name: 'A.K様',
    ageGroup: '30代',
    serviceUsed: '就労移行支援',
    duration: '1年6ヶ月',
    currentJob: '事務職',
    story: '最初は自信がありませんでしたが、PC訓練や面接練習を重ねるうちに「できる」という気持ちが芽生えました。今は一般企業の事務職として働いています。',
  },
  {
    id: '2',
    name: 'S.T様',
    ageGroup: '20代',
    serviceUsed: '就労継続支援A型',
    duration: '2年',
    currentJob: '製造業',
    story: 'A型事業所で働きながら、一般就労に向けてスキルアップ。定着支援も利用し、今は製造業で安定して働いています。',
  },
];

const MOCK_NEWS = [
  {
    id: '1',
    title: '就職者インタビューを掲載しました',
    date: '2024.07.15',
    category: '就職実績',
  },
  {
    id: '2',
    title: '8月の見学会日程について',
    date: '2024.07.01',
    category: 'お知らせ',
  },
  {
    id: '3',
    title: '新規提携企業が増えました',
    date: '2024.06.20',
    category: 'お知らせ',
  },
];

/**
 * ホームコンテンツコンポーネント
 */
interface HomeContentProps {
  companyInfo: CompanyInfo;
  plan: Plan;
  onNavigate: (view: ViewType) => void;
}

const HomeContent = ({ companyInfo, plan, onNavigate }: HomeContentProps) => {
  return (
    <>
      {/* ヒーローセクション - 落ち着いた信頼感 */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white overflow-hidden">
        {/* 背景パターン */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/20 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-teal-300 mb-4 tracking-widest text-sm uppercase">
                {companyInfo.companyName}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                一人ひとりの「働きたい」を、<br />
                確かな一歩に
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
                障害があっても、自分らしく働きたい。
                その想いを叶えるため、専門スタッフが就職から定着までサポートします。
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-teal-500 text-white font-medium hover:bg-teal-400 transition-colors"
                >
                  無料見学・相談のお申込み
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('service')}
                  className="px-8 py-4 border border-teal-400 text-teal-300 font-medium hover:bg-teal-400/10 transition-colors"
                >
                  サービス案内
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 実績セクション - 数字で示す信頼 */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-4xl font-bold text-teal-600 mb-2">85%</p>
              <p className="text-gray-600 text-sm">就職率</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-teal-600 mb-2">90%</p>
              <p className="text-gray-600 text-sm">職場定着率</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-teal-600 mb-2">100+</p>
              <p className="text-gray-600 text-sm">提携企業数</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-teal-600 mb-2">15年</p>
              <p className="text-gray-600 text-sm">支援実績</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">選ばれる理由</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MOCK_REASONS.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border-l-4 border-teal-500"
              >
                <span className="text-teal-200 text-5xl font-bold">{reason.number}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 支援内容セクション */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">支援内容</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {MOCK_SUPPORTS.map((support, index) => (
              <motion.div
                key={support.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{support.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{support.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="px-4 py-2 bg-teal-100 text-teal-700">
                        対象: {support.target}
                      </span>
                      <span className="px-4 py-2 bg-slate-200 text-slate-700">
                        期間: {support.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('service')}
              className="px-8 py-4 bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
            >
              サービス一覧を見る
            </motion.button>
          </div>
        </div>
      </section>

      {/* 就職実績セクション */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">就職実績</h2>
            <div className="w-16 h-1 bg-white/50 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {MOCK_RESULTS.map((result, index) => (
              <motion.div
                key={result.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 text-center"
              >
                <p className="text-teal-200 text-sm mb-2">{result.year}年度</p>
                <p className="text-5xl font-bold mb-4">{result.employed}<span className="text-xl">名</span></p>
                <p className="text-teal-200 text-sm">定着率 {result.retention}%</p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs text-teal-200 mb-2">主な就職先業種</p>
                  <p className="text-sm">{result.industries.join(' / ')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ご利用の流れ</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {MOCK_FLOW.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-slate-50 p-6 h-full">
                    <div className="w-10 h-10 bg-teal-500 text-white flex items-center justify-center font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {index < MOCK_FLOW.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-teal-300 transform rotate-45 translate-x-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium: スタッフ紹介 */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">スタッフ紹介</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {MOCK_STAFF.map((staff, index) => (
                <motion.div
                  key={staff.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6"
                >
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden">
                    <img
                      src={staff.imageUrl}
                      alt={staff.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800">{staff.name}</h3>
                    <p className="text-teal-600 text-sm mb-3">{staff.position}</p>
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {staff.qualifications.map((qual) => (
                        <span
                          key={qual}
                          className="text-xs px-2 py-1 bg-slate-100 text-slate-600"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{staff.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium: 訓練・作業内容 */}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">訓練・作業内容</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {MOCK_WORK_CONTENTS.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={work.imageUrl}
                      alt={work.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-800 mb-2">{work.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-teal-100 text-teal-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium: 利用者様の声 */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">利用者様の声</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {MOCK_SUCCESS_STORIES.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 border-l-4 border-teal-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{story.name}</p>
                      <p className="text-teal-600 text-sm">{story.ageGroup} / {story.serviceUsed} / 現在:{story.currentJob}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{story.story}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium: 提携企業 */}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">提携企業</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto" />
              <p className="mt-6 text-gray-600">多くの企業様にご協力いただいています</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {MOCK_PARTNERS.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-slate-50 p-4 text-center"
                >
                  <p className="font-medium text-gray-800 text-sm">{partner.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{partner.industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* Premium: お知らせ */}
      <PremiumFeatures plan={plan}>
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">お知らせ</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto" />
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white">
                {MOCK_NEWS.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-gray-500 w-24">{news.date}</span>
                    <span className="text-xs px-3 py-1 bg-teal-100 text-teal-700">
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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">まずはお気軽にご相談ください</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              見学は随時受け付けています。<br />
              ご本人様、ご家族様、支援機関の方もお気軽にお問い合わせください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-teal-500 text-white font-medium hover:bg-teal-400 transition-colors"
              >
                見学・相談のお申込み
              </motion.button>
              <motion.a
                href={`tel:${companyInfo.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border border-teal-400 text-teal-300 font-medium hover:bg-teal-400/10 transition-colors"
              >
                お電話でのご相談 {companyInfo.phone}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

/**
 * 就労支援業種のページコンポーネント
 * 誠実さと自立支援を感じるデザイン
 * カラー: ティール系（信頼、誠実、成長）
 */
export const EmploymentSupportPage = ({ companyInfo, plan }: EmploymentSupportPageProps) => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  /**
   * ページナビゲーションハンドラー
   */
  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * ビューに応じたコンテンツをレンダリング
   */
  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return <EmploymentAboutPage companyInfo={companyInfo} />;
      case 'service':
        return <EmploymentServicePage companyInfo={companyInfo} plan={plan} />;
      case 'contact':
        return <EmploymentContactForm companyInfo={companyInfo} />;
      default:
        return <HomeContent companyInfo={companyInfo} plan={plan} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* 業種別ナビゲーションバー */}
      <IndustryNavbar
        companyName={companyInfo.companyName}
        currentView={currentView}
        onNavigate={handleNavigate}
        primaryColor="teal"
      />

      {/* メインコンテンツ */}
      <main className="pt-16">
        {renderContent()}
      </main>

      {/* フッター */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">{companyInfo.companyName}</h3>
              <p className="text-slate-400 text-sm">
                〒{companyInfo.postalCode}<br />
                {companyInfo.prefecture}{companyInfo.city}{companyInfo.streetAddress}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">お問い合わせ</h3>
              <p className="text-slate-400 text-sm">
                TEL: {companyInfo.phone}<br />
                Email: {companyInfo.email}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">受付時間</h3>
              <p className="text-slate-400 text-sm">
                平日 9:00〜17:00<br />
                土日祝休み
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} {companyInfo.companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
