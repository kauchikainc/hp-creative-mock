/**
 * 不動産業種の型定義
 */

/**
 * 物件情報
 */
export interface Property {
  /** 物件ID */
  id: string;
  /** 物件名 */
  title: string;
  /** 価格（円） */
  price: number;
  /** 面積（㎡） */
  area: number;
  /** 間取り（例: 3LDK） */
  layout: string;
  /** 所在地 */
  location: string;
  /** 築年数 */
  buildingAge: number;
  /** 画像URL */
  imageUrl: string;
  /** 説明文 */
  description?: string;
}

/**
 * 不動産お知らせ
 */
export interface RealEstateNews {
  /** お知らせID */
  id: string;
  /** タイトル */
  title: string;
  /** 本文 */
  content: string;
  /** 公開日時 */
  publishedAt: Date;
  /** カテゴリ */
  category: 'news' | 'announcement';
}

/**
 * ブログ記事
 */
export interface BlogPost {
  /** 記事ID */
  id: string;
  /** タイトル */
  title: string;
  /** 本文 */
  content: string;
  /** 抜粋 */
  excerpt: string;
  /** 著者 */
  author: string;
  /** タグ */
  tags: string[];
  /** 公開日時 */
  publishedAt: Date;
  /** 画像URL */
  imageUrl?: string;
}
