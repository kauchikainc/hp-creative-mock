'use client';

import { CompanyInfo } from '@/types';
import { BlogPost } from '@/types/cms';
import { BaseLayout } from './BaseLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/**
 * BlogDetailPage コンポーネントのプロパティ
 */
interface BlogDetailPageProps {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** ブログ記事 */
  post: BlogPost;
}

/**
 * ブログ記事の詳細ページコンポーネント
 * 記事の詳細情報を表示し、一覧への戻るボタンを提供
 */
export const BlogDetailPage = ({ companyInfo, post }: BlogDetailPageProps) => {
  const router = useRouter();

  return (
    <BaseLayout companyInfo={companyInfo}>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* 戻るボタン */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="mb-8 text-blue-700 hover:text-blue-900 flex items-center gap-2 font-semibold"
          >
            ← 一覧に戻る
          </motion.button>

          <article className="max-w-4xl mx-auto bg-white border border-gray-200">
            {/* メイン画像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[400px] overflow-hidden"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 記事情報 */}
            <div className="p-8 md:p-12">
              {/* カテゴリと日付 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider px-3 py-1 bg-blue-50">
                  {post.category}
                </span>
                <time className="text-sm text-gray-500">{post.publishedAt}</time>
                {post.authorName && (
                  <>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm text-gray-600">著者: {post.authorName}</span>
                  </>
                )}
              </motion.div>

              {/* タイトル */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>

              {/* リード文 */}
              {post.excerpt && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8 pb-8 border-b border-gray-200"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </motion.div>
              )}

              {/* 本文 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="prose prose-lg max-w-none"
              >
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </motion.div>

              {/* シェアボタン等（将来の拡張用） */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => router.back()}
                    className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-2"
                  >
                    ← 一覧に戻る
                  </button>
                </div>
              </motion.div>
            </div>
          </article>
        </div>
      </div>
    </BaseLayout>
  );
};
