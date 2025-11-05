'use client';

import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { BaseLayout } from './BaseLayout';
import { PremiumFeatures } from './PremiumFeatures';
import { motion } from 'framer-motion';
import { MOCK_PROPERTIES } from '@/data/real-estate/properties';
import { MOCK_BLOG_POSTS } from '@/data/real-estate/blog';
import { MOCK_NEWS } from '@/data/real-estate/news';
import { formatPrice, formatArea } from '@/lib/formatters';
import Image from 'next/image';

/**
 * RealEstatePage コンポーネントのプロパティ
 */
interface RealEstatePageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * 不動産業種のページコンポーネント
 * 落ち着いた高級感のあるデザインで、信頼感と安定感を重視
 */
export const RealEstatePage = ({ companyInfo, plan }: RealEstatePageProps) => {
  return (
    <BaseLayout companyInfo={companyInfo}>
      {/* ヒーローセクション - 大きな背景画像と重厚感のあるデザイン */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/95 backdrop-blur-sm p-12 rounded-sm border-l-4 border-blue-700"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 leading-tight">
                {companyInfo.companyName}
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                お客様の理想の住まい探しを、豊富な実績と確かな信頼でサポートいたします。
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-700 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-blue-800 transition-colors">
                  お問い合わせ
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-gray-400 transition-colors">
                  物件を探す
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 会社の強みセクション - 横並びの数値表示で実績を強調 */}
      <section className="bg-gray-50 py-20 border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-blue-700 mb-2">2,500+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">取引実績</div>
              <p className="mt-4 text-gray-700">
                創業以来、数多くのお客様に信頼いただき、確かな実績を積み重ねてまいりました。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-blue-700 mb-2">15年</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">地域密着</div>
              <p className="mt-4 text-gray-700">
                地域の不動産情報に精通し、お客様のニーズに合わせた最適な物件をご提案いたします。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-blue-700 mb-2">98%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">顧客満足度</div>
              <p className="mt-4 text-gray-700">
                物件探しから契約、アフターフォローまで、専門スタッフが丁寧にサポートいたします。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* サービス紹介セクション - シンプルで洗練されたリスト表示 */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">サービス内容</h2>
              <div className="w-16 h-1 bg-blue-700"></div>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: '不動産売買仲介',
                  description: 'マンション、一戸建て、土地など、様々な不動産の売買仲介を行います。お客様の条件に合った物件を丁寧にご紹介いたします。豊富な市場データと確かな目利きで、適正価格でのお取引をサポートいたします。',
                  number: '01',
                },
                {
                  title: '賃貸物件仲介',
                  description: '賃貸マンション・アパートの仲介業務を行っております。初めての方にも安心してお部屋探しができるよう、丁寧なヒアリングと物件のご提案を心がけています。',
                  number: '02',
                },
                {
                  title: '不動産管理',
                  description: '所有物件の管理業務も承っております。入居者募集から建物管理、家賃集金まで、トータルでサポートいたします。オーナー様の大切な資産を守り、収益の最大化を目指します。',
                  number: '03',
                },
                {
                  title: '不動産投資コンサルティング',
                  description: '不動産投資をお考えの方へ、市場動向や収益性を踏まえた最適なプランをご提案いたします。長期的な視点でのポートフォリオ構築をサポートいたします。',
                  number: '04',
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0"
                >
                  <div className="text-4xl font-serif font-bold text-gray-200">
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* プレミアム限定: 物件一覧セクション - グリッド表示 */}
      <PremiumFeatures plan={plan}>
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 text-center">
                おすすめ物件
              </h2>
              <div className="w-16 h-1 bg-blue-700 mx-auto"></div>
            </motion.div>

            {/* 検索フォーム */}
            <div className="bg-white p-8 mb-12 max-w-5xl mx-auto border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="エリアで探す"
                  className="px-4 py-3 border border-gray-300 text-sm focus:border-blue-700 focus:outline-none"
                />
                <select className="px-4 py-3 border border-gray-300 text-sm focus:border-blue-700 focus:outline-none">
                  <option>価格帯</option>
                  <option>〜3,000万円</option>
                  <option>3,000万円〜5,000万円</option>
                  <option>5,000万円〜</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 text-sm focus:border-blue-700 focus:outline-none">
                  <option>間取り</option>
                  <option>1K/1DK</option>
                  <option>1LDK/2K/2DK</option>
                  <option>2LDK/3K/3DK</option>
                  <option>3LDK〜</option>
                </select>
                <button className="bg-blue-700 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-blue-800 transition-colors">
                  検索
                </button>
              </div>
            </div>

            {/* 物件カード */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_PROPERTIES.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={property.imageUrl}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      {property.layout}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {property.location}
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                      <span>{formatArea(property.area)}</span>
                      <span>築{property.buildingAge}年</span>
                    </div>
                    <div className="text-2xl font-serif font-bold text-blue-700">
                      {formatPrice(property.price)}<span className="text-base text-gray-600">円</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* プレミアム限定: ブログセクション */}
      <PremiumFeatures plan={plan}>
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 text-center">
                不動産コラム
              </h2>
              <div className="w-16 h-1 bg-blue-700 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {MOCK_BLOG_POSTS.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <time className="text-xs text-gray-500">{post.publishedAt}</time>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* プレミアム限定: お知らせセクション */}
      <PremiumFeatures plan={plan}>
        <section className="bg-gray-50 py-20 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 text-center">
                お知らせ
              </h2>
              <div className="w-16 h-1 bg-blue-700 mx-auto"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-1 bg-white border border-gray-200">
              {MOCK_NEWS.map((news, i) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="p-6 flex items-start gap-6">
                    <time className="text-sm text-gray-500 font-mono min-w-[100px]">
                      {news.publishedAt.toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </time>
                    <span
                      className={`text-xs font-semibold px-2 py-1 uppercase tracking-wider min-w-[80px] text-center ${
                        news.category === 'announcement'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {news.category === 'announcement' ? 'お知らせ' : 'ニュース'}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{news.title}</h3>
                      <p className="text-gray-600 text-sm">{news.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PremiumFeatures>

      {/* お問い合わせCTAセクション */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4 text-white">
              お気軽にご相談ください
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              物件に関するご質問、内見のご予約など、どんなことでもお気軽にご相談ください
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                お問い合わせフォーム
              </button>
              <button className="border-2 border-white text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">
                電話で問い合わせ
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </BaseLayout>
  );
};
