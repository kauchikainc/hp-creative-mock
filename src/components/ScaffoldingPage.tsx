'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion } from 'framer-motion';

/**
 * ScaffoldingPage コンポーネントのプロパティ
 */
interface ScaffoldingPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 足場・鳶職業種のページコンポーネント
 * 安全・信頼・力強さを表現する重厚なデザイン
 */
export const ScaffoldingPage = ({ companyInfo, plan }: ScaffoldingPageProps) => {
  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - 力強く堅牢なイメージ */}
      <section className="relative min-h-[600px] bg-gradient-to-b from-gray-900 via-amber-900 to-gray-900 overflow-hidden">
        {/* 背景のグリッドパターン */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* オレンジのアクセントライン */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-amber-500 opacity-50"></div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* 安全第一バッジ */}
            <div className="inline-flex items-center gap-3 bg-amber-500 text-gray-900 px-6 py-3 font-black uppercase mb-6 border-l-8 border-orange-600">
              <span className="text-2xl">⚠️</span>
              <span className="text-sm tracking-widest">安全第一 - Safety First</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight tracking-tight">
              {companyInfo.companyName}
            </h1>

            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-orange-600 mb-8"></div>

            <p className="text-2xl md:text-3xl text-amber-100 mb-4 font-bold leading-relaxed">
              確かな技術で、<br className="md:hidden" />
              現場の安全を守る
            </p>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl">
              足場工事・鳶工事のプロフェッショナルとして、<br />
              高度な技術と徹底した安全管理で、建設現場を支えます。
            </p>

            {/* 実績数値 */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              <div className="border-l-4 border-amber-500 pl-4">
                <div className="text-4xl font-black text-amber-500 mb-1">25+</div>
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">年の実績</div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="text-4xl font-black text-orange-500 mb-1">500+</div>
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">施工実績</div>
              </div>
              <div className="border-l-4 border-amber-600 pl-4">
                <div className="text-4xl font-black text-amber-600 mb-1">0</div>
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">重大事故</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 下部の斜めライン */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-amber-500 to-orange-600 transform -skew-y-2 origin-bottom-left"></div>
      </section>

      {/* サービス紹介セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-16 bg-gradient-to-b from-amber-500 to-orange-600"></div>
              <div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                  事業内容
                </h2>
                <p className="text-gray-600 font-semibold mt-2">Services</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: '足場工事',
                description: '各種建築現場における足場の組立・解体工事。安全性と作業効率を両立した施工を提供します。',
                features: ['高層建築対応', '狭小地対応', '各種足場'],
              },
              {
                number: '02',
                title: '鳶工事',
                description: '建方工事、重量物の揚重・据付など、高度な技術が求められる鳶工事全般に対応します。',
                features: ['建方工事', '重量物据付', '仮設工事'],
              },
              {
                number: '03',
                title: '解体工事',
                description: '建築物の解体工事を安全かつ迅速に実施。環境に配慮した施工を心がけています。',
                features: ['建築解体', '内装解体', '産廃処理'],
              },
              {
                number: '04',
                title: '仮設工事',
                description: '現場の安全を守る仮囲い、ゲート、朝顔などの仮設設備の設置・撤去を行います。',
                features: ['仮囲い設置', 'ゲート設置', '安全設備'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -top-4 -left-4 text-8xl font-black text-gray-100 group-hover:text-amber-100 transition-colors">
                  {service.number}
                </div>
                <div className="relative bg-gray-50 p-8 border-l-8 border-amber-500 hover:border-orange-600 transition-colors h-full">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-amber-500 rotate-45"></span>
                        <span className="font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 安全への取り組みセクション */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-amber-500 text-gray-900 px-6 py-3 font-black uppercase mb-6">
              <span className="text-xl">🛡️</span>
              <span className="text-sm tracking-widest">Safety</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              安全への取り組み
            </h2>
            <p className="text-gray-400 text-lg">
              私たちは「安全第一」を最優先に、現場の安全管理を徹底しています
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📋',
                title: '安全教育',
                description: '定期的な安全講習と資格取得支援により、スタッフ全員の安全意識を向上させています。',
              },
              {
                icon: '🔧',
                title: '設備点検',
                description: '使用する足場材や工具の定期点検を徹底し、不良品の使用を未然に防ぎます。',
              },
              {
                icon: '👷',
                title: '現場管理',
                description: '有資格者による現場巡回と、KY活動の実施で、危険を早期に発見・対処します。',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-800 border border-gray-700 p-8 hover:border-amber-500 transition-colors"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium機能: 施工実績 */}
      <PremiumFeatures plan={plan}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-16 bg-gradient-to-b from-amber-500 to-orange-600"></div>
                <div>
                  <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                    施工実績
                  </h2>
                  <p className="text-gray-600 font-semibold mt-2">Construction Projects</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg ml-6">
                これまでに手がけた代表的な施工事例をご紹介します
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '都心高層マンション建設',
                  category: '足場工事',
                  location: '東京都渋谷区',
                  duration: '6ヶ月',
                },
                {
                  title: '商業施設リニューアル',
                  category: '鳶工事',
                  location: '神奈川県横浜市',
                  duration: '4ヶ月',
                },
                {
                  title: 'オフィスビル新築工事',
                  category: '足場工事',
                  location: '東京都千代田区',
                  duration: '8ヶ月',
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 border-l-4 border-amber-500 overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                      <div className="bg-amber-500 text-gray-900 px-3 py-1 text-xs font-black uppercase">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rotate-45"></span>
                        <span className="font-semibold">場所:</span>
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rotate-45"></span>
                        <span className="font-semibold">期間:</span>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能: 現場レポート（ブログ） */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-16 bg-gradient-to-b from-amber-500 to-orange-600"></div>
                <div>
                  <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                    現場レポート
                  </h2>
                  <p className="text-gray-600 font-semibold mt-2">Site Reports</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: '高所作業における安全対策の実例',
                  category: '安全対策',
                  date: '2025-11-01',
                  excerpt: '30m超の高層建築における足場組立時の安全対策について、実際の現場での取り組みをご紹介します。',
                },
                {
                  title: '狭小地での足場施工テクニック',
                  category: '技術情報',
                  date: '2025-10-28',
                  excerpt: '都心部の狭小地で求められる特殊な足場施工技術と、効率的な作業手順について解説します。',
                },
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-l-4 border-orange-600 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-900 text-amber-500 px-3 py-1 text-xs font-black uppercase">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 font-mono">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-amber-600 font-bold text-sm hover:text-orange-600 transition-colors flex items-center gap-2">
                    続きを読む
                    <span>→</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium機能: お知らせ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-16 bg-gradient-to-b from-amber-500 to-orange-600"></div>
                <div>
                  <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                    お知らせ
                  </h2>
                  <p className="text-gray-600 font-semibold mt-2">News</p>
                </div>
              </div>
            </motion.div>

            <div className="max-w-4xl">
              {[
                {
                  date: '2025-11-05',
                  category: '工事実績',
                  title: '渋谷区大型マンション建設プロジェクト完工のお知らせ',
                },
                {
                  date: '2025-11-01',
                  category: '安全対策',
                  title: '秋季安全大会を実施しました',
                },
                {
                  date: '2025-10-25',
                  category: 'お知らせ',
                  title: '新規協力会社様の募集を開始しました',
                },
              ].map((news, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-gray-200 hover:border-amber-500 pl-6 py-4 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm text-gray-500 font-mono">
                      {news.date}
                    </span>
                    <span className="bg-amber-500 text-gray-900 px-3 py-1 text-xs font-black uppercase">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 hover:text-amber-600 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* お問い合わせセクション */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-amber-500 text-gray-900 px-6 py-3 font-black uppercase mb-8">
              <span className="text-xl">📞</span>
              <span className="text-sm tracking-widest">Contact</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              お問い合わせ
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              足場工事・鳶工事のご相談は、お気軽にお問い合わせください。<br />
              現場調査・お見積りは無料で承ります。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 border-l-4 border-amber-500 p-8 text-left">
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-2">
                  電話でのお問い合わせ
                </div>
                <div className="text-3xl font-black text-amber-500 mb-2">
                  03-XXXX-XXXX
                </div>
                <div className="text-sm text-gray-400">
                  受付時間: 平日 8:00〜18:00
                </div>
              </div>

              <div className="bg-gray-800 border-l-4 border-orange-600 p-8 text-left">
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-2">
                  メールでのお問い合わせ
                </div>
                <div className="text-xl font-bold text-orange-500 mb-2 break-all">
                  info@example.com
                </div>
                <div className="text-sm text-gray-400">
                  24時間受付
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 px-12 py-5 font-black text-lg uppercase tracking-wide hover:from-amber-400 hover:to-orange-500 transition-all transform hover:scale-105 active:scale-95">
              お問い合わせフォームへ →
            </button>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
