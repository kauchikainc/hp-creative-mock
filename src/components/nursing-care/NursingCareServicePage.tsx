'use client';

import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { PremiumFeatures } from '../PremiumFeatures';

/**
 * 介護業種 サービスページのProps
 */
interface NursingCareServicePageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** プラン種別 */
  plan: Plan;
}

/**
 * サービスのモックデータ
 */
const MOCK_SERVICES = [
  {
    id: '1',
    name: '訪問介護',
    description: 'ご自宅での日常生活をサポート。入浴・食事・排泄介助から家事援助まで、きめ細やかにお手伝いします。',
    details: [
      '身体介護（入浴・排泄・食事介助）',
      '生活援助（掃除・洗濯・調理）',
      '通院介助',
      '緊急時対応',
    ],
    price: '要介護度に応じた介護保険適用',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600',
  },
  {
    id: '2',
    name: 'デイサービス',
    description: '日帰りで施設をご利用いただけます。入浴、食事、レクリエーション、機能訓練などをご提供。',
    details: [
      '送迎サービス',
      '入浴・食事サービス',
      'レクリエーション活動',
      '機能訓練',
    ],
    price: '要介護度に応じた介護保険適用',
    imageUrl: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600',
  },
  {
    id: '3',
    name: 'グループホーム',
    description: '認知症の方が少人数で共同生活。家庭的な環境で、その人らしい暮らしを支援します。',
    details: [
      '個室完備',
      '24時間介護体制',
      '認知症ケア',
      '家庭的な食事提供',
    ],
    price: '要介護度に応じた介護保険適用（別途居住費・食費）',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },
  {
    id: '4',
    name: 'ショートステイ',
    description: '短期間の宿泊サービス。ご家族の介護負担軽減や、ご本人のリフレッシュにご利用ください。',
    details: [
      '最大30日間の宿泊',
      '入浴・食事サービス',
      'リハビリテーション',
      'レクリエーション活動',
    ],
    price: '要介護度に応じた介護保険適用（別途居住費・食費）',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
  },
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

const MOCK_FLOW = [
  { step: 1, title: 'お問い合わせ', description: 'お電話またはフォームよりお気軽にご連絡ください' },
  { step: 2, title: 'ご相談・見学', description: '施設見学やご要望のヒアリングを行います' },
  { step: 3, title: 'ケアプラン作成', description: 'ケアマネジャーと一緒に最適なプランを作成' },
  { step: 4, title: 'サービス開始', description: 'ご契約後、サービスを開始いたします' },
];

/**
 * 介護業種のサービスページコンポーネント
 * サービス一覧・詳細、ご利用の流れ、料金目安、スタッフ紹介を表示
 */
export const NursingCareServicePage = ({ companyInfo, plan }: NursingCareServicePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-medium mb-4">サービス一覧</h1>
            <p className="text-emerald-100">Our Services</p>
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
            <h2 className="text-2xl font-medium text-gray-800 mb-4">サービス一覧</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {MOCK_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-emerald-50 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`aspect-video md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">料金</p>
                      <p className="text-emerald-700 font-medium">{service.price}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-medium text-gray-800 mb-4">ご利用の流れ</h2>
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
                    <div className="flex-1 pt-3 bg-white rounded-xl p-6">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-medium text-gray-800 mb-4">スタッフ紹介</h2>
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

      {/* 料金目安 */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-medium text-gray-800 mb-4">料金目安</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-8"
          >
            <p className="text-gray-600 text-center mb-6">
              介護保険適用サービスは、要介護度に応じた自己負担額となります。
              詳細な料金についてはお気軽にお問い合わせください。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">自己負担割合</p>
                <p className="text-emerald-700 font-medium">原則1割〜3割</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">お支払い方法</p>
                <p className="text-emerald-700 font-medium">口座振替 / 現金</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
