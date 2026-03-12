'use client';

import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';

/**
 * 放課後デイサービス 会社概要ページのProps
 */
interface AfterSchoolAboutPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
}

/**
 * 放課後デイサービスの会社概要ページコンポーネント
 * 代表挨拶、企業理念、会社情報を表示
 */
export const AfterSchoolAboutPage = ({ companyInfo }: AfterSchoolAboutPageProps) => {
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
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">会社概要</h1>
            <p className="text-amber-100">About Us</p>
          </motion.div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">代表挨拶</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 items-center"
            >
              <div className="md:col-span-1">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-amber-100 border-4 border-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
                    alt="代表"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-gray-800 font-medium">代表取締役</p>
                <p className="text-center text-amber-600">田中 さくら</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-4">
                  子どもたちの笑顔と成長を願い、放課後デイサービスを開設いたしました。
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  お子様一人ひとりが持つ可能性は無限大です。
                  私たちは、その可能性を最大限に引き出すお手伝いをしたいと考えています。
                  楽しみながら学び、成長できる環境づくりに全力で取り組んでまいります。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  保護者の皆様と共に、お子様の成長を見守り、
                  支えていけることを心より嬉しく思います。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">企業理念</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-10 shadow-sm text-center"
            >
              <p className="text-2xl text-amber-600 font-bold mb-6">
                「一人ひとりの輝きを大切に」
              </p>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                私たちは、すべてのお子様が持つ個性と可能性を信じ、
                一人ひとりに寄り添った支援を行います。
                楽しく、安心して過ごせる場所で、お子様の「できた」を一緒に喜びます。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { title: '個性', description: '一人ひとりの個性を大切にします' },
                { title: '成長', description: '小さな成長を一緒に喜びます' },
                { title: '安心', description: '安心して過ごせる場所を提供します' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <h3 className="text-lg font-bold text-amber-600 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">会社情報</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-amber-50 rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    { label: '事業所名', value: companyInfo.companyName },
                    { label: '代表者', value: companyInfo.representativeName || '田中 さくら' },
                    { label: '所在地', value: `${companyInfo.prefecture}${companyInfo.city}${companyInfo.streetAddress}` },
                    { label: '電話番号', value: companyInfo.phone },
                    { label: 'メールアドレス', value: companyInfo.email },
                    { label: '設立', value: '2018年4月' },
                    { label: '定員', value: '10名' },
                    { label: '対象', value: '小学生〜高校生（受給者証をお持ちの方）' },
                    { label: '事業内容', value: '放課後等デイサービス' },
                  ].map((row, index) => (
                    <tr key={row.label} className={index % 2 === 0 ? 'bg-white' : ''}>
                      <th className="px-6 py-4 text-left text-gray-600 font-medium w-1/3">
                        {row.label}
                      </th>
                      <td className="px-6 py-4 text-gray-800">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 資格・認定 */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">資格・認定</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: '児童福祉法指定事業所', detail: '事業所番号: 1234567890' },
                { title: '自己評価結果公表', detail: '毎年度実施・公表' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <p className="text-amber-600 font-medium mb-2">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">アクセス</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-amber-100 rounded-2xl h-64 flex items-center justify-center mb-6">
              <p className="text-amber-600">地図が表示されます</p>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-medium mb-2">{companyInfo.companyName}</p>
              <p className="text-gray-600">
                {companyInfo.postalCode} {companyInfo.prefecture}{companyInfo.city}{companyInfo.streetAddress}
              </p>
              <p className="text-gray-600 mt-2">TEL: {companyInfo.phone}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
