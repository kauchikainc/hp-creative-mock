'use client';

import { motion } from 'framer-motion';
import { CompanyInfo } from '@/types';

/**
 * 就労支援 会社概要ページのProps
 */
interface EmploymentAboutPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
}

/**
 * 就労支援の会社概要ページコンポーネント
 * 代表挨拶、企業理念、会社情報を表示
 */
export const EmploymentAboutPage = ({ companyInfo }: EmploymentAboutPageProps) => {
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
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">会社概要</h1>
            <p className="text-teal-200">About Us</p>
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
              <div className="w-16 h-1 bg-teal-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 items-center"
            >
              <div className="md:col-span-1">
                <div className="w-48 h-48 mx-auto overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                    alt="代表"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <p className="text-center mt-4 text-gray-800 font-medium">代表取締役</p>
                <p className="text-center text-teal-600">高橋 誠</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-4">
                  「働きたい」という想いを持つすべての方に、
                  その一歩を踏み出すお手伝いをしたい。
                  その思いから、就労支援事業を始めました。
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  私たちは、一人ひとりの可能性を信じ、
                  それぞれのペースで成長できる環境を提供しています。
                  就職はゴールではなく、新たなスタートです。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  これからも、皆様の「働く」を支え続けてまいります。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">企業理念</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 border-l-4 border-teal-500"
            >
              <p className="text-2xl text-teal-700 font-bold mb-6">
                「一人ひとりの働くを、確かな一歩に」
              </p>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                私たちは、障害があっても自分らしく働きたいという想いを応援します。
                一人ひとりに寄り添い、就職から定着まで一貫してサポートします。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4 mt-10">
              {[
                { title: '信頼', description: '誠実な支援で信頼関係を築きます' },
                { title: '自立', description: '自立に向けた力を育みます' },
                { title: '連携', description: '企業・関係機関と連携します' },
                { title: '継続', description: '就職後も継続してサポートします' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 text-center"
                >
                  <h3 className="text-lg font-bold text-teal-600 mb-3">{item.title}</h3>
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
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-slate-50 overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    { label: '会社名', value: companyInfo.companyName },
                    { label: '代表者', value: companyInfo.representativeName || '高橋 誠' },
                    { label: '所在地', value: `${companyInfo.prefecture}${companyInfo.city}${companyInfo.streetAddress}` },
                    { label: '電話番号', value: companyInfo.phone },
                    { label: 'メールアドレス', value: companyInfo.email },
                    { label: '設立', value: '2010年4月' },
                    { label: '従業員数', value: '25名' },
                    { label: '事業内容', value: '就労移行支援、就労継続支援A型・B型、就労定着支援' },
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">資格・認定</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '障害福祉サービス指定事業所', detail: '事業所番号: 1234567890' },
                { title: '就労移行支援事業', detail: '○○市指定事業所' },
                { title: '就労継続支援事業', detail: 'A型・B型' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 text-center"
                >
                  <p className="text-teal-600 font-medium mb-2">{item.title}</p>
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
            <div className="w-16 h-1 bg-teal-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-100 h-64 flex items-center justify-center mb-6">
              <p className="text-slate-600">地図が表示されます</p>
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
