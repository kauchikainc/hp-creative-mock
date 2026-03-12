'use client';

import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { PremiumFeatures } from '../PremiumFeatures';

/**
 * 就労支援 サービスページのProps
 */
interface EmploymentServicePageProps {
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
    features: ['ビジネスマナー', 'PC訓練', '面接対策', '職場実習'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600',
  },
  {
    id: '2',
    name: '就労継続支援A型',
    description: '雇用契約を結び、働きながらスキルアップ。最低賃金以上の給与をお支払いしながら、一般就労を目指します。',
    target: '雇用契約に基づく就労が可能な方',
    period: '利用期間の制限なし',
    features: ['雇用契約あり', '最低賃金以上', 'スキルアップ支援', '一般就労への移行支援'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600',
  },
  {
    id: '3',
    name: '就労継続支援B型',
    description: '自分のペースで働ける環境。体調に合わせた作業を通じて、働く喜びと工賃を得ることができます。',
    target: '就労に対して不安がある方',
    period: '利用期間の制限なし',
    features: ['自分のペースで', '体調に合わせた作業', '工賃支給', '生活リズムの確立'],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
  },
  {
    id: '4',
    name: '就労定着支援',
    description: '就職後も安心のフォロー体制。職場での困りごとや生活面の相談に、専門スタッフが対応します。',
    target: '就職後6ヶ月以上の方',
    period: '最長3年間',
    features: ['職場訪問', '面談・相談', '企業との連絡調整', '生活面のサポート'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
  },
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
    message: '一人ひとりの可能性を信じ、共に歩んでいきます。',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    id: '2',
    name: '渡辺 真理',
    position: '就労支援員',
    qualifications: ['キャリアコンサルタント', 'ジョブコーチ'],
    message: '就職はゴールではなくスタート。長く働ける職場を一緒に探しましょう。',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    id: '3',
    name: '中村 健一',
    position: '職業指導員',
    qualifications: ['ビジネスキャリア検定', 'MOS'],
    message: '実践的なスキルを楽しく身につけられるよう工夫しています。',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
  },
];

/**
 * 就労支援のサービスページコンポーネント
 * サービス一覧・詳細、ご利用の流れ、スタッフ紹介を表示
 */
export const EmploymentServicePage = ({ companyInfo, plan }: EmploymentServicePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">サービス一覧</h1>
            <p className="text-teal-200">Our Services</p>
          </motion.div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">支援内容</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {MOCK_SUPPORTS.map((support, index) => (
              <motion.div
                key={support.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`aspect-video md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={support.imageUrl}
                      alt={support.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{support.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{support.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm">
                          対象: {support.target}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm">
                          期間: {support.period}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {support.features.map((feature) => (
                        <span key={feature} className="text-sm text-gray-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                          {feature}
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

      {/* ご利用の流れ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ご利用の流れ</h2>
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
                  <div className="bg-white p-6 h-full">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">スタッフ紹介</h2>
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
                  className="bg-slate-50 p-6"
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
                          className="text-xs px-2 py-1 bg-white text-slate-600"
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

      {/* 料金について */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ご利用料金</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white p-8"
          >
            <p className="text-gray-600 text-center mb-6">
              障害福祉サービスは、受給者証に基づく自己負担額でご利用いただけます。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">自己負担割合</p>
                <p className="text-teal-700 font-bold">原則1割</p>
              </div>
              <div className="bg-slate-50 p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">上限月額</p>
                <p className="text-teal-700 font-bold">世帯所得により異なります</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              ※就労継続支援A型は、雇用契約に基づく給与が支給されます
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
