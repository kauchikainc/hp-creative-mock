'use client';

import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';

/**
 * 介護業種 会社概要ページのProps
 */
interface NursingCareAboutPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
}

/**
 * 介護業種の会社概要ページコンポーネント
 * 代表挨拶、企業理念、会社情報、資格・認定を表示
 */
export const NursingCareAboutPage = ({ companyInfo }: NursingCareAboutPageProps) => {
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
            <h1 className="text-3xl lg:text-4xl font-medium mb-4">会社概要</h1>
            <p className="text-emerald-100">About Us</p>
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
              <h2 className="text-2xl font-medium text-gray-800 mb-4">代表挨拶</h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 items-center"
            >
              <div className="md:col-span-1">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-emerald-100">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
                    alt="代表"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-gray-800 font-medium">代表取締役</p>
                <p className="text-center text-emerald-600">山田 太郎</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-4">
                  私たちは、地域の皆様に安心と信頼をお届けするために、介護サービスを提供しております。
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ご利用者様一人ひとりの尊厳を大切にし、その人らしい生活を支援することが私たちの使命です。
                  ご家族の方々とともに、最善のケアを追求してまいります。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  これからも地域に根ざした介護サービスの提供者として、
                  皆様に寄り添い、信頼されるパートナーであり続けます。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-medium text-gray-800 mb-4">企業理念</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-10 shadow-sm text-center"
            >
              <p className="text-2xl text-emerald-700 font-medium mb-6">
                「一人ひとりの笑顔のために」
              </p>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                私たちは、ご利用者様の笑顔を大切にし、その人らしい生活を支援します。
                ご家族の安心と、地域の皆様との絆を深めながら、
                質の高い介護サービスを提供し続けます。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { title: '尊厳', description: '一人ひとりの人格と尊厳を尊重します' },
                { title: '安心', description: '24時間体制で安心をお届けします' },
                { title: '信頼', description: '地域に根ざした信頼関係を築きます' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <h3 className="text-lg font-medium text-emerald-600 mb-3">{item.title}</h3>
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
            <h2 className="text-2xl font-medium text-gray-800 mb-4">会社情報</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-emerald-50 rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    { label: '会社名', value: companyInfo.companyName },
                    { label: '代表者', value: companyInfo.representativeName || '山田 太郎' },
                    { label: '所在地', value: `${companyInfo.prefecture}${companyInfo.city}${companyInfo.streetAddress}` },
                    { label: '電話番号', value: companyInfo.phone },
                    { label: 'メールアドレス', value: companyInfo.email },
                    { label: '設立', value: '1994年4月' },
                    { label: '従業員数', value: '50名' },
                    { label: '事業内容', value: '訪問介護、デイサービス、グループホーム、ショートステイ' },
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
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-medium text-gray-800 mb-4">資格・認定</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: '介護保険指定事業所', detail: '事業所番号: 1234567890' },
                { title: 'ISO9001認証取得', detail: '品質マネジメントシステム' },
                { title: '地域密着型サービス', detail: '○○市指定事業所' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <p className="text-emerald-600 font-medium mb-2">{item.title}</p>
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
            <h2 className="text-2xl font-medium text-gray-800 mb-4">アクセス</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-emerald-100 rounded-2xl h-64 flex items-center justify-center mb-6">
              <p className="text-emerald-600">地図が表示されます</p>
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
