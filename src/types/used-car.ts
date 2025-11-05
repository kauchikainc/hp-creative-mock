/**
 * 中古車業種の型定義
 */

/**
 * 車両情報
 */
export interface Vehicle {
  /** 車両ID */
  id: string;
  /** 車種 */
  model: string;
  /** メーカー */
  manufacturer: string;
  /** 価格（円） */
  price: number;
  /** 年式 */
  year: number;
  /** 走行距離（km） */
  mileage: number;
  /** 色 */
  color: string;
  /** 燃料タイプ */
  fuelType: string;
  /** トランスミッション */
  transmission: string;
  /** 画像URL */
  imageUrl: string;
  /** 説明文 */
  description?: string;
}

/**
 * 販売実績
 */
export interface SalesRecord {
  /** 販売実績ID */
  id: string;
  /** 車種 */
  vehicleModel: string;
  /** 販売日 */
  soldDate: Date;
  /** 販売価格（円） */
  soldPrice: number;
  /** 画像URL */
  imageUrl: string;
}

/**
 * 中古車お知らせ
 */
export interface UsedCarNews {
  /** お知らせID */
  id: string;
  /** タイトル */
  title: string;
  /** 本文 */
  content: string;
  /** 公開日時 */
  publishedAt: Date;
  /** カテゴリ */
  category: 'news' | 'campaign' | 'arrival';
}
