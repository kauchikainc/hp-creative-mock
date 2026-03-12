'use client';

import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';
import { Plan } from '@/types/plan';
import { PremiumFeatures } from '../PremiumFeatures';

/**
 * 放課後デイサービス サービスページのProps
 */
interface AfterSchoolServicePageProps {
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
    details: ['宿題サポート', '読み書き練習', '計算練習', '個別学習支援'],
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
  },
  {
    id: '2',
    name: '運動プログラム',
    description: '体を動かす楽しさを体験。協調運動やボール遊びなど、楽しみながら運動能力を育みます。',
    details: ['体幹トレーニング', 'ボール遊び', 'ダンス', 'サーキット運動'],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
  },
  {
    id: '3',
    name: '創作活動',
    description: '絵画、工作、音楽など、創造力を育む活動。作品づくりを通じて達成感を味わいます。',
    details: ['絵画・お絵かき', '工作', '音楽・リトミック', '季節の制作'],
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600',
  },
  {
    id: '4',
    name: 'ソーシャルスキル',
    description: 'ゲームやグループ活動を通じて、コミュニケーション力や社会性を楽しく身につけます。',
    details: ['ボードゲーム', 'グループワーク', 'ロールプレイ', 'お買い物体験'],
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
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

const MOCK_STAFF = [
  {
    id: '1',
    name: '田中 さくら',
    position: '児童発達支援管理責任者',
    qualifications: ['保育士', '児童発達支援管理責任者'],
    message: 'お子様の「できた」を一緒に喜びたいです。',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
  {
    id: '2',
    name: '木村 健太',
    position: '児童指導員',
    qualifications: ['教員免許（小学校）', '児童指導員'],
    message: '楽しく学べる環境づくりを心がけています。',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    id: '3',
    name: '伊藤 あかり',
    position: '保育士',
    qualifications: ['保育士', '幼稚園教諭'],
    message: '一人ひとりの個性を大切にします。',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];

/**
 * 放課後デイサービスのサービスページコンポーネント
 * プログラム一覧、一日の流れ、スタッフ紹介を表示
 */
export const AfterSchoolServicePage = ({ companyInfo, plan }: AfterSchoolServicePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">サービス一覧</h1>
            <p className="text-amber-100">Our Programs</p>
          </motion.div>
        </div>
      </section>

      {/* プログラム一覧 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">プログラム紹介</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {MOCK_PROGRAMS.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`aspect-video md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={program.imageUrl}
                      alt={program.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {program.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-amber-500 rounded-full" />
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 一日の流れ */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">一日の流れ</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-[72px] top-6 bottom-6 w-1 bg-gradient-to-b from-amber-300 via-orange-300 to-yellow-300 rounded-full hidden md:block" />

              <div className="space-y-6">
                {MOCK_SCHEDULE.map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-6 bg-white rounded-2xl p-4 shadow-sm"
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

      {/* ご利用料金 */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ご利用料金</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm"
          >
            <p className="text-gray-600 text-center mb-6">
              受給者証をお持ちの方は、受給者証に基づく利用者負担（原則1割）でご利用いただけます。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">自己負担割合</p>
                <p className="text-amber-600 font-bold">原則1割</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">上限月額</p>
                <p className="text-amber-600 font-bold">世帯所得により異なります</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm mb-1">おやつ代</p>
                <p className="text-amber-600 font-bold">実費（1回100円程度）</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
