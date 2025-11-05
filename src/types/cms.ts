/**
 * CMS関連の型定義
 */

/**
 * 共通コンテンツインターフェース
 */
export interface CMSContent {
  /** コンテンツID */
  id: string;
  /** タイトル */
  title: string;
  /** 本文 */
  content: string;
  /** 公開日時 */
  publishedAt: Date;
  /** カテゴリ */
  category: string;
}

/**
 * ブログ記事インターフェース
 */
export interface BlogPost {
  /** 記事ID */
  id: string;
  /** タイトル */
  title: string;
  /** リード文・概要 */
  excerpt: string;
  /** 本文 */
  content: string;
  /** カテゴリ */
  category: string;
  /** 公開日 */
  publishedAt: string;
  /** 画像URL */
  imageUrl: string;
  /** 著者名（オプション） */
  authorName?: string;
}
