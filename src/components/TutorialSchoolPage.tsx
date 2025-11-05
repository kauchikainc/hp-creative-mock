'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion } from 'framer-motion';

/**
 * TutorialSchoolPage コンポーネントのプロパティ
 */
interface TutorialSchoolPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 学習塾業種のページコンポーネント
 * 明るく親しみやすい、成長と未来を感じさせるデザイン
 */
export const TutorialSchoolPage = ({ companyInfo, plan }: TutorialSchoolPageProps) => {
  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - 明るく希望に満ちた雰囲気 */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 overflow-hidden py-20 md:py-32">
        {/* 背景の装飾的な円 */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

        {/* 星のアイコン装飾 */}
        <div className="absolute top-20 left-1/4 text-yellow-400 text-4xl opacity-50">★</div>
        <div className="absolute top-40 right-1/3 text-emerald-400 text-3xl opacity-40">★</div>
        <div className="absolute bottom-20 left-1/3 text-blue-400 text-5xl opacity-30">★</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* キャッチコピー */}
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="mr-2">✨</span>
                一人ひとりに寄り添う学習指導
                <span className="ml-2">✨</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                {companyInfo.companyName}
              </h1>

              <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
                夢への第一歩を、ここから
              </p>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                一人ひとりの目標に合わせた指導で、<br className="md:hidden" />
                確かな学力と自信を育みます
              </p>

              {/* CTA ボタン */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  無料体験授業に申し込む →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-emerald-500 text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors"
                >
                  資料請求
                </motion.button>
              </div>
            </motion.div>

            {/* 実績カード */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: '98%', label: '志望校合格率', icon: '🎯' },
                { value: '平均+20', label: '成績アップ（点）', icon: '📈' },
                { value: '500+', label: '指導実績（名）', icon: '👥' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-emerald-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 波型の装飾 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* 選ばれる理由セクション - カード型レイアウト */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-bold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              選ばれる理由
            </h2>
            <p className="text-gray-600 text-lg">
              確かな実績と信頼で、多くの生徒・保護者様に選ばれています
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '👨‍🏫',
                title: '経験豊富な講師陣',
                description: '各科目のスペシャリストが、わかりやすく丁寧に指導します',
                color: 'emerald',
              },
              {
                icon: '📚',
                title: '一人ひとりに最適な学習プラン',
                description: '目標・学力に合わせたオーダーメイドのカリキュラムを作成',
                color: 'blue',
              },
              {
                icon: '💪',
                title: '徹底した学習サポート',
                description: '授業外でも質問対応や自習室利用で学習をバックアップ',
                color: 'teal',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-gray-100 hover:border-emerald-200">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* コース紹介セクション - ステップ形式 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-4">
              Courses
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              コース紹介
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                grade: '小学生',
                title: '基礎学力養成コース',
                subjects: ['算数', '国語', '英語'],
                description: '楽しく学びながら、確かな基礎学力を身につけます',
                color: 'from-yellow-400 to-orange-400',
                bgColor: 'bg-yellow-50',
                borderColor: 'border-yellow-300',
              },
              {
                grade: '中学生',
                title: '高校受験対策コース',
                subjects: ['数学', '英語', '国語', '理科', '社会'],
                description: '定期テスト対策から受験対策まで、志望校合格を徹底サポート',
                color: 'from-emerald-400 to-teal-400',
                bgColor: 'bg-emerald-50',
                borderColor: 'border-emerald-300',
              },
              {
                grade: '高校生',
                title: '大学受験対策コース',
                subjects: ['数学', '英語', '国語', '理科', '社会'],
                description: '共通テストから二次試験まで、難関大学合格を目指す',
                color: 'from-blue-400 to-indigo-400',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-300',
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`${course.bgColor} rounded-2xl p-8 border-2 ${course.borderColor} hover:shadow-xl transition-shadow`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`bg-gradient-to-br ${course.color} text-white px-6 py-3 rounded-full font-black text-lg shadow-md flex-shrink-0`}>
                    {course.grade}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 学習の流れセクション - 矢印でつなぐステップ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-bold mb-4">
              Learning Flow
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              学習の流れ
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: '無料体験・カウンセリング',
                  description: '現在の学力や目標をヒアリングし、最適な学習プランをご提案します',
                },
                {
                  step: '02',
                  title: 'カリキュラム作成',
                  description: '一人ひとりの目標達成に向けた、オーダーメイドのカリキュラムを作成',
                },
                {
                  step: '03',
                  title: '授業スタート',
                  description: '経験豊富な講師による、わかりやすく丁寧な指導を開始',
                },
                {
                  step: '04',
                  title: '定期的な進捗確認',
                  description: '定期テストや模試の結果をもとに、学習計画を随時見直し',
                },
              ].map((item, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 text-white font-black text-xl flex items-center justify-center shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                  {index < 3 && (
                    <div className="flex justify-center my-3">
                      <div className="text-emerald-500 text-3xl">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium機能: 合格実績 */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-4">
                <span className="mr-2">🎓</span>
                Achievements
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                合格実績
              </h2>
              <p className="text-gray-600 text-lg">
                多くの生徒が、夢の志望校合格を実現しています
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { school: '○○高校', count: 15, category: '高校' },
                { school: '△△大学', count: 8, category: '大学' },
                { school: '◇◇中学', count: 12, category: '中学' },
                { school: '□□高校', count: 10, category: '高校' },
                { school: '☆☆大学', count: 6, category: '大学' },
                { school: '◎◎高校', count: 18, category: '高校' },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {achievement.school}
                    </h3>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                      {achievement.category}
                    </span>
                  </div>
                  <div className="text-3xl font-black text-emerald-600">
                    {achievement.count}名合格
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能: 教室だより（ブログ） */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-4">
                <span className="mr-2">📝</span>
                Blog
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                教室だより
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: '夏期講習のお知らせ - 苦手科目を克服しよう',
                  category: '教室だより',
                  date: '2025-11-01',
                  excerpt: '夏期講習では、これまでの総復習と苦手分野の克服を重点的に行います。一人ひとりの学習状況に合わせたカリキュラムで...',
                },
                {
                  title: '効果的な暗記方法とは？講師が教える学習テクニック',
                  category: '学習方法',
                  date: '2025-10-28',
                  excerpt: '定期テストや受験勉強に欠かせない「暗記」。ただ繰り返すだけでは効率が悪い暗記も、正しい方法で行えば...',
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-emerald-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 font-mono">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-emerald-600 font-bold text-sm hover:text-teal-600 transition-colors flex items-center gap-2">
                    続きを読む
                    <span>→</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能: お知らせ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-bold mb-4">
                <span className="mr-2">📢</span>
                News
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                お知らせ
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
              {[
                {
                  date: '2025-11-05',
                  category: '合格速報',
                  title: '2025年度 高校入試 全員合格達成!',
                },
                {
                  date: '2025-11-01',
                  category: 'イベント',
                  title: '冬期講習の受付を開始しました',
                },
                {
                  date: '2025-10-25',
                  category: 'お知らせ',
                  title: '11月の開校スケジュールについて',
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 last:border-b-0 py-5 hover:bg-emerald-50 transition-colors rounded-lg px-4 -mx-4"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm text-gray-500 font-mono">
                      {news.date}
                    </span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* お問い合わせセクション - 明るく親しみやすく */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 relative overflow-hidden">
        {/* 背景の装飾 */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🎓</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              まずは無料体験授業から
            </h2>
            <p className="text-xl text-emerald-50 mb-12 leading-relaxed">
              お子様の学習状況や目標をお聞かせください。<br />
              最適な学習プランをご提案いたします。
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-10 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-semibold mb-2">
                    お電話でのお問い合わせ
                  </div>
                  <div className="text-2xl font-black text-emerald-600 mb-1">
                    0120-XXX-XXX
                  </div>
                  <div className="text-sm text-gray-600">
                    受付: 平日 10:00〜21:00
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-semibold mb-2">
                    メールでのお問い合わせ
                  </div>
                  <div className="text-lg font-bold text-blue-600 mb-1 break-all">
                    info@example.com
                  </div>
                  <div className="text-sm text-gray-600">
                    24時間受付
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-12 py-5 rounded-full font-black text-xl shadow-lg hover:shadow-xl transition-all"
            >
              お問い合わせフォームへ →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
